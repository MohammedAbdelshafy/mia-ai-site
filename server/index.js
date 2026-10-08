/* Mia AI backend — serves the static site + waitlist API.
   Run:  cd server && npm install && npm start   (serves on PORT or 3000)
   The frontend POSTs to /api/waitlist when served from here;
   on static hosts (GitHub Pages) it falls back to browser-local storage.

   Endpoints:
     GET  /api/health            service heartbeat
     POST /api/waitlist          {name, email, plan?, source?} -> signup
     GET  /api/waitlist/count    {count}
     GET  /api/waitlist/stats    {count, byPlan, bySource}  (founder view)
     GET  /api/waitlist/export   CSV download of the waitlist (founder view)
*/
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data', 'waitlist.json');
const PLANS = ['preview', 'pro', 'lifetime'];

app.use(express.json({ limit: '10kb' }));
app.use(express.static(path.join(__dirname, '..')));

/* ---------- tiny in-memory rate limiter (per IP) ---------- */
const hits = new Map();
function rateLimit(max, windowMs) {
  return (req, res, next) => {
    const now = Date.now();
    const key = req.ip || 'unknown';
    const arr = (hits.get(key) || []).filter(t => now - t < windowMs);
    arr.push(now);
    hits.set(key, arr);
    if (arr.length > max)
      return res.status(429).json({ ok: false, error: 'slow down a little' });
    next();
  };
}

/* ---------- storage ---------- */
function load() {
  try {
    const d = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
    return Array.isArray(d) ? d : [];
  } catch (e) { return []; }
}
function save(list) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2));
}
function validEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }
function cleanPlan(p) {
  const v = String(p || 'preview').trim().toLowerCase();
  return PLANS.includes(v) ? v : 'preview';
}

/* ---------- routes ---------- */
app.get('/api/health', (req, res) =>
  res.json({ ok: true, service: 'mia-ai', time: new Date().toISOString() }));

app.post('/api/waitlist', rateLimit(10, 60 * 1000), (req, res) => {
  const name = String(req.body.name || '').trim().slice(0, 80);
  const email = String(req.body.email || '').trim().toLowerCase().slice(0, 120);
  const plan = cleanPlan(req.body.plan);
  const source = String(req.body.source || 'site').trim().slice(0, 40);
  if (!validEmail(email))
    return res.status(400).json({ ok: false, error: 'valid email required' });
  const list = load();
  if (list.some(e => e.email === email))
    return res.json({ ok: true, duplicate: true });
  list.push({ name, email, plan, source, at: new Date().toISOString(), ip: req.ip });
  try { save(list); }
  catch (e) { return res.status(500).json({ ok: false, error: 'storage failed' }); }
  res.json({ ok: true, plan });
});

app.get('/api/waitlist/count', (req, res) =>
  res.json({ ok: true, count: load().length }));

app.get('/api/waitlist/stats', (req, res) => {
  const list = load();
  const byPlan = {}, bySource = {};
  for (const e of list) {
    byPlan[e.plan || 'preview'] = (byPlan[e.plan || 'preview'] || 0) + 1;
    bySource[e.source || 'site'] = (bySource[e.source || 'site'] || 0) + 1;
  }
  res.json({ ok: true, count: list.length, byPlan, bySource });
});

app.get('/api/waitlist/export', (req, res) => {
  const list = load();
  const q = v => '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"';
  const csv = ['name,email,plan,source,signed_up_at']
    .concat(list.map(e => [e.name, e.email, e.plan, e.source, e.at].map(q).join(',')))
    .join('\n');
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="mia-waitlist.csv"');
  res.send(csv);
});

app.listen(PORT, () => console.log('Mia AI server listening on :' + PORT));
