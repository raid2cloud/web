import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import en_all from "./translations/en/all.json"
import fr_all from "./translations/fr/all.json"
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    "all" : en_all
  },
  fr: {
    "all" : fr_all
  }
};
i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng : "en",
    fallbackNS : "all",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });
  export default i18n;