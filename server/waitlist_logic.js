'use strict';
const crypto = require('node:crypto');
const PLANS = new Set(['preview','pro','lifetime','team','agency','enterprise']);

class ValidationError extends Error {}
function safeText(v, max) { return typeof v === 'string' ? v.trim().slice(0, max) : ''; }
function normalizeSignup(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) throw new ValidationError('Invalid signup request');
  const email = safeText(body.email,255).toLowerCase();
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new ValidationError('A valid email address is required');
  const plan = safeText(body.plan,30).toLowerCase();
  return {
    email, name:safeText(body.name,80), plan:PLANS.has(plan)?plan:'preview',
    source:safeText(body.source,40)||'mia_site',
    consentVersion:safeText(body.consent_version,40)||'preview_inquiry_v1',
    marketingOptIn:body.marketing_opt_in===true,
    utmSource:safeText(body.utm_source,100),
    utmMedium:safeText(body.utm_medium,100),
    utmCampaign:safeText(body.utm_campaign,100)
  };
}
async function persistSignup(db, signup, uuid=crypto.randomUUID) {
  const id=uuid(), eventId=uuid();
  const values=[id,eventId,signup.email,signup.name,signup.plan,signup.source,
    signup.consentVersion,signup.marketingOptIn,signup.utmSource,signup.utmMedium,signup.utmCampaign];
  const result=await db.query('INSERT INTO mia_private.waitlist '+
    '(id,event_id,email,name,plan,source,consent_version,marketing_opt_in,utm_source,utm_medium,utm_campaign) '+
    'VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) ON CONFLICT (email) DO NOTHING RETURNING id,event_id',values);
  if(result.rows.length)return {ok:true,lead_id:result.rows[0].id,event_id:result.rows[0].event_id,status:'accepted',duplicate:false};
  const prior=await db.query('SELECT id,event_id FROM mia_private.waitlist WHERE email=$1 LIMIT 1',[signup.email]);
  if(!prior.rows.length)throw new Error('Concurrent signup could not be verified');
  return {ok:true,lead_id:prior.rows[0].id,event_id:prior.rows[0].event_id,status:'existing',duplicate:true};
}
module.exports={ValidationError,normalizeSignup,persistSignup};
