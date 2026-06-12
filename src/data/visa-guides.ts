export type VisaStatus = 'Visa Required' | 'Visa-Free' | 'Visa on Arrival' | 'E-Visa' | 'ETA Required';

export interface VisaGuideData {
  country: string;
  slug: string;
  statusFilipino: VisaStatus;
  statusMalaysian: VisaStatus;
  intro: string;
  steps: {
    title: string;
    description: string;
  }[];
  documents: {
    category: string;
    items: string[];
  }[];
  costAndProcessing: {
    cost: string;
    processingTime: string;
    validity: string;
  };
  whereToApply: {
    name: string;
    address?: string;
    link?: string;
    notes?: string;
  }[];
  tips: string[];
  mistakes: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

const placeholderContent = {
  intro: "This guide provides step-by-step instructions on how to secure your visa. Content to be supplied by Meri & Man.",
  steps: [
    { title: "Step 1: Prepare Documents", description: "Gather all required documents according to your travel purpose." },
    { title: "Step 2: Fill out Application", description: "Complete the official application form online or in person." },
    { title: "Step 3: Submit and Pay", description: "Submit your application to the embassy, consulate, or official portal and pay the fee." }
  ],
  documents: [
    {
      category: "Primary Documents",
      items: ["Valid Passport (at least 6 months validity)", "Completed Application Form", "Passport-size Photos"]
    },
    {
      category: "Financial Proof",
      items: ["Bank Certificate", "Latest 3 Months Bank Statements", "Income Tax Return (ITR)"]
    }
  ],
  costAndProcessing: {
    cost: "To be updated",
    processingTime: "5 - 15 working days",
    validity: "Depends on visa type"
  },
  whereToApply: [
    {
      name: "Official Embassy or Visa Application Center",
      notes: "Details to be provided."
    }
  ],
  tips: [
    "Apply at least 1 month before your intended travel date.",
    "Ensure all financial documents are recent and accurately reflect your capacity to travel."
  ],
  mistakes: [
    "Submitting incomplete requirements.",
    "Booking non-refundable flights before visa approval."
  ],
  faqs: [
    { question: "How long does the visa application take?", answer: "Processing times vary, but it usually takes between 5 to 15 working days." },
    { question: "Do I need a confirmed flight ticket?", answer: "It is highly recommended to only submit flight reservations or wait until your visa is approved before purchasing non-refundable tickets." }
  ]
};

export const visaGuides: VisaGuideData[] = [
  { country: "Japan", slug: "japan", statusFilipino: "Visa Required", statusMalaysian: "Visa-Free", ...placeholderContent },
  { country: "South Korea", slug: "south-korea", statusFilipino: "Visa Required", statusMalaysian: "Visa-Free", ...placeholderContent },
  { country: "Taiwan", slug: "taiwan", statusFilipino: "Visa-Free", statusMalaysian: "Visa-Free", ...placeholderContent },
  { country: "Singapore", slug: "singapore", statusFilipino: "Visa-Free", statusMalaysian: "Visa-Free", ...placeholderContent },
  { country: "Thailand", slug: "thailand", statusFilipino: "Visa-Free", statusMalaysian: "Visa-Free", ...placeholderContent },
  { country: "Vietnam", slug: "vietnam", statusFilipino: "Visa-Free", statusMalaysian: "Visa-Free", ...placeholderContent },
  { country: "Turkey", slug: "turkey", statusFilipino: "E-Visa", statusMalaysian: "Visa-Free", ...placeholderContent },
  { country: "Georgia", slug: "georgia", statusFilipino: "E-Visa", statusMalaysian: "Visa-Free", ...placeholderContent },
  { country: "UAE", slug: "uae", statusFilipino: "Visa Required", statusMalaysian: "Visa-Free", ...placeholderContent },
  { country: "Australia", slug: "australia", statusFilipino: "Visa Required", statusMalaysian: "ETA Required", ...placeholderContent }
];

export function getVisaGuideBySlug(slug: string): VisaGuideData | undefined {
  return visaGuides.find(g => g.slug === slug);
}
