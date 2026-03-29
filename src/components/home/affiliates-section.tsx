"use client";

import { motion } from "framer-motion";
import { ExternalLink, Gift } from "lucide-react";
import { useState } from "react";

type AffiliatePartner = {
  name: string;
  offer: string;
  href?: string;
  promoCode?: string;
  logoUrls: string[];
};

const AFFILIATE_PARTNERS: AffiliatePartner[] = [
  {
    name: "Airbnb",
    offer: "Get PHP 600 off your first stay.",
    href: "https://www.airbnb.com/c/vt4UybWY6tGUQ75r?unique_share_id=72da1af2-f9aa-4a96-88df-aa446a03d252",
    logoUrls: [
      "https://logo.clearbit.com/airbnb.com",
      "https://www.google.com/s2/favicons?sz=128&domain=airbnb.com",
    ],
  },
  {
    name: "SafetyWing",
    offer: "Get 20% off nomad insurance.",
    href: "https://safetywing.com/signup?product=nomad-insurance&callbackUrl=%2Fdashboard%2Fnomad-insurance%2Fpurchase&referralToken=29bb1793-07d9-439d-aeac-d1b6723dc0a0",
    logoUrls: [
      "https://www.google.com/s2/favicons?sz=128&domain=safetywing.com",
      "https://logo.clearbit.com/safetywing.com",
    ],
  },
  {
    name: "Wise",
    offer: "Get a free card or zero transfer fees up to PHP 31,500.",
    href: "https://wise.com/invite/drhc/maryg1464",
    logoUrls: [
      "https://logo.clearbit.com/wise.com",
      "https://www.google.com/s2/favicons?sz=128&domain=wise.com",
    ],
  },
  {
    name: "Airalo",
    offer: "Get USD 3.00 off your first purchase.",
    promoCode: "MARYKR7865",
    logoUrls: [
      "https://logo.clearbit.com/airalo.com",
      "https://www.google.com/s2/favicons?sz=128&domain=airalo.com",
    ],
  },
];

function AffiliateLogo({
  name,
  logoUrls,
}: {
  name: string;
  logoUrls: string[];
}) {
  const [hasError, setHasError] = useState(false);
  const [logoIndex, setLogoIndex] = useState(0);

  const currentLogoUrl = logoUrls[logoIndex];

  if (hasError) {
    return (
      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
        {name.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <div className="w-11 h-11 rounded-xl bg-white border border-border/80 flex items-center justify-center overflow-hidden">
      <img
        src={currentLogoUrl}
        alt={`${name} logo`}
        loading="lazy"
        onError={() => {
          if (logoIndex < logoUrls.length - 1) {
            setLogoIndex((prev) => prev + 1);
            return;
          }

          setHasError(true);
        }}
        className="w-7 h-7 object-contain"
      />
    </div>
  );
}

export function AffiliatesSection() {
  return (
    <section
      id="affiliates"
      className="pt-24 pb-5 px-4 bg-white relative overflow-hidden"
    >
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5"
          >
            <Gift className="w-4 h-4" />
            <span>Travel Partner Deals</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground"
          >
            Trusted{" "}
            <span
              style={{ fontFamily: "var(--font-script)" }}
              className="text-primary italic"
            >
              Affiliates
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-lg text-muted-foreground"
          >
            These are tools and services we personally use while traveling. If
            you use our links, you unlock perks and also support Udream at no
            extra cost.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {AFFILIATE_PARTNERS.map((partner, index) => {
            return (
              <motion.article
                key={partner.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-6 flex flex-col min-h-[260px] hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mb-5">
                  <AffiliateLogo
                    name={partner.name}
                    logoUrls={partner.logoUrls}
                  />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {partner.name}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {partner.offer}
                </p>

                {partner.promoCode && (
                  <div className="mb-5 rounded-xl border border-primary/20 bg-primary/5 px-3 py-2.5">
                    <p className="text-[11px] uppercase tracking-wide text-muted-foreground mb-1">
                      Promo code
                    </p>
                    <p className="font-semibold text-primary">
                      {partner.promoCode}
                    </p>
                  </div>
                )}

                <div className="mt-auto">
                  {partner.href ? (
                    <a
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      Claim this deal
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground/70">
                      Use this code at checkout.
                    </p>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
