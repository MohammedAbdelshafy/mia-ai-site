'use strict';
// MIA API: private Postgres storage; only known public assets are served.
const express=require('express'),crypto=require('node:crypto'),path=require('node:path');
const {Pool}=require('pg');
const {normalizeSignup,persistSignup,ValidationError}=require('./waitlist_logic');
const app=express();app.disable('x-powered-by');
const root=path.resolve(__dirname,'..'),port=Number(process.env.PORT)||3000;
const token=process.env.MIA_ADMIN_TOKEN||'';
const allowed=new Set((process.env.MIA_ALLOWED_ORIGINS||'https://mohammedabdelshafy.github.io,http://localhost:3000').split(',').map(s=>s.trim()).filter(Boolean));
const db=process.env.DATABASE_URL?new Pool({connectionString:process.env.DATABASE_URL,max:2,connectionTimeoutMillis:5000}):null;
app.use('/assets',express.static(path.join(root,'assets'),{dotfiles:'deny',index:false}));
app.get('/',(req,res)=>res.sendFile(path.join(root,'index.html')));
const pages=new Set(['index.html','how.html','pricing.html','agents.html','watch.html']);
app.get('/:page',(req,res,next)=>pages.has(req.params.page)?res.sendFile(path.join(root,req.params.page)):next());
const sections=new Set(['ai-employee','ai-agent-swarm','ai-automation']);
app.get('/:section/',(req,res,next)=>sections.has(req.params.section)?res.sendFile(path.join(root,req.params.section,'index.html')):next());
for(const f of ['robots.txt','sitemap.xml','manifest.json'])app.get('/'+f,(req,res)=>res.sendFile(path.join(root,f)));
function cors(req,res,next){
 const origin=req.get('origin');
 if(origin&&!allowed.has(origin))return res.status(403).json({ok:false,error:'origin not allowed'});
 if(origin){res.set('Access-Control-Allow-Origin',origin);res.set('Vary','Origin');res.set('Access-Control-Allow-Headers','Content-Type');res.set('Access-Control-Allow-Methods','POST, OPTIONS');}
 if(req.method==='OPTIONS')return res.sendStatus(204);next();
}
const requests=new Map();
function limit(req,res,next){
 const now=Date.now(),id=req.ip||'unknown';
 for(const [k,v] of requests)if(v.until<=now)requests.delete(k);
 const x=requests.get(id)||{until:now+60000,count:0};x.count++;requests.set(id,x);
 if(x.count>8){res.set('Retry-After',String(Math.ceil((x.until-now)/1000)));return res.status(429).json({ok:false,error:'too many requests'});}next();
}
function founder(req,res,next){
 if(!token)return res.status(503).json({ok:false,error:'founder access not configured'});
 const supplied=(req.get('authorization')||'').replace(/^Bearer\s+/i,'');
 const a=crypto.createHash('sha256').update(supplied).digest(),b=crypto.createHash('sha256').update(token).digest();
 if(!supplied||!crypto.timingSafeEqual(a,b))return res.status(401).json({ok:false,error:'unauthorized'});next();
}
function ready(req,res,next){if(!db)return res.status(503).json({ok:false,error:'signup database not configured'});next();}
app.get('/api/health',async(req,res)=>{
 if(!db)return res.status(503).json({ok:false,database:'unconfigured'});
 try{await db.query('SELECT 1');res.json({ok:true,database:'ready'});}
 catch(_){res.status(503).json({ok:false,database:'unavailable'});}
});
app.options('/api/waitlist',cors);
app.post('/api/waitlist',cors,express.json({limit:'8kb'}),limit,ready,async(req,res)=>{
 try{const r=await persistSignup(db,normalizeSignup(req.body));res.status(r.duplicate?200:201).json(r);}
 catch(e){
  if(e instanceof ValidationError)return res.status(400).json({ok:false,error:e.message});
  console.error('mia waitlist persistence error',e&&e.code?e.code:'unknown');
  res.status(503).json({ok:false,error:'signup could not be confirmed'});
 }
});
app.get('/api/waitlist/count',founder,ready,async(req,res)=>{
 try{const r=await db.query('SELECT count(*)::int AS count FROM mia_private.waitlist');res.json({ok:true,count:r.rows[0].count});}
 catch(_){res.status(503).json({ok:false,error:'database unavailable'});}
});
app.get('/api/waitlist/stats',founder,ready,async(req,res)=>{
 try{const [p,s]=await Promise.all([db.query('SELECT plan,count(*)::int AS count FROM mia_private.waitlist GROUP BY plan'),db.query('SELECT source,count(*)::int AS count FROM mia_private.waitlist GROUP BY source')]);
 const byPlan={},bySource={};for(const x of p.rows)byPlan[x.plan]=x.count;for(const x of s.rows)bySource[x.source]=x.count;
 res.json({ok:true,count:p.rows.reduce((n,x)=>n+x.count,0),byPlan,bySource});}
 catch(_){res.status(503).json({ok:false,error:'database unavailable'});}
});
function csv(v){let s=String(v==null?'':v);if(/^\s*[=+\-@]/.test(s))s="'"+s;return '"'+s.replace(/"/g,'""')+'"';}
app.get('/api/waitlist/export',founder,ready,async(req,res)=>{
 try{const q=await db.query('SELECT name,email,plan,source,created_at FROM mia_private.waitlist ORDER BY created_at DESC LIMIT 10000');
 const rows=q.rows.map(x=>[x.name,x.email,x.plan,x.source,new Date(x.created_at).toISOString()].map(csv).join(','));
 res.set('Content-Type','text/csv; charset=utf-8');res.set('Cache-Control','no-store');res.set('Content-Disposition','attachment; filename="mia-waitlist.csv"');
 res.send(['name,email,plan,source,signed_up_at',...rows].join('\n'));}
 catch(_){res.status(503).json({ok:false,error:'database unavailable'});}
});
app.use((e,req,res,next)=>{
 if(e&&e.type==='entity.too.large')return res.status(413).json({ok:false,error:'request too large'});
 if(e instanceof SyntaxError&&e.status===400)return res.status(400).json({ok:false,error:'invalid JSON'});
 next(e);
});
if(require.main===module)app.listen(port,()=>console.log('MIA API listening on '+port));
module.exports=app;
