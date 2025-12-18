'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import { trackReservationClick } from '../../utils/tracking';

export default function Reservation() {
  const { t } = useLanguage();

  return (
    <div className="breakdance">
      <section className="bde-section-238-100 bde-section">
        <div className="section-container">
          <div className="bde-columns-238-102 bde-columns">
            <div className="bde-column-238-103 bde-column">
              <div className="bde-rich-text-238-105 bde-rich-text breakdance-rich-text-styles">
                <p style={{ textAlign: 'left' }}>
                  <strong>{t.reservationPleaseNote}</strong>
                </p>
                <ul>
                  <li style={{ textAlign: 'left' }}>
                    <span style={{ color: '#ff0000' }}>
                      <strong>{t.reservationWalkInWelcome}</strong>
                    </span>{' '}
                    <strong>
                      <span style={{ color: '#ff0000' }}>{t.reservationNoReservation} </span>
                    </strong>
                    {t.reservationSpacious} <strong>{t.reservationTablesAvailable}</strong> {t.reservationForWalkIn}
                    <br />
                    <br />
                  </li>
                  <li style={{ textAlign: 'left' }}>
                    {t.reservationPossibility}
                  </li>
                  <li style={{ textAlign: 'left' }}>
                    <strong>
                      <span style={{ color: '#ff0000' }}>{t.reservationEveningSlots}</span> {t.reservationWalkInEvening}{' '}
                      <u>{t.reservationComeWithout}</u>{' '}
                    </strong>
                    {t.reservationTeamHappy}
                    <br />
                    <br />
                  </li>
                  <li style={{ textAlign: 'left' }}>
                    <strong>{t.reservationLastOrder}</strong> :<br />
                    {t.reservationWeekday}
                    <br />
                    {t.reservationWeekend}
                  </li>
                </ul>
              </div>

              <div className="bde-button-238-107 bde-button booking-link">
                <a
                  className="breakdance-link button-atom button-atom--custom bde-button__button"
                  href="/reservation-zc"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackReservationClick}
                >
                  <span className="button-atom__text">{t.reservationBookButton}</span>
                </a>
              </div>
            </div>

            <div className="bde-column-238-104 bde-column">
              <Image
                className="bde-image2-238-106 bde-image2"
                src="/wp-content/uploads/2025/01/Restaurant-black-angus-grande-salle-paris.jpg"
                alt={t.reservationImageAlt}
                width={1333}
                height={2000}
                loading="lazy"
                sizes="(max-width: 1333px) 100vw, 1333px"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
