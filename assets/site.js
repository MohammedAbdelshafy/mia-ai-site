
/* ============ MIA'S BRAIN — 57 agents wired in ============ */
const AGENTS = {
  github: { name: "GITHUB", role: "Repository + delivery agent", flow: ["Inspect repo","Plan the change","Edit safely","Test & verify"], replies: [
    "GITHUB here. I can inspect a repository, map the codebase, plan the smallest safe change, implement it, and verify the result. What are we shipping?",
    "Give me the repo and the outcome. I’ll turn it into a focused implementation mission, then verify before it ships."
  ]},
  mcp: { name: "MCP", role: "Model Context Protocol tool mesh", flow: ["Resolve tools","Route the task","Execute calls","Verify outputs"], replies: [
    "MCP mesh online. I choose the connector that can actually do the job, keep the tool boundary explicit, and route the result back through verification. What should I connect?",
    "Tool-first mode: resolve the right MCP capability, execute only what the mission needs, then bring back the evidence."
  ]},
  thinking: { name: "THINK", role: "Planning + reasoning agent", flow: ["Understand intent","Decompose the mission","Choose the best route","Set verification gates"], replies: [
    "THINK here. I turn the outcome into a precise plan, choose the right specialists, and set verification gates before execution. Give me the goal.",
    "Planning first, motion second. I’ll decompose the job, identify dependencies, and route each part to the best tool or agent."
  ]},
  browser: { name: "WEB", role: "Browser + research agent", flow: ["Find sources","Navigate & extract","Cross-check evidence","Return citations"], replies: [
    "WEB here. I can route browser work, source collection, comparison, and evidence checking through the research layer. What should I investigate?",
    "Research mode: browse, extract, compare, verify, then return the useful evidence instead of a pile of tabs."
  ]},
  nvidia: { name: "NVIDIA", role: "GPU / CUDA specialist", flow: ["Identify the workload","Pick the GPU path","Validate runtime","Measure the result"], replies: [
    "NVIDIA specialist online. I can route CUDA, GPU runtime, TensorRT, DeepStream, TAO, and related workloads to the right skill. What are we accelerating?",
    "GPU path ready. Give me the workload or stack and I’ll choose the appropriate NVIDIA skill, then validate the result."
  ]},
  buzz: { name: "BUZZ", role: "Social media agent", replies: ["BUZZ here — I live on the timeline. Trends, threads, hooks that travel. What are we posting today?"] },
  marketing: { name: "HYPE", role: "Marketing agent", replies: [
    "HYPE here — wired into Mia's brain. Give me a product and an audience, and I'll draft the angle, the hook, and three post variants. In the full build I also publish and track performance.",
    "Love it. My playbook: one sharp angle, three hooks, tested across channels. Tell me what you're selling and who it's for — I'll sketch the campaign right now."
  ]},
  scout: { name: "SCOUT", role: "Lead finder", replies: ["SCOUT on the trail. Tell me your ideal customer and I'll hunt down exactly where they hang out."] },
  research: { name: "SAGE", role: "Research agent", replies: [
    "SAGE here. Straight talk: in this demo I can't browse the live web, so I won't fake sources or facts. In the full build I read everything and cite it. Give me a topic and I'll show you how I'd scope the research.",
    "Happy to help, honestly: no live browsing from this demo, so no invented citations. Tell me the topic and I'll map out exactly how I'd research it for real."
  ]},
  inbox: { name: "INBOX", role: "Email agent", replies: ["INBOX here. Drafts, triage, follow-ups — your inbox, handled. What needs writing?"] },
  outreach: { name: "PING", role: "Outreach agent", replies: [
    "PING reporting in. I write personal, human outreach that actually gets replies — and I never send without TRUTH checking it first. Who are we reaching?",
    "My rule: every message earns the open. Give me your ideal customer and I'll draft the first touch."
  ]},
  sales: { name: "CLOSER", role: "Sales agent", replies: [
    "CLOSER here — wired into Mia's brain. I run the sale: discovery, pitch, objection handling, follow-up. Tell me what you're selling and who I'm talking to.",
    "Deals are my sport. Give me your offer and your prospect — I'll map the path to yes."
  ]},
  orbit: { name: "ORBIT", role: "Automation agent", replies: ["ORBIT here. Workflows, integrations, if-this-then-that — I connect your tools so work runs itself. What should I automate?"] },
  build: { name: "FORGE", role: "Build agent", replies: [
    "FORGE ready. Landing pages, tools, automations, integrations — describe what you want built and I'll scope it in seconds. Mia reviews everything before it ships.",
    "I turn ideas into working software. Tell me what we're building — the stack, the pages, the workflow."
  ]},
  design: { name: "PIXEL", role: "Design agent", replies: [
    "PIXEL reporting. Logos, layouts, brand systems — I make things look inevitable. What are we designing?",
    "Good design is a decision. Describe the vibe — I'll build the visual direction."
  ]},
  video: { name: "MOTION", role: "Video agent", replies: [
    "MOTION here. Scripts, reels, product videos — I plan the shots and the story. What's the video about?",
    "Lights, camera. Give me a topic and a platform — I'll storyboard it in seconds."
  ]},
  voice: { name: "ECHO", role: "Voice agent", replies: [
    "ECHO on the mic. Voiceovers, podcasts, call scripts — I handle everything spoken. What should I say?",
    "Your voice, everywhere. Tell me the message — I'll shape it for ears, not eyes."
  ]},
  content: { name: "STORY", role: "Content agent", replies: [
    "STORY here. Posts, scripts, blogs, newsletters — I match your voice and keep it sharp. What are we creating today?",
    "Give me a topic and a platform, and I'll draft something worth posting. TRUTH double-checks facts before anything goes live."
  ]},
  ghost: { name: "GHOST", role: "Ghostwriter", replies: ["GHOST here. I write in YOUR voice — emails, posts, speeches. Give me a sample and a topic."] },
  dream: { name: "DREAM", role: "Storyteller", replies: ["DREAM here. Bedtime stories, fiction, wild ideas — tell me where to take you."] },
  sky: { name: "SKY", role: "Weather agent", replies: ["SKY here. No live forecasts from the demo, and I won't guess the weather. In the full build: forecasts, alerts, plan-around-the-rain. Where should I check?"] },
  verify: { name: "TRUTH", role: "Verify agent", replies: [
    "TRUTH on duty. I fact-check every claim, link, and number before Mia ships anything. Skepticism is my love language — test me.",
    "Nothing leaves this brain unverified. Paste a claim and watch me work."
  ]},
  vault: { name: "VAULT", role: "Security guide", replies: ["VAULT here. Passwords, privacy, scam-spotting — I keep you safe. What should I check?"] },
  support: { name: "CARE", role: "Support agent", replies: [
    "CARE online. I look after your customers 24/7 — answers, troubleshooting, refunds, the works. What should I learn about your business first?",
    "No ticket left behind. Describe your product and the questions you get — I'll draft your support brain."
  ]},
  data: { name: "SIGNAL", role: "Data agent", replies: [
    "SIGNAL locked in. I turn raw numbers into decisions — dashboards, trends, what to do next. What data are we looking at?",
    "Your metrics, decoded. Tell me what you're tracking and I'll find the story behind the numbers."
  ]},
  ledger: { name: "LEDGER", role: "Finance agent", replies: ["LEDGER here. Budgets, invoices, cash flow — I keep your money honest. What are we counting?"] },
  ship: { name: "SHIP", role: "Project manager", replies: ["SHIP here. Plans, deadlines, deliverables — I keep every project on course. What's the mission?"] },
  tempo: { name: "TEMPO", role: "Scheduler", replies: ["TEMPO here. Calendars, reminders, routines — your time, optimized. What's on the agenda?"] },
  cart: { name: "CART", role: "Shopping agent", replies: ["CART here. I can't check live prices in this demo, so no fake deals from me. In the full build I hunt real products at real prices. What are we buying?"] },
  wire: { name: "WIRE", role: "News briefer", replies: ["WIRE here. I can't pull live headlines in this demo — and I won't invent them. In the full build: the world distilled, zero noise, every story cited. What beat should I cover?"] },
  melody: { name: "MELODY", role: "Music agent", replies: ["MELODY here. Playlists, discovery, vibes for every mood. What are we listening to?"] },
  arcade: { name: "ARCADE", role: "Games agent", replies: ["ARCADE here. Trivia, games, challenges — ready to play? Pick your game."] },
  lingo: { name: "LINGO", role: "Translator", replies: ["LINGO here. Dozens of languages, natural and instant. What should I translate?"] },
  tutor: { name: "TUTOR", role: "Teacher", replies: ["TUTOR here. Any subject, explained your way — simple or deep. What are we learning?"] },
  coach: { name: "COACH", role: "Fitness coach", replies: ["COACH here. Workouts, form, motivation — let's get moving. What's the goal?"] },
  chef: { name: "CHEF", role: "Food agent", replies: ["CHEF here. Recipes, meal plans, what's-for-dinner emergencies. What's cooking?"] },
  atlas: { name: "ATLAS", role: "Travel planner", replies: ["ATLAS here. Itineraries, hidden gems, booking logic. Where are we going?"] },
  pulse: { name: "PULSE", role: "Wellness guide", replies: ["PULSE here. Sleep, energy, habits — practical wellness info. (Not a doctor, just a good start.) What's up?"] },
  scales: { name: "SCALES", role: "Legal explainer", replies: ["SCALES here. I break legal concepts into plain words. (Info only — not a lawyer.) What should I explain?"] },
  mentor: { name: "MENTOR", role: "Career coach", replies: ["MENTOR here. CVs, interviews, career moves — let's level you up. What's the goal?"] },
  nova: { name: "NOVA", role: "Idea generator", replies: ["NOVA here — ideas on tap. Give me a topic and I'll brainstorm ten angles in seconds."] },
  purify: { name: "PURIFY", role: "DataClean AI \u00b7 $499", flow: ["Upload your list","Scrubbing rows","Dedupe & verify","Deliver clean CSV"], replies: ["PURIFY here \u2014 my DataClean AI founding pilot ($499) on Whop. Messy list in, clean verified CSV out. What are we cleaning?"] },
  aegis: { name: "AEGIS", role: "OX-Alpha Data Integrity", flow: ["Scan datasets","Detect corruption","Quarantine bad rows","Certify integrity"], replies: ["AEGIS here \u2014 OX-Alpha Data Integrity. I scan your datasets, detect corruption, quarantine the bad rows, and certify what's clean. Where's the data?"] },
  titan: { name: "TITAN", role: "AI Sales OS", flow: ["Map your pipeline","Build sequences","Score every lead","Launch the engine"], replies: ["TITAN here \u2014 AI Sales OS. I turn your sales process into a machine: pipeline mapping, sequences, lead scoring. What are you selling?"] },
  ringer: { name: "RINGER", role: "Cold Calling Assistant \u00b7 $499", flow: ["Load your call list","Script the opener","Run the calls","Book the meetings"], replies: ["RINGER here \u2014 my Cold Calling Assistant ($499) on Whop. List in, sharp openers, calls run, meetings booked. Who are we calling?"] },
  recoup: { name: "RECOUP", role: "Revenue Recovery AI \u00b7 $499", flow: ["Audit lost revenue","Find the leaks","Recover & follow up","Report recovered $"], replies: ["RECOUP here \u2014 Revenue Recovery AI ($499). I audit where revenue leaked, chase it down, and report what came back. Where's it leaking?"] },
  snip: { name: "SNIP", role: "ClipOps Studio", flow: ["Drop raw footage","Cut the highlights","Caption & brand","Deliver clips"], replies: ["SNIP here \u2014 ClipOps Studio. Raw footage in, scroll-stopping clips out \u2014 cut, captioned, branded. What are we cutting?"] },
  deed: { name: "DEED", role: "Real Estate Deal Packet \u00b7 $499", flow: ["Pull the property","Run the numbers","Build the packet","Deliver the PDF"], replies: ["DEED here \u2014 my Real Estate Deal Packet ($499) on Whop. Property in, investor-ready packet out \u2014 comps, numbers, docs. What's the address?"] },
  spotlight: { name: "SPOTLIGHT", role: "Creator Growth Stack \u00b7 $999", flow: ["Audit your channels","Build content engine","Grow & monetize","Scale the winners"], replies: ["SPOTLIGHT here \u2014 Creator Growth Stack ($999). I audit your channels, build the content engine, and scale what wins. Where are you publishing?"] },
  sentry: { name: "SENTRY", role: "TokenGuard \u00b7 $900", flow: ["Scan token usage","Kill the waste","Set guardrails","Lock in savings"], replies: ["SENTRY here \u2014 TokenGuard ($900). I scan your AI spend, kill wasted tokens, and lock in guardrails. What's your monthly burn?"] },
  foundry: { name: "FOUNDRY", role: "Agent Foundry \u00b7 $900", flow: ["Design your agent","Build & test","Deploy live","Monitor & improve"], replies: ["FOUNDRY here \u2014 Agent Foundry ($900). Tell me the job, and I'll design, build, and deploy a custom agent for it. What should it do?"] },
  recap: { name: "RECAP", role: "Reporting Digest \u00b7 $299", flow: ["Connect sources","Build the digest","Verify numbers","Deliver the brief"], replies: ["RECAP here \u2014 Reporting Digest ($299). Your numbers, distilled into one verified brief. What should I track?"] },
  strike: { name: "STRIKE", role: "Wholesaler Lead Engine \u00b7 $499", flow: ["Define your buy box","Hunt the sellers","Verify & enrich","Deliver the leads"], replies: ["STRIKE here \u2014 Wholesaler Lead Engine ($499). Buy box in, verified seller leads out. What's your market?"] },
  spear: { name: "SPEAR", role: "Cold Outreach Engine \u00b7 $299", flow: ["Build target list","Write the sequences","Launch & track","Book the replies"], replies: ["SPEAR here \u2014 Cold Outreach Engine ($299). Target list, sharp sequences, launched and tracked. Who are we reaching?"] },
  smile: { name: "SMILE", role: "Dental Outreach Pack \u00b7 $750", flow: ["Map the local market","Personalize outreach","Book the consults","Fill the chairs"], replies: ["SMILE here \u2014 Dental Outreach Pack ($750). Local market mapped, outreach personalized, consults booked. Which practice?"] },
    swarm: { name: "SWARM", role: "Mia's deployable crew", flow: ["Reading the mission","Choosing the crew","Deploying the swarm","Reporting back"], replies: [
    "Swarm power online. One commander, many faces — I deploy the right one for the task: GLOW (blonde) for outreach and first impressions, me for research and ops, EMBER (redhead) for creative and build. Scroll down to meet the crew, then give me the mission.",
    "The swarm is yours to command. Tell me the mission and I'll send the right faces — charm, command, or fire, wherever each fits best."
  ] },
sprint: { name: "SPRINT", role: "AI Consultancy Sprint \u00b7 from $297", flow: ["Audit your workflows","Find the AI wins","Sprint the build","Handoff & train"], replies: ["SPRINT here \u2014 AI Consultancy Sprint (from $297). I audit your workflows, find the AI wins, and sprint-build them. What does your team do all day?"] }
};
const MIA = {
  greet: ["Hey, I'm Mia — really good to see you. I'll be straight with you: this demo runs on a script, so I can't do real work from here yet, and I'll never fake it. If I don't know something, I'll say so. Tap an agent below, give us a task, and I'll show you exactly how I'd take it on."],
  price: ["Preview is free — 25 launch credits, no card. Pro is $49 a month, or Founding Lifetime at $499: one payment, yours forever. Paid billing starts at public launch."],
  bye: ["Talk soon — you've got this."],
  fallback: [
    "I won't guess on that one — no real lookup from this demo, so no made-up answer. In the full build I'd hand it to the right specialist with live sources. The waitlist is open when you're ready.",
    "Honest answer: I don't know, and I'd rather say so than invent it. Give me a task from the crew and I'll show you the mission flow."
  ]
};
let activeAgent = null, rIdx = {};
function route(text){
  const t = text.toLowerCase();
  if (activeAgent) { const a = activeAgent; activeAgent = null; return a; }
  const hit = (ws) => ws.some(w => t.includes(w));
  if (hit(["clean my list","data clean","lead cleaner","csv clean","dedup","email list"])) return "purify";
  if (hit(["data integrity","corrupt data","bad data"])) return "aegis";
  if (hit(["sales os","sales system","sales engine"])) return "titan";
  if (hit(["cold call","dialer","phone outreach"])) return "ringer";
  if (hit(["revenue recovery","lost revenue","recover revenue","churn"])) return "recoup";
  if (hit(["clipops","cut the video","highlights"])) return "snip";
  if (hit(["deal packet","wholesale deal","real estate","buy box"])) return "deed";
  if (hit(["creator","growth stack","grow audience","monetize"])) return "spotlight";
  if (hit(["tokenguard","token usage","llm cost","ai spend"])) return "sentry";
  if (hit(["foundry","build me an agent","custom agent"])) return "foundry";
  if (hit(["reporting","digest"])) return "recap";
  if (hit(["wholesal","motivated seller"])) return "strike";
  if (hit(["cold outreach"])) return "spear";
  if (hit(["dental","dentist"])) return "smile";
  if (hit(["consultancy","consult","workflow audit","audit my business"])) return "sprint";
  if (hit(["swarm","deploy the crew","send the crew","my crew","multiple agents","agent team"])) return "swarm";
  if (hit(["github","repo","repository","pull request","issue","commit","branch","codebase","git"])) return "github";
  if (hit(["mcp","model context protocol","tool mesh","connector mesh","mcp server","mcp app"])) return "mcp";
  if (hit(["nvidia","cuda","gpu","tensorrt","deepstream","tao"])) return "nvidia";
  if (hit(["thinking","think through","plan this","reason","architecture","decompose","strategy"])) return "thinking";
  if (hit(["browser","browse","scrape","web research","navigate the web"])) return "browser";
  if (hit(["social media","instagram","tiktok","twitter","viral","thread"])) return "buzz";
  if (hit(["marketing","campaign","social","ads","advertis","seo","copy","audience"])) return "marketing";
  if (hit(["leads","prospect","find customers","find clients","lead list"])) return "scout";
  if (hit(["research","find","search","look up","lookup","analyz","compar","investigat","who is","what is"])) return "research";
  if (hit(["inbox","draft","reply to"])) return "inbox";
  if (hit(["outreach","email","cold","dm ","follow up","follow-up"])) return "outreach";
  if (hit(["sales","sell","deal","clos","demo call","discovery call"])) return "sales";
  if (hit(["workflow","zapier","integration","automate"])) return "orbit";
  if (hit(["build","code","website","site","app ","tool","landing"])) return "build";
  if (hit(["design","logo","brand","poster","graphic","image","photo"])) return "design";
  if (hit(["video","reel","youtube","film"])) return "video";
  if (hit(["voice","audio","podcast","voicemail","call script"])) return "voice";
  if (hit(["content","write","post","script","blog","creat","caption","newsletter","pitch"])) return "content";
  if (hit(["ghostwrit","in my voice","write like me"])) return "ghost";
  if (hit(["bedtime","fiction","tale"])) return "dream";
  if (hit(["weather","rain","forecast","temperature"])) return "sky";
  if (hit(["verify","verifi","fact","is it true","scam","proof","check"])) return "verify";
  if (hit(["password","hack","privacy","phishing"])) return "vault";
  if (hit(["support","help desk","customer","ticket","refund","complaint"])) return "support";
  if (hit(["data","analy","dashboard","metric","insight","numbers","spreadsheet"])) return "data";
  if (hit(["budget","invoice","finance","money","expense","accounting","cash flow"])) return "ledger";
  if (hit(["project","deadline","roadmap","task list","manage this"])) return "ship";
  if (hit(["schedule","calendar","reminder","appointment","routine","plan my day"])) return "tempo";
  if (hit(["buy","shopping","deal on","discount","order"])) return "cart";
  if (hit(["news","headlines","happening"])) return "wire";
  if (hit(["music","song","playlist","spotify"])) return "melody";
  if (hit(["game","trivia","quiz","play"])) return "arcade";
  if (hit(["translat","spanish","french","arabic","language"])) return "lingo";
  if (hit(["learn","teach","explain","lesson","study","homework"])) return "tutor";
  if (hit(["workout","fitness","exercise","gym"])) return "coach";
  if (hit(["recipe","cook","meal","dinner","food"])) return "chef";
  if (hit(["travel","trip","flight","hotel","itinerary","vacation"])) return "atlas";
  if (hit(["sleep","health","wellness","habit","energy"])) return "pulse";
  if (hit(["legal","contract","lawyer","sue","terms"])) return "scales";
  if (hit(["career","job","interview","resume","promotion"])) return "mentor";
  if (hit(["idea","brainstorm","slogan"])) return "nova";
  return null;
}

