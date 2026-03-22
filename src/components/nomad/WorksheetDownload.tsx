'use client';

import { useState } from 'react';
import { Download, Loader2 } from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────

type GridTableExtra = {
  type: 'grid-table';
  label: string;
  headers: string[];
  colWidths: number[]; // DXA units
  dataRows: number;
};

type ChecklistExtra = {
  type: 'checklist';
  label: string;
  items: string[];
};

type CalcTableExtra = {
  type: 'calc-table';
  label: string;
  rows: string[];
  colWidths: [number, number]; // [label col, value col] DXA
};

// Flexible table with pre-filled cell content; null = empty (user fills in)
type DataTableExtra = {
  type: 'data-table';
  label: string;
  headers: string[];
  colWidths: number[];
  rows: (string | null)[][];
  summaryRows?: number[]; // 0-based indices rendered bold + shaded
};

// Journal prompts — each prompt gets its own block of writing lines
type JournalPromptsExtra = {
  type: 'journal-prompts';
  label: string;
  prompts: string[];
  linesPerPrompt?: number; // default 3
};

type WorksheetExtra = GridTableExtra | ChecklistExtra | CalcTableExtra | DataTableExtra | JournalPromptsExtra;

interface WorksheetTask {
  number: number;
  text: string;
  detail: string;
  tag: string;
  tagColor: string;
  noteLines?: number;
  extra?: WorksheetExtra | WorksheetExtra[];
  extraNote?: string; // plain text paragraph rendered after the extra, before notes
}

interface WorksheetConfig {
  sectionLabel: string;
  title: string;
  subtitle: string;
  tasks: WorksheetTask[];
  quote?: string;
  filename: string;
}

// ─── Worksheet configs ────────────────────────────────────────────────────────

