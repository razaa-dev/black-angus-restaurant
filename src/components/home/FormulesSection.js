import Image from "next/image";

export default function FormulesSection({ t }) {
  return (
    <section className="bde-section-769-126 bde-section">
      <div className="section-container">
        <div className="bde-columns-769-318 bde-columns">
          <div className="bde-column-769-319 bde-column">
            <Image
              src="/wp-content/uploads/2025/01/formule-side-left-1.png"
              alt="Formule Side Left 1"
              width={729}
              height={1791}
              className="bde-image2-769-195 bde-image2"
              loading="lazy"
              sizes="(max-width: 729px) 100vw, 729px"
            />
          </div>
          <div className="bde-column-769-320 bde-column">
            <div className="bde-div-769-127 bde-div">
              <div className="bde-div-769-359 bde-div">
                <h2 className="bde-heading-769-128 bde-heading">{t.formulesTitle}</h2>
                <h2 className="bde-heading-769-358 bde-heading">{t.formulesSubtitle}</h2>
              </div>
              <Image
                src="/wp-content/uploads/2025/01/red-top-border.png"
                alt="Red Top Border"
                width={1265}
                height={155}
                className="bde-image2-769-191 bde-image2"
                loading="lazy"
                sizes="(max-width: 1265px) 100vw, 1265px"
              />
              <div className="bde-div-769-190 bde-div">
                <h3 className="bde-heading-769-262 bde-heading">
                  {t.formulesAccompaniment}
                </h3>
                <div className="bde-div-769-261 bde-div">
                  <div className="bde-div-769-263 bde-div">
                    <h4 className="bde-heading-769-266 bde-heading bde-preset-b80cbe54-952c-403a-8fdd-b8057bda7e01">
                      {t.formuleBlackRedTitle}
                    </h4>
                    <h5 className="bde-heading-769-267 bde-heading bde-preset-a58ba013-22d2-43a1-8b7d-693453589819">
                      {t.formuleBlackRedDesc}
                    </h5>
                  </div>
                  <div className="bde-text-769-328 bde-text formule-prix bde-preset-b082af3a-c9da-4742-b993-e6ccf27dc75e">
                    29€
                  </div>
                </div>
                <div className="bde-div-769-273 bde-div">
                  <div className="bde-div-769-274 bde-div">
                    <h4 className="bde-heading-769-275 bde-heading bde-preset-b80cbe54-952c-403a-8fdd-b8057bda7e01">
                      {t.formuleBlackLoverTitle}
                    </h4>
                    <h5 className="bde-heading-769-276 bde-heading bde-preset-a58ba013-22d2-43a1-8b7d-693453589819">
                      {t.formuleBlackLoverDesc}
                    </h5>
                  </div>
                  <div className="bde-text-769-330 bde-text formule-prix bde-preset-b082af3a-c9da-4742-b993-e6ccf27dc75e">
                    35€
                  </div>
                </div>
                <div className="bde-div-769-268 bde-div">
                  <div className="bde-div-769-269 bde-div">
                    <h4 className="bde-heading-769-270 bde-heading bde-preset-b80cbe54-952c-403a-8fdd-b8057bda7e01">
                      {t.formuleBlackPrimeTitle}
                    </h4>
                    <h5 className="bde-heading-769-271 bde-heading bde-preset-a58ba013-22d2-43a1-8b7d-693453589819">
                      {t.formuleBlackPrimeDesc}
                    </h5>
                  </div>
                  <div className="bde-text-769-329 bde-text formule-prix bde-preset-b082af3a-c9da-4742-b993-e6ccf27dc75e">
                    42€
                  </div>
                </div>
              </div>
            </div>
            <div className="bde-div-769-337 bde-div">
              <h2 className="bde-heading-769-338 bde-heading">{t.formulesLunchTitle}</h2>
              <Image
                src="/wp-content/uploads/2025/01/red-top-border.png"
                alt="Red Top Border"
                width={1265}
                height={155}
                className="bde-image2-769-339 bde-image2"
                loading="lazy"
                sizes="(max-width: 1265px) 100vw, 1265px"
              />
              <div className="bde-div-769-340 bde-div">
                <h3 className="bde-heading-769-341 bde-heading">
                  {t.formulesLunchAccompaniment}
                </h3>
                <div className="bde-div-769-342 bde-div">
                  <div className="bde-div-769-343 bde-div">
                    <div className="bde-div-769-357 bde-div">
                      <h4 className="bde-heading-769-344 bde-heading bde-preset-b80cbe54-952c-403a-8fdd-b8057bda7e01">
                        {t.formuleBlackBurgerTitle}
                      </h4>
                      <h5 className="bde-heading-769-345 bde-heading bde-preset-a58ba013-22d2-43a1-8b7d-693453589819">
                        {t.formuleBlackBurgerDesc}
                      </h5>
                    </div>
                  </div>
                  <div className="bde-text-769-346 bde-text formule-prix bde-preset-b082af3a-c9da-4742-b993-e6ccf27dc75e">
                    19€
                  </div>
                </div>
                <div className="bde-text-769-335 bde-text">
                  {t.formulesLunchAvailability}
                </div>
              </div>
            </div>
          </div>
          <div className="bde-column-769-321 bde-column">
            <Image
              src="/wp-content/uploads/2025/01/formule-side-right-v2.png"
              alt="Formule Side Right V2"
              width={757}
              height={1787}
              className="bde-image2-769-209 bde-image2"
              loading="lazy"
              sizes="(max-width: 757px) 100vw, 757px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}