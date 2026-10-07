/* Mia AI backend — serves the static site + waitlist API.
   Run:  cd server && npm install && npm start   (serves on PORT or 3000)
   The frontend POSTs to /api/waitlist when served from here;
   on static hosts (GitHub Pages) it falls back to browser-local storage. */
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data', 'waitlist.json');

app.use(express.json({ limit: '10kb' }));
app.use(express.static(path.join(__dirname, '..')));

function load() {
  try { return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')); }
  catch (e) { return []; }
}
function save(list) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(list, null, 2));
}
function validEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }

app.get('/api/health', (req, res) =>
  res.json({ ok: true, service: 'mia-ai', time: new Date().toISOString() }));

app.post('/api/waitlist', (req, res) => {
  const name = String(req.body.name || '').trim().slice(0, 80);
  const email = String(req.body.email || '').trim().toLowerCase().slice(0, 120);
  if (!validEmail(email))
    return res.status(400).json({ ok: false, error: 'valid email required' });
  const list = load();
  if (list.some(e => e.email === email))
    return res.json({ ok: true, duplicate: true });
  list.push({ name, email, at: new Date().toISOString(), ip: req.ip });
  try { save(list); }
  catch (e) { return res.status(500).json({ ok: false, error: 'storage failed' }); }
  res.json({ ok: true });
});

app.get('/api/waitlist/count', (req, res) =>
  res.json({ ok: true, count: load().length }));

app.listen(PORT, () => console.log('Mia AI server listening on :' + PORT));
