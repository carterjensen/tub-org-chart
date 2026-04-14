// ═══════════════════════════════════════
// SHARED DATA — People & AI Employees
// Edit here, changes propagate to all views
// ═══════════════════════════════════════

const SHARED_ORG = {
  id:'callan',name:'Callan Faulkner',title:'CEO',initials:'CF',image:'images/callan-faulkner.png',isFounder:true,
  aiEmployees:[
    {name:'Brand Voice Writer',icon:'✍️',cat:'voice',desc:'Writes emails, newsletters, captions, scripts in Callan\'s authentic voice',activation:'demand',status:'rebuild'},
    {name:'Keynote Script Writer',icon:'🎤',cat:'voice',desc:'Builds presentation scripts and talking points for live events',activation:'demand',status:'rebuild'},
    {name:'Content Calendar Generator',icon:'📅',cat:'creative',desc:'Drafts a full week of content every Sunday at 6am',activation:'schedule',status:'rebuild'},
    {name:'Performance Digest',icon:'📊',cat:'analytics',desc:'Weekly report on what posted, what performed, what to change',activation:'schedule',status:'rebuild'},
    {name:'Podcast Prep Agent',icon:'🎙️',cat:'research',desc:'Researches podcast host, audience, and talking points before guest appearances',activation:'trigger',status:'new'},
    {name:'Instagram Caption Writer',icon:'📱',cat:'voice',desc:'Writes on-brand IG captions from content briefs or transcripts',activation:'demand',status:'new'},
    {name:'Newsletter Writer',icon:'📰',cat:'voice',desc:'Drafts weekly newsletter in Callan\'s voice from weekly content themes',activation:'schedule',status:'new'},
    {name:'Strategic Business Advisor',icon:'🧠',cat:'strategy',desc:'Proven frameworks for offers, pricing, and scaling decisions',activation:'demand',status:'rebuild'},
    {name:'Event Briefing Analyst',icon:'🔭',cat:'research',desc:'Researches any audience and builds pre-event intelligence reports',activation:'trigger',status:'rebuild'},
    {name:'Leadership Coach',icon:'🧭',cat:'hr',desc:'Personality-aware coaching scripts for every team member',activation:'demand',status:'rebuild'},
    {name:'Competitor Intelligence Brief',icon:'🕵️',cat:'research',desc:'Scans competitor launches, pricing changes, messaging shifts',activation:'schedule',status:'new'},
    {name:'Board Meeting Prep',icon:'📋',cat:'strategy',desc:'Compiles KPIs, revenue data, and talking points for quarterly calls',activation:'trigger',status:'new'},
  ],
  moreCount:0,
  children:[
    {
      id:'kinsey',name:'Kinsey Machos',title:'COO',initials:'KM',image:'images/kinsey-machos.png',
      aiEmployees:[
        {name:'Morning Briefing Agent',icon:'☕',cat:'ops',desc:'Daily Slack digest of team activity, priorities, and flags',activation:'schedule',status:'rebuild'},
        {name:'Executive Briefing Analyst',icon:'📊',cat:'analytics',desc:'Weekly leadership briefings compiled from all channels',activation:'schedule',status:'rebuild'},
        {name:'Meeting Intelligence Manager',icon:'🎯',cat:'ops',desc:'Extracts action items and decisions from every meeting',activation:'trigger',status:'rebuild'},
        {name:'Operations Dashboard Builder',icon:'📋',cat:'engineering',desc:'Automated KPI dashboards and team performance tracking',activation:'schedule',status:'rebuild'},
        {name:'Job Description Writer',icon:'📝',cat:'hr',desc:'AI-generated JDs aligned with company values and team structure',activation:'demand',status:'rebuild'},
        {name:'Interview Prep Agent',icon:'🧭',cat:'hr',desc:'Builds interview guides based on role, Kolbe profile, and team gaps',activation:'trigger',status:'new'},
        {name:'Onboarding Checklist Builder',icon:'✅',cat:'hr',desc:'Generates personalized onboarding plans for new hires by role',activation:'trigger',status:'new'},
        {name:'AI CFO',icon:'💰',cat:'finance',desc:'Financial snapshots, calendar-as-revenue reports, budget oversight',activation:'demand',status:'rebuild'},
        {name:'Launch Pacing Model',icon:'📈',cat:'analytics',desc:'Projects revenue by day during launch windows against targets',activation:'trigger',status:'new'},
        {name:'Program ROI Calculator',icon:'⚖️',cat:'finance',desc:'Calculates cost-to-run vs. revenue for every program and cohort',activation:'demand',status:'new'},
        {name:'Corporate Proposal Generator',icon:'📄',cat:'sales',desc:'Builds team transformation proposals for enterprise leads',activation:'demand',status:'new'},
        {name:'Corporate Follow-Up Sequencer',icon:'📬',cat:'sales',desc:'Nurture sequences personalized to corporate decision-makers',activation:'trigger',status:'new'},
      ],
      moreCount:0,
      children:[
        {
          id:'kara',name:'Kara Charron',title:'Director of Paid Media & Creative Innovation',initials:'KC',image:'images/kara-charron.png',
          aiEmployees:[
            {name:'Social Media Data Analyst',icon:'📱',cat:'analytics',desc:'Scrapes competitor posts, finds winning hooks and engagement patterns',activation:'schedule',status:'rebuild'},
            {name:'Ad Creative Strategist',icon:'🎨',cat:'creative',desc:'Scroll-stopping ad concepts built from real performance data',activation:'demand',status:'rebuild'},
            {name:'Visual Content Designer',icon:'🖼️',cat:'creative',desc:'Thumbnails, graphics, carousel designs, ad creatives on demand',activation:'demand',status:'rebuild'},
            {name:'Campaign Performance Optimizer',icon:'📉',cat:'analytics',desc:'Monitors ad spend ROI and recommends budget reallocation',activation:'schedule',status:'rebuild'},
            {name:'Instagram Carousel Creator',icon:'📐',cat:'creative',desc:'Transcript → content ideas → publish-ready PDF carousel',activation:'demand',status:'rebuild'},
            {name:'Ad Copy Variant Generator',icon:'✍️',cat:'creative',desc:'Generates 5-10 headline/body variants for A/B testing from a single brief',activation:'demand',status:'new'},
            {name:'Launch Ad Calendar',icon:'🗓️',cat:'ops',desc:'Builds full ad schedule aligned with launch pacing model',activation:'trigger',status:'new'},
            {name:'CPL & ROAS Tracker',icon:'📊',cat:'analytics',desc:'Daily dashboard of cost per lead and return on ad spend by campaign',activation:'schedule',status:'new'},
          ],
          moreCount:0,
          children:[
            {id:'kelsey',name:'Kelsey Faye Kundert',title:'Creative Content Producer',initials:'KK',image:'images/kelsey-faye-kundert.png',
              aiEmployees:[
                {name:'Video Script Writer',icon:'🎬',cat:'creative',desc:'Scripts optimized for retention and audience engagement',activation:'demand',status:'rebuild'},
                {name:'Thumbnail Designer',icon:'🖼️',cat:'creative',desc:'Click-worthy thumbnails for every piece of content',activation:'demand',status:'rebuild'},
                {name:'Content Repurposer',icon:'♻️',cat:'creative',desc:'One video becomes 10+ assets across platforms automatically',activation:'trigger',status:'rebuild'},
                {name:'Video Brief Generator',icon:'📋',cat:'creative',desc:'Creates structured briefs for video shoots from topic outlines',activation:'demand',status:'new'},
                {name:'B-Roll Suggestion Engine',icon:'🎥',cat:'creative',desc:'Suggests B-roll footage and visual overlays based on script content',activation:'demand',status:'new'},
              ],
              moreCount:0,children:[]
            }
          ]
        },
        {
          id:'nick',name:'Nick Muscolino',title:'Senior Copywriter',initials:'NM',image:'images/nick-muscolino.png',
          aiEmployees:[
            {name:'Email Copywriter',icon:'✉️',cat:'voice',desc:'Single-CTA emails that compress and convert',activation:'demand',status:'rebuild'},
            {name:'Newsletter Writer',icon:'📰',cat:'voice',desc:'Weekly newsletter drafts in brand voice',activation:'schedule',status:'rebuild'},
            {name:'Nurture Sequence Builder',icon:'📬',cat:'voice',desc:'Multi-email nurture sequences for specific segments',activation:'demand',status:'new'},
            {name:'Sales Page Writer',icon:'📝',cat:'voice',desc:'Long-form sales pages that tell stories and close',activation:'demand',status:'rebuild'},
            {name:'Hook Specialist',icon:'🪝',cat:'creative',desc:'Scroll-stopping hooks built from real engagement data',activation:'demand',status:'rebuild'},
            {name:'A/B Test Analyst',icon:'🔬',cat:'analytics',desc:'Copy variant analysis and winner prediction',activation:'demand',status:'rebuild'},
            {name:'Transformation Statement Generator',icon:'✨',cat:'voice',desc:'Writes before/after transformation statements for specific ICPs',activation:'demand',status:'new'},
            {name:'Testimonial Rewriter',icon:'💬',cat:'voice',desc:'Reformats raw testimonials into polished social proof copy',activation:'demand',status:'new'},
          ],
          moreCount:0,children:[]
        },
        {
          id:'chantelle',name:'Chantelle Adams',title:'Sr. Manager of Affiliate & Partnerships',initials:'CA',image:'images/chantelle-adams.jfif',
          aiEmployees:[
            {name:'Podcast Booker',icon:'🎙️',cat:'research',desc:'Finds and pitches relevant podcasts for Callan to guest on',activation:'demand',status:'rebuild'},
            {name:'PR Outreach Writer',icon:'✉️',cat:'voice',desc:'Crafts personalized media pitches in Callan\'s voice',activation:'demand',status:'rebuild'},
            {name:'Media Kit Generator',icon:'📋',cat:'creative',desc:'Builds and updates press kits with latest stats and bios',activation:'demand',status:'rebuild'},
            {name:'Event Scout',icon:'🗓️',cat:'research',desc:'Finds speaking opportunities, conferences, and stage appearances',activation:'schedule',status:'rebuild'},
            {name:'Event Logistics Coordinator',icon:'📍',cat:'ops',desc:'Manages travel, venue details, tech riders, and day-of checklists',activation:'trigger',status:'rebuild'},
            {name:'Affiliate Manager',icon:'📊',cat:'sales',desc:'Tracks affiliate partners, commissions, and performance dashboards',activation:'schedule',status:'rebuild'},
            {name:'Affiliate Outreach Specialist',icon:'📬',cat:'sales',desc:'Finds and pitches new affiliate partners with personalized proposals',activation:'demand',status:'rebuild'},
            {name:'Post-Podcast Content Extractor',icon:'✂️',cat:'creative',desc:'Takes podcast recordings and extracts clips, quotes, and social content',activation:'trigger',status:'new'},
          ],
          moreCount:0,
          children:[
            {id:'itzel',name:'Itzel Hernandez',title:'Affiliate & Operations Coordinator',initials:'IH',image:'images/itzel-hernandez.png',aiEmployees:[
              {name:'Affiliate Data Compiler',icon:'📊',cat:'analytics',desc:'Aggregates affiliate performance data from multiple platforms into one report',activation:'schedule',status:'new'},
              {name:'Commission Calculator',icon:'💰',cat:'finance',desc:'Calculates affiliate commissions based on tracked conversions',activation:'trigger',status:'new'},
              {name:'Partner Onboarding Guide',icon:'👋',cat:'ops',desc:'Generates welcome packets and setup instructions for new affiliate partners',activation:'trigger',status:'new'},
              {name:'Affiliate Content Kit',icon:'📦',cat:'creative',desc:'Creates swipe copy, images, and links for affiliates to promote each launch',activation:'trigger',status:'new'},
            ],moreCount:0,children:[]}
          ]
        },
        {
          id:'sydney',name:'Sydney Hagel',title:'Creative Director',initials:'SH',image:'images/sydney-hagel.png',
          aiEmployees:[
            {name:'Brand Template Generator',icon:'🎨',cat:'creative',desc:'Creates on-brand templates for social, email, and presentations',activation:'demand',status:'new'},
            {name:'Design Brief Interpreter',icon:'📐',cat:'creative',desc:'Translates written design requests into structured briefs with specs',activation:'trigger',status:'new'},
            {name:'Asset Resizer',icon:'🖼️',cat:'creative',desc:'Resizes and reformats designs for different platforms',activation:'demand',status:'new'},
          ],moreCount:0,children:[]
        },
        {id:'christine',name:'Christine Joy Looc',title:'Graphic Designer',initials:'CL',image:'images/christine-joy-looc.jpeg',aiEmployees:[
          {name:'Layout Generator',icon:'📐',cat:'creative',desc:'Creates on-brand layout compositions from design briefs',activation:'demand',status:'new'},
          {name:'Color Palette Matcher',icon:'🎨',cat:'creative',desc:'Extracts and suggests brand-aligned color palettes from reference images',activation:'demand',status:'new'},
          {name:'Asset Resizer',icon:'🖼️',cat:'creative',desc:'Resizes and reformats designs for IG, FB, LinkedIn, and email',activation:'demand',status:'new'},
          {name:'Typography Advisor',icon:'🔤',cat:'creative',desc:'Recommends font pairings and hierarchy based on TUB brand guidelines',activation:'demand',status:'new'},
          {name:'Design QA Checker',icon:'✅',cat:'creative',desc:'Reviews designs for brand compliance — logos, spacing, colors, fonts',activation:'trigger',status:'new'},
        ],children:[]},
        {id:'archie',name:'Archie Reyes',title:'Graphic Designer',initials:'AR',image:'images/archie-reyes.png',aiEmployees:[
          {name:'Social Template Builder',icon:'📱',cat:'creative',desc:'Generates branded social media templates from campaign briefs',activation:'demand',status:'new'},
          {name:'Carousel Designer',icon:'📐',cat:'creative',desc:'Turns content outlines into slide-by-slide carousel wireframes',activation:'demand',status:'new'},
          {name:'Ad Creative Generator',icon:'🎯',cat:'creative',desc:'Produces ad creative variations from a single approved concept',activation:'demand',status:'new'},
          {name:'Batch Export Processor',icon:'📦',cat:'creative',desc:'Exports design files in all required formats and sizes for each platform',activation:'trigger',status:'new'},
          {name:'Visual Trend Scout',icon:'🔭',cat:'research',desc:'Scans design trends across competitors and top brands weekly',activation:'schedule',status:'new'},
        ],children:[]},
        {id:'abhie',name:'Abhie Abellon',title:'Operations Coordinator',initials:'AA',image:'images/abhie-abellon.png',aiEmployees:[
          {name:'Scheduling Assistant',icon:'🗓️',cat:'ops',desc:'Manages calendar coordination across time zones for team meetings',activation:'demand',status:'new'},
          {name:'Data Entry Automator',icon:'⚡',cat:'ops',desc:'Processes form submissions, spreadsheet updates, and CRM entries',activation:'trigger',status:'new'},
          {name:'Daily Task Prioritizer',icon:'📋',cat:'ops',desc:'Organizes daily tasks by urgency and deadline from Notion boards',activation:'schedule',status:'new'},
        ],moreCount:0,children:[]},
        {
          id:'maggie',name:'Maggie Hilpisch',title:'Talent & Culture Lead',initials:'MH',image:'images/maggie-hilpisch.jpeg',
          aiEmployees:[
            {name:'Interview Panel Prep',icon:'📝',cat:'hr',desc:'Builds structured interview questions based on role, Kolbe, and culture fit',activation:'trigger',status:'new'},
            {name:'New Hire Welcome Kit',icon:'🎉',cat:'hr',desc:'Generates personalized welcome messages and first-week schedules',activation:'trigger',status:'new'},
            {name:'Team Pulse Analyzer',icon:'📊',cat:'hr',desc:'Analyzes team sentiment from check-ins and flags burnout risks',activation:'schedule',status:'new'},
            {name:'Birthday & Anniversary Reminder',icon:'💌',cat:'hr',desc:'Generates personalized celebration messages for team milestones',activation:'schedule',status:'new'},
          ],moreCount:0,children:[]
        },
        {
          id:'jarrod',name:'Jarrod',title:'Fractional CFO',initials:'JR',
          aiEmployees:[
            {name:'AI Bookkeeper',icon:'🧾',cat:'finance',desc:'Raw credit card statements → categorized, CPA-ready reports in minutes',activation:'demand',status:'rebuild'},
            {name:'Expense Categorizer',icon:'💳',cat:'finance',desc:'Remembers vendors, software stack, and categories — no repeat questions',activation:'trigger',status:'rebuild'},
            {name:'Budget Tracker',icon:'💰',cat:'finance',desc:'Monitors spend against budget and flags overruns in real time',activation:'schedule',status:'rebuild'},
            {name:'Financial Snapshot Generator',icon:'📊',cat:'finance',desc:'One-click P&L summaries and board-ready financial reports',activation:'demand',status:'rebuild'},
            {name:'Revenue Forecaster',icon:'📈',cat:'finance',desc:'Cash flow projections and revenue modeling updated weekly',activation:'schedule',status:'rebuild'},
            {name:'CFO Advisor',icon:'🧠',cat:'strategy',desc:'Strategic financial guidance — pricing scenarios, investment analysis, growth modeling',activation:'demand',status:'rebuild'},
            {name:'Program ROI Calculator',icon:'⚖️',cat:'finance',desc:'Calculates cost-to-run vs. revenue for every program and cohort',activation:'demand',status:'rebuild'},
          ],
          moreCount:0,children:[]
        }
      ]
    },
    {
      id:'lex',name:'Alexys Bartok',title:'Director of Operations',initials:'AB',image:'images/alexys-bartok.png',
      reportsTo:{id:'kinsey',name:'Kinsey Machos'},
      aiEmployees:[
        {name:'SOP Architect',icon:'📋',cat:'ops',desc:'Turns brain dumps into standardized, deploy-ready playbooks',activation:'demand',status:'rebuild'},
        {name:'Workflow Automator',icon:'⚡',cat:'engineering',desc:'Designs automated workflows that replace manual repetitive tasks',activation:'demand',status:'rebuild'},
        {name:'Event Planner',icon:'🗓️',cat:'ops',desc:'Full event build — budget, website, checkout — in hours, not weeks',activation:'demand',status:'rebuild'},
        {name:'Project Manager',icon:'📤',cat:'ops',desc:'Brain dumps into organized, assignable project briefs in Notion',activation:'demand',status:'rebuild'},
        {name:'Compliance & IP Specialist',icon:'🛡️',cat:'ops',desc:'Monitors and protects company intellectual property',activation:'schedule',status:'rebuild'},
        {name:'Launch Checklist Generator',icon:'✅',cat:'ops',desc:'Generates launch-specific checklists from the master launch SOP',activation:'trigger',status:'new'},
        {name:'Post-Launch Debrief Compiler',icon:'📊',cat:'analytics',desc:'Compiles launch metrics, team feedback, and lessons learned',activation:'trigger',status:'new'},
        {name:'Build Request Triage',icon:'🔀',cat:'ops',desc:'Routes incoming build requests to Express or Architect track',activation:'trigger',status:'new'},
        {name:'Build Status Reporter',icon:'📈',cat:'ops',desc:'Weekly summary of build queue, completed builds, and blockers',activation:'schedule',status:'new'},
      ],
      moreCount:0,
      children:[
        {id:'kath',name:'Kath Pulmones',title:'Operations Assistant',initials:'KP',image:'images/kath-pulmones.png',aiEmployees:[
          {name:'Meeting Notes Formatter',icon:'📝',cat:'ops',desc:'Formats raw meeting notes into standardized templates with action items',activation:'trigger',status:'new'},
          {name:'Follow-Up Tracker',icon:'🔔',cat:'ops',desc:'Flags overdue action items and sends reminder drafts',activation:'schedule',status:'new'},
          {name:'Document Organizer',icon:'📁',cat:'ops',desc:'Files and tags new documents in the correct Google Drive/Notion locations',activation:'trigger',status:'new'},
        ],moreCount:0,children:[]}
      ]
    },
    {
      id:'carter',name:'Carter Jensen',title:'VP of Product & Innovation',initials:'CJ',image:'images/carter-jensen.jpeg',
      aiEmployees:[
        {name:'AI Trend Scout',icon:'🔭',cat:'research',desc:'Scans Product Hunt, Reddit, X daily — filtered for business relevance',activation:'schedule',status:'built'},
        {name:'Competitive Intelligence Researcher',icon:'🕵️',cat:'research',desc:'Deep research on any company, market, or trend in 60 seconds',activation:'demand',status:'built'},
        {name:'Audience Analyzer',icon:'👥',cat:'research',desc:'Deep-profiles any audience, event, or prospect in minutes',activation:'demand',status:'built'},
        {name:'Product Validation Engine',icon:'⚖️',cat:'product',desc:'Pressure-tests product ideas — BUILD, RESHAPE, or SHELF',activation:'demand',status:'built'},
        {name:'Curriculum Architect',icon:'📐',cat:'curriculum',desc:'Structures raw content ideas into week-by-week A2A curriculum',activation:'demand',status:'new'},
        {name:'AI Employee Designer',icon:'🛠️',cat:'product',desc:'Designs new AI employees from workflow descriptions',activation:'demand',status:'new'},
        {name:'LinkedIn Expert',icon:'🔗',cat:'voice',desc:'Transforms any content into ready-to-publish LinkedIn posts',activation:'demand',status:'built'},
        {name:'UI/UX Designer',icon:'💎',cat:'engineering',desc:'Production-grade interfaces, apps, and interactive experiences',activation:'demand',status:'built'},
        {name:'Second Brain Librarian',icon:'📚',cat:'ops',desc:'Processes transcripts and notes into the Obsidian vault with proper tagging',activation:'trigger',status:'new'},
        {name:'Weekly AI Leadership Update',icon:'📊',cat:'research',desc:'Compiles AI news, tool releases, and strategic implications for the team',activation:'schedule',status:'built'},
      ],
      moreCount:0,
      children:[
        {
          id:'eliot',name:'Eliot Prince',title:'AI Research & Playbook Developer',initials:'EP',image:'images/eliot-prince.png',
          aiEmployees:[
            {name:'Curriculum Developer',icon:'🎓',cat:'curriculum',desc:'Builds interactive trainings that shift beliefs and change behavior',activation:'demand',status:'rebuild'},
            {name:'Framework Designer',icon:'🔺',cat:'curriculum',desc:'Extracts teachable frameworks from transcripts and creates visual diagrams',activation:'demand',status:'rebuild'},
            {name:'Assessment Builder',icon:'📝',cat:'curriculum',desc:'Creates quizzes and skill assessments that measure real progress',activation:'demand',status:'rebuild'},
            {name:'Playbook Writer',icon:'📋',cat:'curriculum',desc:'Turns raw curriculum concepts into step-by-step Notion playbooks',activation:'demand',status:'new'},
            {name:'Content Repurposer',icon:'♻️',cat:'curriculum',desc:'One transcript → content ideas → publish-ready carousels',activation:'demand',status:'rebuild'},
            {name:'Brand Skill Builder',icon:'🏷️',cat:'curriculum',desc:'Turns any brand folder into AI-ready guidelines instantly',activation:'demand',status:'rebuild'},
            {name:'YouTube Script Writer',icon:'🎬',cat:'creative',desc:'Writes YouTube scripts from curriculum topics optimized for retention',activation:'demand',status:'new'},
            {name:'YouTube Thumbnail Designer',icon:'🖼️',cat:'creative',desc:'Click-worthy thumbnails for YouTube content',activation:'demand',status:'new'},
            {name:'CalChat Transcript Updater',icon:'🔄',cat:'ops',desc:'Weekly transcript updates to CalChat Plus knowledge base',activation:'schedule',status:'built'},
            {name:'TubConnect QA Tester',icon:'🧪',cat:'engineering',desc:'Tests platform features and flags bugs after deployments',activation:'trigger',status:'new'},
          ],
          moreCount:0,children:[]
        },
        {
          id:'nikhil',name:'Nikhil Kumar',title:'Automations & Tech Specialist',initials:'NK',image:'images/nikhil-kumar.jpg',
          aiEmployees:[
            {name:'Zapier Workflow Builder',icon:'⚡',cat:'engineering',desc:'Designs Zapier workflows from plain-language descriptions',activation:'demand',status:'new'},
            {name:'Integration Debugger',icon:'🔧',cat:'engineering',desc:'Diagnoses broken automations and suggests fixes',activation:'demand',status:'new'},
            {name:'Automation Health Monitor',icon:'🩺',cat:'ops',desc:'Scans all active Zaps weekly and flags errors, failures, and slowdowns',activation:'schedule',status:'new'},
            {name:'Baserow Schema Manager',icon:'🗄️',cat:'engineering',desc:'Documents and validates Baserow database structures and field relationships',activation:'demand',status:'new'},
          ],moreCount:0,children:[]
        },
        {
          id:'scott',name:'Scott Wright',title:'Product Automation Specialist',initials:'SW',image:'images/scott-wright.jfif',
          aiEmployees:[
            {name:'Tech Stack Auditor',icon:'🔍',cat:'engineering',desc:'Reviews current tools for redundancy, cost savings, and integration opportunities',activation:'schedule',status:'new'},
            {name:'API Connector Builder',icon:'🔌',cat:'engineering',desc:'Builds custom API integrations between business tools',activation:'demand',status:'new'},
            {name:'Automation Documenter',icon:'📋',cat:'ops',desc:'Generates documentation for every automation — what it does, what triggers it, what breaks',activation:'trigger',status:'new'},
            {name:'No-Code App Builder',icon:'🧱',cat:'product',desc:'Scaffolds internal tools and dashboards from plain-language requirements',activation:'demand',status:'new'},
          ],moreCount:0,children:[]
        },
        {
          id:'jodi',name:'Jodi Thornock',title:'Student Success Manager',initials:'JT',image:'images/jodi-thornock.jfif',
          aiEmployees:[
            {name:'Sales Wizard',icon:'🧙',cat:'sales',desc:'Proof-loaded responses pulling real client stories for every objection',activation:'demand',status:'rebuild'},
            {name:'Lead Researcher',icon:'🔍',cat:'sales',desc:'Deep-profiles every prospect before the first call',activation:'trigger',status:'rebuild'},
            {name:'DM Responder',icon:'💬',cat:'sales',desc:'Instant personalized replies to inbound DMs',activation:'demand',status:'rebuild'},
            {name:'Call Reviewer',icon:'📞',cat:'sales',desc:'Analyzes recorded calls — flags coaching moments',activation:'trigger',status:'rebuild'},
            {name:'Case Study Finder',icon:'📖',cat:'sales',desc:'Pulls relevant success stories by industry or pain point',activation:'demand',status:'rebuild'},
            {name:'Student Onboarding Specialist',icon:'👋',cat:'ops',desc:'Personalized welcome experience for every new student',activation:'trigger',status:'rebuild'},
            {name:'Community Manager',icon:'🏘️',cat:'ops',desc:'Monitors community health and surfaces students who need help',activation:'schedule',status:'rebuild'},
            {name:'Progress Tracker',icon:'📈',cat:'analytics',desc:'Milestone tracking and early-warning flags for fall-behind students',activation:'schedule',status:'rebuild'},
            {name:'Client Story Engine',icon:'🏆',cat:'sales',desc:'Indexes every success story for instant retrieval in sales and content',activation:'trigger',status:'rebuild'},
            {name:'Win-Back Sequencer',icon:'📬',cat:'sales',desc:'Re-engagement sequences for students who\'ve gone quiet',activation:'trigger',status:'new'},
          ],
          moreCount:0,
          children:[
            {id:'hilary',name:'Hilary Krueger',title:'Enrollment Specialist',initials:'HK',image:'images/hilary-krueger.webp',aiEmployees:[
              {name:'Call Prep Brief',icon:'📋',cat:'sales',desc:'Pre-call brief with prospect research, ICP match, and talking points',activation:'trigger',status:'new'},
              {name:'Personal Pipeline Tracker',icon:'📊',cat:'analytics',desc:'Tracks personal conversion rates, follow-up status, and weekly goals',activation:'schedule',status:'new'},
              {name:'Post-Call Summary',icon:'📝',cat:'sales',desc:'Auto-generates call notes with next steps and follow-up reminders',activation:'trigger',status:'new'},
            ],children:[]},
            {id:'logan',name:'Logan Chauvin',title:'Enrollment Specialist',initials:'LC',image:'images/logan-chauvin.png',aiEmployees:[
              {name:'Call Prep Brief',icon:'📋',cat:'sales',desc:'Pre-call brief with prospect research, ICP match, and talking points',activation:'trigger',status:'new'},
              {name:'Personal Pipeline Tracker',icon:'📊',cat:'analytics',desc:'Tracks personal conversion rates, follow-up status, and weekly goals',activation:'schedule',status:'new'},
              {name:'Post-Call Summary',icon:'📝',cat:'sales',desc:'Auto-generates call notes with next steps and follow-up reminders',activation:'trigger',status:'new'},
            ],children:[]},
            {id:'brooklyn',name:'Brooklyn Mailloux',title:'Enrollment Specialist',initials:'BM',image:'images/brooklyn-mailloux.png',aiEmployees:[
              {name:'Call Prep Brief',icon:'📋',cat:'sales',desc:'Pre-call brief with prospect research, ICP match, and talking points',activation:'trigger',status:'new'},
              {name:'Personal Pipeline Tracker',icon:'📊',cat:'analytics',desc:'Tracks personal conversion rates, follow-up status, and weekly goals',activation:'schedule',status:'new'},
              {name:'Post-Call Summary',icon:'📝',cat:'sales',desc:'Auto-generates call notes with next steps and follow-up reminders',activation:'trigger',status:'new'},
            ],children:[]},
            {id:'dylan',name:'Dylan Swarers',title:'Enrollment Specialist',initials:'DS',image:'images/dylan-swarers.webp',aiEmployees:[
              {name:'Call Prep Brief',icon:'📋',cat:'sales',desc:'Pre-call brief with prospect research, ICP match, and talking points',activation:'trigger',status:'new'},
              {name:'Personal Pipeline Tracker',icon:'📊',cat:'analytics',desc:'Tracks personal conversion rates, follow-up status, and weekly goals',activation:'schedule',status:'new'},
              {name:'Post-Call Summary',icon:'📝',cat:'sales',desc:'Auto-generates call notes with next steps and follow-up reminders',activation:'trigger',status:'new'},
            ],children:[]},
            {id:'sarah',name:'Sarah Threadgill',title:'Enrollment Specialist',initials:'ST',image:'images/sarah-threadgill.jpg',aiEmployees:[
              {name:'Call Prep Brief',icon:'📋',cat:'sales',desc:'Pre-call brief with prospect research, ICP match, and talking points',activation:'trigger',status:'new'},
              {name:'Personal Pipeline Tracker',icon:'📊',cat:'analytics',desc:'Tracks personal conversion rates, follow-up status, and weekly goals',activation:'schedule',status:'new'},
              {name:'Post-Call Summary',icon:'📝',cat:'sales',desc:'Auto-generates call notes with next steps and follow-up reminders',activation:'trigger',status:'new'},
            ],children:[]},
            {id:'meaghan',name:'Meaghan Alton',title:'Enrollment Specialist',initials:'MA',image:'images/meaghan-alton.png',aiEmployees:[
              {name:'Call Prep Brief',icon:'📋',cat:'sales',desc:'Pre-call brief with prospect research, ICP match, and talking points',activation:'trigger',status:'new'},
              {name:'Personal Pipeline Tracker',icon:'📊',cat:'analytics',desc:'Tracks personal conversion rates, follow-up status, and weekly goals',activation:'schedule',status:'new'},
              {name:'Post-Call Summary',icon:'📝',cat:'sales',desc:'Auto-generates call notes with next steps and follow-up reminders',activation:'trigger',status:'new'},
            ],children:[]},
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
            {name:'Concierge Welcome Message',icon:'🤝',cat:'sales',desc:'First-touch message that leads with value, not a sales pitch',activation:'trigger',status:'new'},
            {name:'Bootcamp-to-A2A Upsell Recommender',icon:'🎓',cat:'sales',desc:'Identifies bootcamp grads ready for A2A based on engagement signals',activation:'schedule',status:'new'},
          ],
          salesTeamMoreCount:0,
        },
        {id:'irene',name:'Irene Ramos',title:'Student Success Assistant',initials:'IR',image:'images/irene-ramos.png',
          aiEmployees:[
            {name:'Student Check-In Generator',icon:'💬',cat:'ops',desc:'Writes personalized check-in messages based on student progress data',activation:'schedule',status:'new'},
            {name:'FAQ Responder',icon:'❓',cat:'ops',desc:'Answers common student questions pulling from knowledge base',activation:'demand',status:'new'},
            {name:'Engagement Scorer',icon:'📊',cat:'analytics',desc:'Scores student engagement weekly and flags at-risk students',activation:'schedule',status:'new'},
            {name:'Session Recap Writer',icon:'📝',cat:'ops',desc:'Writes post-session recap emails with key takeaways and next steps',activation:'trigger',status:'new'},
            {name:'Resource Recommender',icon:'📚',cat:'curriculum',desc:'Suggests relevant playbooks, recordings, and resources based on curriculum progress',activation:'demand',status:'new'},
            {name:'Graduation Certificate Generator',icon:'🎓',cat:'ops',desc:'Creates personalized completion certificates and celebration messages',activation:'trigger',status:'new'},
          ],moreCount:0,children:[]},
        {id:'ferlita',name:'Ferlita Bastian',title:'Student Success Assistant',initials:'FB',image:'images/ferlita-bastian.png',
          aiEmployees:[
            {name:'Student Check-In Generator',icon:'💬',cat:'ops',desc:'Writes personalized check-in messages based on student progress data',activation:'schedule',status:'new'},
            {name:'FAQ Responder',icon:'❓',cat:'ops',desc:'Answers common student questions pulling from knowledge base',activation:'demand',status:'new'},
            {name:'Engagement Scorer',icon:'📊',cat:'analytics',desc:'Scores student engagement weekly and flags at-risk students',activation:'schedule',status:'new'},
            {name:'Session Recap Writer',icon:'📝',cat:'ops',desc:'Writes post-session recap emails with key takeaways and next steps',activation:'trigger',status:'new'},
            {name:'Resource Recommender',icon:'📚',cat:'curriculum',desc:'Suggests relevant playbooks, recordings, and resources based on curriculum progress',activation:'demand',status:'new'},
            {name:'Graduation Certificate Generator',icon:'🎓',cat:'ops',desc:'Creates personalized completion certificates and celebration messages',activation:'trigger',status:'new'},
          ],moreCount:0,children:[]},
        {id:'alyssa',name:'Alyssa Garcia',title:'Student Success Assistant',initials:'AG',image:'images/alyssa-garcia.webp',
          aiEmployees:[
            {name:'Student Check-In Generator',icon:'💬',cat:'ops',desc:'Writes personalized check-in messages based on student progress data',activation:'schedule',status:'new'},
            {name:'FAQ Responder',icon:'❓',cat:'ops',desc:'Answers common student questions pulling from knowledge base',activation:'demand',status:'new'},
            {name:'Engagement Scorer',icon:'📊',cat:'analytics',desc:'Scores student engagement weekly and flags at-risk students',activation:'schedule',status:'new'},
            {name:'Session Recap Writer',icon:'📝',cat:'ops',desc:'Writes post-session recap emails with key takeaways and next steps',activation:'trigger',status:'new'},
            {name:'Resource Recommender',icon:'📚',cat:'curriculum',desc:'Suggests relevant playbooks, recordings, and resources based on curriculum progress',activation:'demand',status:'new'},
            {name:'Graduation Certificate Generator',icon:'🎓',cat:'ops',desc:'Creates personalized completion certificates and celebration messages',activation:'trigger',status:'new'},
          ],moreCount:0,children:[]}
      ]
    },
    {
      id:'nicole',name:'Nicole Tormey',title:'Human Performance Program Dir.',initials:'NT',image:'images/nicole-tormey.jpg',
      aiEmployees:[
        {name:'Aliveness Assessment Scorer',icon:'📋',cat:'curriculum',desc:'Processes assessment responses and generates personalized reports',activation:'trigger',status:'new'},
        {name:'GRACE Model Coach',icon:'🧭',cat:'curriculum',desc:'Provides personalized coaching prompts based on the GRACE framework',activation:'demand',status:'new'},
        {name:'Burnout Prevention Monitor',icon:'🛡️',cat:'hr',desc:'Tracks team workload signals and recommends intervention timing',activation:'schedule',status:'new'},
      ],moreCount:0,children:[]
    }
  ]
};

