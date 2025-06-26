'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'de',
    supportedLngs: ['de', 'en', 'es'],
    debug: process.env.NODE_ENV === 'development',
    ns: ['return'],
    defaultNS: 'return',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      order: ['localStorage', 'cookie', 'navigator'],
      caches: ['localStorage', 'cookie'],
      cookieMinutes: 10080,
      lookupLocalStorage: 'i18nextLng',
      lookupCookie: 'i18next',
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false, // ✅ necesario para evitar errores en Next.js App Router
    },
  });

export default i18n;
