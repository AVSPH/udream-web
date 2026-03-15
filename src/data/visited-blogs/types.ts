export interface StaticBlogQuickFact {
  label: string;
  value: string;
}

export interface StaticBlogSection {
  heading: string;
  paragraphs: string[];
}

export interface StaticBlog {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  quickFacts: StaticBlogQuickFact[];
  sections: StaticBlogSection[];
  keywords: string[];
}
