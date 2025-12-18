'use client';

import { createContext, useState, useEffect, useContext, useTransition } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Always start with 'fr' to match server-side rendering
  const [language, setLanguage] = useState('fr');
  const [, startTransition] = useTransition();

  useEffect(() => {
    // Only after mounting (after hydration), check localStorage
    // Use startTransition to mark this as a non-urgent update
    startTransition(() => {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
        setLanguage(savedLanguage);
      }
    });
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, handleLanguageChange, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