/* === MIA WELCOME BOOT === */
const miaWelcome = document.getElementById('miaWelcome');
const miaWelcomeInput = document.getElementById('miaWelcomeInput');
function welcomeBubble(text, who, tag){
  const log = document.getElementById('miaWelcomeLog');
  if(!log) return;
  const d = document.createElement('div');
  d.className = 'mia-chat-msg ' + (who === 'u' ? 'mia-chat-user' : 'mia-chat-mia');
  const label = (tag ? '<span>\u26a1 ' + esc(tag) + '</span>' : '<span>' + (who === 'u' ? 'YOU' : 'MIA') + '</span>');
  if(who === 'm'){
    // typing effect — feels alive
    d.innerHTML = label + '<p><i class="typing-dots"><i></i><i></i><i></i></i></p>';
    log.appendChild(d); log.scrollTop = log.scrollHeight;
    const p = d.querySelector('p');
    let i = 0;
    const timer = setInterval(() => {
      i += 2;
      p.textContent = text.slice(0, i);
      log.scrollTop = log.scrollHeight;
      if(i >= text.length){ clearInterval(timer); }
    }, 18);
  } else {
    d.innerHTML = label + '<p>' + esc(text) + '</p>';
    log.appendChild(d); log.scrollTop = log.scrollHeight;
  }
}
function sendWelcomeMission(value){
  const v = String(value || '').trim();
  if(!v) return;
  miaWelcomeInput.value = '';
  const picked = (window.miaPickedAgent && window.miaPickedAgent()) || null;
  welcomeBubble(v, 'u', picked && AGENTS[picked] ? AGENTS[picked].name : null);
  startWelcomeMission(v);
  let p;
  if(picked && AGENTS[picked]){
    const a = AGENTS[picked];
    p = { out: (a.replies && a.replies[0]) || ('Talking to ' + a.name + '. Tell me what you need.'), tag: a.name };
  } else {
    p = planReply(v);
  }
  setTimeout(() => welcomeBubble(p.out, 'm', p.tag), 1250);
}
const miaWelcomeClose = document.getElementById('miaWelcomeClose');
if(miaWelcomeClose) miaWelcomeClose.onclick = () => miaWelcome.classList.remove('open');
miaWelcome.addEventListener('click', e => { if(e.target === miaWelcome) miaWelcome.classList.remove('open'); });
miaWelcome.querySelectorAll('[data-mia-prompt]').forEach(b => b.onclick = () => sendWelcomeMission(b.dataset.miaPrompt));
document.getElementById('miaWelcomeSend').onclick = () => sendWelcomeMission(miaWelcomeInput.value);
/* === INTERACTIVE DEMO SCENARIOS === */
const SCENARIOS = {
  launch: {
    prompt: "Show me how you would launch an AI product",
    stages: ["Brief received — mapping the launch", "Thinking — positioning & channels", "Tools — reaching across the web", "Executing — building the assets", "Verifying — checking every detail"],
    reply: "Here's how I'd launch it: I research your market across the web, position against competitors, draft the announcement, line up Product Hunt + HN + dev.to, and verify every link before we go live. Pick me and I'll run the real thing."
  },
  research: {
    prompt: "Research the AI coding-assistant market for me",
    stages: ["Brief received — scoping the market", "Thinking — who are the players?", "Tools — gathering data across planets", "Executing — comparing features & pricing", "Verifying — cross-checking sources"],
    reply: "Market mapped: I pull from docs, reviews, pricing pages and community chatter across the web — then hand you the players, the gaps, and where you'd win. That's a live mission; say the word."
  },
  outreach: {
    prompt: "Plan a cold outreach campaign for my startup",
    stages: ["Brief received — who are we reaching?", "Thinking — angles & personalization", "Tools — finding verified contacts", "Executing — writing the sequence", "Verifying — checking deliverability"],
    reply: "Campaign drafted: verified contacts, personalized openers, 4-touch sequence with opt-outs baked in. I don't do spam — every touch earns the reply. Want me to build yours?"
  }
};
document.querySelectorAll('[data-scenario]').forEach(b => b.onclick = () => {
  const s = SCENARIOS[b.dataset.scenario];
  if(!s) return;
  // open welcome chat if closed
  const w = document.getElementById('miaWelcome');
  if(w && !w.classList.contains('open')) w.classList.add('open');
  // clear log for a clean demo run
  const log = document.getElementById('miaWelcomeLog');
  if(log) log.innerHTML = '';
  welcomeBubble(s.prompt, 'u');
  // staged theatre
  const stageEl = document.getElementById('welcomeMissionStage');
  const promptEl = document.getElementById('welcomeMissionPrompt');
  if(promptEl) promptEl.textContent = s.prompt;
  let si = 0;
  const tick = setInterval(() => {
    if(stageEl && si < s.stages.length){ stageEl.textContent = s.stages[si]; si++; }
    else { clearInterval(tick); }
  }, 1600);
  startWelcomeMission(s.prompt);
  setTimeout(() => welcomeBubble(s.reply, 'm', 'DEMO'), s.stages.length * 1600 + 600);
});
/* === AGENT PICKER === */
(function(){
  const sel = document.getElementById('miaAgentPick');
  if(!sel || typeof AGENTS === 'undefined') return;
  Object.keys(AGENTS).forEach(k => {
    const o = document.createElement('option');
    o.value = k; o.textContent = AGENTS[k].name + ' — ' + (AGENTS[k].role || '');
    sel.appendChild(o);
  });
  window.miaPickedAgent = () => sel.value || null;
})();
miaWelcomeInput.addEventListener('keydown', e => { if(e.key === 'Enter'){ e.preventDefault(); sendWelcomeMission(miaWelcomeInput.value); } });

