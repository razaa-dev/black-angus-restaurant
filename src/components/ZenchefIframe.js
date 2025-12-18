'use client';

import { useLanguage } from '../context/LanguageContext';

/**
 * Zenchef Reservation Iframe Component
 * Displays the Zenchef booking widget with dynamic language support
 */
export default function ZenchefIframe() {
  const { language } = useLanguage();

  // Determine language code for Zenchef (defaults to 'fr' if not 'en')
  const lang = language === 'en' ? 'en' : 'fr';

  return (
    <iframe
      id="reservation-iframe"
      className="reservation-iframe no-lazy lazyload"
      data-no-lazy="true"
      width="100%"
      height="100%"
      style={{ background: '#2c3037' }}
      title="Réserver au Restaurant Black Angus"
      src={`https://bookings.zenchef.com/results?rid=369522&lang=${lang}`}
    />
  );
}
