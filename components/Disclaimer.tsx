export default function Disclaimer() {
  return (
    <section style={{ padding: "0 0 clamp(48px,6vw,80px)" }}>
      <div className="container">
        <div className="card" style={{ borderRadius: 22, padding: "26px 28px", display: "flex", gap: 18, alignItems: "flex-start" }}>
          <span
            aria-hidden
            style={{
              width: 26, height: 26, borderRadius: 99, border: "1.6px solid var(--mut)", color: "var(--mut)",
              display: "grid", placeItems: "center", flex: "0 0 auto", fontSize: 14, fontWeight: 800, fontStyle: "italic",
            }}
          >
            i
          </span>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: "var(--mut)", textWrap: "pretty" }}>
            Noveshex is a planning and tracking tool, not a medical service. Nothing in the app or on this page is
            medical advice, a prescription, or a recommendation to use any substance. Always consult a qualified doctor
            before changing your training, nutrition or any protocol, and follow the laws of your country.
          </p>
        </div>
      </div>
    </section>
  );
}
