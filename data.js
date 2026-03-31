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
            {name:'Lead Researcher',icon:'🔍',cat:'sales',desc:'Deep-profiles every prospect before the first call'},
            {name:'DM Responder',icon:'💬',cat:'sales',desc:'Instant personalized replies to inbound DMs'},
            {name:'Call Reviewer',icon:'📞',cat:'sales',desc:'Analyzes recorded calls — flags coaching moments'},
            {name:'Case Study Finder',icon:'📖',cat:'sales',desc:'Pulls relevant success stories by industry or pain point'},
          ],
          moreCount:4,
          children:[
            {id:'hilary',name:'Hilary',title:'Sales Rep',initials:'HI',aiEmployees:[],children:[]},
            {id:'logan',name:'Logan',title:'Sales Rep',initials:'LO',aiEmployees:[],children:[]},
            {id:'brooklyn',name:'Brooklyn',title:'Sales Rep',initials:'BR',aiEmployees:[],children:[]},
            {id:'dylan',name:'Dylan',title:'Sales Rep',initials:'DY',aiEmployees:[],children:[]},
          ],
          salesTeam: true,
          salesTeamAI:[
            {name:'Lead Researcher',icon:'🔍',cat:'sales',desc:'Deep-profiles every prospect — company size, revenue, social presence, pain points'},
            {name:'DM Responder',icon:'💬',cat:'sales',desc:'Instant personalized replies to inbound DMs with context and warmth'},
            {name:'Objection Handler',icon:'🎯',cat:'sales',desc:'Real-time rebuttals backed by case studies and proof points'},
            {name:'Call Reviewer',icon:'📞',cat:'sales',desc:'Analyzes recorded sales calls — flags missed objections and coaching moments'},
            {name:'Case Study Finder',icon:'📖',cat:'sales',desc:'Instantly pulls relevant success stories by industry, size, or pain point'},
            {name:'Proposal Generator',icon:'📄',cat:'sales',desc:'Custom proposals in minutes with pricing, timeline, and social proof'},
            {name:'Follow-Up Sequencer',icon:'📬',cat:'sales',desc:'Automated nurture sequences personalized to each prospect\'s journey'},
            {name:'Pipeline Tracker',icon:'📊',cat:'sales',desc:'Real-time deal stage tracking with revenue forecasting and at-risk flags'},
          ],
          salesTeamMoreCount:5,
        },
        {
          id:'chantelle',name:'Chantelle',title:'PR & Partnerships',initials:'CH',
          aiEmployees:[
            {name:'Podcast Booker',icon:'🎙️',cat:'research',desc:'Finds and pitches relevant podcasts for Callan to guest on'},
            {name:'PR Outreach Writer',icon:'✉️',cat:'voice',desc:'Crafts personalized media pitches in Callan\'s voice'},
            {name:'Affiliate Manager',icon:'🤝',cat:'sales',desc:'Tracks affiliate partners, commissions, and performance'},
            {name:'Event Scout',icon:'🗓️',cat:'research',desc:'Finds speaking opportunities, conferences, and stage appearances'},
            {name:'Media Kit Generator',icon:'📋',cat:'creative',desc:'Builds and updates press kits with latest stats and bios'},
          ],
          moreCount:5,children:[]
        },
        {
          id:'jarrod',name:'Jarrod',title:'Fractional CFO',initials:'JR',
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
          id:'jodi-ss',name:'Jodi',title:'Student Success Lead',initials:'JD',
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

const TOTAL_HUMANS = 17;

// ═══ MONDAY MORNING TIMELINE EVENTS ═══
// Each event = one AI employee completing a task while humans sleep
// time is in minutes from midnight (0 = 12:00am, 480 = 8:00am)
const TIMELINE_EVENTS = [
  { time: 30,  aiName: 'AI Trend Scout',             icon: '🔭', owner: 'Carter',  desc: 'Scanned Product Hunt, Reddit, X, and 14 tech newsletters', output: 'Daily trend brief with 3 flagged tools', hoursSaved: 2.0, dollarValue: 150 },
  { time: 90,  aiName: 'Competitive Intelligence Researcher', icon: '🕵️', owner: 'Carter', desc: 'Deep-researched 4 competitor product launches from this week', output: 'Competitive intel report with pricing analysis', hoursSaved: 3.0, dollarValue: 225 },
  { time: 120, aiName: 'AI Bookkeeper',              icon: '🧾', owner: 'Jarrod',    desc: 'Processed 143 transactions from yesterday\'s Amex statement', output: 'Categorized, CPA-ready expense report', hoursSaved: 1.5, dollarValue: 200 },
  { time: 150, aiName: 'Revenue Forecaster',          icon: '📈', owner: 'Jarrod',    desc: 'Updated cash flow projections with latest revenue data', output: '12-week forecast with variance flags', hoursSaved: 2.0, dollarValue: 300 },
  { time: 210, aiName: 'Content Calendar Generator',  icon: '📅', owner: 'Callan',  desc: 'Drafted full content calendar for the week across all platforms', output: '15 posts: 5 IG, 4 LinkedIn, 3 email, 3 Threads', hoursSaved: 3.0, dollarValue: 375 },
  { time: 240, aiName: 'Social Media Data Analyst',   icon: '📱', owner: 'Cara',    desc: 'Scraped last 10 days of competitor posts and analyzed engagement', output: 'Top 5 hooks, 3 trending themes, engagement heatmap', hoursSaved: 2.5, dollarValue: 200 },
  { time: 270, aiName: 'Campaign Performance Optimizer', icon: '📉', owner: 'Cara', desc: 'Analyzed $12K ad spend across 8 campaigns from last week', output: 'Pause 2 underperformers, scale 3 winners, reallocate $2.4K', hoursSaved: 1.5, dollarValue: 180 },
  { time: 300, aiName: 'Newsletter Writer',           icon: '📰', owner: 'Nick',    desc: 'Drafted Tuesday\'s email newsletter in brand voice', output: '487-word newsletter with subject line and preview text', hoursSaved: 2.0, dollarValue: 250 },
  { time: 330, aiName: 'Performance Digest',          icon: '📊', owner: 'Callan',  desc: 'Compiled weekly performance across all content channels', output: 'Top 3 posts, engagement trends, recommended pivots', hoursSaved: 1.5, dollarValue: 120 },
  { time: 360, aiName: 'Financial Snapshot Generator', icon: '📊', owner: 'Jarrod',   desc: 'Generated board-ready P&L summary for March', output: 'One-page financial snapshot with YoY comparison', hoursSaved: 2.0, dollarValue: 350 },
  { time: 375, aiName: 'Student Onboarding Specialist', icon: '👋', owner: 'Jodi', desc: 'Personalized welcome sequences for 6 new students enrolled yesterday', output: '6 custom onboarding paths with resource links', hoursSaved: 1.0, dollarValue: 80 },
  { time: 390, aiName: 'Progress Tracker',            icon: '📈', owner: 'Jodi',    desc: 'Scanned 312 active students for milestone completion', output: '8 students flagged as at-risk, 3 recommended for spotlight', hoursSaved: 2.0, dollarValue: 150 },
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

// ═══════════════════════════════════════
// ECOSYSTEM DATA — Full 21 AI Employees
// ═══════════════════════════════════════

const LAYER_DEFS = [
  { id: 'executive',  name: 'Executive Layer',   color: '#D1B25A', bg: 'rgba(209,178,90,.08)',  border: 'rgba(209,178,90,.2)',  desc: 'Strategic decision-making and external intelligence', count: 2 },
  { id: 'revenue',    name: 'Revenue Layer',     color: '#C05746', bg: 'rgba(192,87,70,.08)',   border: 'rgba(192,87,70,.2)',   desc: 'Content, copy, ads, email, sales, and partnerships — everything that drives revenue', count: 6 },
  { id: 'delivery',   name: 'Delivery Layer',    color: '#4A8C5C', bg: 'rgba(74,140,92,.08)',   border: 'rgba(74,140,92,.2)',   desc: 'Curriculum, training, student success, and community', count: 4 },
  { id: 'operations', name: 'Operations Layer',  color: '#2A8F82', bg: 'rgba(42,143,130,.08)',  border: 'rgba(42,143,130,.2)',  desc: 'Process, automation, events, and system maintenance', count: 4 },
  { id: 'support',    name: 'Support Layer',     color: '#7B5EA7', bg: 'rgba(123,94,167,.08)',  border: 'rgba(123,94,167,.2)',  desc: 'Design, analytics, offers, brand, HR, and finance', count: 6 },
];

const INFRASTRUCTURE = [
  { name: 'Google Drive', icon: '📁', desc: 'File system — departments, offers, transcripts, deliverables' },
  { name: 'Baserow',      icon: '🗄️', desc: 'Database layer — student data, intake, progress, tags' },
  { name: 'Notion',       icon: '📓', desc: 'Knowledge layer — skills library, prompts, curriculum, SOPs' },
  { name: 'Slack',        icon: '💬', desc: 'Communication — team channels, student communities, briefings' },
  { name: 'Gmail',        icon: '✉️', desc: 'Email — student comms, triage, nurture campaigns' },
  { name: 'Firecrawl',    icon: '🔥', desc: 'Web intelligence — competitor scraping, news, research' },
  { name: 'Scheduling',   icon: '⏰', desc: 'Cron triggers, event-based workflows, on-demand activation' },
];

const SHARED_CAPABILITIES = [
  { name: 'Callan Voice', icon: '✍️', desc: 'Authentic personal voice across all channels', usedBy: ['content-strategist','copywriter','email-nurture','sales-pitch','community-manager'] },
  { name: 'Nick Voice', icon: '🖊️', desc: 'Ruthless compression, story-over-lecture, single CTA', usedBy: ['content-strategist','copywriter','email-nurture'] },
  { name: 'Carter Voice', icon: '🔗', desc: 'Builder/analyst perspective, LinkedIn-focused', usedBy: ['content-strategist'] },
  { name: 'Notion Designer', icon: '🏗️', desc: 'TUB Notion design standards — toggles, callouts, hierarchy', usedBy: ['curriculum-designer','power-play-producer','operations-manager','analytics-reporting'] },
];

const ECOSYSTEM_EMPLOYEES = [
  // ═══ EXECUTIVE LAYER ═══
  {
    id: 'strategic-advisor', name: 'Strategic Advisor', layer: 'executive',
    icon: '🧠', role: 'Pressure-tests business decisions, reviews offers, challenges assumptions. Thinks like a $50M+ founder.',
    managedBy: 'Callan', managedByTitle: 'Founder',
    skills: [
      { name: 'Alex Hormozi Business Partner', status: 'built' },
      { name: '9FF Advisor', status: 'built' },
      { name: 'Idea Validator', status: 'built' },
      { name: 'Lead Magnet Mastery', status: 'built' },
      { name: 'Offer Teardown & Review', status: 'needs-build' },
    ],
    dataSets: ['Offer Stack', 'Student Transformation Stories', 'Transcripts', 'Financial Data'],
    tools: ['Notion', 'Baserow'],
    cadence: ['On demand — strategic gut-checks', 'Pre-launch review every cycle'],
  },
  {
    id: 'research-analyst', name: 'Research Analyst', layer: 'executive',
    icon: '🔭', role: 'Monitors external trends, competitors, news, and market signals. Delivers scheduled briefings. The team\'s eyes and ears.',
    managedBy: 'Carter', managedByTitle: 'VP Product',
    skills: [
      { name: 'Last 30 Days Research', status: 'built' },
      { name: 'AI News Briefing', status: 'built' },
      { name: 'LT AI Briefing', status: 'built' },
      { name: 'IG Intel', status: 'built', shared: true },
      { name: 'Skill Scout', status: 'partial' },
      { name: 'Market/Competitor Deep Dive', status: 'needs-build' },
    ],
    dataSets: ['Industry news', 'Competitor social accounts', 'Reddit, X, YouTube, TikTok, HN', 'Skills marketplace data'],
    tools: ['Firecrawl', 'Notion', 'Slack', 'Web search'],
    cadence: ['Weekly: AI briefing for L10', 'Bi-weekly: Competitor intel', 'Weekly: Skill Scout reports', 'On demand: Deep dives'],
  },

  // ═══ REVENUE LAYER ═══
  {
    id: 'content-strategist', name: 'Content Strategist', layer: 'revenue',
    icon: '📱', role: 'Plans, creates, and repurposes content across platforms. Knows what to post, when, and why. Not just a writer — a strategist.',
    managedBy: 'Nick', managedByTitle: 'Copywriter',
    skills: [
      { name: 'Hook Engine', status: 'built', shared: true },
      { name: 'IG Intel', status: 'built', shared: true },
      { name: 'LinkedIn Transformer', status: 'built' },
      { name: 'Content Repurposing Engine', status: 'needs-build' },
      { name: 'Carousel/Post Creation', status: 'needs-build' },
      { name: 'Content Calendar Management', status: 'needs-build' },
      { name: 'Platform-Specific Adaptation', status: 'needs-build' },
    ],
    dataSets: ['Past social posts & engagement', 'Content calendar', 'Competitor data', 'Transcripts', 'Student stories'],
    tools: ['Notion', 'Slack', 'Baserow', 'Instagram API'],
    cadence: ['Weekly: Content calendar review', 'Per post: Hook + copy + adaptation', 'Bi-weekly: Engagement analysis'],
  },
  {
    id: 'copywriter', name: 'Copywriter', layer: 'revenue',
    icon: '✍️', role: 'Writes, edits, and adapts content in brand-approved voices. Owns all voice modules. The quality control layer for everything written.',
    managedBy: 'Nick', managedByTitle: 'Copywriter',
    skills: [
      { name: 'Callan Voice', status: 'built', shared: true },
      { name: 'Nick Voice', status: 'built', shared: true },
      { name: 'Carter Voice', status: 'partial', shared: true },
      { name: 'Hook Engine', status: 'built', shared: true },
      { name: 'Sales Page Copy', status: 'needs-build' },
      { name: 'Email Copy', status: 'needs-build', shared: true },
      { name: 'Script Writing', status: 'needs-build' },
      { name: 'Copy Compression/Editing', status: 'partial' },
    ],
    dataSets: ['Brand voice guides', 'Past sales pages', 'Email archives', 'Transcripts', 'Student stories'],
    tools: ['Notion', 'Google Drive', 'Slack'],
    cadence: ['On demand: Copy requests', 'Pre-launch: Sales page + email review', 'Ongoing: Voice module updates'],
  },
  {
    id: 'email-nurture', name: 'Email & Nurture Specialist', layer: 'revenue',
    icon: '📬', role: 'Owns email and SMS. Writes onboarding sequences, nurture campaigns, launch series. Thinks in SEQUENCES and JOURNEYS.',
    managedBy: 'Nick', managedByTitle: 'Copywriter',
    skills: [
      { name: 'Onboarding Email Sequences', status: 'needs-build' },
      { name: 'Nurture Campaign Designer', status: 'needs-build' },
      { name: 'Launch Email Sequences', status: 'needs-build' },
      { name: 'Re-engagement / Win-back', status: 'needs-build' },
      { name: 'SMS Campaigns', status: 'needs-build' },
      { name: 'Email Copy', status: 'needs-build', shared: true },
    ],
    dataSets: ['Past email campaigns', 'Student journey maps', 'Offer Stack', 'Student stories', 'Launch calendar'],
    tools: ['Gmail MCP', 'Notion', 'Baserow', 'Slack'],
    cadence: ['Per launch: Full email sequence', 'Ongoing: Nurture drips', 'Weekly: Performance review', 'Triggered: Re-engagement'],
  },
  {
    id: 'paid-ads', name: 'Paid Ads Manager', layer: 'revenue',
    icon: '📢', role: 'Creates ad copy, designs creative briefs, analyzes campaign performance. Codifies Cara\'s expertise as an internal AI ads agency.',
    managedBy: 'Cara', managedByTitle: 'Dir. Paid Media',
    skills: [
      { name: 'Ad Copy Generation', status: 'needs-build' },
      { name: 'Creative Brief Writing', status: 'needs-build' },
      { name: 'Audience Targeting', status: 'needs-build' },
      { name: 'Ad Performance Analysis', status: 'needs-build' },
      { name: 'A/B Test Design', status: 'needs-build' },
    ],
    dataSets: ['Brand assets', 'Offer Stack', 'ICP references', 'Student stories', 'Past ad performance'],
    tools: ['Notion', 'Google Drive', 'Baserow'],
    cadence: ['Per launch: Ad creative & copy', 'Weekly: Performance + optimization', 'On demand: New creative'],
  },
  {
    id: 'sales-pitch', name: 'Sales & Pitch Prep', layer: 'revenue',
    icon: '🎯', role: 'Prepares the team to close. Matches testimonials to objections. Builds pitch decks. Assembles proposals. Every sales moment loaded with proof.',
    managedBy: 'Callan', managedByTitle: 'Founder',
    skills: [
      { name: 'Testimonial Matcher', status: 'needs-build' },
      { name: 'Pitch Prep Builder', status: 'needs-build' },
      { name: 'Objection Handler', status: 'needs-build' },
      { name: 'Enterprise Proposal Generator', status: 'needs-build' },
      { name: 'Post-Pitch Follow-Up', status: 'needs-build' },
    ],
    dataSets: ['347 Student Transformation Stories', '433+ Win Index', 'Offer Stack', 'Past pitch transcripts', 'Enterprise proposals'],
    tools: ['Notion', 'Baserow', 'Slack', 'Google Drive'],
    cadence: ['Pre-bootcamp: Pitch prep 48hrs before Day 3', 'Pre-masterclass: Pitch prep', 'On demand: Proposals, testimonial pulls'],
  },

  {
    id: 'pr-partnerships', name: 'PR & Partnerships', layer: 'revenue',
    icon: '🎙️', role: 'Books podcasts, manages affiliate partnerships, lands speaking gigs, handles media outreach. Gets Callan on every stage that matters.',
    managedBy: 'Chantelle', managedByTitle: 'PR & Partnerships',
    skills: [
      { name: 'Podcast Booker', status: 'needs-build' },
      { name: 'PR Outreach Writer', status: 'needs-build' },
      { name: 'Affiliate Manager', status: 'needs-build' },
      { name: 'Event Scout', status: 'needs-build' },
      { name: 'Media Kit Generator', status: 'needs-build' },
    ],
    dataSets: ['Podcast databases', 'Media contacts', 'Affiliate partner data', 'Speaking event calendars', 'Brand assets'],
    tools: ['Gmail', 'Notion', 'Google Drive', 'Firecrawl'],
    cadence: ['Weekly: Podcast outreach', 'Monthly: Affiliate performance review', 'Ongoing: Event scouting', 'On demand: Media kits, PR pitches'],
  },

  // ═══ DELIVERY LAYER ═══
  {
    id: 'curriculum-designer', name: 'Curriculum Designer', layer: 'delivery',
    icon: '🎓', role: 'Builds trainings, extracts frameworks, creates teaching materials. Owns the educational content pipeline from idea to published material.',
    managedBy: 'Carter', managedByTitle: 'VP Product',
    skills: [
      { name: 'Illustrated Training Builder', status: 'built' },
      { name: 'Framework Builder', status: 'built' },
      { name: 'SOP Creator', status: 'built', shared: true },
      { name: 'Lesson Plan Builder', status: 'needs-build' },
      { name: 'Curriculum Mapping', status: 'needs-build' },
      { name: 'Student Feedback Integration', status: 'needs-build' },
    ],
    dataSets: ['Master Prompt Library (100+)', 'Playbooks (30+)', 'Power Plays (12+)', 'Cohort feedback', 'Transcripts'],
    tools: ['Notion', 'Google Drive', 'Baserow'],
    cadence: ['Per cohort: Curriculum review', 'Weekly: Power Play processing', 'On demand: New playbooks', 'Post-cohort: Feedback integration'],
  },
  {
    id: 'power-play-producer', name: 'Power Play Producer', layer: 'delivery',
    icon: '⚡', role: 'Processes session recordings into insights, identifies new playbooks and prompts, generates weekly reports. Turns live teaching into reusable assets.',
    managedBy: 'Carter', managedByTitle: 'VP Product',
    skills: [
      { name: 'Session Transcript Processing', status: 'needs-build' },
      { name: 'Insight Report Generation', status: 'needs-build' },
      { name: 'Playbook/Prompt Identification', status: 'needs-build' },
      { name: 'Student Win Extraction', status: 'needs-build' },
      { name: 'Framework Builder', status: 'built', shared: true },
    ],
    dataSets: ['40+ Power Play Logs', 'Weekly Insights Reports', 'Existing playbooks/prompts', 'Transcripts'],
    tools: ['Notion', 'Google Drive'],
    cadence: ['After every Power Play: Process transcript', 'Weekly: Insights Report', 'Monthly: New playbook candidates'],
  },
  {
    id: 'student-success', name: 'Student Success Manager', layer: 'delivery',
    icon: '🎖️', role: 'Monitors student progress, flags at-risk students, manages onboarding, tracks milestones. Nobody falls through the cracks.',
    managedBy: 'Kinsey', managedByTitle: 'COO',
    skills: [
      { name: 'Student Progress Tracking', status: 'needs-build' },
      { name: 'At-Risk Student Flagging', status: 'needs-build' },
      { name: 'Onboarding Sequence', status: 'needs-build' },
      { name: 'Milestone Celebration', status: 'needs-build' },
      { name: 'Win Story Collection', status: 'needs-build' },
      { name: 'NPS/Survey Analysis', status: 'partial' },
    ],
    dataSets: ['Baserow student data', 'Student stories', 'Program milestones', 'Slack activity', 'Surveys'],
    tools: ['Baserow', 'Slack', 'Notion', 'Gmail'],
    cadence: ['Daily: Engagement monitoring', 'Weekly: At-risk report', 'Per milestone: Celebration trigger', 'Post-session: Attendance tracking'],
  },
  {
    id: 'community-manager', name: 'Community Manager', layer: 'delivery',
    icon: '💬', role: 'Manages the daily pulse of student communities. Monitors engagement, celebrates wins, flags issues, keeps the energy high.',
    managedBy: 'Kinsey', managedByTitle: 'COO',
    skills: [
      { name: 'Engagement Monitoring', status: 'needs-build' },
      { name: 'Win Celebration Drafting', status: 'needs-build' },
      { name: 'Disengaged Student Flagging', status: 'needs-build', shared: true },
      { name: 'Weekly Community Health Report', status: 'needs-build' },
      { name: 'Discussion Prompt Creation', status: 'needs-build' },
      { name: 'Slack Audit', status: 'partial' },
    ],
    dataSets: ['Slack channels (A2A, UCL)', 'Student profiles', 'Community guidelines', 'Past engagement patterns'],
    tools: ['Slack', 'Baserow', 'Notion'],
    cadence: ['Daily: Slack scan + win spotlights', 'Weekly: Community health report', 'Triggered: Engagement drop alerts'],
  },

  // ═══ OPERATIONS LAYER ═══
  {
    id: 'operations-manager', name: 'Operations Manager', layer: 'operations',
    icon: '⚙️', role: 'Delegates projects, manages internal process, protects IP, keeps the machine running. Work gets assigned, tracked, and completed.',
    managedBy: 'Kinsey', managedByTitle: 'COO',
    skills: [
      { name: 'Project Delegation Brief', status: 'built' },
      { name: 'DMCA Takedown', status: 'built' },
      { name: 'SOP Creator', status: 'built', shared: true },
      { name: 'Meeting Notes/Action Items', status: 'needs-build' },
      { name: 'Process Audit', status: 'needs-build' },
      { name: 'Team Capacity Planning', status: 'needs-build' },
    ],
    dataSets: ['Team transcripts', 'SOPs', 'Project boards', 'Team structure'],
    tools: ['Notion', 'Slack', 'Gmail', 'Baserow'],
    cadence: ['After every meeting: Action items', 'Weekly: Process health check', 'On demand: Delegation, DMCA, SOPs'],
  },
  {
    id: 'automation-builder', name: 'Automation & Workflow Builder', layer: 'operations',
    icon: '🔧', role: 'Designs, documents, and maintains automations. Zapier workflows, Baserow schemas, tag mappings, integration architecture.',
    managedBy: 'Carter', managedByTitle: 'VP Product',
    skills: [
      { name: 'Zapier Workflow Design', status: 'needs-build' },
      { name: 'Baserow Schema Management', status: 'needs-build' },
      { name: 'Tag Mapping', status: 'needs-build' },
      { name: 'Integration Documentation', status: 'needs-build' },
      { name: 'Automation Audit', status: 'needs-build' },
      { name: 'Z4 Copilot Prompts', status: 'partial' },
    ],
    dataSets: ['Z4 Copilot prompts (6+)', 'Build guides', 'Workflow maps', 'Tag mapping spreadsheets', 'Baserow structures'],
    tools: ['Baserow', 'Zapier', 'Notion', 'Google Sheets', 'Replit'],
    cadence: ['Per launch: Automation setup', 'Weekly: Automation health check', 'On demand: New workflows'],
  },
  {
    id: 'event-coordinator', name: 'Event & Launch Coordinator', layer: 'operations',
    icon: '🗓️', role: 'Coordinates bootcamps, masterclasses, Q&A sessions, live events. Guest speakers, tech setup, checklists. No detail gets missed.',
    managedBy: 'Kinsey', managedByTitle: 'COO',
    skills: [
      { name: 'Launch Checklist Generator', status: 'needs-build' },
      { name: 'Guest Speaker Coordination', status: 'needs-build' },
      { name: 'Event Logistics Tracker', status: 'needs-build' },
      { name: 'Post-Event Debrief', status: 'needs-build' },
      { name: 'Success Investor Scheduling', status: 'needs-build' },
    ],
    dataSets: ['Past event plans', 'Bootcamp/masterclass dates', 'Success investor contacts', 'Student stories', 'Team calendars'],
    tools: ['Notion', 'Slack', 'Gmail', 'Google Calendar'],
    cadence: ['T-4 weeks: Coordination begins', 'T-1 week: Daily checklists', 'Day of: Real-time support', 'T+1 week: Debrief'],
  },
  {
    id: 'ai-ops', name: 'AI Ops / Prompt Engineer', layer: 'operations',
    icon: '🛠️', role: 'Maintains the AI Operating System itself. Skill lifecycle, prompt library health, employee versioning, system integrity.',
    managedBy: 'Carter', managedByTitle: 'VP Product',
    skills: [
      { name: 'Prompt Librarian', status: 'built' },
      { name: 'Prompt Library Publisher', status: 'built' },
      { name: 'Skill Version Management', status: 'built' },
      { name: 'System Audit/Health Check', status: 'needs-build' },
      { name: 'Employee Performance Review', status: 'needs-build' },
      { name: 'Skill Scout', status: 'partial' },
    ],
    dataSets: ['Skills Library', 'Master Prompt Library (100+)', 'CLAUDE.md files', 'Skill Repository', 'Usage data'],
    tools: ['Notion', 'Google Drive', 'Slack', 'Claude Code'],
    cadence: ['Weekly: Skill Scout research', 'Monthly: System health audit', 'Per skill change: Versioning', 'On demand: Prompt publishing'],
  },

  // ═══ SUPPORT LAYER ═══
  {
    id: 'creative-director', name: 'Creative Director', layer: 'support',
    icon: '🎨', role: 'Produces visual assets — images, diagrams, branded graphics, page design, web UI, video. Owns the visual identity.',
    managedBy: 'Carter', managedByTitle: 'VP Product',
    skills: [
      { name: 'Nano Banana (Image Gen)', status: 'built' },
      { name: 'Notion Designer', status: 'built', shared: true },
      { name: 'Frontend Design', status: 'built' },
      { name: 'Remotion (Video in React)', status: 'built' },
      { name: 'Thumbnail/Graphic Creation', status: 'needs-build' },
      { name: 'Brand Asset Management', status: 'needs-build', shared: true },
    ],
    dataSets: ['TUB Visual Brand Identity', 'Brand assets (logos, fonts, textures)', 'Marketing rebrand library'],
    tools: ['Gemini CLI', 'Google Drive', 'Notion'],
    cadence: ['On demand: Images, pages, web builds', 'Per launch: Campaign visuals', 'Per program: Course page design'],
  },
  {
    id: 'analytics-reporting', name: 'Analytics & Reporting', layer: 'support',
    icon: '📊', role: 'Looks INWARD — program health, student metrics, engagement scores, NPS, cohort comparisons, KPIs. Scheduled internal reports.',
    managedBy: 'Carter', managedByTitle: 'VP Product',
    skills: [
      { name: 'Program Metrics Reporting', status: 'needs-build' },
      { name: 'NPS Tracking & Analysis', status: 'partial' },
      { name: 'Engagement Scoring', status: 'needs-build' },
      { name: 'Cohort Comparison', status: 'needs-build' },
      { name: 'KPI Dashboard Generation', status: 'needs-build' },
      { name: 'T-Score Benchmarking', status: 'partial' },
    ],
    dataSets: ['Baserow tables', 'Survey responses', 'Slack audit data', 'Past cohort data', 'Program metrics'],
    tools: ['Baserow', 'Notion', 'Google Sheets', 'Slack'],
    cadence: ['Weekly: Program health dashboard', 'Mid-cohort: Engagement review', 'Post-cohort: Full comparison', 'Monthly: KPI summary'],
  },
  {
    id: 'offer-architect', name: 'Offer Architect', layer: 'support',
    icon: '🏛️', role: 'Builds and maintains the Offer Stack — living documentation of every TUB program. Pricing, ICP, positioning, all accurate and aligned.',
    managedBy: 'Callan', managedByTitle: 'Founder',
    skills: [
      { name: 'Offer Playbook Builder', status: 'needs-build' },
      { name: 'ICP Profile Maintenance', status: 'needs-build' },
      { name: 'Competitive Positioning', status: 'needs-build' },
      { name: 'Pricing Analysis', status: 'needs-build' },
      { name: 'Offer Stack Sync', status: 'needs-build' },
    ],
    dataSets: ['Offer Stack (5 program playbooks)', 'Products & Offerings', 'Student stories', 'Transcripts', 'Competitor data'],
    tools: ['Notion', 'Google Drive', 'Baserow'],
    cadence: ['Pre-launch: Offer review & refresh', 'Post-strategy: Update playbooks', 'Quarterly: Full audit', 'On demand: New offers'],
  },
  {
    id: 'brand-manager', name: 'Brand Manager', layer: 'support',
    icon: '🏷️', role: 'Enforces brand consistency across all outputs. Reviews content for compliance with TUB Visual Brand Identity.',
    managedBy: 'Nick', managedByTitle: 'Copywriter',
    skills: [
      { name: 'Brand Compliance Review', status: 'needs-build' },
      { name: 'Style Guide Enforcement', status: 'needs-build' },
      { name: 'Asset Library Management', status: 'needs-build' },
      { name: 'Rebrand Rollout Tracking', status: 'needs-build' },
    ],
    dataSets: ['TUB Visual Brand Identity', 'Rebrand asset library', 'Marketing MEMORY.md', 'Font library', 'Textures & iconography'],
    tools: ['Google Drive', 'Notion'],
    cadence: ['Per content piece: Brand check', 'Monthly: Asset audit', 'Per rebrand phase: Rollout tracking'],
  },
  {
    id: 'hr-recruiting', name: 'HR & Recruiting', layer: 'support',
    icon: '👥', role: 'Writes job descriptions, screens candidates, manages onboarding for new hires, tracks team structure, manages success investors.',
    managedBy: 'Kinsey', managedByTitle: 'COO',
    skills: [
      { name: 'Job Description Writer', status: 'needs-build' },
      { name: 'Candidate Evaluation', status: 'needs-build' },
      { name: 'New Hire Onboarding', status: 'needs-build' },
      { name: 'Success Investor Management', status: 'needs-build' },
      { name: 'Team Structure Documentation', status: 'needs-build' },
    ],
    dataSets: ['Team structure & roles', 'Success investor contracts', 'HR folder'],
    tools: ['Notion', 'Gmail', 'Slack'],
    cadence: ['On demand: Job postings, screening', 'Per hire: Onboarding', 'Per cohort: Success investor coordination', 'Quarterly: Team review'],
  },
  {
    id: 'finance-analyst', name: 'Finance Analyst', layer: 'support',
    icon: '💰', role: 'Tracks software spend, forecasts revenue, calculates program ROI, generates financial reports. Knows where money is going and coming from.',
    managedBy: 'Jarrod', managedByTitle: 'Fractional CFO',
    skills: [
      { name: 'Expense Tracking', status: 'needs-build' },
      { name: 'Revenue Forecasting', status: 'needs-build' },
      { name: 'Program ROI Calculation', status: 'needs-build' },
      { name: 'Software Audit', status: 'partial' },
      { name: 'Budget Planning', status: 'needs-build' },
    ],
    dataSets: ['Software expenses', 'Leadership audits', 'Offer Stack pricing', 'Enrollment data', 'Revenue figures'],
    tools: ['Google Sheets', 'Baserow', 'Notion'],
    cadence: ['Monthly: Expense review, revenue report', 'Per cohort: ROI analysis', 'Quarterly: Software audit', 'Annually: Budget planning'],
  },
];

// ═══ SHARED SKILLS (skills used by 2+ employees) ═══
const SHARED_SKILLS = [
  { name: 'Callan Voice', employees: ['copywriter', 'content-strategist', 'email-nurture', 'sales-pitch', 'community-manager'] },
  { name: 'Nick Voice', employees: ['copywriter', 'content-strategist', 'email-nurture'] },
  { name: 'Hook Engine', employees: ['content-strategist', 'copywriter'] },
  { name: 'IG Intel', employees: ['research-analyst', 'content-strategist'] },
  { name: 'SOP Creator', employees: ['curriculum-designer', 'operations-manager'] },
  { name: 'Framework Builder', employees: ['curriculum-designer', 'power-play-producer'] },
  { name: 'Email Copy', employees: ['copywriter', 'email-nurture'] },
  { name: 'Notion Designer', employees: ['curriculum-designer', 'power-play-producer', 'operations-manager', 'analytics-reporting'] },
  { name: 'Disengaged Student Flagging', employees: ['community-manager', 'student-success'] },
  { name: 'Brand Asset Management', employees: ['creative-director', 'brand-manager'] },
];

// ═══ FLOW STORIES (animated data journeys) ═══
const FLOW_STORIES = [
  {
    title: 'A Transcript Lands',
    desc: 'Watch a single training recording become curriculum, content, and marketing assets.',
    steps: [
      { employeeId: 'power-play-producer', action: 'Processes transcript, extracts key insights', output: 'Insight report + 3 framework candidates' },
      { employeeId: 'curriculum-designer', action: 'Builds a new playbook from the framework', output: 'Published playbook in Master Library' },
      { employeeId: 'content-strategist', action: 'Repurposes insights into social content', output: '5 LinkedIn posts, 3 IG carousels, 2 Threads hooks' },
      { employeeId: 'copywriter', action: 'Adapts content to brand voice per platform', output: 'Publish-ready copy in Callan Voice' },
      { employeeId: 'email-nurture', action: 'Weaves insights into this week\'s nurture email', output: 'Email draft with new teaching angle' },
    ]
  },
  {
    title: 'A Lead Comes In',
    desc: 'From first touch to closed deal — every step powered by AI employees.',
    steps: [
      { employeeId: 'paid-ads', action: 'Ad creative attracted the lead via Meta campaign', output: 'Lead captured from scroll-stopping ad' },
      { employeeId: 'research-analyst', action: 'Enriches lead with company data and social presence', output: 'Lead profile with ICP match score' },
      { employeeId: 'sales-pitch', action: 'Matches lead to relevant student success stories', output: '3 testimonials matched to their industry + objection prep' },
      { employeeId: 'copywriter', action: 'Drafts personalized follow-up email', output: 'Proof-loaded email in Callan\'s voice' },
      { employeeId: 'email-nurture', action: 'Enrolls lead into 7-day nurture sequence', output: 'Automated sequence with escalating value' },
    ]
  },
  {
    title: 'Monday Morning',
    desc: 'Before coffee, 17 AI employees have already done $3,000+ worth of work.',
    steps: [
      { employeeId: 'research-analyst', action: 'Scanned trends across Reddit, X, Product Hunt', output: 'Daily trend brief with 3 flagged tools' },
      { employeeId: 'finance-analyst', action: 'Processed yesterday\'s transactions', output: 'Categorized, CPA-ready expense report' },
      { employeeId: 'content-strategist', action: 'Drafted full content calendar for the week', output: '15 posts across 4 platforms' },
      { employeeId: 'operations-manager', action: 'Compiled overnight Slack + Notion updates', output: 'Team digest with 4 items needing attention' },
      { employeeId: 'student-success', action: 'Scanned 312 students for milestone completion', output: '8 at-risk flags, 3 spotlight recommendations' },
    ]
  },
];
