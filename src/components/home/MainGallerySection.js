import Image from "next/image";

export default function MainGallerySection() {
  const galleryImages = [
    {
      src: "/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03.jpg",
      width: 1333,
      height: 2000,
      alt: "L'entreboeuf Déc24@ninacoriton 03",
    },
    {
      src: "/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02.jpg",
      width: 2000,
      height: 1333,
      alt: "L'entreboeuf Déc24@ninacoriton 02",
    },
    {
      src: "/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12.jpg",
      width: 2000,
      height: 1333,
      alt: "L'entreboeuf Déc24@ninacoriton 12",
    },
    {
      src: "/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08.jpg",
      width: 1333,
      height: 2000,
      alt: "L'entreboeuf Déc24@ninacoriton 08",
    },
    {
      src: "/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05.jpg",
      width: 2000,
      height: 1333,
      alt: "L'entreboeuf Déc24@ninacoriton 05",
    },
  ];

  return (
    <section className="bde-section-769-109 bde-section">
      <div className="section-container">
        <div className="bde-gallery-769-110 bde-gallery">
          <div
            className="ee-gallery-swiper breakdance-swiper-wrapper"
            data-swiper-id="110"
          >
            <div className="swiper">
              <div className="ee-gallery ee-gallery--gallery-slider ee-gallery--slider ee-gallery-- ee-gallery--lightbox ee-gallery--zoom-in ee-gallery--caption- ee-gallery--caption-none ee-gallery--custom swiper-wrapper">
                {galleryImages.map((image, index) => (
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
                        width={image.width}
                        height={image.height}
                        alt={image.alt}
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
        <div className="bde-columns-769-111 bde-columns">
          <div className="bde-column-769-299 bde-column">
            <div className="bde-gallery-769-301 bde-gallery">
              <div
                className="ee-gallery-swiper breakdance-swiper-wrapper"
                data-swiper-id="301"
              >
                <div className="swiper">
                  <div className="ee-gallery ee-gallery--gallery-slider ee-gallery--slider ee-gallery-- ee-gallery--lightbox ee-gallery--zoom-in ee-gallery--caption- ee-gallery--caption-none ee-gallery--custom swiper-wrapper">
                    <a
                      className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                      href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-02.jpg"
                      data-sub-html="<span></span>"
                      data-category="1"
                      data-lg-size="2000-1333"
                    >
                      <figure className="ee-gallery-item-figure">
                        <Image
                          src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02.jpg"
                          width={2000}
                          height={1333}
                          alt="L'entreboeuf Déc24@ninacoriton 02"
                          className="breakdance-image-object"
                          sizes="(max-width: 2000px) 100vw, 2000px"
                        />
                      </figure>
                    </a>
                    <a
                      className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                      href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-05.jpg"
                      data-sub-html="<span></span>"
                      data-category="1"
                      data-lg-size="2000-1333"
                    >
                      <figure className="ee-gallery-item-figure">
                        <Image
                          src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05.jpg"
                          width={2000}
                          height={1333}
                          alt="L'entreboeuf Déc24@ninacoriton 05"
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
          <div className="bde-column-769-114 bde-column">
            <div className="bde-gallery-769-115 bde-gallery">
              <div
                className="ee-gallery-swiper breakdance-swiper-wrapper"
                data-swiper-id="115"
              >
                <div className="swiper">
                  <div className="ee-gallery ee-gallery--gallery-slider ee-gallery--slider ee-gallery-- ee-gallery--lightbox ee-gallery--zoom-in ee-gallery--caption- ee-gallery--caption-none ee-gallery--custom swiper-wrapper">
                    <a
                      className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                      href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-03.jpg"
                      data-sub-html="<span></span>"
                      data-category="1"
                      data-lg-size="1333-2000"
                    >
                      <figure className="ee-gallery-item-figure">
                        <Image
                          src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03.jpg"
                          width={1333}
                          height={2000}
                          alt="L'entreboeuf Déc24@ninacoriton 03"
                          className="breakdance-image-object"
                          sizes="(max-width: 1333px) 100vw, 1333px"
                        />
                      </figure>
                    </a>
                    <a
                      className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                      href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-12.jpg"
                      data-sub-html="<span></span>"
                      data-category="1"
                      data-lg-size="2000-1333"
                    >
                      <figure className="ee-gallery-item-figure">
                        <Image
                          src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12.jpg"
                          width={2000}
                          height={1333}
                          alt="L'entreboeuf Déc24@ninacoriton 12"
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
          <div className="bde-column-769-116 bde-column">
            <div className="bde-gallery-769-117 bde-gallery">
              <div
                className="ee-gallery-swiper breakdance-swiper-wrapper"
                data-swiper-id="117"
              >
                <div className="swiper">
                  <div className="ee-gallery ee-gallery--gallery-slider ee-gallery--slider ee-gallery-- ee-gallery--lightbox ee-gallery--zoom-in ee-gallery--caption- ee-gallery--caption-none ee-gallery--custom swiper-wrapper">
                    <a
                      className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                      href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-08.jpg"
                      data-sub-html="<span></span>"
                      data-category="1"
                      data-lg-size="1333-2000"
                    >
                      <figure className="ee-gallery-item-figure">
                        <Image
                          src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08.jpg"
                          width={1333}
                          height={2000}
                          alt="L'entreboeuf Déc24@ninacoriton 08"
                          className="breakdance-image-object"
                          sizes="(max-width: 1333px) 100vw, 1333px"
                        />
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cow logo images */}
        <div className="bde-div-769-258 bde-div">
          <Image
            src="/wp-content/uploads/2025/01/black-angus-logo-vache-head.png"
            width={1300}
            height={567}
            alt="Black Angus Logo Vache Head"
            className="bde-image2-769-259 bde-image2"
            sizes="(max-width: 1300px) 100vw, 1300px"
          />
          <Image
            src="/wp-content/uploads/2025/01/black-angus-logo-vache-back.png"
            width={1300}
            height={567}
            alt="Black Angus Logo Vache Back"
            className="bde-image2-769-260 bde-image2"
            sizes="(max-width: 1300px) 100vw, 1300px"
          />
          <Image
            src="/wp-content/uploads/2025/01/black-angus-logo-vache-derriere.png"
            width={1300}
            height={567}
            alt="Black Angus Logo Vache Derriere"
            className="bde-image2-769-278 bde-image2"
            sizes="(max-width: 1300px) 100vw, 1300px"
          />
        </div>
      </div>
    </section>
  );
}