export const WORKSHEET_CONFIGS: Record<string, WorksheetConfig> = {
  clarity: {
    sectionLabel: 'CLARITY & VISION',
    title: 'Digital Nomad Action Worksheet',
    subtitle: 'Complete all 5 tasks to build your foundation for location independence',
    tasks: [
      {
        number: 1,
        text: 'Write your \u201cNomad Manifesto\u201d \u2014 1 page defining what freedom means to you personally',
        detail: 'Be specific: what does your ideal Tuesday look like? What country are you in? What time do you start work? This becomes your north star when things get hard.',
        tag: '\u26a1 High Priority',
        tagColor: '6366F1',
      },
      {
        number: 2,
        text: 'List every fear and create a pre-mortem \u2014 what could go wrong, and what\u2019s your response?',
        detail: 'Write out each fear (money running out, loneliness, getting sick abroad) and write a single response action for each. Fear named is fear tamed.',
        tag: '\u2295 Mindset',
        tagColor: '64748B',
      },
      {
        number: 3,
        text: 'Set a firm departure target date \u2014 month and year, write it everywhere',
        detail: 'Put it on your phone lock screen, bathroom mirror, and desk. \u201cSomeday\u201d is a dream killer. A date is a commitment.',
        tag: '\u26a1 High Priority',
        tagColor: '6366F1',
      },
      {
        number: 4,
        text: 'Tell 3 trusted people your plan \u2014 accountability partners who will hold you to it',
        detail: 'Not skeptics. Choose people who believe in you and won\u2019t talk you out of it. Ask them to check in monthly.',
        tag: '\u2295 Social',
        tagColor: '64748B',
      },
      {
        number: 5,
        text: 'Read 2 nomad memoirs or follow 5 nomads who\u2019ve been at it 2+ years',
        detail: 'Recommendations: \u201cRemote\u201d by DHH, \u201cThe 4-Hour Workweek\u201d by Ferriss, \u201cVagabonding\u201d by Potts. Follow @levelsio, @tropicalmba on Twitter/X.',
        tag: '\u2295 Research',
        tagColor: '64748B',
      },
    ],
    quote: '\u201cThe journey of a thousand miles begins with a single step.\u201d \u2014 Complete this worksheet before moving to the next phase.',
    filename: 'clarity-vision-worksheet.docx',
  },

  skills: {
    sectionLabel: 'SKILLS AUDIT & REMOTE PATH',
    title: 'Digital Nomad Action Worksheet',
    subtitle: 'Map your skills, choose your income path, and close the gaps before you go',
    tasks: [
      {
        number: 1,
        text: 'Audit your current skills for remote viability \u2014 what can you do from anywhere today?',
        detail: 'Writing, coding, design, marketing, finance, consulting, teaching, video editing \u2014 if you can do it on a laptop, it can go nomad. List every skill, rate demand 1\u201310.',
        tag: '\u26a1 High Priority',
        tagColor: '6366F1',
        noteLines: 5,
      },
      {
        number: 2,
        text: 'Choose your primary income path: remote employee, freelancer, agency owner, or solopreneur',
        detail: 'Each has different timelines to launch: remote employee (fastest if negotiated), freelancer (1\u20133 months), solopreneur/product (3\u201312 months). Be realistic about your timeline.',
        tag: '$ Income',
        tagColor: 'B45309',
      },
      {
        number: 3,
        text: 'Identify 1 skill gap to fill before leaving \u2014 pick an online course or project to close it',
        detail: 'If you want to freelance as a copywriter but haven\u2019t had clients, spend 6 weeks writing for free for a nonprofit to build a portfolio first.',
        tag: '\u2197 Growth',
        tagColor: '64748B',
      },
      {
        number: 4,
        text: 'Research salary benchmarks for remote roles in your field',
        detail: 'Use levels.fyi, Glassdoor remote filters, and LinkedIn salary data. Know your market rate before you negotiate anything.',
        tag: '$ Income',
        tagColor: 'B45309',
      },
    ],
    quote: '\u201cSkills are the currency of the nomad economy. Know what you\u2019re worth \u2014 then charge it.\u201d',
    filename: 'skills-audit-worksheet.docx',
  },

  freelance: {
    sectionLabel: 'FREELANCE LAUNCH',
    title: 'Freelancer Path  |  Digital Nomad Action Worksheet',
    subtitle: 'Build your portfolio, land your first client, and hit your MVI before you go',
    tasks: [
      {
        number: 1,
        text: 'Build a 3-piece portfolio that demonstrates your core skill to paying-client standard',
        detail: 'No clients yet? Do a free or discounted project for a real business. A working portfolio beats a perfect resume every time. Publish it on a personal site or Notion.',
        tag: '\u26a1 High Priority',
        tagColor: '6366F1',
        extra: {
          type: 'grid-table',
          label: 'My 3 portfolio pieces:',
          headers: ['Project Title', 'Client / Business', 'Skill Demonstrated', 'Where Published'],
          colWidths: [2500, 2000, 2440, 1700],
          dataRows: 3,
        },
        noteLines: 2,
      },
      {
        number: 2,
        text: 'Land your first paid freelance client before setting your departure date',
        detail: 'Start in your existing network \u2014 ex-colleagues, LinkedIn connections, local businesses. Your first client is about proof, not profit. $500 beats $0.',
        tag: '\u25ce Action Item',
        tagColor: '7C3AED',
        extra: {
          type: 'grid-table',
          label: 'My outreach tracker:',
          headers: ['Contact / Business', 'How You Know Them', 'Date Reached Out', 'Outcome'],
          colWidths: [2400, 2200, 1840, 2200],
          dataRows: 5,
        },
        noteLines: 2,
      },
      {
        number: 3,
        text: 'Create profiles on Upwork, Toptal, or your niche\u2019s leading freelance marketplace',
        detail: 'Pick 1\u20132 platforms and go deep. A fully optimized Upwork profile beats 5 mediocre ones. Get your first 3 reviews before you leave home.',
        tag: '$ Income',
        tagColor: 'B45309',
        extra: {
          type: 'checklist',
          label: 'Platforms to set up (pick 1\u20132 and go deep):',
          items: ['Upwork', 'Toptal', 'Fiverr Pro', 'PeoplePerHour', 'Contra', 'Your niche\u2019s leading marketplace'],
        },
        noteLines: 2,
      },
      {
        number: 4,
        text: 'Set your minimum viable income (MVI) \u2014 the monthly amount that covers your base expenses abroad',
        detail: 'This is your launch threshold. For Southeast Asia: $1,500\u2013$2,500/mo. For Europe: $3,000\u2013$4,000/mo. Don\u2019t leave until you\u2019re hitting 80% of this consistently.',
        tag: '$ Income',
        tagColor: 'B45309',
        extra: {
          type: 'calc-table',
          label: 'My MVI calculator (monthly):',
          rows: [
            'Accommodation (rent / Airbnb)',
            'Food & groceries',
            'Transport (local + flights home)',
            'Coworking space / internet',
            'Health insurance',
            'Entertainment & lifestyle',
            'Emergency buffer (10%)',
            'TOTAL \u2014 My MVI',
          ],
          colWidths: [6480, 2160],
        },
        noteLines: 2,
      },
      {
        number: 5,
        text: 'Write and publish 3 pieces of content demonstrating your expertise (LinkedIn, blog, or X/Twitter)',
        detail: 'Content compounds. A well-written LinkedIn post about your niche skill can bring inbound clients for years. Start the habit now, not after you land.',
        tag: '\u25ce Action Item',
        tagColor: '7C3AED',
        extra: {
          type: 'grid-table',
          label: 'My content plan:',
          headers: ['Content Topic / Title', 'Platform', 'Target Publish Date', 'Status'],
          colWidths: [2800, 1800, 2200, 1840],
          dataRows: 3,
        },
        noteLines: 2,
      },
    ],
    quote: '\u201cYour first client proves it\u2019s possible. Your MVI proves it\u2019s sustainable. Don\u2019t leave until you have both.\u201d',
    filename: 'freelance-launch-worksheet.docx',
  },

  remote: {
    sectionLabel: 'REMOTE NEGOTIATION',
    title: 'Employee Path  |  Digital Nomad Action Worksheet',
    subtitle: 'Negotiate your way to location freedom \u2014 with evidence, strategy, and a backup plan',
    tasks: [
      {
        number: 1,
        text: 'Build your remote work business case \u2014 document your productivity metrics for the past 90 days',
        detail: 'Track tasks completed, projects delivered, and outcomes driven. Your manager needs data, not promises. Aim for a 2-page doc with clear KPIs.',
        tag: '\u26a1 High Priority',
        tagColor: '6366F1',
        extra: {
          type: 'grid-table',
          label: 'My 90-day productivity evidence:',
          headers: ['Task / Project', 'Outcome / Result', 'Metric / KPI'],
          colWidths: [3000, 3000, 2640],
          dataRows: 5,
        },
        noteLines: 2,
      },
      {
        number: 2,
        text: 'Request a 3-month remote trial with your employer \u2014 start with partial remote, escalate to full',
        detail: 'Frame it as a productivity experiment. Offer weekly check-ins. Make it easy for your manager to say yes to a trial. Pilots almost always get extended.',
        tag: '\u25ce Action Item',
        tagColor: '7C3AED',
        extra: {
          type: 'checklist',
          label: 'My trial proposal checklist:',
          items: [
            'Frame it as a productivity experiment (not a lifestyle request)',
            'Offer weekly check-ins with your manager',
            'Propose a clear 3-month start and end date',
            'Define success metrics upfront',
            'Put the proposal in writing via email',
          ],
        },
        noteLines: 2,
      },
      {
        number: 3,
        text: 'If denied, begin a parallel job search for 100% remote positions on your current salary',
        detail: 'Job boards: We Work Remotely, Remote.co, Remotive.io, LinkedIn (filter: remote). Apply to 5\u201310 roles weekly. Never quit before new income is secured.',
        tag: '$ Income',
        tagColor: 'B45309',
        extra: {
          type: 'checklist',
          label: 'Job boards to track applications:',
          items: ['We Work Remotely', 'Remote.co', 'Remotive.io', 'LinkedIn (filter: remote)', 'FlexJobs', 'Himalayas'],
        },
        noteLines: 2,
      },
      {
        number: 4,
        text: 'Clarify your employment contract\u2019s geographic restrictions and tax implications',
        detail: 'Many contracts prohibit working abroad without HR approval. Some trigger employer tax obligations in foreign countries. Get written permission or clarify your contractor status.',
        tag: '\u2696 Legal',
        tagColor: '0369A1',
        extra: {
          type: 'checklist',
          label: 'Legal checklist:',
          items: [
            'Review employment contract for geographic restrictions',
            'Check if working abroad triggers employer tax obligations',
            'Request written HR approval to work remotely abroad',
            'Clarify contractor vs. employee status if relevant',
            'Consult a tax professional about your situation',
          ],
        },
        noteLines: 2,
      },
    ],
    quote: '\u201cYou don\u2019t get what you deserve \u2014 you get what you negotiate.\u201d \u2014 Never quit before your next income is secured.',
    filename: 'remote-negotiation-worksheet.docx',
  },

  runway: {
    sectionLabel: 'FINANCIAL RUNWAY',
    title: 'Digital Nomad Action Worksheet',
    subtitle: 'Build your emergency fund, set up payments, and cut costs before you go',
    tasks: [
      {
        number: 1,
        text: 'Build a 3-month emergency runway in a separate savings account before leaving',
        detail: 'This is your \u201coh shit\u201d fund, not your travel fund. It should cover 3 months of destination living even if you earn zero. Automate weekly transfers to build it.',
        tag: '\u26a1 High Priority',
        tagColor: '6366F1',
        extra: {
          type: 'data-table',
          label: 'My runway calculator:',
          headers: ['Expense Category', 'Monthly Cost ($)', 'x3 Runway ($)'],
          colWidths: [4000, 2320, 2320],
          rows: [
            ['Accommodation', null, null],
            ['Food & groceries', null, null],
            ['Transport', null, null],
            ['Health insurance', null, null],
            ['Coworking / internet', null, null],
            ['Lifestyle & misc', null, null],
            ['MONTHLY TOTAL', null, null],
            ['3-MONTH RUNWAY TARGET', null, null],
            ['Current savings toward goal', null, null],
          ],
          summaryRows: [6, 7, 8],
        },
        noteLines: 2,
      },
      {
        number: 2,
        text: 'Set up international payment infrastructure: Wise, Stripe, or Payoneer account verified',
        detail: 'Verify identity before you leave \u2014 some verifications require local proof of address. Wise is the gold standard for receiving/converting currencies with minimal fees.',
        tag: '$ Income',
        tagColor: 'B45309',
        extra: {
          type: 'checklist',
          label: 'Payment accounts to set up before departure:',
          items: [
            'Wise \u2014 Best for receiving/converting currencies with low fees',
            'Stripe \u2014 Best for invoicing clients and receiving card payments',
            'Payoneer \u2014 Good for platforms like Upwork and Amazon',
            'Revolut \u2014 Useful backup card with multi-currency support',
          ],
        },
        noteLines: 2,
      },
      {
        number: 3,
        text: 'Research and register a legal business entity appropriate for your income level',
        detail: 'Under $50k/yr: sole trader often fine. $50\u2013150k: consider US LLC or UK LTD. Over $150k: consult a nomad-specialist accountant. Estonian e-Residency is popular for EU banking access.',
        tag: '\u2696 Legal',
        tagColor: '0369A1',
        extra: {
          type: 'data-table',
          label: 'Business entity decision guide:',
          headers: ['Income Level', 'Recommended Structure', 'Key Benefit', 'Action'],
          colWidths: [1900, 2200, 2500, 2040],
          rows: [
            ['Under $50k/yr', 'Sole Trader', 'Simplest, lowest cost', null],
            ['$50k\u2013$150k/yr', 'US LLC or UK LTD', 'Tax efficiency, credibility', null],
            ['Over $150k/yr', 'Nomad-specialist accountant', 'Optimized structure', null],
            ['EU focus', 'Estonian e-Residency', 'EU banking access', null],
          ],
        },
        noteLines: 2,
      },
      {
        number: 4,
        text: 'Reduce home expenses by 30% to accelerate runway savings \u2014 subscriptions, dining, extras',
        detail: 'Cancel or pause: gym memberships (you\u2019re leaving), streaming duplicates, meal kits, daily coffees. Every $200/mo saved = one more week of runway.',
        tag: '$ Income',
        tagColor: 'B45309',
        extra: {
          type: 'data-table',
          label: 'My expense audit \u2014 cancel or pause before leaving:',
          headers: ['Subscription / Expense', 'Current Cost/mo', 'Cancel or Keep?', 'Monthly Saving'],
          colWidths: [2800, 1660, 2040, 2140],
          rows: [
            ['Gym membership', null, null, null],
            ['Streaming services (duplicates)', null, null, null],
            ['Meal kit / delivery subscriptions', null, null, null],
            ['Daily coffees / dining out', null, null, null],
            ['Software / app subscriptions', null, null, null],
            ['Other', null, null, null],
            ['TOTAL MONTHLY SAVINGS', null, null, null],
          ],
          summaryRows: [6],
        },
        noteLines: 2,
      },
    ],
    quote: '\u201cFinancial freedom is not about having a lot of money \u2014 it\u2019s having enough runway to take the leap.\u201d',
    filename: 'financial-runway-worksheet.docx',
  },

  visa: {
    sectionLabel: 'VISA STRATEGY',
    title: 'Digital Nomad Action Worksheet',
    subtitle: 'Know your legal limits, secure the right visa, and never overstay again',
    tasks: [
      {
        number: 1,
        text: 'Research your legal stay duration as a tourist in your top 3 destinations',
        detail: 'Tourist stays: Thailand 30\u201360 days, Bali 60 days (extendable), Portugal/EU 90 days per 180. Know when you need to leave or apply for an upgrade.',
        tag: '\u2696 Legal',
        tagColor: '0369A1',
        extra: {
          type: 'data-table',
          label: 'My tourist stay research:',
          headers: ['Destination', 'Stay Limit', 'Extendable?', 'Overstay Penalty', 'Leave By Date'],
          colWidths: [1800, 1500, 1400, 2100, 1840],
          rows: [
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null],
          ],
        },
        noteLines: 2,
      },
      {
        number: 2,
        text: 'Investigate digital nomad visa programs that match your income level and nationality',
        detail: 'Active programs (2024): Portugal D8 (\u20ac760/mo income), Bali Digital Nomad Visa (USD $500/mo), Thailand LTR (USD $80k/yr), Estonia Digital Nomad Visa (\u20ac3,504/mo). Requirements change \u2014 check official embassy sites.',
        tag: '\u2696 Legal',
        tagColor: '0369A1',
        extra: {
          type: 'data-table',
          label: 'Digital nomad visa comparison:',
          headers: ['Country', 'Visa Name', 'Min Income Req.', 'Duration', 'Eligible?'],
          colWidths: [1400, 1900, 2000, 2000, 1340],
          rows: [
            ['Portugal', 'D8 Visa', '\u20ac760/mo', '1 yr (renewable)', null],
            ['Bali', 'Digital Nomad Visa', 'USD $500/mo', 'Up to 1 yr', null],
            ['Thailand', 'LTR Visa', 'USD $80k/yr', 'Up to 10 yrs', null],
            ['Estonia', 'Digital Nomad Visa', '\u20ac3,504/mo', 'Up to 1 yr', null],
            [null, null, null, null, null],
            [null, null, null, null, null],
          ],
        },
        noteLines: 2,
      },
      {
        number: 3,
        text: 'Renew your passport if it expires within 18 months \u2014 many countries require 6 months validity',
        detail: 'Apply now if your passport has fewer than 18 months. Expedited processing is available in most countries. Get extra pages added if less than 6 blank pages remain.',
        tag: '\u26a1 High Priority',
        tagColor: '6366F1',
        extra: {
          type: 'checklist',
          label: 'Passport readiness checklist:',
          items: [
            'Check passport expiry date \u2014 must be valid 6+ months beyond travel dates',
            'Count blank pages \u2014 need at least 6 for visas and stamps',
            'Apply for renewal if expiring within 18 months',
            'Request extra pages added if fewer than 6 blank remain',
            'Store a digital scan in Google Drive and 1Password/Bitwarden',
          ],
        },
        noteLines: 2,
      },
      {
        number: 4,
        text: 'Plan a visa run strategy or country-hop schedule if staying on tourist visas long-term',
        detail: 'Map out your first 6 months: which countries, in what order, and what\u2019s your exit/re-entry plan. Spontaneous visa runs are expensive. Planned ones are $20 bus rides.',
        tag: '\u25ce Action Item',
        tagColor: '7C3AED',
        extra: {
          type: 'data-table',
          label: 'My 6-month country-hop plan:',
          headers: ['Month', 'Country', 'Entry Date', 'Exit By', 'Border / Transport'],
          colWidths: [1200, 1800, 1600, 1600, 2440],
          rows: [
            ['Month 1', null, null, null, null],
            ['Month 2', null, null, null, null],
            ['Month 3', null, null, null, null],
            ['Month 4', null, null, null, null],
            ['Month 5', null, null, null, null],
            ['Month 6', null, null, null, null],
          ],
        },
        noteLines: 2,
      },
      {
        number: 5,
        text: 'Save digital and physical copies of all documents: passport, visa, insurance, contracts',
        detail: 'Email yourself scans, store in Google Drive, and carry physical photocopies. Use 1Password or Bitwarden for secure digital storage. Losing a passport abroad is an ordeal \u2014 multiple backups prevent panic.',
        tag: '\u25ce Action Item',
        tagColor: '7C3AED',
        extra: {
          type: 'data-table',
          label: 'Document backup tracker:',
          headers: ['Document', 'Email Scan', 'Google Drive', 'Physical Copy'],
          colWidths: [3600, 1680, 1680, 1680],
          rows: [
            ['Passport (photo page)',             '\u2610', '\u2610', '\u2610'],
            ['Visa / entry permits',              '\u2610', '\u2610', '\u2610'],
            ['Health insurance policy',           '\u2610', '\u2610', '\u2610'],
            ['Employment / freelance contracts',  '\u2610', '\u2610', '\u2610'],
            ['Bank statements (last 3 months)',   '\u2610', '\u2610', '\u2610'],
            ['Vaccination records',               '\u2610', '\u2610', '\u2610'],
            ['Emergency contact list',            '\u2610', '\u2610', '\u2610'],
            ['Travel insurance policy',           '\u2610', '\u2610', '\u2610'],
          ],
        },
        noteLines: 2,
      },
    ],
    quote: '\u201cBorders are just lines on a map \u2014 but overstaying them is very real. Plan smart, move freely.\u201d',
    filename: 'visa-strategy-worksheet.docx',
  },

  health: {
    sectionLabel: 'HEALTH & INSURANCE',
    title: 'Digital Nomad Action Worksheet',
    subtitle: 'Protect your health so nothing stops you from living and working anywhere',
    tasks: [
      {
        number: 1,
        text: 'Purchase international health insurance before leaving \u2014 do not skip this',
        detail: 'Options: SafetyWing ($45/mo, great for budget), World Nomads ($80\u2013200/mo, better adventure coverage), Cigna Global ($200\u2013400/mo, comprehensive). A single hospitalization without insurance can cost $10,000+.',
        tag: '\u26a1 High Priority',
        tagColor: '6366F1',
        extra: {
          type: 'data-table',
          label: 'Insurance comparison:',
          headers: ['Provider', 'Cost/mo', 'Best For', 'Coverage Type', 'Chosen?'],
          colWidths: [1700, 1300, 2000, 2000, 1640],
          rows: [
            ['SafetyWing',  '$45',       'Budget nomads',      'Emergency only',  null],
            ['World Nomads', '$80\u2013200', 'Adventure travel', 'Comprehensive',   null],
            ['Cigna Global', '$200\u2013400', 'Long-term expats', 'Full health',    null],
            ['Other:',      null,        null,                 null,              null],
          ],
        },
        noteLines: 2,
      },
      {
        number: 2,
        text: 'Get all necessary vaccinations for your destinations 4\u20136 weeks before departure',
        detail: 'Common for SE Asia: Hepatitis A/B, Typhoid, Japanese Encephalitis (if rural), Rabies (pre-exposure if hiking/caves). Consult a travel medicine clinic, not your regular GP.',
        tag: '\u2696 Legal',
        tagColor: '0369A1',
        extra: {
          type: 'data-table',
          label: 'My vaccination tracker:',
          headers: ['Vaccine', 'Recommended For', 'Doses', 'Date Given', 'Done?'],
          colWidths: [2000, 2000, 1000, 1800, 1840],
          rows: [
            ['Hepatitis A & B',       'SE Asia, worldwide',     '2\u20133',     null, '\u2610'],
            ['Typhoid',               'SE Asia, South Asia',    '1',            null, '\u2610'],
            ['Japanese Encephalitis', 'Rural SE Asia',          '2',            null, '\u2610'],
            ['Rabies (pre-exposure)', 'Hiking / cave areas',    '3',            null, '\u2610'],
            ['Tetanus / Tdap',        'All destinations',       '1 booster',    null, '\u2610'],
            ['Yellow Fever',          'Africa, South America',  '1',            null, '\u2610'],
            ['Other:',                null,                     null,           null, '\u2610'],
          ],
        },
        noteLines: 2,
      },
      {
        number: 3,
        text: 'Get a 6-month supply of any prescription medications and a letter from your doctor',
        detail: 'Some medications are illegal or unavailable abroad. A doctor\u2019s letter prevents customs issues. Research legality of your medications in your destination country.',
        tag: '\u26a1 High Priority',
        tagColor: '6366F1',
        extra: {
          type: 'data-table',
          label: 'My medication tracker:',
          headers: ['Medication', 'Daily Dose', '6-mo Supply?', 'Legal Abroad?', 'Doctor Letter?'],
          colWidths: [2300, 1500, 1600, 1600, 1640],
          rows: [
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null],
          ],
        },
        noteLines: 2,
      },
      {
        number: 4,
        text: 'Schedule a full dental and medical checkup before leaving home-country coverage',
        detail: 'Dental work is cheap in Thailand and Mexico but expensive and logistically hard when you need it urgently. Pre-clear everything on home insurance before your coverage lapses.',
        tag: '\u25ce Action Item',
        tagColor: '7C3AED',
        extra: {
          type: 'checklist',
          label: 'Pre-departure medical & dental checklist:',
          items: [
            'Full physical / general health exam',
            'Dental cleaning and X-rays',
            'Eye exam and spare glasses / contacts supply',
            'Skin check / dermatology if needed',
            'Blood work panel (full metabolic, thyroid, CBC)',
            'Gynecological exam (if applicable)',
            'Pre-clear any existing conditions with insurer',
            'Collect all medical records digitally',
          ],
        },
        noteLines: 2,
      },
    ],
    quote: '\u201cYour health is your most valuable asset abroad. One hospital bill without insurance can end your nomad journey before it starts.\u201d',
    filename: 'health-insurance-worksheet.docx',
  },

  tax: {
    sectionLabel: 'TAX & BANKING',
    title: 'Digital Nomad Action Worksheet',
    subtitle: 'Set up your financial and legal infrastructure so money flows freely across borders',
    tasks: [
      {
        number: 1,
        text: 'Consult a nomad-specialist tax advisor about your obligations for the first year abroad',
        detail: 'Recommended firms: BrightTax (US expats), TFX (US nomads), Monaeo. A $300 consultation can save you $10,000+ in avoided mistakes. Don\u2019t rely on Reddit for tax advice.',
        tag: '\u2696 Legal',
        tagColor: '0369A1',
        extra: {
          type: 'checklist',
          label: 'Recommended nomad-specialist tax advisors:',
          items: [
            'BrightTax \u2014 US expats \u2014 specializes in FEIE and foreign tax credits',
            'TFX (Taxes for Expats) \u2014 US nomads \u2014 affordable and nomad-experienced',
            'Monaeo \u2014 US nomads \u2014 also tracks physical presence days automatically',
            'Local tax advisor in home country \u2014 For non-US citizens',
          ],
        },
        noteLines: 2,
      },
      {
        number: 2,
        text: 'Understand the Foreign Earned Income Exclusion (FEIE) if you\u2019re a US citizen \u2014 file Form 2555',
        detail: 'US citizens can exclude up to $126,500 (2024) of foreign-earned income. Requires passing the physical presence test (330 days abroad). Track every travel day from day one.',
        tag: '\u2696 Legal',
        tagColor: '0369A1',
        extra: {
          type: 'data-table',
          label: 'FEIE tracker (US citizens only):',
          headers: ['Item', 'Your Details'],
          colWidths: [5800, 2840],
          rows: [
            ['Departure date from home country',       null],
            ['Target qualifying date (330 days abroad)', null],
            ['Days abroad so far this tax year',       null],
            ['Foreign income earned this year (USD)',   null],
            ['FEIE exclusion limit (2024)',             '$126,500'],
            ['Estimated tax saving from FEIE',          null],
            ['Form 2555 filed?', '\u2610 Yes  \u2610 No  \u2610 In progress'],
          ],
          summaryRows: [4, 6],
        },
        noteLines: 2,
      },
      {
        number: 3,
        text: 'Open a Wise (formerly TransferWise) multi-currency account and get the debit card',
        detail: 'Wise gives you local bank details in USD, EUR, GBP, AUD, and more. Receive client payments locally, spend abroad at real exchange rates. Apply and verify before you leave.',
        tag: '$ Income',
        tagColor: 'B45309',
        extra: {
          type: 'checklist',
          label: 'Wise setup checklist:',
          items: [
            'Create Wise account and verify identity (do this before leaving \u2014 may need local address proof)',
            'Set up USD account details for US client payments',
            'Set up EUR account details for European clients',
            'Set up GBP account details if working with UK clients',
            'Order Wise debit card for local ATM withdrawals',
            'Test a small transfer to confirm everything works',
          ],
        },
        noteLines: 2,
      },
      {
        number: 4,
        text: 'Get a no-foreign-transaction-fee credit card as backup (Charles Schwab, Chase Sapphire, Revolut)',
        detail: 'Schwab Investor Checking reimburses all ATM fees globally \u2014 a must for US nomads. Set credit limit high enough for emergencies. Keep this as a backup, not primary.',
        tag: '$ Income',
        tagColor: 'B45309',
        extra: {
          type: 'data-table',
          label: 'No-foreign-fee card comparison:',
          headers: ['Card', 'Annual Fee', 'Key Benefit', 'ATM Fees?', 'Applied?'],
          colWidths: [2100, 1200, 2500, 1200, 1640],
          rows: [
            ['Charles Schwab Checking', '$0',        'Reimburses all ATM fees globally',           'None',         '\u2610'],
            ['Chase Sapphire Preferred', '$95',      'No foreign transaction fees + travel rewards', 'None',       '\u2610'],
            ['Revolut',                 '$0\u2013$16/mo', 'Multi-currency, crypto, budgeting',     'Limited free', '\u2610'],
            ['Other:',                  null,        null,                                          null,          '\u2610'],
          ],
        },
        noteLines: 2,
      },
      {
        number: 5,
        text: 'Set up a trusted person at home to handle physical mail, tax documents, and banking emergencies',
        detail: 'Give power of attorney to a trusted family member or use a mail forwarding service (Traveling Mailbox, Earth Class Mail). Important tax docs still arrive by physical mail.',
        tag: '\u25ce Action Item',
        tagColor: '7C3AED',
        extra: {
          type: 'checklist',
          label: 'Mail & power of attorney setup:',
          items: [
            'Choose a trusted person (family/friend) as your home-base contact',
            'Give power of attorney for banking and legal emergencies',
            'Set up a mail forwarding service: Traveling Mailbox or Earth Class Mail',
            'Forward important accounts to a digital-first address',
            'Confirm they can receive and scan physical tax documents',
            'Test the mail forwarding system before you leave',
          ],
        },
        noteLines: 2,
      },
      {
        number: 6,
        text: 'Cancel or transfer home-country subscriptions, utilities, and insurance before departure',
        detail: 'Cancellation checklist: lease/storage, car insurance, home utilities, gym, local phone plan, health insurance (after international is active). Keep a spreadsheet of what you\u2019ve cancelled and when.',
        tag: '\u25ce Action Item',
        tagColor: '7C3AED',
        extra: {
          type: 'data-table',
          label: 'Cancellation & transfer tracker:',
          headers: ['Subscription / Service', 'Monthly Cost', 'Cancel Date', 'Cancelled?', 'Transfer To?'],
          colWidths: [2600, 1400, 1500, 1200, 1940],
          rows: [
            ['Lease / storage unit',                   null, null, '\u2610', null],
            ['Car insurance',                          null, null, '\u2610', null],
            ['Home utilities (electric, gas, water)',  null, null, '\u2610', null],
            ['Gym membership',                         null, null, '\u2610', null],
            ['Local phone plan',                       null, null, '\u2610', null],
            ['Home-country health insurance',          null, null, '\u2610', null],
            ['Other subscriptions',                    null, null, '\u2610', null],
            ['Other:',                                 null, null, '\u2610', null],
          ],
        },
        noteLines: 2,
      },
    ],
    quote: '\u201cGet the boring money stuff right before you leave \u2014 so you never have to think about it again while you\u2019re living the life.\u201d',
    filename: 'tax-banking-worksheet.docx',
  },

  debrief: {
    sectionLabel: '30-DAY DEBRIEF CHECKLIST',
    title: 'Digital Nomad Action Worksheet',
    subtitle: 'Reflect, recalibrate, and set yourself up for month 2 and beyond',
    tasks: [
      {
        number: 1,
        text: 'Review your actual vs. budgeted monthly spend \u2014 adjust your MVI if needed',
        detail: 'Be honest. Most nomads underestimate: eating out, one-off gear purchases, tourist activities, and unexpected fees. Adjust your income target accordingly.',
        tag: '$ Finance',
        tagColor: 'B45309',
        extra: {
          type: 'data-table',
          label: 'Month 1 budget vs. actual:',
          headers: ['Category', 'Budgeted ($)', 'Actual ($)', 'Difference'],
          colWidths: [2800, 1950, 1950, 1940],
          rows: [
            ['Accommodation',          null, null, null],
            ['Food & groceries',       null, null, null],
            ['Transport',              null, null, null],
            ['Coworking / internet',   null, null, null],
            ['Health & insurance',     null, null, null],
            ['Tourism & activities',   null, null, null],
            ['One-off gear / purchases', null, null, null],
            ['Unexpected / misc',      null, null, null],
            ['TOTAL',                  null, null, null],
          ],
          summaryRows: [8],
        },
        noteLines: 2,
      },
      {
        number: 2,
        text: 'Rate your destination honestly: stay for another month, or plan your next stop?',
        detail: 'Trust your gut over sunk cost. If you dread Monday mornings from here, move. If you feel alive and productive, extend. Never stay out of obligation.',
        tag: '\u25ce Decision',
        tagColor: '0D9488',
        extra: {
          type: 'data-table',
          label: 'Destination scorecard:',
          headers: ['Category', 'Score (1\u20135)', 'Notes'],
          colWidths: [3000, 1500, 4140],
          rows: [
            ['Work productivity here',            null, null],
            ['Cost of living vs. budget',         null, null],
            ['Social life & community',           null, null],
            ['Overall happiness / energy',        null, null],
            ['Practical logistics (WiFi, safety)', null, null],
            ['VERDICT: Stay / Move?',             null, null],
          ],
          summaryRows: [5],
        },
        noteLines: 2,
      },
      {
        number: 3,
        text: 'Audit your income performance \u2014 did you hit your MVI? What changed from your pre-departure setup?',
        detail: 'Many nomads see 10\u201320% productivity dip in month 1 due to exploration. That\u2019s normal. Month 2\u20133 usually rebounds. If income dropped dramatically, identify the root cause before moving on.',
        tag: '$ Finance',
        tagColor: 'B45309',
        extra: {
          type: 'data-table',
          label: 'Income performance review:',
          headers: ['Metric', 'Pre-departure Target', 'Month 1 Actual'],
          colWidths: [3200, 2720, 2720],
          rows: [
            ['Monthly revenue / income',        null, null],
            ['Number of clients / projects',    null, null],
            ['Billable hours worked',            null, null],
            ['MVI hit? (Yes / No / Partial)',    null, null],
            ['Biggest income obstacle',         null, null],
            ['Action to fix in Month 2',        null, null],
          ],
          summaryRows: [5],
        },
        noteLines: 2,
      },
      {
        number: 4,
        text: 'Write a 30-day journal entry: what worked, what didn\u2019t, what you\u2019d tell someone starting today',
        detail: 'This becomes your personal playbook. Nomads who journal their early experience have significantly better decision-making in years 2 and 3.',
        tag: '\u25cb Reflection',
        tagColor: '64748B',
        extra: {
          type: 'journal-prompts',
          label: 'Journal prompts to answer:',
          prompts: [
            'What worked better than expected in month 1?',
            'What was harder than expected?',
            'What would you do differently from Day 1?',
            'What advice would you give someone starting today?',
            'What\u2019s your #1 priority for month 2?',
          ],
          linesPerPrompt: 3,
        },
        noteLines: 1,
      },
    ],
    quote: '\u201cThe nomad who reflects grows. The one who just moves stays lost.\u201d',
    filename: '30-day-debrief-worksheet.docx',
  },

  workspace: {
    sectionLabel: 'WORKSPACE & ROUTINE',
    title: 'Digital Nomad Action Worksheet',
    subtitle: 'Build the structure that lets you work from anywhere \u2014 sustainably',
    tasks: [
      {
        number: 1,
        text: 'Trial 3\u20135 co-working spaces in week one \u2014 score them on WiFi, vibe, price, and community',
        detail: 'Most coworking spaces offer free day passes. Try different ones: touristy (better community) vs. local (better value). Monthly memberships are 40\u201360% cheaper than day rates.',
        tag: '\u25ce Action Item',
        tagColor: '7C3AED',
        extra: {
          type: 'data-table',
          label: 'My coworking space scorecard:',
          headers: ['Space Name', 'WiFi (1\u20135)', 'Vibe (1\u20135)', 'Price/day', 'Community', 'TOTAL'],
          colWidths: [2200, 1080, 1080, 1080, 1760, 1440],
          rows: [
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
          ],
        },
        noteLines: 2,
      },
      {
        number: 2,
        text: 'Design your daily routine by Day 7 and protect it for the full first month',
        detail: 'Example structure: 7\u20139am personal time, 9am\u20131pm deep work, 1\u20132pm lunch + walk, 2\u20135pm meetings/shallow work, 5pm+ explore. Protect this ruthlessly. The #1 nomad mistake is letting travel eat work hours.',
        tag: '\u26a1 High Priority',
        tagColor: '6366F1',
        extra: {
          type: 'data-table',
          label: 'My daily routine template:',
          headers: ['Time Block', 'Activity', 'Non-negotiable?'],
          colWidths: [2400, 4440, 1800],
          rows: [
            ['6:00 \u2013 7:00am',    null,                    null],
            ['7:00 \u2013 9:00am',    null,                    null],
            ['9:00am \u2013 1:00pm',  'Deep work (protect!)',  '\u2610 Yes'],
            ['1:00 \u2013 2:00pm',    'Lunch + walk',          null],
            ['2:00 \u2013 5:00pm',    null,                    null],
            ['5:00pm+',              'Explore / social',      null],
          ],
        },
        noteLines: 2,
      },
      {
        number: 3,
        text: 'Attend at least 2 nomad meetups or community events in your first 2 weeks',
        detail: 'Check: Meetup.com, Facebook groups, Couchsurfing meetups, coworking events. The friends you make in week 1 will shape your entire experience. Show up even when tired.',
        tag: '\u2295 Community',
        tagColor: '64748B',
        extra: {
          type: 'data-table',
          label: 'Community events tracker:',
          headers: ['Event / Meetup', 'Date', 'Where Found', 'Did I go? / Outcome'],
          colWidths: [2600, 1400, 1800, 2840],
          rows: [
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
          ],
        },
        noteLines: 2,
      },
      {
        number: 4,
        text: 'Set up your ergonomic workspace at your accommodation \u2014 back, neck, and wrists will thank you',
        detail: 'Buy a laptop stand at a local shop ($10\u201320). Use a rolled towel as a lumbar support. Most nomad health problems start with a bad workstation setup in month 1.',
        tag: '\u25ce Action Item',
        tagColor: '7C3AED',
        extra: {
          type: 'checklist',
          label: 'Ergonomic workspace checklist:',
          items: [
            'Laptop stand (raises screen to eye level \u2014 buy locally for $10\u201320)',
            'External keyboard and mouse (optional but game-changing)',
            'Chair with back support \u2014 or rolled towel as lumbar cushion',
            'Screen not facing a bright window (reduces eye strain)',
            'Desk at elbow height when seated',
            'Headphones for focus and calls',
            'Extension cord / power strip (many desks only have 1 outlet)',
          ],
        },
        noteLines: 2,
      },
    ],
    quote: '\u201cStructure isn\u2019t the enemy of freedom \u2014 it\u2019s the thing that makes freedom sustainable.\u201d',
    filename: 'workspace-routine-worksheet.docx',
  },

  first72: {
    sectionLabel: 'FIRST 72 HOURS PROTOCOL',
    title: 'Digital Nomad Action Worksheet',
    subtitle: 'Land, connect, work, explore \u2014 in that order',
    tasks: [
      {
        number: 1,
        text: 'Buy a local SIM card within 2 hours of landing \u2014 test data, calls, and WhatsApp',
        detail: 'Airport SIMs are 20\u201340% more expensive. If you have a hotel/Airbnb booked, grab the SIM at the first 7-Eleven or local shop you pass. Data connectivity is priority one.',
        tag: '\u26a1 First 72hrs',
        tagColor: '6366F1',
        extra: {
          type: 'checklist',
          label: 'SIM card landing checklist:',
          items: [
            'Research local carriers before flying (e.g. AIS/DTAC in Thailand, Telkomsel in Bali)',
            'Turn off roaming on your home SIM before landing',
            'Buy SIM at first convenience store \u2014 not the airport',
            'Test mobile data, calls, and WhatsApp immediately',
            'Save your new local number in your contacts and share with key people',
          ],
        },
        noteLines: 2,
      },
      {
        number: 2,
        text: 'Complete your first work session within 48 hours \u2014 prove your setup works from your new base',
        detail: 'Don\u2019t take a 3-day \u201csettling in\u201d break. Do a real 4-hour work session. Identify any gaps in your setup (power, WiFi, noise, ergonomics) while you still have flexibility to fix them.',
        tag: '\u26a1 First 72hrs',
        tagColor: '6366F1',
        extra: {
          type: 'data-table',
          label: 'My setup audit (complete during first work session):',
          headers: ['Setup Element', 'Status', 'Fix Needed?'],
          colWidths: [3400, 2620, 2620],
          rows: [
            ['WiFi speed & reliability',         null, null],
            ['Power outlets / adapter',           null, null],
            ['Noise level / focus',               null, null],
            ['Desk / ergonomics',                 null, null],
            ['Backup internet (mobile hotspot)',   null, null],
            ['Video call background / lighting',  null, null],
          ],
        },
        noteLines: 2,
      },
      {
        number: 3,
        text: 'Walk every street in a 1km radius of your accommodation \u2014 learn your immediate neighborhood',
        detail: 'Find: nearest supermarket, pharmacy, ATM, coffee shop with WiFi, local restaurant under $5. Knowing your neighborhood beats any guidebook.',
        tag: '\u25ce Exploration',
        tagColor: '0D9488',
        extra: {
          type: 'checklist',
          label: 'Neighborhood discovery checklist:',
          items: [
            'Nearest supermarket / wet market',
            '24-hour pharmacy',
            'ATM (preferably no-fee or low-fee machine)',
            'Best WiFi coffee shop for work',
            'Local restaurant under $5 (your new regular spot)',
            'Nearest hospital or clinic',
            'Laundromat / laundry service',
            'Hardware/convenience store for daily needs',
          ],
        },
        noteLines: 2,
      },
      {
        number: 4,
        text: 'Notify your bank and Wise of your new country \u2014 prevent payment freezes',
        detail: 'Log into your bank app and update your location. Some banks auto-freeze cards used abroad without notice. Do this before your first purchase.',
        tag: '$ Finance',
        tagColor: 'B45309',
        extra: {
          type: 'checklist',
          label: 'Bank & payment notification checklist:',
          items: [
            'Update travel notice in home bank app (or call if no app option)',
            'Log into Wise and update your profile location',
            'Make a small test purchase to confirm card works',
            'Confirm ATM withdrawal limit is high enough for emergencies',
            'Note nearest ATM that accepts your card without fees',
            'Save bank emergency number in your phone (international format)',
          ],
        },
        noteLines: 2,
      },
    ],
    filename: 'first-72-hours-worksheet.docx',
  },

  scorecard: {
    sectionLabel: 'YEAR-1 PERFORMANCE SCORECARD',
    title: 'Digital Nomad Action Worksheet',
    subtitle: 'Measure what matters and decide honestly if this is the life you want',
    tasks: [
      {
        number: 1,
        text: 'Income grew or held stable vs. pre-nomad baseline \u2014 if not, identify and fix the leak',
        detail: 'Many nomads earn more after year 1: lower cost of living = less desperate client acceptance, more creative space = better work, global network = better opportunities.',
        tag: '$ Finance',
        tagColor: 'B45309',
        extra: {
          type: 'data-table',
          label: 'Year 1 income performance review:',
          headers: ['Metric', 'Pre-Nomad Baseline', 'Year 1 Actual'],
          colWidths: [3600, 2520, 2520],
          rows: [
            ['Monthly income (average)',                         null, null],
            ['Number of active clients / income streams',       null, null],
            ['Highest earning month',                           null, null],
            ['Lowest earning month',                            null, null],
            ['Annual total income',                             null, null],
            ['MVI consistently hit? (Yes / No / Partial)',      null, null],
            ['Income trend: \u2191 Growing / \u2192 Stable / \u2193 Declining', null, null],
          ],
          summaryRows: [6],
        },
        noteLines: 2,
      },
      {
        number: 2,
        text: 'You have a clear answer to \u201cwhere do you call home?\u201d \u2014 even if it\u2019s a rotation of 2\u20133 places',
        detail: 'Rootlessness feels exciting for 6 months. Long-term nomads create their own roots: a favourite neighbourhood, a regular caf\u00e9, friendships that predate last month. Belonging is engineered, not found.',
        tag: '\u2665 Wellbeing',
        tagColor: 'E11D48',
        extra: {
          type: 'journal-prompts',
          label: 'My roots audit \u2014 what have I built?',
          prompts: [
            'My 2\u20133 base cities are:',
            'My regular caf\u00e9 / coworking spot:',
            'Friends I\u2019ve kept in touch with from 3+ cities ago:',
            'My go-to community / group wherever I am:',
            'The place that feels most like home right now:',
          ],
          linesPerPrompt: 1,
        },
        noteLines: 2,
      },
      {
        number: 3,
        text: 'You\u2019ve diversified into at least 2 income sources and started building a third',
        detail: 'Single-income nomads are one lost client away from panic. The goal by year-end: primary income + one supplementary stream that grows while you sleep, even if it\u2019s only $200/mo.',
        tag: '$ Finance',
        tagColor: 'B45309',
        extra: {
          type: 'data-table',
          label: 'My income diversification map:',
          headers: ['Income Stream', 'Type', 'Monthly Avg', '% of Total', 'Status'],
          colWidths: [2600, 1600, 1600, 1400, 1440],
          rows: [
            ['Primary (e.g. freelance / salary)', null, null, null,   'Active'],
            ['Secondary stream',                  null, null, null,    null],
            ['Third stream (in progress)',         null, null, null,   'Building'],
            ['Passive / product income',          null, null, null,    null],
            ['TOTAL',                             null, null, '100%',  null],
          ],
          summaryRows: [4],
        },
        noteLines: 2,
      },
      {
        number: 4,
        text: 'You\u2019d choose this life again if you had to decide today \u2014 the honest gut-check test',
        detail: 'The nomad life is right for some people and wrong for others, and that can change over time. Run this check at 6 months and 12 months. There\u2019s no shame in evolving \u2014 the point is to build the life you actually want.',
        tag: '\u25cb Reflection',
        tagColor: '64748B',
        extra: {
          type: 'data-table',
          label: 'Year-1 honest gut-check (score each 1\u201310):',
          headers: ['Question', 'Score /10', 'What would make this a 10?'],
          colWidths: [2800, 1200, 4640],
          rows: [
            ['Overall happiness vs. pre-nomad life',        null, null],
            ['Work productivity and income satisfaction',   null, null],
            ['Social connection and relationships',         null, null],
            ['Physical health and daily wellbeing',         null, null],
            ['Sense of purpose and direction',              null, null],
            ['Freedom and autonomy',                        null, null],
            ['AVERAGE / OVERALL VERDICT',                  null, null],
          ],
          summaryRows: [6],
        },
        extraNote: 'Would I choose this life again today?   \u2610 Yes, absolutely   \u2610 Yes, with changes   \u2610 Unsure   \u2610 No',
        noteLines: 2,
      },
    ],
    quote: '\u201cYear 1 is proof of concept. Year 2 is proof of mastery. Be honest about which one you\u2019re in.\u201d',
    filename: 'year-1-scorecard-worksheet.docx',
  },

  network: {
    sectionLabel: 'NETWORK & COMMUNITY',
    title: 'Digital Nomad Action Worksheet',
    subtitle: 'Build the relationships that will carry your nomad life for years',
    tasks: [
      {
        number: 1,
        text: 'Attend 1 nomad conference or retreat per year (7in7, DNX, Nomad Summit, Remote Year retreats)',
        detail: 'The ROI on 1 conference is enormous: clients, collaborators, friendships that survive 10 moves. These are not optional when you\u2019re serious about the lifestyle long-term.',
        tag: '\u2295 Community',
        tagColor: '64748B',
        extra: {
          type: 'data-table',
          label: 'Conference & retreat planner:',
          headers: ['Event', 'Date / Location', 'Cost Est.', 'Applied?', 'Goal / Intention'],
          colWidths: [1800, 1800, 1400, 1100, 2540],
          rows: [
            ['7in7',                null, null, '\u2610', null],
            ['DNX Conference',      null, null, '\u2610', null],
            ['Nomad Summit',        null, null, '\u2610', null],
            ['Remote Year retreat', null, null, '\u2610', null],
            ['Other:',              null, null, '\u2610', null],
          ],
        },
        noteLines: 2,
      },
      {
        number: 2,
        text: 'Build a \u201cnomad board of advisors\u201d \u2014 3\u20135 peers further along who you can call with real problems',
        detail: 'Not mentors on a pedestal \u2014 peers you\u2019ve built genuine relationships with. One person who\u2019s navigated a tax audit abroad is worth more than 100 forum posts.',
        tag: '\u2295 Network',
        tagColor: '64748B',
        extra: {
          type: 'data-table',
          label: 'My nomad board of advisors:',
          headers: ['Name', 'How You Know Them', 'Their Expertise', 'Last Contacted'],
          colWidths: [1800, 2400, 2400, 2040],
          rows: [
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
            [null, null, null, null],
          ],
        },
        noteLines: 2,
      },
      {
        number: 3,
        text: 'Start documenting your journey publicly \u2014 newsletter, blog, or social content about your real experience',
        detail: 'Don\u2019t wait until you feel \u201cestablished enough.\u201d The most valuable nomad content is honest and early. Start a simple monthly email to even 50 people. Many nomad careers began this way.',
        tag: '\u270e Content',
        tagColor: '64748B',
        extra: [
          {
            type: 'checklist',
            label: 'Content channel checklist:',
            items: [
              'Choose 1 primary platform (LinkedIn / Substack / X / Instagram / Blog)',
              'Write and publish your first piece \u2014 even if imperfect',
              'Set a publishing cadence (weekly / bi-weekly / monthly) and protect it',
              'Document the real challenges, not just the highlights',
              'Share your content in 3 relevant nomad communities',
            ],
          },
          {
            type: 'data-table',
            label: 'My content plan:',
            headers: ['Content Topic / Angle', 'Platform', 'Publish Date', 'Published?'],
            colWidths: [3200, 1800, 1800, 1840],
            rows: [
              [null, null, null, '\u2610'],
              [null, null, null, '\u2610'],
              [null, null, null, '\u2610'],
              [null, null, null, '\u2610'],
            ],
          },
        ],
        noteLines: 2,
      },
      {
        number: 4,
        text: 'Invest intentionally in local relationships \u2014 language classes, local sports, volunteer work',
        detail: 'The deepest nomad experiences come from relationships with locals, not just other nomads. Learn 50 words of the local language, join a local gym class, eat at family restaurants. Loneliness is solved by depth, not breadth.',
        tag: '\u2665 Wellbeing',
        tagColor: 'E11D48',
        extra: {
          type: 'checklist',
          label: 'Local connection checklist:',
          items: [
            'Learn 50 essential words in the local language before arriving',
            'Find and attend one recurring local activity (sport, class, club)',
            'Eat at least 3 meals per week at local family-run restaurants (not tourist spots)',
            'Volunteer for 1 local cause or organization',
            'Make at least 1 genuine local friend per destination',
            'Download Tandem or HelloTalk for language exchange practice',
          ],
        },
        noteLines: 2,
      },
    ],
    quote: '\u201cYour network is your net worth \u2014 and nomad networks compound faster than any other.\u201d',
    filename: 'network-community-worksheet.docx',
  },

  rotation: {
    sectionLabel: 'BASE ROTATION PLANNING',
    title: 'Digital Nomad Action Worksheet',
    subtitle: 'Stop drifting \u2014 design your year with intention, not impulse',
    tasks: [
      {
        number: 1,
        text: 'Identify 2\u20133 \u201cbase\u201d cities you return to repeatedly \u2014 and negotiate semi-permanent accommodation rates',
        detail: 'Most seasoned nomads aren\u2019t constantly moving \u2014 they rotate between 2\u20133 places they love. Negotiating monthly rates as a repeat tenant saves 20\u201340% vs. booking fresh each time.',
        tag: '\u26a1 High Impact',
        tagColor: '6366F1',
        extra: {
          type: 'data-table',
          label: 'My base city candidates:',
          headers: ['City', 'Cost/mo Est.', 'Visa Length', 'Season Window', 'Accommodation Contact'],
          colWidths: [1500, 1400, 1400, 1800, 2540],
          rows: [
            [null, null, null, null, null],
            [null, null, null, null, null],
            [null, null, null, null, null],
          ],
        },
        noteLines: 2,
      },
      {
        number: 2,
        text: 'Plan your year with a rough seasonal calendar \u2014 avoid monsoons, peak tourist pricing, and 183-day tax traps',
        detail: 'Example rotation: Jan\u2013Mar Bali (dry season), Apr\u2013Jun Chiang Mai (before hot season), Jul\u2013Sep Lisbon (summer), Oct\u2013Dec Colombia or Georgia. Plan 6 months ahead to get best accommodation rates.',
        tag: '\u25ce Planning',
        tagColor: '7C3AED',
        extra: {
          type: 'data-table',
          label: 'My annual rotation calendar:',
          headers: ['Month(s)', 'Destination', 'Season / Why', 'Days Spent', 'Tax Risk?'],
          colWidths: [1400, 1600, 2000, 1600, 2040],
          rows: [
            ['Jan \u2013 Feb', null, null, null, null],
            ['Mar \u2013 Apr', null, null, null, null],
            ['May \u2013 Jun', null, null, null, null],
            ['Jul \u2013 Aug', null, null, null, null],
            ['Sep \u2013 Oct', null, null, null, null],
            ['Nov \u2013 Dec', null, null, null, null],
            ['TOTAL DAYS ABROAD', null, null, null, null],
          ],
          summaryRows: [6],
        },
        noteLines: 2,
      },
      {
        number: 3,
        text: 'Audit your travel pace \u2014 are you moving too fast? Most nomads stabilize at 1\u20133 months per location',
        detail: 'Constant movement is exciting but expensive and exhausting. The sweet spot for most nomads is 4\u20138 weeks per location: long enough to feel at home, short enough to stay curious.',
        tag: '\u25ce Self-Audit',
        tagColor: '0D9488',
        extra: {
          type: 'data-table',
          label: 'My travel pace self-audit:',
          headers: ['Question', 'My Answer'],
          colWidths: [5600, 3040],
          rows: [
            ['Average days per location (last 3 months)',   null],
            ['Number of flights/moves in last 90 days',     null],
            ['Monthly transport cost (flights + local)',     null],
            ['Do I feel settled or scattered?',             null],
            ['Ideal stay length per location for me',       null],
            ['Am I moving toward things or away from them?', null],
          ],
        },
        noteLines: 2,
      },
      {
        number: 4,
        text: 'Consider establishing formal residency somewhere that optimizes your tax situation after year one',
        detail: 'Popular options: Georgia (1% tax on foreign income), Portugal (NHR scheme), Paraguay ($0 tax on foreign income), UAE ($0 tax). Consult a nomad tax advisor before making this decision.',
        tag: '\u2696 Tax Strategy',
        tagColor: '0369A1',
        extra: {
          type: 'data-table',
          label: 'Residency option comparison:',
          headers: ['Country', 'Tax Rate', 'Min Stay/yr', 'Key Requirement', 'Considered?'],
          colWidths: [1600, 1500, 1400, 2600, 1540],
          rows: [
            ['Georgia',            '1% (small biz)', 'None',          'Register company', '\u2610'],
            ['Portugal (NHR)',     '~20% flat',       '183 days',      'Rental contract',  '\u2610'],
            ['Paraguay',           '$0 foreign',      '~1 day/yr',     'In-person setup',  '\u2610'],
            ['UAE (Dubai)',         '$0',             'None required', 'Company setup',    '\u2610'],
            ['Estonia e-Residency', 'Varies',         'None',          'Online only',      '\u2610'],
            ['Other:',             null,              null,            null,               '\u2610'],
          ],
        },
        noteLines: 2,
      },
    ],
    quote: '\u201cThe nomad who plans 6 months ahead pays 40% less and stresses 80% less.\u201d',
    filename: 'base-rotation-worksheet.docx',
  },
};

