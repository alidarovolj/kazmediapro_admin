import { createI18n } from "vue-i18n";

const messages = {
  ru: {
    general: {
      callRequest: "Обратный звонок",
    },
    header: {
      links: {
        about: "О нас",
        services: "Услуги",
        cases: "Кейсы",
        contacts: "Контакты",
      },
    },
    mainPage: {
      hero: {
        line: "Всегда есть решение",
        headText: "рекламно-производственная компания",
      },
    },
  },
  en: {
    general: {
      callRequest: "Back call",
    },
    header: {
      links: {
        about: "About Us",
        services: "Services",
        cases: "Cases",
        contacts: "Contacts",
      },
    },
    mainPage: {
      hero: {
        line: "There is always a solution",
        headText: "advertising production company",
      },
    },
  },
  kz: {
    general: {
      callRequest: "Кері қоңырау",
    },
    header: {
      links: {
        about: "Біз туралы",
        services: "Қызметтер",
        cases: "Істер",
        contacts: "Контактілер",
      },
    },
    mainPage: {
      hero: {
        line: "Әрқашан шешім бар",
        headText: "жарнамалық компания",
      },
    },
  },
};

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages,
});
