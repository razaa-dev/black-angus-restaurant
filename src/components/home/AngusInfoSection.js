export default function AngusInfoSection({ t }) {
  return (
    <section className="bde-section-769-315 bde-section">
      <div className="section-container">
        <h2 className="bde-heading-769-316 bde-heading">
          {t.angusHeading}
        </h2>
        <div className="bde-rich-text-769-314 bde-rich-text breakdance-rich-text-styles">
          <p style={{ textAlign: "center" }}>
            {t.angusPara1Start}
            <strong>{t.angusPara1Bold}</strong>
            {t.angusPara1End}
          </p>
          <p style={{ textAlign: "center" }}>
            <strong>
              {t.angusPara2BoldStart}
              <span style={{ color: "#ff0000" }}>{t.angusPara2Red}</span>
            </strong>
            {t.angusPara2BoldEnd}
          </p>
          <p style={{ textAlign: "center" }}>{t.angusPara3}</p>
          <p style={{ textAlign: "center" }}>{t.angusPara4}</p>
        </div>
      </div>
    </section>
  );
}