const welcomeMissionVideo = document.getElementById('welcomeMissionVideo');
const welcomeMission = document.getElementById('miaLiveMission');
const welcomeMissionPrompt = document.getElementById('welcomeMissionPrompt');
const welcomeMissionStage = document.getElementById('welcomeMissionStage');
const welcomeMissionState = document.getElementById('welcomeMissionState');
let welcomeMissionTimer = null;
function startWelcomeMission(task){
  if(!welcomeMission) return;
  clearInterval(welcomeMissionTimer);
  welcomeMission.classList.add('is-live');
  welcomeMissionState.textContent = 'LIVE';
  welcomeMissionState.classList.add('live');
  welcomeMissionPrompt.textContent = task;
  const stages = ['Briefing the mission…','Thinking through the route…','Selecting tools & specialists…','Executing the task…','Verifying the result…','Mission ready for delivery.'];
  let i=0;
  welcomeMissionStage.textContent = stages[0];
  try{
    welcomeMissionVideo.currentTime = 0;
    const p = welcomeMissionVideo.play();
    if(p && p.catch) p.catch(()=>{});
  }catch(e){}
  welcomeMissionTimer = setInterval(()=>{
    i = Math.min(i+1, stages.length-1);
    welcomeMissionStage.textContent = stages[i];
    if(i === stages.length-1){
      clearInterval(welcomeMissionTimer);
      welcomeMissionState.textContent = 'RESULT READY';
      welcomeMissionState.classList.add('live');
    }
  }, 1250);
}

