import Image from "next/image";

export default function DessertsSection({ t }) {
  const desserts = [
    { name: t.dessertSorbets2, price: "6" },
    { name: t.dessertSorbets3, price: "9" },
    { name: t.dessertPearTart, price: "9,5" },
    { name: t.dessertAppleTart, price: "9,5" },
    { name: t.dessertLemonTart, price: "9,5" },
    { name: t.dessertCremeBrulee, price: "9,5" },
    { name: t.dessertBaba, price: "10,5" },
    { name: t.dessertProfiteroles, price: "11" },
    { name: t.dessertChocolateCake, price: "12", note: t.dessertWaitTime },
  ];

  return (
    <section className="bde-section-769-210 bde-section">
      <div className="section-container">
        <div className="bde-columns-769-322 bde-columns">
          <div className="bde-column-769-323 bde-column">
            <Image
              src="/wp-content/uploads/2025/01/cuillere-v2.png"
              alt="Cuillere V2"
              width={698}
              height={386}
              className="bde-image2-769-256 bde-image2"
              loading="lazy"
              sizes="(max-width: 698px) 100vw, 698px"
            />
          </div>
          <div className="bde-column-769-324 bde-column">
            <div className="bde-div-769-211 bde-div">
              <h2 className="bde-heading-769-212 bde-heading">Desserts</h2>
              <Image
                src="/wp-content/uploads/2025/01/red-top-border.png"
                alt="Red Top Border"
                width={1265}
                height={155}
                className="bde-image2-769-213 bde-image2"
                loading="lazy"
                sizes="(max-width: 1265px) 100vw, 1265px"
              />
              <div className="bde-div-769-214 bde-div">
                <div className="bde-fancy-divider-769-215 bde-fancy-divider">
                  <div className="bde-fancy-divider__wrapper">
                    <div className="bde-fancy-divider__separator"></div>
                  </div>
                </div>
                <div className="bde-fancy-divider-769-288 bde-fancy-divider">
                  <div className="bde-fancy-divider__wrapper">
                    <div className="bde-fancy-divider__separator"></div>
                  </div>
                </div>
              </div>
              <div className="bde-div-769-216 bde-div">
                {desserts.map((dessert, index) => (
                  <div
                    key={index}
                    className="bde-div-769-217 bde-div bde-preset-4a368af5-7b0a-4ce4-a281-47ab68badcaf"
                  >
                    <div className="bde-div-769-218 bde-div bde-preset-84071600-909e-455e-8dc7-ade8350a2e28">
                      <h3 className="bde-heading-769-279 bde-heading desserts">
                        {dessert.name}
                      </h3>
                      {dessert.note && (
                        <div className="bde-text-769-252 bde-text desserts">
                          {dessert.note}
                        </div>
                      )}
                    </div>
                    <div className="bde-text-769-220 bde-text bde-preset-5b0b0eb6-d544-4eb3-a475-06a52e74308a">
                      {dessert.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bde-button-769-254 bde-button">
              <a
                className="breakdance-link button-atom button-atom--custom bde-button__button"
                href="wp-content/uploads/2025/10/BLACK_ANGUS_MENU_OCT_2025.pdf"
                target="_self"
                data-type="url"
              >
                <span className="button-atom__text">{t.fullMenuPDF}</span>
              </a>
            </div>
          </div>
          <div className="bde-column-769-325 bde-column">
            <Image
              src="/wp-content/uploads/2025/01/couverts.png"
              alt="Couverts"
              width={364}
              height={362}
              className="bde-image2-769-257 bde-image2"
              loading="lazy"
              sizes="(max-width: 364px) 100vw, 364px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