// ─── Docx builder ─────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function buildDocx(config: WorksheetConfig): Promise<Blob> {
  const {
    Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle, ShadingType,
    Table, TableRow, TableCell, WidthType,
  } = await import('docx');

  const cellBorders = (color = 'E2E8F0') => ({
    top:    { style: BorderStyle.SINGLE, size: 4, color },
    bottom: { style: BorderStyle.SINGLE, size: 4, color },
    left:   { style: BorderStyle.SINGLE, size: 4, color },
    right:  { style: BorderStyle.SINGLE, size: 4, color },
  });

  const makeNoteLines = (count = 3) =>
    Array.from({ length: count }, () =>
      new Paragraph({
        children: [new TextRun({ text: '' })],
        spacing: { before: 200, after: 0 },
        border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: 'E2E8F0' } },
        indent: { left: 440 },
      }),
    );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderExtra = (extra: WorksheetExtra): any[] => {
    const labelPara = (text: string) =>
      new Paragraph({
        children: [new TextRun({ text, bold: true, size: 20, color: '475569' })],
        spacing: { before: 160, after: 80 },
        indent: { left: 440 },
      });

    if (extra.type === 'grid-table') {
      const totalWidth = extra.colWidths.reduce((a, b) => a + b, 0);
      return [
        labelPara(extra.label),
        new Table({
          width: { size: totalWidth, type: WidthType.DXA },
          rows: [
            new TableRow({
              tableHeader: true,
              children: extra.headers.map((h, i) =>
                new TableCell({
                  children: [
                    new Paragraph({
                      children: [new TextRun({ text: h, bold: true, size: 18, color: '64748B' })],
                      spacing: { before: 80, after: 80 },
                      indent: { left: 80 },
                    }),
                  ],
                  shading: { type: ShadingType.SOLID, color: 'F1F5F9', fill: 'F1F5F9' },
                  borders: cellBorders(),
                  width: { size: extra.colWidths[i], type: WidthType.DXA },
                }),
              ),
            }),
            ...Array.from({ length: extra.dataRows }, () =>
              new TableRow({
                children: extra.headers.map((_, i) =>
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [new TextRun({ text: '' })],
                        spacing: { before: 120, after: 120 },
                      }),
                    ],
                    borders: cellBorders(),
                    width: { size: extra.colWidths[i], type: WidthType.DXA },
                  }),
                ),
              }),
            ),
          ],
        }),
      ];
    }

    if (extra.type === 'checklist') {
      return [
        labelPara(extra.label),
        ...extra.items.map((item) =>
          new Paragraph({
            children: [
              new TextRun({ text: '\u25a1  ', size: 22, color: '94A3B8' }),
              new TextRun({ text: item, size: 22, color: '0F172A' }),
            ],
            spacing: { before: 60, after: 60 },
            indent: { left: 600 },
          }),
        ),
      ];
    }

    if (extra.type === 'calc-table') {
      const [labelW, valueW] = extra.colWidths;
      const totalWidth = labelW + valueW;
      const lastIdx = extra.rows.length - 1;
      return [
        labelPara(extra.label),
        new Table({
          width: { size: totalWidth, type: WidthType.DXA },
          rows: extra.rows.map((label, i) => {
            const isTotal = i === lastIdx;
            const shading = isTotal
              ? { type: ShadingType.SOLID, color: 'F1F5F9', fill: 'F1F5F9' }
              : { type: ShadingType.SOLID, color: 'FFFFFF', fill: 'FFFFFF' };
            return new TableRow({
              children: [
                new TableCell({
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({ text: label, bold: isTotal, size: isTotal ? 22 : 20, color: isTotal ? '0F172A' : '475569' }),
                      ],
                      spacing: { before: 80, after: 80 },
                      indent: { left: 80 },
                    }),
                  ],
                  shading,
                  borders: cellBorders(),
                  width: { size: labelW, type: WidthType.DXA },
                }),
                new TableCell({
                  children: [new Paragraph({ children: [new TextRun({ text: '' })], spacing: { before: 80, after: 80 } })],
                  shading,
                  borders: cellBorders(),
                  width: { size: valueW, type: WidthType.DXA },
                }),
              ],
            });
          }),
        }),
      ];
    }

    if (extra.type === 'data-table') {
      const totalWidth = extra.colWidths.reduce((a, b) => a + b, 0);
      const summarySet = new Set(extra.summaryRows ?? []);
      return [
        labelPara(extra.label),
        new Table({
          width: { size: totalWidth, type: WidthType.DXA },
          rows: [
            new TableRow({
              tableHeader: true,
              children: extra.headers.map((h, i) =>
                new TableCell({
                  children: [
                    new Paragraph({
                      children: [new TextRun({ text: h, bold: true, size: 18, color: '64748B' })],
                      spacing: { before: 80, after: 80 },
                      indent: { left: 80 },
                    }),
                  ],
                  shading: { type: ShadingType.SOLID, color: 'F1F5F9', fill: 'F1F5F9' },
                  borders: cellBorders(),
                  width: { size: extra.colWidths[i], type: WidthType.DXA },
                }),
              ),
            }),
            ...extra.rows.map((cells, rowIdx) => {
              const isSummary = summarySet.has(rowIdx);
              const shading = isSummary
                ? { type: ShadingType.SOLID, color: 'F1F5F9', fill: 'F1F5F9' }
                : { type: ShadingType.SOLID, color: 'FFFFFF', fill: 'FFFFFF' };
              return new TableRow({
                children: cells.map((cell, colIdx) =>
                  new TableCell({
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: cell ?? '',
                            bold: isSummary,
                            size: 20,
                            color: cell !== null ? (isSummary ? '0F172A' : '475569') : '0F172A',
                          }),
                        ],
                        spacing: { before: 80, after: 80 },
                        indent: { left: 80 },
                      }),
                    ],
                    shading,
                    borders: cellBorders(),
                    width: { size: extra.colWidths[colIdx], type: WidthType.DXA },
                  }),
                ),
              });
            }),
          ],
        }),
      ];
    }

    if (extra.type === 'journal-prompts') {
      const lines = extra.linesPerPrompt ?? 3;
      const noteLine = () =>
        new Paragraph({
          children: [new TextRun({ text: '' })],
          spacing: { before: 200, after: 0 },
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: 'E2E8F0' } },
          indent: { left: 440 },
        });
      return [
        labelPara(extra.label),
        ...extra.prompts.flatMap((prompt) => [
          new Paragraph({
            children: [new TextRun({ text: prompt, bold: true, size: 20, color: '0F172A' })],
            spacing: { before: 200, after: 60 },
            indent: { left: 440 },
          }),
          ...Array.from({ length: lines }, noteLine),
          new Paragraph({ children: [new TextRun({ text: '' })], spacing: { before: 80, after: 0 } }),
        ]),
      ];
    }

    return [];
  };

  const total = config.tasks.length;

  const children = [
    new Paragraph({
      children: [new TextRun({ text: config.sectionLabel, bold: true, color: '94A3B8', size: 18, allCaps: true, characterSpacing: 80 })],
      spacing: { before: 0, after: 80 },
    }),
    new Paragraph({
      children: [new TextRun({ text: config.title, bold: true, color: '0F172A', size: 52 })],
      spacing: { before: 0, after: 100 },
    }),
    new Paragraph({
      children: [new TextRun({ text: config.subtitle, color: '64748B', size: 22 })],
      spacing: { before: 0, after: 240 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: 'E2E8F0' } },
    }),
    new Paragraph({
      children: [
        new TextRun({ text: 'PROGRESS:    ', bold: true, size: 20, color: '475569', allCaps: true }),
        ...Array.from({ length: total }, (_, i) => [
          new TextRun({ text: '\u25a1 ', size: 22, color: '94A3B8' }),
          new TextRun({ text: `${i + 1}    `, bold: true, size: 22, color: '64748B' }),
        ]).flat(),
        new TextRun({ text: `|    _____ / ${total} completed`, size: 20, color: '94A3B8' }),
      ],
      spacing: { before: 200, after: 400 },
      shading: { type: ShadingType.SOLID, color: 'F8FAFC', fill: 'F8FAFC' },
    }),

    ...config.tasks.flatMap((task) => [
      new Paragraph({
        children: [
          new TextRun({ text: `${task.number}.  \u25cb  `, size: 24, color: '94A3B8' }),
          new TextRun({ text: task.text, bold: true, size: 24, color: '0F172A' }),
        ],
        spacing: { before: 320, after: 80 },
      }),
      new Paragraph({
        children: [new TextRun({ text: task.detail, size: 20, color: '64748B' })],
        spacing: { before: 0, after: 80 },
        indent: { left: 440 },
      }),
      new Paragraph({
        children: [new TextRun({ text: task.tag, bold: true, size: 18, color: task.tagColor })],
        spacing: { before: 0, after: 120 },
        indent: { left: 440 },
      }),
      ...(task.extra
        ? (Array.isArray(task.extra) ? task.extra : [task.extra]).flatMap(renderExtra)
        : []),
      ...(task.extraNote ? [
        new Paragraph({
          children: [new TextRun({ text: task.extraNote, size: 20, color: '475569' })],
          spacing: { before: 160, after: 80 },
          indent: { left: 440 },
        }),
      ] : []),
      new Paragraph({
        children: [new TextRun({ text: 'MY NOTES:', bold: true, size: 18, color: 'CBD5E1', allCaps: true })],
        spacing: { before: 120, after: 60 },
        indent: { left: 440 },
      }),
      ...makeNoteLines(task.noteLines ?? 3),
    ]),

    ...(config.quote ? [
      new Paragraph({
        children: [new TextRun({ text: config.quote, italics: true, size: 22, color: '475569' })],
        alignment: AlignmentType.CENTER,
        spacing: { before: 480, after: 0 },
        border: { left: { style: BorderStyle.SINGLE, size: 16, color: '6366F1' } },
        indent: { left: 180 },
      }),
    ] : []),
  ];

  const doc = new Document({
    styles: {
      default: {
        document: {
          run: { font: 'Calibri', size: 24, color: '0F172A' },
          paragraph: { spacing: { line: 276 } },
        },
      },
    },
    sections: [{ children }],
  });

  return Packer.toBlob(doc);
}

// ─── Component ────────────────────────────────────────────────────────────────

interface WorksheetDownloadProps {
  config: WorksheetConfig;
}

export default function WorksheetDownload({ config }: WorksheetDownloadProps) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const blob = await buildDocx(config);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = config.filename;
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-primary/30 bg-primary/5 text-primary text-sm font-semibold hover:bg-primary/10 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
      {loading ? 'Generating...' : 'Download Worksheet'}
    </button>
  );
}
