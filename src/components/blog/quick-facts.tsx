import { MapPin, Globe, Languages, Banknote, CalendarDays, Wallet, FileText, Bus } from "lucide-react";

export interface QuickFactsData {
  country: string;
  region: string;
  language: string;
  currency: string;
  bestTimeToVisit: string;
  dailyBudget: {
    budget: string;
    mid: string;
    luxury: string;
  };
  visaStatus: string;
  gettingAround: string;
}

export function QuickFacts({ data }: { data: QuickFactsData }) {
  if (!data) return null;

  return (
    <div className="my-8 rounded-2xl border border-border bg-muted/20 overflow-hidden">
      <div className="bg-muted/40 px-6 py-4 border-b border-border">
        <h3 className="text-lg font-bold">Quick Facts</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
        {/* Left Column */}
        <div className="flex flex-col divide-y divide-border">
          <FactRow icon={MapPin} label="Country" value={data.country} />
          <FactRow icon={Globe} label="Region" value={data.region} />
          <FactRow icon={Languages} label="Language" value={data.language} />
          <FactRow icon={Banknote} label="Currency" value={data.currency} />
        </div>
        {/* Right Column */}
        <div className="flex flex-col divide-y divide-border">
          <FactRow icon={CalendarDays} label="Best Time to Visit" value={data.bestTimeToVisit} />
          <FactRow icon={FileText} label="Visa (MY/PH)" value={data.visaStatus} />
          <FactRow icon={Bus} label="Getting Around" value={data.gettingAround} />
          
          {/* Budget row is special */}
          <div className="flex items-start gap-4 p-4 md:p-6">
            <Wallet className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Daily Budget</p>
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase">Budget</p>
                  <p className="font-semibold text-sm">{data.dailyBudget.budget}</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase">Mid</p>
                  <p className="font-semibold text-sm">{data.dailyBudget.mid}</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase">Luxury</p>
                  <p className="font-semibold text-sm">{data.dailyBudget.luxury}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FactRow({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4 p-4 md:p-6">
      <Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="font-semibold mt-1">{value}</p>
      </div>
    </div>
  );
}
