import { FAQ } from "@/data/content";
import { ChevronDown } from "./Icons";

export default function Faq() {
  return (
    <section id="faq" className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "clamp(32px,4vw,48px)" }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>
            FAQ
          </div>
          <h2 className="h2">Questions, answered</h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {FAQ.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>
                <span style={{ flex: 1 }}>{item.q}</span>
                <ChevronDown />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
