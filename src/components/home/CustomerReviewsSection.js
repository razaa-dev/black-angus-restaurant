import TrustindexWidget from "../TrustindexWidget";

export default function CustomerReviewsSection({ t }) {
  return (
    <section className="bde-section-769-364 bde-section">
      <div className="section-container">
        <h2 className="bde-heading-769-366 bde-heading">
          {t.customerReviews}
        </h2>
        <TrustindexWidget />
      </div>
    </section>
  );
}
