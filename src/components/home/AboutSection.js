export default function AboutSection({ t }) {
  return (
    <section className="bde-section-769-118 bde-section">
      <div className="section-container">
        <div className="bde-rich-text-769-119 bde-rich-text breakdance-rich-text-styles">
          <div className="abstract" style={{ textAlign: "center" }}>
            {t.aboutParagraph1}
            <br />
            <br />
          </div>
          <div className="abstract" style={{ textAlign: "center" }}>
            {t.aboutParagraph2Start}
            <strong style={{ color: "#ed1d23" }}>
              {t.aboutParagraph2Highlight1}
            </strong>
            {t.aboutParagraph2Middle}
            <strong style={{ color: "#ed1d23" }}>
              {t.aboutParagraph2Highlight2}
            </strong>
            {t.aboutParagraph2End}
          </div>
          <p style={{ textAlign: "center" }}>{t.aboutParagraph3}</p>
        </div>
      </div>
    </section>
  );
}