const TOTAL_HUMANS = 30;

// ═══ MONDAY MORNING TIMELINE EVENTS ═══
// Each event = one AI employee completing a task while humans sleep
// time is in minutes from midnight (0 = 12:00am, 480 = 8:00am)
const DEPT_FILTERS = [
  { id: 'all', label: 'All Departments', color: '#D1B25A' },
  { id: 'marketing', label: 'Marketing', color: '#C26688' },
  { id: 'sales', label: 'Sales', color: '#D47B2E' },
  { id: 'operations', label: 'Operations', color: '#2A8F82' },
  { id: 'curriculum', label: 'Curriculum', color: '#4A8C5C' },
  { id: 'finance', label: 'Finance', color: '#3D8B6E' },
  { id: 'student-success', label: 'Student Success', color: '#7B5EA7' },
  { id: 'product', label: 'Product & Innovation', color: '#3A7CA5' },
];

const TIMELINE_EVENTS = [
  // 12:00 – 12:30 AM — Immediate action
  { time: 3,   aiName: 'AI Trend Scout',              icon: '🔭', owner: 'Carter',  dept: 'product',         hoursSaved: 2.0, desc: 'Scanned Product Hunt, Reddit, X, and 14 tech newsletters', output: 'Daily trend brief with 3 flagged tools worth evaluating' },
  { time: 15,  aiName: 'AI Bookkeeper',               icon: '🧾', owner: 'Jarrod',  dept: 'finance',         hoursSaved: 1.5, desc: 'Processed 143 transactions from yesterday\'s Amex statement', output: 'Categorized, CPA-ready expense report — zero clarifying questions' },
  { time: 30,  aiName: 'Social Media Data Analyst',   icon: '📱', owner: 'Kara',    dept: 'marketing',       hoursSaved: 2.5, desc: 'Scraped last 10 days of competitor posts and analyzed engagement', output: 'Top 5 hooks, 3 trending themes, engagement heatmap' },

  // 1:00 – 2:00 AM
  { time: 60,  aiName: 'Competitive Intelligence Researcher', icon: '🕵️', owner: 'Carter', dept: 'product', hoursSaved: 3.0, desc: 'Deep-researched 4 competitor product launches from this week', output: 'Competitive intel report with pricing and positioning analysis' },
  { time: 80,  aiName: 'Revenue Forecaster',          icon: '📈', owner: 'Jarrod',  dept: 'finance',         hoursSaved: 2.0, desc: 'Updated cash flow projections with latest revenue data', output: '12-week forecast with variance flags and 3 scenario models' },
  { time: 100, aiName: 'Lead Qualifier',              icon: '🔍', owner: 'Jodi',    dept: 'sales',           hoursSaved: 1.5, desc: 'Scored 23 new leads from last night\'s webinar against ICP', output: '7 hot leads prioritized, 12 warm for nurture, 4 disqualified' },

  // 2:00 – 3:00 AM
  { time: 125, aiName: 'Content Calendar Generator',  icon: '📅', owner: 'Callan',  dept: 'marketing',       hoursSaved: 3.0, desc: 'Drafted full content calendar for the week across all platforms', output: '15 posts: 5 IG, 4 LinkedIn, 3 email, 3 Threads' },
  { time: 145, aiName: 'Hook Specialist',             icon: '🪝', owner: 'Nick',    dept: 'marketing',       hoursSaved: 1.5, desc: 'Generated 20 scroll-stopping hooks from top-performing competitor data', output: '20 hooks ranked by predicted engagement, grouped by theme' },
  { time: 165, aiName: 'Lead Researcher',             icon: '🔍', owner: 'Jodi',    dept: 'sales',           hoursSaved: 2.0, desc: 'Deep-profiled top 7 hot leads — company size, revenue, social presence', output: '7 lead dossiers with ICP match scores and talking points' },
  { time: 180, aiName: 'CFO Advisor',                 icon: '🧠', owner: 'Jarrod',  dept: 'finance',         hoursSaved: 2.5, desc: 'Analyzed Q1 performance against annual targets and modeled scenarios', output: 'Strategic memo: on track at current pace, 2 acceleration levers identified' },

  // 3:00 – 4:30 AM
  { time: 200, aiName: 'Newsletter Writer',           icon: '📰', owner: 'Nick',    dept: 'marketing',       hoursSaved: 2.0, desc: 'Drafted Tuesday\'s email newsletter in brand voice', output: '487-word newsletter with subject line and preview text' },
  { time: 220, aiName: 'Campaign Performance Optimizer', icon: '📉', owner: 'Kara', dept: 'marketing',       hoursSaved: 1.5, desc: 'Analyzed $12K ad spend across 8 campaigns from last week', output: 'Pause 2 underperformers, scale 3 winners, reallocate $2.4K' },
  { time: 240, aiName: 'Case Study Finder',           icon: '📖', owner: 'Jodi',    dept: 'sales',           hoursSaved: 1.5, desc: 'Matched each hot lead to the most relevant client success stories', output: '7 personalized proof packages — 2-3 case studies per lead' },
  { time: 260, aiName: 'Content Repurposer',          icon: '♻️', owner: 'Elliot',  dept: 'curriculum',      hoursSaved: 3.0, desc: 'Converted Thursday\'s training transcript into 8 content pieces', output: '2 carousels, 3 LinkedIn posts, 1 blog draft, 2 email snippets' },

  // 4:30 – 5:30 AM
  { time: 280, aiName: 'Financial Snapshot Generator', icon: '📊', owner: 'Jarrod', dept: 'finance',         hoursSaved: 2.0, desc: 'Generated board-ready P&L summary for March', output: 'One-page financial snapshot with YoY comparison' },
  { time: 300, aiName: 'Instagram Carousel Creator',  icon: '📐', owner: 'Kara',    dept: 'marketing',       hoursSaved: 2.0, desc: 'Turned 3 transcript insights into publish-ready carousel PDFs', output: '3 carousel PDFs with branded slides, ready for scheduling' },
  { time: 320, aiName: 'Framework Designer',          icon: '🔺', owner: 'Elliot',  dept: 'curriculum',      hoursSaved: 2.0, desc: 'Extracted 2 teachable frameworks from this week\'s Power Play', output: '2 framework diagrams with step-by-step breakdowns' },
  { time: 340, aiName: 'Follow-Up Sequencer',         icon: '📬', owner: 'Jodi',    dept: 'sales',           hoursSaved: 2.0, desc: 'Generated personalized follow-up emails for all 7 hot leads', output: '7 email drafts with proof points, CTAs, and suggested send times' },

  // 5:30 – 7:00 AM
  { time: 360, aiName: 'Student Onboarding Specialist', icon: '👋', owner: 'Jodi',  dept: 'student-success', hoursSaved: 1.0, desc: 'Personalized welcome sequences for 6 new students enrolled yesterday', output: '6 custom onboarding paths with resource links' },
  { time: 380, aiName: 'Progress Tracker',            icon: '📈', owner: 'Jodi',    dept: 'student-success', hoursSaved: 2.0, desc: 'Scanned 312 active students for milestone completion', output: '8 students flagged as at-risk, 3 recommended for spotlight' },
  { time: 400, aiName: 'Community Manager',           icon: '💬', owner: 'Jodi',    dept: 'student-success', hoursSaved: 1.0, desc: 'Scanned all Slack channels for engagement dips and unanswered questions', output: 'Community health report: 4 quiet students, 2 unanswered threads' },

  // 7:00 – 8:00 AM
  { time: 425, aiName: 'Morning Briefing Agent',      icon: '☕', owner: 'Kinsey',  dept: 'operations',      hoursSaved: 1.0, desc: 'Compiled overnight Slack, Notion updates, and calendar prep', output: 'Team activity digest + 4 items needing Kinsey\'s attention' },
  { time: 445, aiName: 'Meeting Intelligence Manager', icon: '🎯', owner: 'Kinsey', dept: 'operations',      hoursSaved: 1.0, desc: 'Prepped agendas for today\'s 3 meetings from prior action items', output: '3 agendas with carryover tasks and decision points' },
  { time: 465, aiName: 'Brand Voice Writer',          icon: '✍️', owner: 'Callan',  dept: 'marketing',       hoursSaved: 1.5, desc: 'Drafted 3 Instagram captions and a LinkedIn thought-leadership post', output: '4 publish-ready posts in Callan\'s authentic voice' },
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
    icon: '📢', role: 'Creates ad copy, designs creative briefs, analyzes campaign performance. Codifies Kara\'s expertise as an internal AI ads agency.',
    managedBy: 'Kara', managedByTitle: 'Dir. Paid Media',
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
    managedBy: 'Carter', managedByTitle: 'VP Product',
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
    managedBy: 'Carter', managedByTitle: 'VP Product',
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
