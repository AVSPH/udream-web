import Link from "next/link";
import { Calculator, ArrowRight } from "lucide-react";

interface CostCalloutProps {
  countryName: string;
}

export function CostCallout({ countryName }: CostCalloutProps) {
  return (
    <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-primary/20 bg-primary/5 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
        <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">
            Budgeting for {countryName}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Wondering how much {countryName} costs? See our real budget breakdown with daily costs at budget, mid-range, and luxury levels.
          </p>
        </div>
      </div>
      <Link
        href="/resources/destination-costs"
        className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap shrink-0 w-full md:w-auto"
      >
        View Costs <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
