const COLUMNS = [
  { title: "Product", links: [["Features", "#features"], ["Screens", "#screens"], ["Pricing", "#pricing"], ["FAQ", "#faq"]] },
  { title: "Company", links: [["Download", "#get"], ["Support", "#get"], ["Press kit", "#get"], ["Contact", "#get"]] },
  { title: "Legal", links: [["Privacy", "#get"], ["Terms", "#get"], ["Subscriptions", "#get"], ["Disclaimer", "#get"]] },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", padding: "clamp(44px,5vw,64px) 0 40px" }}>
      <div className="container">
        <div className="foot-grid" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: "36px 24px" }}>
          <div>
            <a href="#top" style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 16 }}>
              <span
                style={{
                  width: 32, height: 32, borderRadius: 10, background: "var(--acc)", color: "var(--ink)",
                  display: "grid", placeItems: "center", fontWeight: 800, fontSize: 17, letterSpacing: "-.03em",
                }}
              >
                N
              </span>
              <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: "-.02em" }}>Noveshex</span>
            </a>
            <p className="small" style={{ margin: 0, maxWidth: "34ch" }}>
              Training, nutrition and recovery in a single app — for people who like their progress in numbers.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} style={{ display: "flex", flexDirection: "column", gap: 11, fontSize: 14.5, fontWeight: 600, color: "var(--mut)" }}>
              <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--tx)", marginBottom: 4 }}>
                {col.title}
              </span>
              {col.links.map(([label, href]) => (
                <a key={label} href={href}>
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 44, paddingTop: 24, borderTop: "1px solid var(--line)", display: "flex", flexWrap: "wrap",
            gap: "12px 24px", justifyContent: "space-between", fontSize: 13.5, fontWeight: 600, color: "var(--mut)",
          }}
        >
          <span>© 2026 Noveshex. All rights reserved.</span>
          <span>Made for iOS &amp; Android</span>
        </div>
      </div>
    </footer>
  );
}
