import NomadPlaybook from '@/components/nomad/NomadPlaybook';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "The Digital Nomad Playbook | 6 Phases to Freedom | Udream",
  description: "Get our comprehensive digital nomad guide. Learn exactly how to become a digital nomad Philippines and transition to a life of freedom in 6 phases.",
};

export default function NomadPlaybookPage() {
  return <NomadPlaybook />;
}
