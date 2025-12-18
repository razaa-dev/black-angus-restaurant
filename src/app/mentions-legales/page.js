'use client';

import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';

export default function MentionsLegales() {
  const { t } = useLanguage();

  return (
    <div className="breakdance">
      <section className="bde-section-46-100 bde-section">
        <div className="section-container">
          <Image
            className="bde-image2-46-101 bde-image2"
            src="/wp-content/uploads/2024/12/logo-black-angus-site-internet.jpg"
            alt="Restaurant Black Angus Paris"
            width={1870}
            height={596}
            loading="lazy"
            sizes="(max-width: 1870px) 100vw, 1870px"
          />
          <h1 className="bde-heading-46-102 bde-heading">
            {t.legalNoticesTitle}
          </h1>
          <div className="bde-rich-text-46-103 bde-rich-text breakdance-rich-text-styles">
            <p style={{ textAlign: 'left' }}>
              {t.legalNoticesIntro}
            </p>
            <p style={{ textAlign: 'left' }}>
              <strong>{t.legalNoticesInfoTitle}</strong>
            </p>
            <p style={{ textAlign: 'left' }}>
              {t.legalNoticesStatus}
              <br />
              {t.legalNoticesName}
              <br />
              {t.legalNoticesSiret}
              <br />
              {t.legalNoticesAddress}
            </p>
            <p style={{ textAlign: 'left' }}>
              {t.legalNoticesHosting}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
