import Image from "next/image";

export default function HeroSection({ t }) {
  return (
    <section className="bde-section-769-100 bde-section">
      <div className="section-container">
        <Image
          src="/wp-content/uploads/2025/01/black-angus-logo-avec-infos.png"
          alt="Black Angus Logo Avec Infos"
          width={1871}
          height={567}
          className="bde-image2-769-101 bde-image2"
          priority
          sizes="(max-width: 1871px) 100vw, 1871px"
        />
        <h1 className="bde-heading-769-102 bde-heading">{t.mainHeading}</h1>
        <div className="bde-div-769-360 bde-div">
          <Image
            src="/wp-content/uploads/2025/06/coup-de-coeur-restoaparis-2025-v2.svg"
            alt="Coup de coeur restoaparis 2025 v2"
            width={300}
            height={300}
            className="bde-image2-769-361 bde-image2"
            loading="lazy"
            unoptimized
          />
          <Image
            src="/wp-content/uploads/2025/06/note-google-black-angus.png"
            alt="Note google black angus"
            width={500}
            height={500}
            className="bde-image2-769-363 bde-image2"
            loading="lazy"
            sizes="(max-width: 500px) 100vw, 500px"
          />
        </div>
      </div>
    </section>
  );
}
