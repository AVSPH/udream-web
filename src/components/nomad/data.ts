import type { Phase, Destination, PackingCategory, IncomeStream, NetworkPlatform, InspirationQuote } from './types';

export const PHASES: Phase[] = [
  {
    id: 'mindset',
    index: 1,
    iconName: 'Compass',
    tabLabel: 'Mindset',
    title: 'Mindset &',
    titleEmphasis: 'Foundations',
    taskCount: 12,
    timing: 'Weeks 1–4 · Before Planning',
    description: 'Before booking a flight or quitting your job, you need unshakeable clarity. This phase is about building the mental architecture that will carry you through the hard moments ahead. Most failed nomads skip this ~ don\'t.',
    sections: [
      {
        id: 'clarity',
        title: 'Clarity & Vision',
        icon: 'Target',
        tasks: [
          { id: 'mf-01', text: 'Write your "Nomad Manifesto" ~ 1 page defining what freedom means to you personally', detail: 'Be specific: what does your ideal Tuesday look like? What country are you in? What time do you start work? This becomes your north star when things get hard.', tag: 'priority', tagLabel: 'High Priority' },
          { id: 'mf-02', text: 'List every fear and create a pre-mortem ~ what could go wrong, and what\'s your response?', detail: 'Write out each fear (money running out, loneliness, getting sick abroad) and write a single response action for each. Fear named is fear tamed.', tag: 'mindset', tagLabel: 'Mindset' },
          { id: 'mf-03', text: 'Set a firm departure target date ~ month and year, write it everywhere', detail: 'Put it on your phone lock screen, bathroom mirror, and desk. "Someday" is a dream killer. A date is a commitment.', tag: 'priority', tagLabel: 'High Priority' },
          { id: 'mf-04', text: 'Tell 3 trusted people your plan ~ accountability partners who will hold you to it', detail: 'Not skeptics. Choose people who believe in you and won\'t talk you out of it. Ask them to check in monthly.', tag: 'social', tagLabel: 'Social' },
          { id: 'mf-05', text: 'Read 2 nomad memoirs or follow 5 nomads who\'ve been at it 2+ years', detail: 'Recommendations: "Remote" by DHH, "The 4-Hour Workweek" by Ferriss, "Vagabonding" by Potts. Follow @levelsio, @tropicalmba on Twitter/X.', tag: 'research', tagLabel: 'Research' },
        ],
      },
      {
        id: 'skills',
        title: 'Skills Audit & Remote Path',
        icon: 'Search',
        tasks: [
          { id: 'mf-06', text: 'Audit your current skills for remote viability ~ what can you do from anywhere today?', detail: 'Writing, coding, design, marketing, finance, consulting, teaching, video editing ~ if you can do it on a laptop, it can go nomad. List every skill, rate demand 1–10.', tag: 'priority', tagLabel: 'High Priority' },
          { id: 'mf-07', text: 'Choose your primary income path: remote employee, freelancer, agency owner, or solopreneur', detail: 'Each has different timelines to launch: remote employee (fastest if negotiated), freelancer (1–3 months), solopreneur/product (3–12 months). Be realistic about your timeline.', tag: 'finance', tagLabel: 'Income' },
          { id: 'mf-08', text: 'Identify 1 skill gap to fill before leaving ~ pick an online course or project to close it', detail: 'If you want to freelance as a copywriter but haven\'t had clients, spend 6 weeks writing for free for a nonprofit to build a portfolio first.', tag: 'growth', tagLabel: 'Growth' },
          { id: 'mf-09', text: 'Research salary benchmarks for remote roles in your field', detail: 'Use levels.fyi, Glassdoor remote filters, and LinkedIn salary data. Know your market rate before you negotiate anything.', tag: 'finance', tagLabel: 'Income' },
        ],
      },
      {
        id: 'destination',
        title: 'First Destination Research',
        icon: 'Map',
        tasks: [
          { id: 'mf-10', text: 'Shortlist 3 destinations that match your budget, climate preference, and time zone needs', detail: 'Use Nomadlist.com to filter by cost, internet speed, safety, and temperature. First-timers: Southeast Asia or Medellín for low cost + strong community.', tag: 'research', tagLabel: 'Research' },
          { id: 'mf-11', text: 'Join Facebook groups and Slack channels for your shortlisted cities ~ ask real questions', detail: 'Search "Nomads in [City]" on Facebook. Ask: what neighborhood should I stay in first? What\'s the best co-working space? What do you wish you\'d known?', tag: 'community', tagLabel: 'Community' },
          { id: 'mf-12', text: 'Create a destination comparison spreadsheet ~ cost, visa length, WiFi, safety, community size', detail: 'Score each city 1–5 on: monthly cost, internet reliability, coworking options, nomad community size, safety, healthcare access. Pick the highest total.', tag: 'planning', tagLabel: 'Planning' },
        ],
      },
    ],
    tip: {
      variant: 'default',
      icon: 'Lightbulb',
      content: '<strong>Pro Tip:</strong> The most common mistake at this phase is over-researching and under-committing. You need a date on the calendar before the research feels real. Set the date first, research second.',
    },
    tool: 'destination-ranker',
  },
  {
    id: 'income',
    index: 2,
    iconName: 'Briefcase',
    tabLabel: 'Income',
    title: 'Secure Your',
    titleEmphasis: 'Income',
    taskCount: 13,
    timing: 'Months 1–3 · Before Departure',
    description: 'Income security is the only thing standing between a dream and a disaster. You don\'t need to be rich ~ you need to be predictable. This phase gets you to a monthly income you can trust, before you ever board a plane.',
    sections: [
      {
        id: 'remote',
        title: 'Remote Negotiation (Employee Path)',
        icon: 'Handshake',
        tasks: [
          { id: 'si-01', text: 'Build your remote work business case ~ document your productivity metrics for the past 90 days', detail: 'Track tasks completed, projects delivered, and outcomes driven. Your manager needs data, not promises. Aim for a 2-page doc with clear KPIs.', tag: 'priority', tagLabel: 'High Priority' },
          { id: 'si-02', text: 'Request a 3-month remote trial with your employer ~ start with partial remote, escalate to full', detail: 'Frame it as a productivity experiment. Offer weekly check-ins. Make it easy for your manager to say yes to a trial. Pilots almost always get extended.', tag: 'action', tagLabel: 'Action Item' },
          { id: 'si-03', text: 'If denied, begin a parallel job search for 100% remote positions on your current salary', detail: 'Job boards: We Work Remotely, Remote.co, Remotive.io, LinkedIn (filter: remote). Apply to 5–10 roles weekly. Never quit before new income is secured.', tag: 'finance', tagLabel: 'Income' },
          { id: 'si-04', text: 'Clarify your employment contract\'s geographic restrictions and tax implications', detail: 'Many contracts prohibit working abroad without HR approval. Some trigger employer tax obligations in foreign countries. Get written permission or clarify your contractor status.', tag: 'legal', tagLabel: 'Legal' },
        ],
      },
      {
        id: 'freelance',
        title: 'Freelance Launch (Freelancer Path)',
        icon: 'Target',
        tasks: [
          { id: 'si-05', text: 'Build a 3-piece portfolio that demonstrates your core skill to paying-client standard', detail: 'No clients yet? Do a free or discounted project for a real business. A working portfolio beats a perfect resume every time. Publish it on a personal site or Notion.', tag: 'priority', tagLabel: 'High Priority' },
          { id: 'si-06', text: 'Land your first paid freelance client before setting your departure date', detail: 'Start in your existing network ~ ex-colleagues, LinkedIn connections, local businesses. Your first client is about proof, not profit. $500 beats $0.', tag: 'action', tagLabel: 'Action Item' },
          { id: 'si-07', text: 'Create profiles on Upwork, Toptal, or your niche\'s leading freelance marketplace', detail: 'Pick 1–2 platforms and go deep. A fully optimized Upwork profile beats 5 mediocre ones. Get your first 3 reviews before you leave home.', tag: 'finance', tagLabel: 'Income' },
          { id: 'si-08', text: 'Set your minimum viable income (MVI) ~ the monthly amount that covers your base expenses abroad', detail: 'This is your launch threshold. For Southeast Asia: $1,500–$2,500/mo. For Europe: $3,000–$4,000/mo. Don\'t leave until you\'re hitting 80% of this consistently.', tag: 'finance', tagLabel: 'Income' },
          { id: 'si-09', text: 'Write and publish 3 pieces of content demonstrating your expertise (LinkedIn, blog, or X/Twitter)', detail: 'Content compounds. A well-written LinkedIn post about your niche skill can bring inbound clients for years. Start the habit now, not after you land.', tag: 'action', tagLabel: 'Action Item' },
        ],
      },
      {
        id: 'runway',
        title: 'Financial Runway',
        icon: 'Landmark',
        tasks: [
          { id: 'si-10', text: 'Build a 3-month emergency runway in a separate savings account before leaving', detail: 'This is your "oh shit" fund, not your travel fund. It should cover 3 months of destination living even if you earn zero. Automate weekly transfers to build it.', tag: 'priority', tagLabel: 'High Priority' },
          { id: 'si-11', text: 'Set up international payment infrastructure: Wise, Stripe, or Payoneer account verified', detail: 'Verify identity before you leave ~ some verifications require local proof of address. Wise is the gold standard for receiving/converting currencies with minimal fees.', tag: 'finance', tagLabel: 'Income' },
          { id: 'si-12', text: 'Research and register a legal business entity appropriate for your income level', detail: 'Under $50k/yr: sole trader often fine. $50–150k: consider US LLC or UK LTD. Over $150k: consult a nomad-specialist accountant. Estonian e-Residency is popular for EU banking access.', tag: 'legal', tagLabel: 'Legal' },
          { id: 'si-13', text: 'Reduce home expenses by 30% to accelerate runway savings ~ subscriptions, dining, extras', detail: 'Cancel or pause: gym memberships (you\'re leaving), streaming duplicates, meal kits, daily coffees. Every $200/mo saved = one more week of runway.', tag: 'finance', tagLabel: 'Income' },
        ],
      },
    ],
    tip: {
      variant: 'gold',
      icon: 'Trophy',
      content: '<strong>The "Month Abroad" Trick:</strong> Before you leave permanently, take a 1-month remote trip to your top destination. Work your normal hours, live on your planned budget. If income held and you thrived ~ you have proof of concept. Then set your real departure date.',
    },
    tool: 'runway-calculator',
  },
  {
    id: 'logistics',
    index: 3,
    iconName: 'ClipboardList',
    tabLabel: 'Legal',
    title: 'Logistics &',
    titleEmphasis: 'Legal',
    taskCount: 15,
    timing: '6–8 Weeks Before Departure',
    description: 'The unglamorous work that protects you. One missed visa detail, one uncovered medical event, or one ignored tax obligation can end your nomad life in days. This phase is where you get bulletproof.',
    sections: [
      {
        id: 'visa',
        title: 'Visa Strategy',
        icon: 'FileText',
        tasks: [
          { id: 'll-01', text: 'Research your legal stay duration as a tourist in your top 3 destinations', detail: 'Tourist stays: Thailand 30–60 days, Bali 60 days (extendable), Portugal/EU 90 days per 180. Know when you need to leave or apply for an upgrade.', tag: 'legal', tagLabel: 'Legal' },
          { id: 'll-02', text: 'Investigate digital nomad visa programs that match your income level and nationality', detail: 'Active programs (2024): Portugal D8 (€760/mo income), Bali Digital Nomad Visa (USD 500/mo), Thailand LTR (USD 80k/yr), Estonia Digital Nomad Visa (€3,504/mo). Requirements change ~ check official embassy sites.', tag: 'legal', tagLabel: 'Legal' },
          { id: 'll-03', text: 'Renew your passport if it expires within 18 months ~ many countries require 6 months validity', detail: 'Apply now if your passport has fewer than 18 months. Expedited processing is available in most countries. Get extra pages added if less than 6 blank pages remain.', tag: 'priority', tagLabel: 'High Priority' },
          { id: 'll-04', text: 'Plan a visa run strategy or country-hop schedule if staying on tourist visas long-term', detail: 'Map out your first 6 months: which countries, in what order, and what\'s your exit/re-entry plan. Spontaneous visa runs are expensive. Planned ones are $20 bus rides.', tag: 'action', tagLabel: 'Action Item' },
          { id: 'll-05', text: 'Save digital and physical copies of all documents: passport, visa, insurance, contracts', detail: 'Email yourself scans, store in Google Drive, and carry physical photocopies. Use 1Password or Bitwarden for secure digital storage. Losing a passport abroad is an ordeal ~ multiple backups prevent panic.', tag: 'action', tagLabel: 'Action Item' },
        ],
      },
      {
        id: 'health',
        title: 'Health & Insurance',
        icon: 'Shield',
        tasks: [
          { id: 'll-06', text: 'Purchase international health insurance before leaving ~ do not skip this', detail: 'Options: SafetyWing ($45/mo, great for budget), World Nomads ($80–200/mo, better adventure coverage), Cigna Global ($200–400/mo, comprehensive). A single hospitalization without insurance can cost $10,000+.', tag: 'priority', tagLabel: 'High Priority' },
          { id: 'll-07', text: 'Get all necessary vaccinations for your destinations 4–6 weeks before departure', detail: 'Common for SE Asia: Hepatitis A/B, Typhoid, Japanese Encephalitis (if rural), Rabies (pre-exposure if hiking/caves). Consult a travel medicine clinic, not your regular GP.', tag: 'legal', tagLabel: 'Legal' },
          { id: 'll-08', text: 'Get a 6-month supply of any prescription medications and a letter from your doctor', detail: 'Some medications are illegal or unavailable abroad. A doctor\'s letter prevents customs issues. Research legality of your medications in your destination country.', tag: 'priority', tagLabel: 'High Priority' },
          { id: 'll-09', text: 'Schedule a full dental and medical checkup before leaving home-country coverage', detail: 'Dental work is cheap in Thailand and Mexico but expensive and logistically hard when you need it urgently. Pre-clear everything on home insurance before your coverage lapses.', tag: 'action', tagLabel: 'Action Item' },
        ],
      },
      {
        id: 'tax',
        title: 'Tax & Banking',
        icon: 'Landmark',
        tasks: [
          { id: 'll-10', text: 'Consult a nomad-specialist tax advisor about your obligations for the first year abroad', detail: 'Recommended firms: Bright!Tax (US expats), TFX (US nomads), Monaeo. A $300 consultation can save you $10,000+ in avoided mistakes. Don\'t rely on Reddit for tax advice.', tag: 'legal', tagLabel: 'Legal' },
          { id: 'll-11', text: 'Understand the Foreign Earned Income Exclusion (FEIE) if you\'re a US citizen ~ file Form 2555', detail: 'US citizens can exclude up to $126,500 (2024) of foreign-earned income. Requires passing the physical presence test (330 days abroad). Track every travel day from day one.', tag: 'legal', tagLabel: 'Legal' },
          { id: 'll-12', text: 'Open a Wise (formerly TransferWise) multi-currency account and get the debit card', detail: 'Wise gives you local bank details in USD, EUR, GBP, AUD, and more. Receive client payments locally, spend abroad at real exchange rates. Apply and verify before you leave.', tag: 'finance', tagLabel: 'Income' },
          { id: 'll-13', text: 'Get a no-foreign-transaction-fee credit card as backup (Charles Schwab, Chase Sapphire, Revolut)', detail: 'Schwab Investor Checking reimburses all ATM fees globally ~ a must for US nomads. Set credit limit high enough for emergencies. Keep this as a backup, not primary.', tag: 'finance', tagLabel: 'Income' },
          { id: 'll-14', text: 'Set up a trusted person at home to handle physical mail, tax documents, and banking emergencies', detail: 'Give power of attorney to a trusted family member or use a mail forwarding service (Traveling Mailbox, Earth Class Mail). Important tax docs still arrive by physical mail.', tag: 'action', tagLabel: 'Action Item' },
          { id: 'll-15', text: 'Cancel or transfer home-country subscriptions, utilities, and insurance before departure', detail: 'Cancellation checklist: lease/storage, car insurance, home utilities, gym, local phone plan, health insurance (after international is active). Keep a spreadsheet of what you\'ve cancelled and when.', tag: 'action', tagLabel: 'Action Item' },
        ],
      },
    ],
    tip: {
      variant: 'blue',
      icon: 'Scale',
      content: '<strong>Tax Residency Warning:</strong> Many countries will consider you a tax resident if you spend more than 183 days there in a calendar year. Plan your itinerary to stay under this threshold in any country unless you\'re deliberately establishing residency there. Track days in a spreadsheet from the moment you leave.',
    },
  },
  {
    id: 'pack',
    index: 4,
    iconName: 'Backpack',
    tabLabel: 'Pack',
    title: 'Pack &',
    titleEmphasis: 'Prepare',
    taskCount: 5,
    itemLabel: 'items',
    timing: '2–3 Weeks Before Departure',
    description: 'How you pack tells you everything about how you\'ll travel. Carry-on only nomads move faster, save money, and stress less. This phase teaches you to take only what you truly need ~ and make it count.',
    sections: [
      {
        id: 'predeparture',
        title: 'Pre-Departure Checklist',
        icon: 'ClipboardList',
        tasks: [
          { id: 'pp-01', text: 'Book your first month of accommodation ~ Airbnb, furnished apartment, or guesthouse in a central neighborhood', detail: 'Don\'t book long-term until you\'ve lived in the area 2 weeks. Neighborhoods matter enormously. Book 30 days, then negotiate monthly rate directly with the landlord.', tag: 'priority', tagLabel: 'High Priority' },
          { id: 'pp-02', text: 'Purchase an unlocked smartphone or confirm your phone is unlocked for local SIMs', detail: 'Local SIMs cost $5–15 for 30GB data in most SE Asian countries. They\'re faster and cheaper than international roaming. Bring a phone that accepts dual-SIM or eSIM.', tag: 'action', tagLabel: 'Action Item' },
          { id: 'pp-03', text: 'Set up a reliable VPN on all devices before leaving (NordVPN, ExpressVPN, Mullvad)', detail: 'Essential for: accessing home-country banking, public WiFi security, streaming services, and working from certain countries. Test it works on your setup before departure.', tag: 'action', tagLabel: 'Action Item' },
          { id: 'pp-04', text: 'Back up all files to both local SSD and cloud ~ test that your cloud backup restores correctly', detail: 'Run an actual restore test, not just a backup test. Back up: client files, contracts, financial records, personal photos. Use Backblaze ($9/mo) for offsite backup.', tag: 'priority', tagLabel: 'High Priority' },
          { id: 'pp-05', text: 'Do a 1-week dry run: work from coffee shops only, no desk at home, practice your new routine', detail: 'Find out now if your workflow breaks when WiFi is inconsistent or the environment is noisy. Better to discover your pain points at home than in Bali.', tag: 'action', tagLabel: 'Action Item' },
        ],
      },
    ],
    tip: {
      variant: 'default',
      icon: 'Backpack',
      content: '<strong>The One-Bag Rule:</strong> Lay everything out on your bed. Remove 30%. Now it\'ll fit. Most nomads report that after 3 months, they\'ve shipped home or donated half of what they originally packed. The things you\'ll wish you brought: better headphones, a good travel pillow, and one extra layer for cold nights.',
    },
    tool: 'packing-list',
  },
  {
    id: 'land',
    index: 5,
    iconName: 'PlaneLanding',
    tabLabel: 'Land',
    title: 'Land &',
    titleEmphasis: 'Establish',
    taskCount: 12,
    timing: 'First 30–90 Days on the Ground',
    description: 'The first month is thrilling, disorienting, and defining. How you structure this period determines whether you build a sustainable lifestyle or burn out and go home. Move with intention, not just adventure.',
    sections: [
      {
        id: 'first72',
        title: 'First 72 Hours Protocol',
        icon: 'Zap',
        tasks: [
          { id: 'le-01', text: 'Buy a local SIM card within 2 hours of landing ~ test data, calls, and WhatsApp', detail: 'Airport SIMs are 20–40% more expensive. If you have a hotel/Airbnb booked, grab the SIM at the first 7-Eleven or local shop you pass. Data connectivity is priority one.', tag: 'priority', tagLabel: 'First 72hrs' },
          { id: 'le-02', text: 'Complete your first work session within 48 hours ~ prove your setup works from your new base', detail: 'Don\'t take a 3-day "settling in" break. Do a real 4-hour work session. Identify any gaps in your setup (power, WiFi, noise, ergonomics) while you still have flexibility to fix them.', tag: 'priority', tagLabel: 'First 72hrs' },
          { id: 'le-03', text: 'Walk every street in a 1km radius of your accommodation ~ learn your immediate neighborhood', detail: 'Find: nearest supermarket, pharmacy, ATM, coffee shop with WiFi, local restaurant under $5. Knowing your neighborhood beats any guidebook.', tag: 'action', tagLabel: 'Exploration' },
          { id: 'le-04', text: 'Notify your bank and Wise of your new country ~ prevent payment freezes', detail: 'Log into your bank app and update your location. Some banks auto-freeze cards used abroad without notice. Do this before your first purchase.', tag: 'finance', tagLabel: 'Finance' },
        ],
      },
      {
        id: 'workspace',
        title: 'Workspace & Routine',
        icon: 'Building2',
        tasks: [
          { id: 'le-05', text: 'Trial 3–5 co-working spaces in week one ~ score them on WiFi, vibe, price, and community', detail: 'Most coworking spaces offer free day passes. Try different ones: touristy (better community) vs. local (better value). Monthly memberships are 40–60% cheaper than day rates.', tag: 'action', tagLabel: 'Action Item' },
          { id: 'le-06', text: 'Design your daily routine by Day 7 and protect it for the full first month', detail: 'Example structure: 7–9am personal time, 9am–1pm deep work, 1–2pm lunch + walk, 2–5pm meetings/shallow work, 5pm+ explore. Protect this ruthlessly. The #1 nomad mistake is letting travel eat work hours.', tag: 'priority', tagLabel: 'High Priority' },
          { id: 'le-07', text: 'Attend at least 2 nomad meetups or community events in your first 2 weeks', detail: 'Check: Meetup.com, Facebook groups, Couchsurfing meetups, coworking events. The friends you make in week 1 will shape your entire experience. Show up even when tired.', tag: 'community', tagLabel: 'Community' },
          { id: 'le-08', text: 'Set up your ergonomic workspace at your accommodation ~ back, neck, and wrists will thank you', detail: 'Buy a laptop stand at a local shop ($10–20). Use a rolled towel as a lumbar support. Most nomad health problems start with a bad workstation setup in month 1.', tag: 'action', tagLabel: 'Action Item' },
        ],
      },
      {
        id: 'debrief',
        title: '30-Day Debrief Checklist',
        icon: 'ClipboardCheck',
        tasks: [
          { id: 'le-09', text: 'Review your actual vs. budgeted monthly spend ~ adjust your MVI if needed', detail: 'Be honest. Most nomads underestimate: eating out, one-off gear purchases, tourist activities, and unexpected fees. Adjust your income target accordingly.', tag: 'finance', tagLabel: 'Finance' },
          { id: 'le-10', text: 'Rate your destination honestly: stay for another month, or plan your next stop?', detail: 'Trust your gut over sunk cost. If you dread Monday mornings from here, move. If you feel alive and productive, extend. Never stay out of obligation.', tag: 'action', tagLabel: 'Decision' },
          { id: 'le-11', text: 'Audit your income performance ~ did you hit your MVI? What changed from your pre-departure setup?', detail: 'Many nomads see 10–20% productivity dip in month 1 due to exploration. That\'s normal. Month 2–3 usually rebounds. If income dropped dramatically, identify the root cause before moving on.', tag: 'finance', tagLabel: 'Finance' },
          { id: 'le-12', text: 'Write a 30-day journal entry: what worked, what didn\'t, what you\'d tell someone starting today', detail: 'This becomes your personal playbook. Nomads who journal their early experience have significantly better decision-making in years 2 and 3.', tag: 'reflection', tagLabel: 'Reflection' },
        ],
      },
    ],
    tool: 'expense-tracker',
  },
  {
    id: 'scale',
    index: 6,
    iconName: 'Rocket',
    tabLabel: 'Scale',
    title: 'Scale &',
    titleEmphasis: 'Optimize',
    taskCount: 12,
    timing: 'Month 3+ · Long-Term Optimization',
    description: 'Congratulations ~ you\'re a nomad. Now comes the real work: building a life that doesn\'t just sustain you, but compounds. Income stacks, base rotations, tax strategies, and the intangibles that make nomad life extraordinary long-term.',
    sections: [
      {
        id: 'rotation',
        title: 'Base Rotation Planning',
        icon: 'Map',
        tasks: [
          { id: 'so-01', text: 'Identify 2–3 "base" cities you return to repeatedly ~ and negotiate semi-permanent accommodation rates', detail: 'Most seasoned nomads aren\'t constantly moving ~ they rotate between 2–3 places they love. Negotiating monthly rates as a repeat tenant saves 20–40% vs. booking fresh each time.', tag: 'priority', tagLabel: 'High Impact' },
          { id: 'so-02', text: 'Plan your year with a rough seasonal calendar ~ avoid monsoons, peak tourist pricing, and 183-day tax traps', detail: 'Example rotation: Jan–Mar Bali (dry season), Apr–Jun Chiang Mai (before hot season), Jul–Sep Lisbon (summer), Oct–Dec Colombia or Georgia. Plan 6 months ahead to get best accommodation rates.', tag: 'action', tagLabel: 'Planning' },
          { id: 'so-03', text: 'Audit your travel pace ~ are you moving too fast? Most nomads stabilize at 1–3 months per location', detail: 'Constant movement is exciting but expensive and exhausting. The sweet spot for most nomads is 4–8 weeks per location: long enough to feel at home, short enough to stay curious.', tag: 'action', tagLabel: 'Self-Audit' },
          { id: 'so-04', text: 'Consider establishing formal residency somewhere that optimizes your tax situation after year one', detail: 'Popular options: Georgia (1% tax on foreign income), Portugal (NHR scheme), Paraguay ($0 tax on foreign income), UAE ($0 tax). Consult a nomad tax advisor before making this decision.', tag: 'legal', tagLabel: 'Tax Strategy' },
        ],
      },
      {
        id: 'network',
        title: 'Network & Community',
        icon: 'Globe',
        tasks: [
          { id: 'so-05', text: 'Attend 1 nomad conference or retreat per year (7in7, DNX, Nomad Summit, Remote Year retreats)', detail: 'The ROI on 1 conference is enormous: clients, collaborators, friendships that survive 10 moves. These are not optional when you\'re serious about the lifestyle long-term.', tag: 'community', tagLabel: 'Community' },
          { id: 'so-06', text: 'Build a "nomad board of advisors" ~ 3–5 peers further along who you can call with real problems', detail: 'Not mentors on a pedestal ~ peers you\'ve built genuine relationships with. One person who\'s navigated a tax audit abroad is worth more than 100 forum posts.', tag: 'community', tagLabel: 'Network' },
          { id: 'so-07', text: 'Start documenting your journey publicly ~ newsletter, blog, or social content about your real experience', detail: 'Don\'t wait until you feel "established enough." The most valuable nomad content is honest and early. Start a simple monthly email to even 50 people. Many nomad careers began this way.', tag: 'content', tagLabel: 'Content' },
          { id: 'so-08', text: 'Invest intentionally in local relationships ~ language classes, local sports, volunteer work', detail: 'The deepest nomad experiences come from relationships with locals, not just other nomads. Learn 50 words of the local language, join a local gym class, eat at family restaurants. Loneliness is solved by depth, not breadth.', tag: 'wellbeing', tagLabel: 'Wellbeing' },
        ],
      },
      {
        id: 'scorecard',
        title: 'Year-1 Performance Scorecard',
        icon: 'BarChart3',
        tasks: [
          { id: 'so-09', text: 'Income grew or held stable vs. pre-nomad baseline ~ if not, identify and fix the leak', detail: 'Many nomads earn more after year 1: lower cost of living = less desperate client acceptance, more creative space = better work, global network = better opportunities.', tag: 'finance', tagLabel: 'Finance' },
          { id: 'so-10', text: 'You have a clear answer to "where do you call home?" ~ even if it\'s a rotation of 2–3 places', detail: 'Rootlessness feels exciting for 6 months. Long-term nomads create their own roots: a favourite neighbourhood, a regular café, friendships that predate last month. Belonging is engineered, not found.', tag: 'wellbeing', tagLabel: 'Wellbeing' },
          { id: 'so-11', text: 'You\'ve diversified into at least 2 income sources and started building a third', detail: 'Single-income nomads are one lost client away from panic. The goal by year-end: primary income + one supplementary stream that grows while you sleep, even if it\'s only $200/mo.', tag: 'finance', tagLabel: 'Finance' },
          { id: 'so-12', text: 'You\'d choose this life again if you had to decide today ~ the honest gut-check test', detail: 'The nomad life is right for some people and wrong for others, and that can change over time. Run this check at 6 months and 12 months. There\'s no shame in evolving ~ the point is to build the life you actually want.', tag: 'reflection', tagLabel: 'Reflection' },
        ],
      },
    ],
    tip: {
      variant: 'gold',
      icon: 'Rocket',
      content: '<strong>The Compound Effect:</strong> Year 1 is survival and exploration. Year 2 is optimization. Year 3 is when things compound: your rates are higher, your network is global, your tax situation is optimized, and you\'ve built the systems to work from anywhere at your best. The nomads who make it past 2 years almost never go back.',
    },
    tool: 'income-stack',
  },
];

