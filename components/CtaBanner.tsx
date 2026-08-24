import StoreButtons from "./StoreButtons";

export default function CtaBanner() {
  return (
    <section id="get" className="section">
      <div className="container">
        <div
          style={{
            position: "relative", borderRadius: 36, background: "var(--acc)", color: "var(--ink)",
            padding: "clamp(40px,6vw,86px) clamp(28px,5vw,72px)", overflow: "hidden",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute", right: "-6%", top: "-40%", width: "52%", aspectRatio: "1",
              borderRadius: 999, background: "rgba(255,255,255,.22)",
            }}
          />
          <div style={{ position: "relative", maxWidth: 620 }}>
            <h2 className="h2" style={{ fontSize: "clamp(32px,5vw,58px)", lineHeight: 1.02, marginBottom: 18 }}>
              Start today.
              <br />
              The app does the counting.
            </h2>
            <p style={{ margin: "0 0 34px", fontSize: "clamp(16px,1.7vw,19px)", lineHeight: 1.5, opacity: 0.72, maxWidth: "46ch" }}>
              Free to download. Set a goal, pick a program, and let the week take shape on its own.
            </p>
            <StoreButtons variant="on-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}
