import { SECTIONS } from "@/data/content";

export default function SectionsStrip() {
  return (
    <section style={{ padding: "0 0 clamp(56px,7vw,96px)" }}>
      <div className="container" style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
        {SECTIONS.map((s) => (
          <span className="pill" key={s}>
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
