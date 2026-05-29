import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Guides | Udream Travels",
  description: "Curated travel guides to help you plan your perfect trip, from budget options to luxury experiences.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
