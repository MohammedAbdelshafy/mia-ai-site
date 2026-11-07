'use strict';
const test=require('node:test'), assert=require('node:assert/strict');
const {normalizeSignup,persistSignup,ValidationError}=require('../waitlist_logic');
test('normalizes email, plan and consent without guessing consent',()=>{
 const s=normalizeSignup({email:'  TEST@Example.COM  ',name:' Ada ',plan:'other',marketing_opt_in:'true',utm_source:'organic'});
 assert.equal(s.email,'test@example.com');assert.equal(s.name,'Ada');assert.equal(s.plan,'preview');
 assert.equal(s.marketingOptIn,false);assert.equal(s.utmSource,'organic');
});
test('rejects non-string/malformed email',()=>{
 for(const email of ['',42,['a@b.com'],'a@b',null])assert.throws(()=>normalizeSignup({email}),ValidationError);
});
test('explicit opt-in is retained',()=>{
 assert.equal(normalizeSignup({email:'a@b.com',marketing_opt_in:true}).marketingOptIn,true);
});
test('new receipt only after confirmed database insert',async()=>{
 let calls=0;
 const db={async query(sql,params){calls++;assert.match(sql,/ON CONFLICT \(email\) DO NOTHING/);assert.equal(params[2],'a@b.com');return {rows:[{id:'lead-1',event_id:'event-1'}]}}};
 const r=await persistSignup(db,normalizeSignup({email:'a@b.com'}));
 assert.equal(calls,1);assert.equal(r.status,'accepted');assert.equal(r.lead_id,'lead-1');assert.equal(r.event_id,'event-1');
});
test('duplicate email returns same stored lead_id',async()=>{
 let calls=0;
 const db={async query(sql,p){calls++;return calls===1?{rows:[]}:{rows:[{id:'existing',event_id:'old'}]}}};
 const r=await persistSignup(db,normalizeSignup({email:'a@b.com'}));
 assert.equal(calls,2);assert.equal(r.duplicate,true);assert.equal(r.lead_id,'existing');
});
test('database failure cannot produce success receipt',async()=>{
 const db={async query(){throw new Error('storage offline')}};
 await assert.rejects(persistSignup(db,normalizeSignup({email:'a@b.com'})),/storage offline/);
});