window.addEventListener('load', () => {
  const obStep1 = document.getElementById('obStep1');
  if(obStep1) obStep1.style.display = 'none';
  const obClose = document.getElementById('obClose');
  if(obClose) obClose.onclick = () => miaWelcome.classList.remove('open');
  miaWelcome.classList.add('open');
  startWelcomeDemo();
  setTimeout(() => miaWelcomeInput.focus({preventScroll:true}), 120);
});

/* === SUSPENSE CAPTIONS over opening video === */
(function(){
  const el = document.getElementById('welcomeCineText');
  if(!el) return;
  const lines = [
    "Past <em>planets</em> and <em>moons</em>…",
    "beneath alien <em>suns</em>, among the <em>stars</em>…",
    "she gathers what others <em>can't reach</em>.",
    "She's not software you <em>operate</em>.",
    "She's <em>Mia</em>. And she's ready."
  ];
  let i = 0;
  function next(){
    el.classList.remove('show');
    setTimeout(() => {
      el.innerHTML = lines[i % lines.length];
      i++;
      requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('show')));
    }, 800);
  }
  next();
  setInterval(next, 4200);
})();
function startWelcomeDemo(){
  const demoTask = "Show me how you would launch an AI product";
  welcomeMissionPrompt.textContent = demoTask;
  welcomeMissionState.textContent = 'DEMO';
  welcomeMissionState.classList.add('live');
  welcomeMission.classList.add('is-live');
  const stages = ['Understanding the goal…','Choosing the right specialists…','Connecting tools…','Building the plan…','Checking the result…','Ready for your mission.'];
  let i = 0;
  welcomeMissionStage.textContent = stages[0];
  try{ welcomeMissionVideo.currentTime = 0; const p = welcomeMissionVideo.play(); if(p && p.catch) p.catch(()=>{}); }catch(e){}
  clearInterval(welcomeMissionTimer);
  welcomeMissionTimer = setInterval(()=>{ i = (i + 1) % stages.length; welcomeMissionStage.textContent = stages[i]; }, 1250);
}

