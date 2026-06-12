import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getVisaGuideBySlug, visaGuides } from "@/data/visa-guides";
import { FAQSection } from "@/components/blog/faq-section";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { Book, Clock, Banknote, AlertTriangle, Lightbulb, MapPin, CheckCircle, ChevronRight } from "lucide-react";

interface Props {
  params: Promise<{ country: string }>;
}

export async function generateStaticParams() {
  return visaGuides.map((guide) => ({
    country: guide.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const guide = getVisaGuideBySlug(country);

  if (!guide) {
    return { title: "Visa Guide Not Found | Udream" };
  }

  return {
    title: `${guide.country} Visa Guide for Philippine Passports | Udream`,
    description: `Complete guide on how to get a ${guide.country} visa for Filipino and Malaysian passport holders. Steps, requirements, costs, and tips.`,
  };
}

export default async function VisaGuidePage({ params }: Props) {
  const { country } = await params;
  const guide = getVisaGuideBySlug(country);

  if (!guide) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": guide.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "https://udreamtravels.com" },
          { name: "Resources", item: "https://udreamtravels.com/resources" },
          { name: "Visa Guides", item: "https://udreamtravels.com/resources/visa-guide" },
          { name: guide.country, item: `https://udreamtravels.com/resources/visa-guide/${guide.slug}` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-muted/30 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {guide.country} Visa Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {guide.intro}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        
        {/* Passport Status Overview */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Book className="w-6 h-6 text-primary" />
            Visa Status Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl border border-border bg-white shadow-sm">
              <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                Philippine Passport
              </p>
              <div className="text-2xl font-bold text-foreground">
                {guide.statusFilipino}
              </div>
            </div>
            <div className="p-6 rounded-xl border border-border bg-white shadow-sm">
              <p className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                Malaysian Passport
              </p>
              <div className="text-2xl font-bold text-foreground">
                {guide.statusMalaysian}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <Banknote className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-lg">Estimated Cost</p>
                <p className="text-muted-foreground">{guide.costAndProcessing.cost}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-lg">Processing Time</p>
                <p className="text-muted-foreground">{guide.costAndProcessing.processingTime}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Steps */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Step-by-Step Application Process</h2>
          <div className="space-y-6">
            {guide.steps.map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shrink-0">
                    {idx + 1}
                  </div>
                  {idx !== guide.steps.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2"></div>
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Required Documents */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Required Documents</h2>
          <div className="space-y-6">
            {guide.documents.map((docCategory, idx) => (
              <div key={idx} className="p-6 border border-border rounded-xl">
                <h3 className="text-lg font-bold mb-4">{docCategory.category}</h3>
                <ul className="space-y-3">
                  {docCategory.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Where to Apply */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-primary" />
            Where to Apply
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {guide.whereToApply.map((place, idx) => (
              <div key={idx} className="p-6 border border-border rounded-xl bg-muted/20">
                <h3 className="text-lg font-bold mb-2">{place.name}</h3>
                {place.address && <p className="text-muted-foreground mb-2">{place.address}</p>}
                {place.notes && <p className="text-sm text-muted-foreground italic mb-3">{place.notes}</p>}
                {place.link && (
                  <a href={place.link} target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline flex items-center gap-1">
                    Official Website <ChevronRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Tips & Mistakes */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              Pro Tips
            </h2>
            <ul className="space-y-3">
              {guide.tips.map((tip, idx) => (
               <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                 <span className="text-amber-500 mt-1">•</span>
                 {tip}
               </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              Common Mistakes
            </h2>
            <ul className="space-y-3">
              {guide.mistakes.map((mistake, idx) => (
               <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                 <span className="text-destructive mt-1">•</span>
                 {mistake}
               </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQs */}
        {guide.faqs && guide.faqs.length > 0 && (
          <section className="border-t border-border pt-12">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <FAQSection faqs={guide.faqs} />
          </section>
        )}

      </div>
    </div>
  );
}
