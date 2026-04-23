export function LegalContent({ page }) {
  return (
    <div className="legal-content reveal">
      <header className="legal-content__header">
        <span className="legal-content__eyebrow">Noveshex Legal</span>
        <h1>{page.title}</h1>
        <p>{page.description}</p>
        <div className="legal-content__meta">Останнє оновлення: {page.lastUpdated}</div>
      </header>

      <div className="legal-content__sections">
        {page.sections.map((section) => (
          <section key={section.title} className="legal-section">
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
