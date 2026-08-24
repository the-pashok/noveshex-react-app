"use client";

import { useState } from "react";
import { PERIOD_LABEL, PLANS, type Period } from "@/data/content";
import { CheckMark } from "./Icons";

const PERIODS: { key: Period; label: React.ReactNode }[] = [
  { key: "Month", label: "Month" },
  { key: "Quarter", label: "3 months" },
  {
    key: "Year",
    label: (
      <>
        Year <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: ".08em", opacity: 0.75 }}>· BEST VALUE</span>
      </>
    ),
  },
];

export default function Pricing() {
  const [period, setPeriod] = useState<Period>("Year");

  return (
    <section id="pricing" className="section">
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto clamp(32px,4vw,48px)" }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            Pricing
          </div>
          <h2 className="h2" style={{ marginBottom: 16 }}>
            More ways to move your progress forward
          </h2>
          <p className="lead">Tracking is free. Subscriptions add custom programs, AI assistance and deeper analytics.</p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
          <div className="seg">
            {PERIODS.map((p) => (
              <button key={p.key} data-on={period === p.key} onClick={() => setPeriod(p.key)}>
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid-auto">
          {PLANS.map((plan) => (
            <div key={plan.name} className={"card plan" + (plan.featured ? " plan--featured" : "")}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <span style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-.03em" }}>{plan.name}</span>
                {plan.badge ? (
                  <span
                    style={{
                      padding: "5px 10px", borderRadius: 999, background: "var(--acc)", color: "var(--ink)",
                      fontSize: 10.5, fontWeight: 800, letterSpacing: ".08em",
                    }}
                  >
                    {plan.badge}
                  </span>
                ) : null}
              </div>

              <div style={{ display: "flex", alignItems: "baseline", gap: 9 }}>
                <span style={{ fontSize: 38, fontWeight: 800, letterSpacing: "-.04em" }}>{plan.price[period]}</span>
                <span style={{ fontSize: 15, fontWeight: 600, color: "var(--mut)" }}>{PERIOD_LABEL[period]}</span>
              </div>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--mut)", marginTop: 6, minHeight: 20 }}>
                {plan.note[period]}
              </div>

              <div style={{ height: 1, background: "var(--line)", margin: "22px 0" }} />

              <div className="plan-features">
                {plan.features.map((feat) => (
                  <div key={feat.text} style={{ display: "flex", gap: 11, alignItems: "flex-start", fontSize: 15, lineHeight: 1.45 }}>
                    <CheckMark muted={feat.soon} />
                    <span style={feat.soon ? { color: "var(--mut)" } : undefined}>{feat.text}</span>
                    {feat.soon ? (
                      <span
                        style={{
                          marginLeft: "auto", padding: "3px 9px", borderRadius: 999, fontSize: 11, fontWeight: 800,
                          background: "color-mix(in srgb, var(--tx) 8%, transparent)", color: "var(--mut)",
                        }}
                      >
                        Soon
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>

              <a
                href="#get"
                className={plan.featured ? "btn btn-accent" : "btn btn-ghost"}
                style={{ display: "flex", justifyContent: "center", marginTop: 26, width: "100%" }}
              >
                Choose {plan.name}
              </a>
            </div>
          ))}
        </div>

        <p style={{ margin: "22px auto 0", maxWidth: "70ch", textAlign: "center", fontSize: 13.5, lineHeight: 1.6, color: "var(--mut)" }}>
          Paid training programs, nutrition plans and courses are purchased separately and remain available after a
          subscription ends.
        </p>
      </div>
    </section>
  );
}