export const DESTINATIONS: Destination[] = [
  { id: 'chiang-mai', rank: 1, city: 'Chiang Mai', country: 'Thailand', region: 'Southeast Asia', monthlyCost: '$750/mo', internet: 'Fast', visaDays: '60 days', score: 9.4 },
  { id: 'bali', rank: 2, city: 'Bali', country: 'Indonesia', region: 'Southeast Asia', monthlyCost: '$1,100/mo', internet: 'Fast', visaDays: '60 days', score: 9.2 },
  { id: 'medellin', rank: 3, city: 'Medellín', country: 'Colombia', region: 'Latin America', monthlyCost: '$1,000/mo', internet: 'Fast', visaDays: '90 days', score: 9.0 },
  { id: 'lisbon', rank: 4, city: 'Lisbon', country: 'Portugal', region: 'Europe', monthlyCost: '$2,300/mo', internet: 'Excellent', visaDays: '90 days', score: 8.9 },
  { id: 'tbilisi', rank: 5, city: 'Tbilisi', country: 'Georgia', region: 'Eastern Europe', monthlyCost: '$800/mo', internet: 'Fast', visaDays: '365 days', score: 8.7 },
  { id: 'hcmc', rank: 6, city: 'Ho Chi Minh City', country: 'Vietnam', region: 'Southeast Asia', monthlyCost: '$900/mo', internet: 'Fast', visaDays: '90 days', score: 8.5 },
];

