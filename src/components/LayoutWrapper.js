'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';

function LayoutContent({ children }) {
  const { language, handleLanguageChange, t } = useLanguage();
  const pathname = usePathname();

  // Hide header and footer only on reservation-zc page
  const isReservationZC = pathname === '/reservation-zc';

  return (
    <>
      <ScrollToTop />
      {!isReservationZC && <Header language={language} handleLanguageChange={handleLanguageChange} t={t} />}
      {children}
      {!isReservationZC && <Footer t={t} />}
    </>
  );
}

export default function LayoutWrapper({ children }) {
  return (
    <LanguageProvider>
      <LayoutContent>{children}</LayoutContent>
    </LanguageProvider>
  );
}
