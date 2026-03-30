// ═══════════════════════════════════════
// SHARED DATA — People & AI Employees
// Edit here, changes propagate to all views
// ═══════════════════════════════════════

const SHARED_ORG = {
  id:'callan',name:'Callan Faulkner',title:'Founder & Visionary',initials:'CF',isFounder:true,
  aiEmployees:[
    {name:'Brand Voice Writer',icon:'✍️',cat:'voice',desc:'Writes in Callan\'s authentic voice — emails, newsletters, captions, scripts'},
    {name:'Strategic Business Advisor',icon:'🧠',cat:'strategy',desc:'Proven frameworks for offers, pricing, and scaling decisions'},
    {name:'Event Briefing Analyst',icon:'🔎',cat:'research',desc:'Researches any audience and builds pre-event intelligence reports'},
    {name:'Leadership Coach',icon:'🧭',cat:'hr',desc:'Personality-aware coaching scripts for every team member'},
    {name:'Keynote Script Writer',icon:'🎤',cat:'voice',desc:'Presentation scripts and talking points for live events'},
    {name:'Content Calendar Generator',icon:'📅',cat:'creative',desc:'Full week of content drafted every Sunday at 6am'},
    {name:'Performance Digest',icon:'📊',cat:'analytics',desc:'Weekly report on what posted, what performed, what to change'},
  ],
  moreCount:14,
  children:[
    {
      id:'kinsey',name:'Kinsey',title:'Chief Operating Officer',initials:'KM',
      aiEmployees:[
        {name:'Morning Briefing Agent',icon:'☕',cat:'ops',desc:'Daily Slack digest of team activity, priorities, and flags before coffee'},
        {name:'Executive Briefing Analyst',icon:'📊',cat:'analytics',desc:'Weekly leadership briefings compiled from all channels'},
        {name:'Meeting Intelligence Manager',icon:'🎯',cat:'ops',desc:'Extracts action items and decisions from every meeting automatically'},
        {name:'Operations Dashboard Builder',icon:'📋',cat:'engineering',desc:'Automated KPI dashboards and team performance tracking'},
        {name:'Job Description Writer',icon:'📝',cat:'hr',desc:'AI-generated JDs that know your company values and team structure'},
        {name:'AI CFO',icon:'💰',cat:'finance',desc:'Financial snapshots, calendar-as-revenue reports, budget oversight'},
      ],
      moreCount:12,
      children:[
        {
          id:'cara',name:'Cara',title:'Director of Paid Media',initials:'CA',
          aiEmployees:[
            {name:'Social Media Data Analyst',icon:'📱',cat:'analytics',desc:'Scrapes competitor posts, finds winning hooks and engagement patterns'},
            {name:'Ad Creative Strategist',icon:'🎨',cat:'creative',desc:'Scroll-stopping ad concepts built from real performance data'},
            {name:'Visual Content Designer',icon:'🖼️',cat:'creative',desc:'Thumbnails, graphics, carousel designs, ad creatives on demand'},
            {name:'Campaign Performance Optimizer',icon:'📉',cat:'analytics',desc:'Monitors ad spend ROI and recommends budget reallocation'},
            {name:'Instagram Carousel Creator',icon:'📐',cat:'creative',desc:'Transcript → content ideas → publish-ready PDF carousel'},
          ],
          moreCount:8,
          children:[
            {id:'kelsey',name:'Kelsey',title:'Video Team',initials:'KE',
              aiEmployees:[
                {name:'Video Script Writer',icon:'🎬',cat:'creative',desc:'Scripts optimized for retention and audience engagement'},
                {name:'Thumbnail Designer',icon:'🖼️',cat:'creative',desc:'Click-worthy thumbnails for every piece of content'},
                {name:'Content Repurposer',icon:'♻️',cat:'creative',desc:'One video becomes 10+ assets across platforms automatically'},
              ],
              moreCount:6,children:[]
            }
          ]
        },
        {
          id:'lex',name:'Lex',title:'Director of Operations',initials:'LX',
          aiEmployees:[
            {name:'SOP Architect',icon:'📋',cat:'ops',desc:'Turns brain dumps into standardized, deploy-ready playbooks'},
            {name:'Workflow Automator',icon:'⚡',cat:'engineering',desc:'Designs automated workflows that replace manual repetitive tasks'},
            {name:'Event Planner',icon:'🗓️',cat:'ops',desc:'Full event build — budget, website, checkout — in hours, not weeks'},
            {name:'Project Manager',icon:'📤',cat:'ops',desc:'Brain dumps into organized, assignable project briefs in Notion'},
            {name:'Compliance & IP Specialist',icon:'🛡️',cat:'ops',desc:'Monitors and protects company intellectual property'},
          ],
          moreCount:8,children:[]
        },
        {
          id:'nick',name:'Nick',title:'Copywriter',initials:'NM',
          aiEmployees:[
            {name:'Email Copywriter',icon:'✉️',cat:'voice',desc:'Single-CTA emails that compress and convert'},
            {name:'Newsletter Writer',icon:'📰',cat:'voice',desc:'Weekly newsletter drafts in brand voice — scheduled every Tuesday at 5am'},
            {name:'Hook Specialist',icon:'🪝',cat:'creative',desc:'Scroll-stopping hooks built from real engagement data'},
            {name:'Sales Page Writer',icon:'📝',cat:'voice',desc:'Long-form sales pages that tell stories and close'},
            {name:'A/B Test Analyst',icon:'🔬',cat:'analytics',desc:'Copy variant analysis and winner prediction'},
          ],
          moreCount:7,children:[]
        },
        {
          id:'jodi-sales',name:'Jodi',title:'Director of Sales',initials:'JS',
          aiEmployees:[
            {name:'Sales Wizard',icon:'🧙',cat:'sales',desc:'Proof-loaded responses pulling real client stories for every objection'},
            {name:'Objection Handler',icon:'🎯',cat:'sales',desc:'Real-time rebuttals with case-study-backed comebacks'},
            {name:'Lead Qualifier',icon:'🔍',cat:'sales',desc:'ICP scoring, engagement tracking, and lead prioritization'},
            {name:'Proposal Generator',icon:'📄',cat:'sales',desc:'Custom proposals in minutes — not hours'},
            {name:'Follow-Up Sequencer',icon:'📬',cat:'sales',desc:'Automated nurture sequences that close deals on autopilot'},
          ],
          moreCount:7,children:[]
        },
        {
          id:'fred',name:'Fred',title:'Fractional CFO',initials:'FR',
          aiEmployees:[
            {name:'AI Bookkeeper',icon:'🧾',cat:'finance',desc:'Raw credit card statements → categorized, CPA-ready reports in minutes'},
            {name:'Expense Categorizer',icon:'💳',cat:'finance',desc:'Remembers your vendors, software stack, and categories — no repeat questions'},
            {name:'Revenue Forecaster',icon:'📈',cat:'finance',desc:'Cash flow projections and revenue modeling updated weekly'},
            {name:'Financial Snapshot Generator',icon:'📊',cat:'finance',desc:'One-click P&L summaries and board-ready financial reports'},
            {name:'Budget Tracker',icon:'💰',cat:'finance',desc:'Monitors spend against budget and flags overruns in real time'},
          ],
          moreCount:6,children:[]
        }
      ]
    },
    {
      id:'carter',name:'Carter',title:'VP of Product & Innovation',initials:'CJ',
      aiEmployees:[
        {name:'AI Trend Scout',icon:'🔭',cat:'research',desc:'Scans Product Hunt, Reddit, X daily — filtered for business relevance'},
        {name:'Audience Analyzer',icon:'👥',cat:'research',desc:'Deep-profiles any audience, event, or prospect in minutes'},
        {name:'Product Validation Engine',icon:'⚖️',cat:'product',desc:'Pressure-tests product ideas — BUILD, RESHAPE, or SHELF'},
        {name:'LinkedIn Expert',icon:'🔗',cat:'voice',desc:'Transforms any content into ready-to-publish LinkedIn posts'},
        {name:'UI/UX Designer',icon:'💎',cat:'engineering',desc:'Production-grade interfaces, apps, and interactive experiences'},
        {name:'Competitive Intelligence Researcher',icon:'🕵️',cat:'research',desc:'Deep research on any company, market, or trend in 60 seconds'},
      ],
      moreCount:13,
      children:[
        {
          id:'elliot',name:'Elliot',title:'Director of Curriculum',initials:'EL',
          aiEmployees:[
            {name:'Curriculum Developer',icon:'🎓',cat:'curriculum',desc:'Interactive trainings that shift beliefs and change behavior'},
            {name:'Content Repurposer',icon:'♻️',cat:'curriculum',desc:'One transcript → content ideas → publish-ready carousels'},
            {name:'Framework Designer',icon:'🔺',cat:'curriculum',desc:'Extracts teachable frameworks and creates visual diagrams'},
            {name:'Brand Skill Builder',icon:'🏷️',cat:'curriculum',desc:'Turns any brand folder into AI-ready guidelines instantly'},
            {name:'Assessment Builder',icon:'📝',cat:'curriculum',desc:'Quizzes and skill assessments that measure real progress'},
          ],
          moreCount:9,children:[]
        },
        {
          id:'jody',name:'Jody',title:'Student Success Lead',initials:'JD',
          aiEmployees:[
            {name:'Student Onboarding Specialist',icon:'👋',cat:'ops',desc:'Personalized welcome experience for every new student'},
            {name:'Community Manager',icon:'💬',cat:'ops',desc:'Monitors community health and surfaces students who need help'},
            {name:'Progress Tracker',icon:'📈',cat:'analytics',desc:'Milestone tracking and early-warning flags for fall-behind students'},
            {name:'Client Story Engine',icon:'📖',cat:'sales',desc:'Indexes every success story for instant retrieval in sales and content'},
          ],
          moreCount:7,children:[]
        }
      ]
    }
  ]
};

