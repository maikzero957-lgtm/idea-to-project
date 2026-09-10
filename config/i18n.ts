import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import arCommon from './ar/common.json';
import enCommon from './en/common.json';

const resources = {
  ar: { common: arCommon },
  en: { common: enCommon },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar',
    fallbackLng: 'ar',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