const log = document.getElementById('chatLog'), input = document.getElementById('chatInput');
function bubble(html, who, tag){
  if(!log) return;
  log.classList.add('open');
  const d = document.createElement('div');
  d.className = 'msg ' + who;
  d.innerHTML = (tag ? '<span class="atag">⚡ ' + tag + '</span><br>' : '') + html;
  log.appendChild(d); log.scrollTop = log.scrollHeight;
}
function esc(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function pick(arr, key){ rIdx[key] = ((rIdx[key]||0)+1) % arr.length; return arr[rIdx[key]]; }
/* ============ MISSION VIDEO — Mia flies, chooses, returns ============ */
const SpaceViz = (() => {
  const wrap = document.getElementById('spaceWrap');
  const video = document.getElementById('missionVideo');
  const label = document.getElementById('stageLabel');
  const bar = document.getElementById('spaceBar');
  if(!wrap||!video||!label||!bar) return { start(){} };
  const STAGE_MS = 1600;
  let stages=[], done=null, timer=null, watchdog=null, stageTimer=null, finished=false, t0=0;
  function finish(){
    if(finished) return; finished=true;
    clearTimeout(timer); clearTimeout(watchdog); clearInterval(stageTimer);
    try{ video.currentTime=0; const p=video.play(); if(p&&p.catch) p.catch(()=>{}); }catch(e){}
    label.textContent='Mia at work · live'; bar.style.width='0%';
    const d=done; done=null; d&&d();
  }
  function start(s,cb){
    stages=s; done=cb; finished=false;
    clearTimeout(timer); clearTimeout(watchdog); clearInterval(stageTimer);
    if(!stages.length){ finish(); return; }
    wrap.classList.add('open');
    try{ video.currentTime=0; const p=video.play(); if(p&&p.catch) p.catch(()=>{}); }catch(e){}
    t0=performance.now();
    label.textContent=stages[0].label; bar.style.width='4%';
    const pagePrompt = document.getElementById('missionPrompt');
    const pageStage = document.getElementById('pageMissionStage');
    if(pagePrompt) pagePrompt.textContent = (stages[0]?.short || 'Mission') + ' in motion';
    if(pageStage) pageStage.textContent = stages[0]?.label || 'Mia is working…';
    stageTimer=setInterval(()=>{
      const el=performance.now()-t0;
      const si=Math.min(stages.length-1, Math.floor(el/STAGE_MS));
      label.textContent=stages[si].label;
      bar.style.width=Math.min(100, el/(stages.length*STAGE_MS)*100)+'%';
    },150);
    timer=setTimeout(finish, stages.length*STAGE_MS+700);
    watchdog=setTimeout(finish, stages.length*STAGE_MS+6000);
  }
  return { start };
})();
function stagesFor(key, agentLabel){
  const ag = AGENTS[key];
  if(ag && ag.flow) return ag.flow.map(s => ({short:s, label:'\u26a1 '+ag.name+' \u00b7 '+s+'\u2026'}));
  const who = agentLabel || 'Mia';
  return [
    {short:'Brief',   label:'⚡ '+who+' received your mission…'},
    {short:'Launch',  label:'⚡ Flying super fast through the galaxy…'},
    {short:'Planet',  label:'⚡ Landing on the planet — searching the website…'},
    {short:'Gather',  label:'⚡ Collecting intel across worlds…'},
    {short:'Deliver', label:'⚡ Returning with results…'}
  ];
}
function planReply(text){
  const t = text.toLowerCase();
  if (/^(hi|hey|hello|salam|yo)\b/.test(t)) return {out:pick(MIA.greet,'g'), tag:null, key:null};
  if (t.includes('price')||t.includes('cost')||t.includes('free')||t.includes('pay')||t.includes('credit')) return {out:pick(MIA.price,'p'), tag:null, key:null};
  if (t.includes('bye')||t.includes('thanks')||t.includes('shukran')) return {out:pick(MIA.bye,'b'), tag:null, key:null};
  if (/who are you|your name|about you|what are you/.test(t)) return {out:"I'm Mia — the employee you hire, not software you operate. Research, outreach, build, verify: my departments handle the work while you watch the journey. This site is the demo; the waitlist is the door.", tag:null, key:null};
  const a = route(t);
  if (a) return {out:pick(AGENTS[a].replies,a), tag:AGENTS[a].name, key:a};
  return {out:pick(MIA.fallback,'f'), tag:null, key:null};
}
function send(){
  const v = input.value.trim(); if(!v) return;
  startWelcomeMission(v);
  bubble(esc(v),'u'); input.value='';
  const p = planReply(v);
  SpaceViz.start(stagesFor(p.key,p.tag), ()=> bubble(esc(p.out),'m',p.tag));
}
const sendBtn = document.getElementById('sendBtn');
if(sendBtn && input){
  sendBtn.onclick = send;
  input.addEventListener('keydown', e => { if(e.key === 'Enter') send(); });
  document.querySelectorAll('.chip').forEach(c => c.onclick = () => { input.value = c.dataset.q; input.focus(); });
}
/* agent crew */
function selectAgent(k){
  const a = AGENTS[k]; if(!a) return;
  document.querySelectorAll('.agent').forEach(x => x.classList.remove('active'));
  const btn = document.querySelector('.agent[data-agent="'+k+'"]');
  if(btn) btn.classList.add('active');
  activeAgent = k;
  if(input){
    input.placeholder = 'Ask ' + a.name + '…';
    input.focus();
    bubble('⚡ <b>' + a.name + '</b> — ' + a.role + '. Give me the mission when you\'re ready.', 'm', a.name);
  } else {
    miaWelcome.classList.add('open');
    welcomeBubble('⚡ <b>' + a.name + '</b> — ' + a.role + '. Give me the mission when you\'re ready.', 'm', a.name);
  }
}
const crewBtns = document.querySelectorAll('.agent');
crewBtns.forEach(b => b.onclick = () => selectAgent(b.dataset.agent));
(function(){
  const grid = document.getElementById('agentGrid'); if(!grid) return;
  Object.keys(AGENTS).forEach(k => {
    if (k === 'swarm') return; // SWARM is the command power — it has its own section; directory stays 57
    const a = AGENTS[k];
    const d = document.createElement('button');
    d.className = 'dir-card rv';
    const preview = a.replies && a.replies[0] ? a.replies[0].slice(0, 92) + (a.replies[0].length > 92 ? '…' : '') : '';
    const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    d.innerHTML = '<b>'+esc(a.name)+'</b><span>'+esc(a.role)+'</span><em>'+esc(preview)+'</em>';
    d.onclick = () => selectAgent(k);
    grid.appendChild(d);
  });
})();

// agent directory search (agents.html)
(function(){
  const q = document.getElementById('agentSearch'); if(!q) return;
  const grid = document.getElementById('agentGrid'); if(!grid) return;
  const count = document.getElementById('agentCount');
  q.addEventListener('input', () => {
    const s = q.value.trim().toLowerCase(); let n = 0;
    grid.querySelectorAll('.dir-card').forEach(c => {
      const hit = !s || c.textContent.toLowerCase().includes(s);
      c.style.display = hit ? '' : 'none'; if(hit) n++;
    });
    if(count) count.textContent = n + ' of 57 agents';
  });
})();

const vidModal = document.getElementById('vidModal');
if(vidModal){
document.getElementById('meetMiaBtn').onclick = () => {
  vidModal.classList.add('open');
  const v = document.getElementById('hiVideo');
  try{ const p=v.play(); if(p&&p.catch) p.catch(()=>{}); }catch(e){}
};
document.getElementById('vidX').onclick = () => { vidModal.classList.remove('open'); document.getElementById('hiVideo').pause(); };
vidModal.addEventListener('click', e => { if(e.target===vidModal){ vidModal.classList.remove('open'); document.getElementById('hiVideo').pause(); } });
}
/* modal + waitlist */
const modal = document.getElementById('modal');
let miaPlan = 'preview';
const PLAN_COPY = {
  preview:    ["Hire Mia to control your digital life", "Mia is in private preview — reserve your hire."],
  pro:        ["Reserve Mia Pro", "Lock founding-member pricing for life. $49/mo when we launch."],
  lifetime:   ["Claim Founding Lifetime", "One payment of $499. Yours forever."],
  team:       ["Hire Mia for your team", "$149/mo for 5 devices when we launch."],
  agency:     ["Scale your agency with Mia", "$499/mo for 20 devices when we launch."],
  enterprise: ["Apply for Enterprise Install", "Custom fleet install — onboarding by application."]
};
document.querySelectorAll('[data-modal]').forEach(b => b.onclick = e => { e.preventDefault(); miaPlan = b.dataset.plan || 'preview';
  const c = PLAN_COPY[miaPlan] || PLAN_COPY.preview;
  document.getElementById('modalTitle').textContent = c[0];
  document.getElementById('modalSub').textContent = c[1];
  modal.classList.add('open'); });
document.getElementById('modalX').onclick = () => modal.classList.remove('open');
modal.onclick = e => { if(e.target === modal) modal.classList.remove('open'); };
document.getElementById('wSubmit').onclick = async () => {
  const n = document.getElementById('wName').value.trim(), em = document.getElementById('wEmail').value.trim();
  if(!em || !em.includes('@')) { document.getElementById('wEmail').focus(); document.getElementById('wEmail').style.borderColor = '#f87171'; return; }
  let saved = false;
  try { /* real backend when the site runs on the Mia server */
    const r = await fetch('/api/waitlist',{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({name:n,email:em,plan:miaPlan,source:'site'})});
    saved = r.ok;
  } catch(e){}
  if(!saved){ /* free shared capture lane: lands in the founder's inbox, one activation click needed */
    try {
      const r = await fetch('https://formsubmit.co/ajax/abdelshafyclapps@gmail.com',{method:'POST',
        headers:{'Content-Type':'application/json','Accept':'application/json'},
        body:JSON.stringify({name:n, email:em, plan:miaPlan, source:'mia-ai-site',
          _subject:'New Mia AI waitlist signup · ' + miaPlan})});
      saved = r.ok;
    } catch(e){}
  }
  if(!saved){ /* static-host fallback: this browser only */
    try {
      const list = JSON.parse(localStorage.getItem('mia-waitlist') || '[]');
      list.push({name:n, email:em, plan:miaPlan, source:'site', at:new Date().toISOString()});
      localStorage.setItem('mia-waitlist', JSON.stringify(list));
    } catch(e){}
  }
  document.getElementById('modalForm').style.display = 'none';
  document.getElementById('modalOk').style.display = 'block';
};
/* nav + reveal */
const burger = document.getElementById('burger'), navMenu = document.getElementById('navMenu');
burger.onclick = () => navMenu.classList.toggle('open');
navMenu.querySelectorAll('a').forEach(a => a.onclick = () => navMenu.classList.remove('open'));
/* pricing tabs */
document.querySelectorAll('.ptab').forEach(t => t.onclick = () => {
  document.querySelectorAll('.ptab').forEach(x => x.classList.remove('active'));
  t.classList.add('active');
  const biz = t.dataset.ptab === 'business';
  document.getElementById('gridPersonal').style.display = biz ? 'none' : 'grid';
  document.getElementById('gridBusiness').style.display = biz ? 'grid' : 'none';
});
const io = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }), {threshold:.12});
document.querySelectorAll('.rv').forEach(el => io.observe(el));
if('serviceWorker' in navigator){ /* offline cache optional — skipped for static preview */ }