export const PACKING_CATEGORIES: PackingCategory[] = [
  {
    id: 'tech',
    title: 'Tech & Work',
    iconName: 'Laptop',
    items: [
      { id: 'pk-01', label: 'Laptop (+ charger)' },
      { id: 'pk-02', label: 'Noise-cancelling headphones' },
      { id: 'pk-03', label: 'Universal travel adapter' },
      { id: 'pk-04', label: 'Portable power bank (20,000mAh)' },
      { id: 'pk-05', label: 'Laptop stand (foldable)' },
      { id: 'pk-06', label: 'External portable SSD (1TB)' },
      { id: 'pk-07', label: 'USB-C hub / dongle' },
      { id: 'pk-08', label: 'Travel mouse' },
    ],
  },
  {
    id: 'clothing',
    title: 'Clothing (7-day capsule)',
    iconName: 'Shirt',
    items: [
      { id: 'pk-09', label: '5 t-shirts (merino wool preferred)' },
      { id: 'pk-10', label: '2 pairs lightweight trousers' },
      { id: 'pk-11', label: '1 pair shorts' },
      { id: 'pk-12', label: '1 lightweight packable jacket' },
      { id: 'pk-13', label: '5 underwear (merino or synthetic)' },
      { id: 'pk-14', label: 'Walking shoes + flip flops' },
      { id: 'pk-15', label: '1 smart/smart-casual outfit' },
    ],
  },
  {
    id: 'health',
    title: 'Health & Wellness',
    iconName: 'HeartPulse',
    items: [
      { id: 'pk-16', label: 'Prescription medications (6-month supply)' },
      { id: 'pk-17', label: 'Travel first aid kit' },
      { id: 'pk-18', label: 'Water purification tablets' },
      { id: 'pk-19', label: 'Sunscreen SPF 50+' },
      { id: 'pk-20', label: 'Insect repellent (DEET-based)' },
      { id: 'pk-21', label: 'Electrolyte powder sachets' },
    ],
  },
  {
    id: 'documents',
    title: 'Documents & Finance',
    iconName: 'FileText',
    items: [
      { id: 'pk-22', label: 'Passport (18+ months validity)' },
      { id: 'pk-23', label: 'Photocopies of all documents' },
      { id: 'pk-24', label: 'Travel insurance card + emergency number' },
      { id: 'pk-25', label: 'Wise debit card + backup credit card' },
      { id: 'pk-26', label: '$200–300 cash in local currency' },
    ],
  },
];

