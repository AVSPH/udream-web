import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visa Guide | Udream Travels",
  description: "Practical visa guidelines and document requirements for top destinations for Philippine passport holders.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
