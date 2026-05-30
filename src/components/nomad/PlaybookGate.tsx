'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, ArrowRight, Lock } from 'lucide-react';

interface PlaybookGateProps {
  onUnlock: (name: string, email: string) => void;
}

export default function PlaybookGate({ onUnlock }: PlaybookGateProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) { setError('Please enter your name.'); return; }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) { setError('Please enter a valid email address.'); return; }

    setLoading(true);

    const trimmedName = name.trim();
    const parts = trimmedName.split(' ');
    const firstName = parts[0];
    const lastName = parts.slice(1).join(' ') || '';

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email: email.trim(),
          tags: ['Nomad Playbook'],
        }),
      });

      const data = await res.json();

      // Duplicate = already registered, still grant access
      if (!res.ok && data.error !== 'duplicate') {
        setError('Something went wrong. Please try again.');
        setLoading(false);
        return;
      }
    } catch {
      setError('Something went wrong. Please try again.');
      setLoading(false);
      return;
    }

    onUnlock(trimmedName, email.trim());
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center py-16 px-6 md:px-12">
      {/* Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Column: Value Prop */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-mono text-primary uppercase tracking-widest mb-8">
            <Compass className="w-3.5 h-3.5" />
            UDream Nomad Playbook
          </div>
          
          <h1 className="font-display text-foreground text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-6">
            6 Phases to <br/><em className="text-primary not-italic">Freedom</em>
          </h1>
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Unlock 96 tasks, interactive tools, and everything you need to transition from a 9-to-5 to a sustainable digital nomad lifestyle.
          </p>

          <p className="text-muted-foreground text-[15px] leading-relaxed font-light">
            If you've been searching for a real, no-nonsense <strong className="font-medium text-foreground">digital nomad guide</strong>, you're in the right place. We built this playbook to share exactly how we transitioned from standard 9-to-5 jobs to working from anywhere. Written specifically for Filipinos and anyone else dealing with weak passports, budget constraints, and finding reliable internet, this guide breaks down <strong className="font-medium text-foreground">how to become a digital nomad Philippines</strong> into six manageable phases. From mindset shifts and financial runway to visas, gear, and surviving those crucial first weeks, you'll have a clear plan, reliable remote work, and a step-by-step checklist to make this lifestyle sustainable.
          </p>
        </div>

        {/* Right Column: Form */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-md bg-card border border-border rounded-3xl p-8 lg:p-10 shadow-xl">
            <h3 className="text-2xl font-display font-bold text-card-foreground mb-2">Access the Playbook</h3>
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed">Drop your details below to unlock the full guide and let's get you on the road.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex Johnson"
                  autoFocus
                  className="w-full px-4 py-3 bg-background border border-input rounded-xl text-foreground placeholder:text-muted-foreground/50 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-background border border-input rounded-xl text-foreground placeholder:text-muted-foreground/50 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              {error && (
                <p className="text-xs text-destructive">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-primary-foreground font-semibold text-sm rounded-xl hover:bg-primary/90 transition-colors mt-4 disabled:opacity-60 disabled:cursor-not-allowed shadow-md shadow-primary/20"
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Unlocking…
                  </>
                ) : (
                  <>
                    Unlock the Playbook
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
            
            <p className="flex items-center gap-2 mt-6 text-[10px] text-muted-foreground justify-center">
              <Lock className="w-3 h-3" />
              We respect your privacy. No spam, ever.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
