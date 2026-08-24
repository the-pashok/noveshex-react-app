"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#screens", label: "Screens" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  /* the panel only exists <= 1024px — close it if the viewport grows past that */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1025px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      style={{
        position: "sticky", top: 0, zIndex: 60,
        backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)",
        background: "color-mix(in srgb, var(--bg) 78%, transparent)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="container" style={{ padding: "14px 24px", display: "flex", alignItems: "center", gap: 24 }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 11, flex: "0 0 auto" }}>
          <span
            style={{
              width: 34, height: 34, borderRadius: 11, background: "var(--acc)", color: "var(--ink)",
              display: "grid", placeItems: "center", fontWeight: 800, fontSize: 18, letterSpacing: "-.03em",
            }}
          >
            N
          </span>
          <span style={{ fontWeight: 800, fontSize: 19, letterSpacing: "-.02em" }}>Noveshex</span>
        </a>

        <nav
          className="desk-only"
          style={{ display: "flex", gap: 30, marginLeft: 14, fontSize: 15, fontWeight: 600, color: "var(--mut)" }}
        >
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
          <a className="btn-pill" href="#get">
            Get the app
          </a>
          <button
            className="burger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="mobile-panel" id="mobile-menu" data-open={open}>
        <div className="container" style={{ padding: "0 24px 20px", display: "flex", flexDirection: "column" }}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#get"
            onClick={() => setOpen(false)}
            style={{
              marginTop: 14, padding: 15, borderRadius: 16, background: "var(--acc)", color: "var(--ink)",
              fontWeight: 800, fontSize: 15.5, textAlign: "center", borderBottom: "none",
            }}
          >
            Get the app
          </a>
        </div>
      </div>
    </header>
  );
}
