'use client';

import { useState } from 'react';
import { Compass, ArrowRight, Lock, Check, User, Mail, Sparkles, ListChecks, Calculator, Backpack, Wallet } from 'lucide-react';

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
    <div className="relative min-h-screen bg-background text-foreground py-20 md:py-24 px-6 md:px-12 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-secondary/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* Left Column: Value Prop */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-mono text-primary uppercase tracking-widest mb-6">
              <Compass className="w-3.5 h-3.5" />
              UDream Nomad Playbook
            </div>

            <h1 className="font-display text-foreground text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-5">
              6 Phases to <br /><em className="text-primary not-italic">Freedom</em>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-7 max-w-md">
              The exact system we used to quit our 9-to-5s in the Philippines and work from anywhere ~ broken into six phases you can actually follow.
            </p>

            {/* Stats strip */}
            <div className="flex items-center gap-6 mb-8">
              {[
                { value: '6', label: 'Phases' },
                { value: '96', label: 'Tasks' },
                { value: '5', label: 'Tools' },
                { value: '$0', label: 'Forever' },
              ].map((s) => (
                <div key={s.label} className="text-center md:text-left">
                  <p className="font-display text-2xl lg:text-3xl font-bold text-foreground leading-none">{s.value}</p>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mt-1.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* What you unlock */}
            <ul className="space-y-3 text-left">
              {[
                { icon: ListChecks, text: 'A 96-task roadmap ~ mindset to touchdown to scaling' },
                { icon: Calculator, text: 'Financial runway calculator + expense tracker' },
                { icon: Backpack, text: 'Destination ranker, packing list & visa checklists' },
                { icon: Wallet, text: 'Built for weak passports and real budgets' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary/10 shrink-0">
                    <Icon className="w-3.5 h-3.5 text-primary" />
                  </span>
                  <span className="pt-1">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Gate card */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-md rounded-3xl p-[1.5px] bg-gradient-to-br from-primary/70 via-border to-secondary/60 shadow-[0_24px_70px_-24px_rgba(46,38,30,0.45)]">
              <div className="relative rounded-[calc(1.5rem-1.5px)] bg-card p-8 lg:p-10 overflow-hidden">
                <div aria-hidden className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-primary/10 blur-2xl pointer-events-none" />

                {/* Free badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-[11px] font-bold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3 h-3" />
                  100% free · instant access
                </span>

                <h3 className="text-2xl font-display font-bold text-card-foreground mb-2">Unlock the full playbook</h3>
                <p className="text-sm text-muted-foreground mb-7 leading-relaxed">
                  Tell us where to send your progress link, and start phase one in the next 30 seconds.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1.5">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50 pointer-events-none" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Johnson"
                        autoFocus
                        className="w-full pl-11 pr-4 py-3 bg-background border border-input rounded-xl text-foreground placeholder:text-muted-foreground/50 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/50 pointer-events-none" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full pl-11 pr-4 py-3 bg-background border border-input rounded-xl text-foreground placeholder:text-muted-foreground/50 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {error && (
                    <p className="text-xs text-destructive">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="cta-shine group relative overflow-hidden w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-primary-foreground font-bold text-[15px] rounded-xl hover:bg-primary/90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 mt-4 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-primary/25 hover:shadow-primary/40"
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
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </form>

                {/* Trust row */}
                <div className="mt-6 space-y-2">
                  <p className="flex items-center gap-2 text-[11px] text-muted-foreground justify-center">
                    <Check className="w-3 h-3 text-emerald-500" />
                    No credit card. No paywall later. Free means free.
                  </p>
                  <p className="flex items-center gap-2 text-[11px] text-muted-foreground justify-center">
                    <Lock className="w-3 h-3" />
                    We respect your privacy. No spam, ever.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO copy ~ below the fold so mobile users reach the form fast */}
        <p className="text-muted-foreground text-[15px] leading-relaxed font-light max-w-3xl mt-16 mx-auto md:mx-0 text-center md:text-left">
          If you've been searching for a real, no-nonsense <strong className="font-medium text-foreground">digital nomad guide</strong>, you're in the right place. We built this playbook to share exactly how we transitioned from standard 9-to-5 jobs to working from anywhere. Written specifically for Filipinos and anyone else dealing with weak passports, budget constraints, and finding reliable internet, this guide breaks down <strong className="font-medium text-foreground">how to become a digital nomad Philippines</strong> into six manageable phases. From mindset shifts and financial runway to visas, gear, and surviving those crucial first weeks, you'll have a clear plan, reliable remote work, and a step-by-step checklist to make this lifestyle sustainable.
        </p>
      </div>
    </div>
  );
}