const TOTAL_HUMANS = 12;

// ═══ MONDAY MORNING TIMELINE EVENTS ═══
// Each event = one AI employee completing a task while humans sleep
// time is in minutes from midnight (0 = 12:00am, 480 = 8:00am)
const TIMELINE_EVENTS = [
  { time: 30,  aiName: 'AI Trend Scout',             icon: '🔭', owner: 'Carter',  desc: 'Scanned Product Hunt, Reddit, X, and 14 tech newsletters', output: 'Daily trend brief with 3 flagged tools', hoursSaved: 2.0, dollarValue: 150 },
  { time: 90,  aiName: 'Competitive Intelligence Researcher', icon: '🕵️', owner: 'Carter', desc: 'Deep-researched 4 competitor product launches from this week', output: 'Competitive intel report with pricing analysis', hoursSaved: 3.0, dollarValue: 225 },
  { time: 120, aiName: 'AI Bookkeeper',              icon: '🧾', owner: 'Fred',    desc: 'Processed 143 transactions from yesterday\'s Amex statement', output: 'Categorized, CPA-ready expense report', hoursSaved: 1.5, dollarValue: 200 },
  { time: 150, aiName: 'Revenue Forecaster',          icon: '📈', owner: 'Fred',    desc: 'Updated cash flow projections with latest revenue data', output: '12-week forecast with variance flags', hoursSaved: 2.0, dollarValue: 300 },
  { time: 210, aiName: 'Content Calendar Generator',  icon: '📅', owner: 'Callan',  desc: 'Drafted full content calendar for the week across all platforms', output: '15 posts: 5 IG, 4 LinkedIn, 3 email, 3 Threads', hoursSaved: 3.0, dollarValue: 375 },
  { time: 240, aiName: 'Social Media Data Analyst',   icon: '📱', owner: 'Cara',    desc: 'Scraped last 10 days of competitor posts and analyzed engagement', output: 'Top 5 hooks, 3 trending themes, engagement heatmap', hoursSaved: 2.5, dollarValue: 200 },
  { time: 270, aiName: 'Campaign Performance Optimizer', icon: '📉', owner: 'Cara', desc: 'Analyzed $12K ad spend across 8 campaigns from last week', output: 'Pause 2 underperformers, scale 3 winners, reallocate $2.4K', hoursSaved: 1.5, dollarValue: 180 },
  { time: 300, aiName: 'Newsletter Writer',           icon: '📰', owner: 'Nick',    desc: 'Drafted Tuesday\'s email newsletter in brand voice', output: '487-word newsletter with subject line and preview text', hoursSaved: 2.0, dollarValue: 250 },
  { time: 330, aiName: 'Performance Digest',          icon: '📊', owner: 'Callan',  desc: 'Compiled weekly performance across all content channels', output: 'Top 3 posts, engagement trends, recommended pivots', hoursSaved: 1.5, dollarValue: 120 },
  { time: 360, aiName: 'Financial Snapshot Generator', icon: '📊', owner: 'Fred',   desc: 'Generated board-ready P&L summary for March', output: 'One-page financial snapshot with YoY comparison', hoursSaved: 2.0, dollarValue: 350 },
  { time: 375, aiName: 'Student Onboarding Specialist', icon: '👋', owner: 'Jody', desc: 'Personalized welcome sequences for 6 new students enrolled yesterday', output: '6 custom onboarding paths with resource links', hoursSaved: 1.0, dollarValue: 80 },
  { time: 390, aiName: 'Progress Tracker',            icon: '📈', owner: 'Jody',    desc: 'Scanned 312 active students for milestone completion', output: '8 students flagged as at-risk, 3 recommended for spotlight', hoursSaved: 2.0, dollarValue: 150 },
  { time: 405, aiName: 'Morning Briefing Agent',      icon: '☕', owner: 'Kinsey',  desc: 'Compiled overnight Slack, Notion updates, and calendar prep', output: 'Team activity digest + 4 items needing Kinsey\'s attention', hoursSaved: 1.0, dollarValue: 80 },
  { time: 420, aiName: 'Meeting Intelligence Manager', icon: '🎯', owner: 'Kinsey', desc: 'Prepped agendas for today\'s 3 meetings from prior action items', output: '3 agendas with carryover tasks and decision points', hoursSaved: 1.0, dollarValue: 80 },
  { time: 435, aiName: 'Content Repurposer',          icon: '♻️', owner: 'Elliot',  desc: 'Converted Thursday\'s training transcript into 8 content pieces', output: '2 carousels, 3 LinkedIn posts, 1 blog draft, 2 email snippets', hoursSaved: 3.0, dollarValue: 375 },
  { time: 450, aiName: 'Lead Qualifier',              icon: '🔍', owner: 'Jodi',    desc: 'Scored 23 new leads from last night\'s webinar against ICP', output: '7 hot leads prioritized, 12 warm for nurture, 4 disqualified', hoursSaved: 1.5, dollarValue: 120 },
  { time: 465, aiName: 'Brand Voice Writer',          icon: '✍️', owner: 'Callan',  desc: 'Drafted 3 Instagram captions and a LinkedIn thought-leadership post', output: '4 publish-ready posts in Callan\'s authentic voice', hoursSaved: 1.5, dollarValue: 200 },
];

// ═══ UTILITY: Flatten all people from org tree ═══
function flattenPeople(node, result = []) {
  result.push({ id: node.id, name: node.name, title: node.title, initials: node.initials, isFounder: node.isFounder });
  (node.children || []).forEach(c => flattenPeople(c, result));
  return result;
}

const ALL_PEOPLE = flattenPeople(SHARED_ORG);

// ═══ UTILITY: Flatten all AI employees with owner info ═══
function flattenAI(node, result = []) {
  (node.aiEmployees || []).forEach(ai => {
    result.push({ ...ai, ownerId: node.id, ownerName: node.name, ownerTitle: node.title });
  });
  (node.children || []).forEach(c => flattenAI(c, result));
  return result;
}

const ALL_AI_EMPLOYEES = flattenAI(SHARED_ORG);
