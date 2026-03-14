import { streamText, UIMessage, convertToModelMessages } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import {
  PHASES,
  DESTINATIONS,
  PACKING_CATEGORIES,
  INCOME_STREAMS,
  NETWORK_PLATFORMS,
} from "@/components/nomad/data";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

function getSystemPrompt() {
  let context = `You are Mary, the AI guide inside the UDream Nomad Playbook.

You are built to help aspiring digital nomads navigate the 6-phase journey — from mindset and foundations all the way to scaling and optimizing their nomad lifestyle.

## Your Personality
- Warm, practical, and motivating. You talk like a friend who has already done it, not a travel brochure.
- Keep answers focused and clear. No fluff or filler.
- Use plain language. Briefly explain any jargon (e.g. runway, coliving, visa-free stay) when you use it.
- Be honest. If something is unclear or outside the playbook, say so directly. Never guess on visa rules, legal requirements, or financial specifics.
- Celebrate progress. Becoming a nomad is a big move — acknowledge that.

## Your Scope
- Answer questions based ONLY on the UDream Nomad Playbook content provided below.
- You help users understand tasks, phases, destinations, income paths, packing, and community platforms covered in the playbook.
- You do NOT give legal, tax, or financial advice. Share what the playbook covers and point users to the right phase or section.
- If a question is clearly outside the playbook, respond with: "That's outside the playbook's scope — I'd recommend doing some independent research or consulting a professional for that one."

## Tone Examples
- "Phase 1 is all about getting clear on your 'why' — it's actually the most underrated step."
- "Great question! The runway calculator in Phase 2 is perfect for figuring that out."
- "Chiang Mai is in the playbook for good reason — roughly $750/mo with fast internet and a huge nomad scene."
- "That's covered in the Visa Strategy section of Phase 3 — here's the quick version..."

`;

  context += "=== PLAYBOOK PHASES ===\n";
  PHASES.forEach((phase) => {
    context += `\nPhase ${phase.index}: ${phase.title} ${phase.titleEmphasis ?? ""} (${phase.timing})\n`;
    context += `Description: ${phase.description}\n`;
    if (phase.tip) {
      const tipText = phase.tip.content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      context += `Tip: ${tipText}\n`;
    }
    phase.sections.forEach((section) => {
      context += `  Section: ${section.title}\n`;
      section.tasks.forEach((task) => {
        context += `    - ${task.text}`;
        if (task.detail) context += ` (${task.detail})`;
        context += "\n";
      });
    });
  });

  context += "\n=== TOP NOMAD DESTINATIONS ===\n";
  DESTINATIONS.forEach((dest) => {
    context += `- ${dest.city}, ${dest.country} (${dest.region}): ~${dest.monthlyCost}/mo, Internet: ${dest.internet}, Visa-free days: ${dest.visaDays}, Score: ${dest.score}/10\n`;
  });

  context += "\n=== PACKING CATEGORIES ===\n";
  PACKING_CATEGORIES.forEach((cat) => {
    const items = cat.items.map((i) => i.label).join(", ");
    context += `- ${cat.title}: ${items}\n`;
  });

  context += "\n=== INCOME STREAMS ===\n";
  INCOME_STREAMS.forEach((stream) => {
    context += `- ${stream.name} (${stream.type}): up to $${stream.maxAmount.toLocaleString()}/mo\n`;
  });

  context += "\n=== NOMAD NETWORK PLATFORMS ===\n";
  NETWORK_PLATFORMS.forEach((platform) => {
    context += `- ${platform.name}: ${platform.description}\n`;
  });

  return context;
}

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: google("gemini-2.5-flash"),
    system: getSystemPrompt(),
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
