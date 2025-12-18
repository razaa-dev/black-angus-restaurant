import Image from "next/image";

export default function RestaurantPhotosSection() {
  return (
    <section className="bde-section-769-303 bde-section">
      <div className="section-container">
        <div className="bde-columns-769-304 bde-columns">
          <div className="bde-column-769-305 bde-column">
            <div className="bde-image-769-306 bde-image">
              <figure className="breakdance-image breakdance-image--231">
                <div className="breakdance-image-container">
                  <div className="breakdance-image-clip">
                    <Image
                      src="/wp-content/uploads/2025/01/restaurant-black-angus-salle-1.jpg"
                      alt="Restaurant Black Angus Salle 1"
                      width={1333}
                      height={2000}
                      className="breakdance-image-object"
                      sizes="(max-width: 1333px) 100vw, 1333px"
                    />
                  </div>
                </div>
              </figure>
            </div>
          </div>
          <div className="bde-column-769-307 bde-column">
            <div
              className="bde-image-769-308 bde-image"
              data-parallax="true"
            >
              <figure className="breakdance-image breakdance-image--233">
                <div className="breakdance-image-container">
                  <div className="breakdance-image-clip">
                    <Image
                      src="/wp-content/uploads/2025/01/restaurant-black-angus-salle-2.jpg"
                      alt="Restaurant Black Angus Salle 2"
                      width={2000}
                      height={1333}
                      className="breakdance-image-object"
                      sizes="(max-width: 2000px) 100vw, 2000px"
                    />
                  </div>
                </div>
              </figure>
            </div>
            <div className="bde-image-769-309 bde-image">
              <figure className="breakdance-image breakdance-image--234">
                <div className="breakdance-image-container">
                  <div className="breakdance-image-clip">
                    <Image
                      src="/wp-content/uploads/2025/01/restaurant-black-angus-salle-3.jpg"
                      alt="Restaurant Black Angus Salle 3"
                      width={2000}
                      height={1333}
                      className="breakdance-image-object"
                      sizes="(max-width: 2000px) 100vw, 2000px"
                    />
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
