import type { GuideFAQ } from "./types";
import { faqsPart1 } from "./part1";
import { faqsPart2 } from "./part2";
import { faqsPart3 } from "./part3";
import { faqsPart4 } from "./part4";
import { faqsPart5 } from "./part5";

export type { GuideFAQ };

export const guideFaqs: Record<string, GuideFAQ[]> = {
  ...faqsPart1,
  ...faqsPart2,
  ...faqsPart3,
  ...faqsPart4,
  ...faqsPart5,
};

export const getGuideFaqs = (id: string): GuideFAQ[] => guideFaqs[id] ?? [];
