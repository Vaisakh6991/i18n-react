import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { I18N_CACHE, LANG } from './constants/constants';

const fallbackLng = [LANG.EN];
const availableLanguages = Object.values(LANG);

const options = {
  order: ['localStorage'],

  // keys to lookup language from
  lookupLocalStorage: I18N_CACHE.LOCAL_STORAGE,

  // cache user language on
  caches: ['localStorage'],

  // only detect languages that are in the whitelist
  checkWhitelist: true,
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    debug: true,
    fallbackLng,
    whitelist: availableLanguages,
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
      useSuspense: false,
    },
  });
