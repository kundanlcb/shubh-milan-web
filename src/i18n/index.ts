import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import maithili from './locales/mai.json';
import hindi from './locales/hi.json';
import english from './locales/en.json';

const resources = {
  mai: { translation: maithili },
  hi: { translation: hindi },
  en: { translation: english },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'mai', // Maithili as default
    lng: 'mai', // Default language
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;

