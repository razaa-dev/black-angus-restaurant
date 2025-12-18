import Image from "next/image";

export default function SecondaryGallerySection() {
  const gallery1Images = [
    {
      src: "/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45.jpg",
      width: 2000,
      height: 1333,
      alt: "L'entreboeuf Déc24@ninacoriton 45",
    },
    {
      src: "/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40.jpg",
      width: 2000,
      height: 1333,
      alt: "L'entreboeuf Déc24@ninacoriton 40",
    },
    {
      src: "/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36.jpg",
      width: 1333,
      height: 2000,
      alt: "L'entreboeuf Déc24@ninacoriton 36",
    },
    {
      src: "/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30.jpg",
      width: 2000,
      height: 1333,
      alt: "L'entreboeuf Déc24@ninacoriton 30",
    },
  ];

  const gallery2Images = [
    {
      src: "/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-34.jpg",
      width: 1333,
      height: 2000,
      alt: "L'entreboeuf Nov24@ninacoriton 34",
    },
    {
      src: "/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-37.jpg",
      width: 1333,
      height: 2000,
      alt: "L'entreboeuf Nov24@ninacoriton 37",
    },
  ];

  return (
    <section className="bde-section-769-289 bde-section">
      <div className="section-container">
        {/* Main gallery slider */}
        <div className="bde-gallery-769-290 bde-gallery">
          <div
            className="ee-gallery-swiper breakdance-swiper-wrapper"
            data-swiper-id="290"
          >
            <div className="swiper">
              <div className="ee-gallery ee-gallery--gallery-slider ee-gallery--slider ee-gallery-- ee-gallery--lightbox ee-gallery--zoom-in ee-gallery--caption- ee-gallery--caption-none ee-gallery--custom swiper-wrapper">
                {gallery1Images.map((image, index) => (
                  <a
                    key={index}
                    className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                    href={image.src.replace('/wp-content/uploads/', 'wp-content/uploads/')}
                    data-sub-html="<span></span>"
                    data-category="1"
                    data-lg-size={`${image.width}-${image.height}`}
                  >
                    <figure className="ee-gallery-item-figure">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="breakdance-image-object"
                        sizes={`(max-width: ${image.width}px) 100vw, ${image.width}px`}
                      />
                    </figure>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Three column gallery grid */}
        <div className="bde-columns-769-291 bde-columns">
          {/* Column 1 */}
          <div className="bde-column-769-292 bde-column">
            <div className="bde-gallery-769-293 bde-gallery">
              <div
                className="ee-gallery-swiper breakdance-swiper-wrapper"
                data-swiper-id="293"
              >
                <div className="swiper">
                  <div className="ee-gallery ee-gallery--gallery-slider ee-gallery--slider ee-gallery-- ee-gallery--lightbox ee-gallery--zoom-in ee-gallery--caption- ee-gallery--caption-none ee-gallery--custom swiper-wrapper">
                    <a
                      className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                      href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-45.jpg"
                      data-sub-html="<span></span>"
                      data-category="1"
                      data-lg-size="2000-1333"
                    >
                      <figure className="ee-gallery-item-figure">
                        <Image
                          src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45.jpg"
                          alt="L'entreboeuf Déc24@ninacoriton 45"
                          width={2000}
                          height={1333}
                          className="breakdance-image-object"
                          sizes="(max-width: 2000px) 100vw, 2000px"
                        />
                      </figure>
                    </a>
                    <a
                      className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                      href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-30.jpg"
                      data-sub-html="<span></span>"
                      data-category="1"
                      data-lg-size="2000-1333"
                    >
                      <figure className="ee-gallery-item-figure">
                        <Image
                          src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30.jpg"
                          alt="L'entreboeuf Déc24@ninacoriton 30"
                          width={2000}
                          height={1333}
                          className="breakdance-image-object"
                          sizes="(max-width: 2000px) 100vw, 2000px"
                        />
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="bde-column-769-294 bde-column">
            <div className="bde-gallery-769-295 bde-gallery">
              <div
                className="ee-gallery-swiper breakdance-swiper-wrapper"
                data-swiper-id="295"
              >
                <div className="swiper">
                  <div className="ee-gallery ee-gallery--gallery-slider ee-gallery--slider ee-gallery-- ee-gallery--lightbox ee-gallery--zoom-in ee-gallery--caption- ee-gallery--caption-none ee-gallery--custom swiper-wrapper">
                    <a
                      className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                      href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-36.jpg"
                      data-sub-html="<span></span>"
                      data-category="1"
                      data-lg-size="1333-2000"
                    >
                      <figure className="ee-gallery-item-figure">
                        <Image
                          src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36.jpg"
                          alt="L'entreboeuf Déc24@ninacoriton 36"
                          width={1333}
                          height={2000}
                          className="breakdance-image-object"
                          sizes="(max-width: 1333px) 100vw, 1333px"
                        />
                      </figure>
                    </a>
                    <a
                      className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                      href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-40.jpg"
                      data-sub-html="<span></span>"
                      data-category="1"
                      data-lg-size="2000-1333"
                    >
                      <figure className="ee-gallery-item-figure">
                        <Image
                          src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40.jpg"
                          alt="L'entreboeuf Déc24@ninacoriton 40"
                          width={2000}
                          height={1333}
                          className="breakdance-image-object"
                          sizes="(max-width: 2000px) 100vw, 2000px"
                        />
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="bde-column-769-296 bde-column">
            <div className="bde-gallery-769-297 bde-gallery">
              <div
                className="ee-gallery-swiper breakdance-swiper-wrapper"
                data-swiper-id="297"
              >
                <div className="swiper">
                  <div className="ee-gallery ee-gallery--gallery-slider ee-gallery--slider ee-gallery-- ee-gallery--lightbox ee-gallery--zoom-in ee-gallery--caption- ee-gallery--caption-none ee-gallery--custom swiper-wrapper">
                    {gallery2Images.map((image, index) => (
                      <a
                        key={index}
                        className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                        href={image.src.replace('/wp-content/uploads/', 'wp-content/uploads/')}
                        data-sub-html="<span></span>"
                        data-category="1"
                        data-lg-size={`${image.width}-${image.height}`}
                      >
                        <figure className="ee-gallery-item-figure">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className="breakdance-image-object"
                            sizes={`(max-width: ${image.width}px) 100vw, ${image.width}px`}
                          />
                        </figure>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
