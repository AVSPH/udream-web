import NomadPlaybook from '@/components/nomad/NomadPlaybook';
import type { Metadata } from 'next';
import { PHASES } from '@/components/nomad/data';

export const metadata: Metadata = {
  title: "The Digital Nomad Playbook | 6 Phases to Freedom | Udream",
  description: "Get our comprehensive digital nomad guide. Learn exactly how to become a digital nomad Philippines and transition to a life of freedom in 6 phases.",
};

export default function NomadPlaybookPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to become a digital nomad",
    "description": metadata.description,
    "step": PHASES.map(phase => ({
      "@type": "HowToStep",
      "name": `${phase.title} ${phase.titleEmphasis}`,
      "text": phase.description
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <NomadPlaybook />
    </>
  );
}
