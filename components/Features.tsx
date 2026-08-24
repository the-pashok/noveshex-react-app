import { FEATURES } from "@/data/content";
import FeatureIcon from "./FeatureIcons";

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div style={{ maxWidth: 660, marginBottom: "clamp(36px,5vw,60px)" }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            Features
          </div>
          <h2 className="h2" style={{ marginBottom: 16 }}>
            Six habits. One place to keep them.
          </h2>
          <p className="lead">
            Every part of the app writes into the same day, so progress isn&apos;t scattered across four different
            trackers.
          </p>
        </div>

        <div className="grid-auto">
          {FEATURES.map((f) => (
            <article className="card card-hover" key={f.title} style={{ padding: 28 }}>
              <div className="icon-badge" style={{ marginBottom: 20 }}>
                <FeatureIcon name={f.icon} />
              </div>
              <h3 className="h3" style={{ marginBottom: 9 }}>
                {f.title}
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--mut)" }}>{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