export const INCOME_STREAMS: IncomeStream[] = [
  { id: 'freelance', name: 'Primary Freelance / Remote Job', type: 'Active Income', iconName: 'Briefcase', amount: 3500, maxAmount: 5000, active: true },
  { id: 'content', name: 'Content / Newsletter', type: 'Semi-Passive', iconName: 'PenLine', amount: 400, maxAmount: 5000, active: true },
  { id: 'product', name: 'Digital Product / Course', type: 'Passive ~ Target', iconName: 'Package', amount: 0, maxAmount: 5000, active: false },
];

export const NETWORK_PLATFORMS: NetworkPlatform[] = [
  { id: 'nomadlist', name: 'Nomadlist', description: 'City rankings & nomad community', iconName: 'Map' },
  { id: 'slack', name: 'Slack Nomads', description: 'Largest nomad Slack group', iconName: 'MessageSquare' },
  { id: 'workfrom', name: 'Workfrom', description: 'Find cafes & coworking spaces', iconName: 'MapPin' },
  { id: 'remoteyear', name: 'Remote Year', description: 'Group travel programs', iconName: 'Users' },
  { id: 'dc', name: 'Dynamite Circle', description: 'Nomad entrepreneur community', iconName: 'Briefcase' },
  { id: 'selina', name: 'Selina', description: 'Coliving + coworking spaces', iconName: 'Home' },
];

export const INSPIRATION_QUOTES: InspirationQuote[] = [
  { text: 'The world is a book, and those who do not travel read only one page.', author: 'Saint Augustine' },
  { text: 'Travel is the only thing you buy that makes you richer.', author: 'Unknown' },
  { text: 'Not all those who wander are lost.', author: 'J.R.R. Tolkien' },
  { text: 'The biggest adventure you can take is to live the life of your dreams.', author: 'Oprah Winfrey' },
  { text: 'Life is either a daring adventure or nothing at all.', author: 'Helen Keller' },
  { text: 'To travel is to discover that everyone is wrong about other countries.', author: 'Aldous Huxley' },
  { text: 'A ship in harbor is safe, but that is not what ships are built for.', author: 'John A. Shedd' },
  { text: 'Your life does not get better by chance, it gets better by change.', author: 'Jim Rohn' },
];

export const TOTAL_TASK_COUNT = PHASES.reduce((acc, p) => acc + p.taskCount, 0);
export const TOTAL_PACKING_COUNT = PACKING_CATEGORIES.reduce((acc, c) => acc + c.items.length, 0);
export const TOOL_COUNT = PHASES.filter((p) => p.tool).length;
