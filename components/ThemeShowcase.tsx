import PhoneFrame from "./PhoneFrame";

export default function ThemeShowcase() {
  return (
    <section className="section">
      <div className="container">
        <div className="card" style={{ borderRadius: 32, padding: "clamp(32px,5vw,64px)", overflow: "hidden" }}>
          <div className="theme-row" style={{ display: "flex", alignItems: "center", gap: "clamp(32px,5vw,72px)" }}>
            <div style={{ flex: "1 1 340px", minWidth: 0 }}>
              <div className="eyebrow" style={{ marginBottom: 14 }}>
                Appearance
              </div>
              <h2 className="h2" style={{ fontSize: "clamp(28px,4vw,46px)", lineHeight: 1.06, marginBottom: 16 }}>
                One app.
                <br />
                Two moods.
              </h2>
              <p className="lead" style={{ maxWidth: "44ch", marginBottom: 28 }}>
                Dark for the gym floor, light for the kitchen table. Every screen is drawn twice, so contrast and colour
                stay right in both.
              </p>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "var(--mut)" }}>
                This page follows your system appearance, exactly like the app does.
              </p>
            </div>

            <div style={{ flex: "1 1 380px", display: "flex", justifyContent: "center", gap: "clamp(12px,2vw,26px)", minWidth: 0 }}>
              <PhoneFrame
                src="/shots/01-home-dark.jpg"
                alt="Home screen in dark theme"
                style={{ height: "clamp(300px,34vw,430px)", transform: "rotate(-4deg)" }}
              />
              <PhoneFrame
                frame="light"
                src="/shots/07-home-light.jpg"
                alt="Home screen in light theme"
                style={{ height: "clamp(300px,34vw,430px)", transform: "rotate(4deg)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
