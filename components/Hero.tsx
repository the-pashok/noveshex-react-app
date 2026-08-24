import PhoneFrame from "./PhoneFrame";
import StoreButtons from "./StoreButtons";

export default function Hero() {
  return (
    <section id="top" style={{ position: "relative", padding: "clamp(56px,8vw,110px) 0" }}>
      <div
        aria-hidden
        style={{
          position: "absolute", inset: "-10% -10% auto -10%", height: 760, pointerEvents: "none",
          background: "radial-gradient(60% 60% at 62% 22%, var(--glow), transparent 70%)",
        }}
      />
      <div
        className="container hero"
        style={{
          position: "relative", display: "grid", gridTemplateColumns: "1.05fr .95fr",
          gap: "clamp(32px,5vw,72px)", alignItems: "center",
        }}
      >
        <div className="hero-copy" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 26 }}>
          <span
            style={{
              display: "inline-flex", alignItems: "center", gap: 9, padding: "7px 14px 7px 10px",
              borderRadius: 999, border: "1px solid var(--line)", background: "var(--surf)",
              fontSize: 12.5, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--mut)",
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: 99, background: "var(--acc)" }} />
            Training · Nutrition · Recovery
          </span>

          <h1 className="h1">
            Your whole
            <br />
            protocol, in
            <br />
            one app.
          </h1>

          <p className="lead" style={{ maxWidth: "52ch", fontSize: "clamp(16px,1.6vw,19px)" }}>
            Noveshex plans your training, counts your macros, keeps supplements and schedules on track, and turns the
            whole week into numbers you can actually read.
          </p>

          <StoreButtons />

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 18px", fontSize: 13.5, fontWeight: 600, color: "var(--mut)" }}>
            <span>Free to start</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>English · Русский · Українська</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>Light &amp; dark</span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
          <div
            aria-hidden
            style={{
              position: "absolute", width: "78%", aspectRatio: "1", top: "8%", borderRadius: 999,
              background: "radial-gradient(circle, var(--glow), transparent 68%)", filter: "blur(20px)",
            }}
          />
          <PhoneFrame
            className="floaty"
            style={{ height: "clamp(430px,54vw,640px)", padding: 11, borderRadius: "clamp(34px,4.4vw,52px)" }}
            dark="/shots/01-home-dark.jpg"
            light="/shots/07-home-light.jpg"
            alt="Noveshex home screen"
          />
        </div>
      </div>
    </section>
  );
}
