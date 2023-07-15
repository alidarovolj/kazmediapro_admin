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
      about: {
        header: "О НАС",
        content:
          "Следует отметить, что семантический разбор внешних противодействий обеспечивает актуальность переосмысления внешнеэкономических политик. Для современного мира высокое качество позиционных исследований, в своём классическом представлении, допускает внедрение экономической целесообразности принимаемых решений! В своём стремлении улучшить пользовательский опыт мы упускаем, что элементы политического процесса функционально разнесены на независимые элементы.",
        blocks: {
          first: "Собственная производственная база",
          second: "Собственные склады хранения",
          third: "Высокотехнологичное оборудование",
          fourth: "Собственный штат специалистов",
        },
      },
      manufacture: {
        header: "НАШЕ ПРОИЗВОДСТВО",
        first: "Фрезерно-гравировальные станки",
        second: "Лазерные гравировальные станки",
        third: "UV печать",
        fourth: "Широкоформатная печать 1440 dpi",
        fifth: "Оборудование для работы с деревом и металлом",
        sixth: "Покраска",
        seventh: "Логистика, установка по всему Казахстану",
      },
      whyUs: {
        header: "ПОЧЕМУ МЫ?",
        first: "Широкий спектр услуг",
        second: "Качество работы",
        third: "Ориентация под клиента",
        fourth: "Реклама под ключ",
        fifth: "Гарантия на работы",
      },
      services: {
        header: "УСЛУГИ",
        list: {
          first: {
            header: "ДИЗАЙН И РАЗРАБОТКА",
            content:
              "Разработка дизайна с нуля любой сложности, адаптация, файлы для печати, технические файлы к производству.",
          },
          second: {
            header: "НАРУЖНАЯ РЕКЛАМА",
            content:
              "Эффективная наружная реклама под ключ. Лайтбоксы, вывески, объемные буквы, неоновая реклама и прочее.",
          },
          third: {
            header: "ВНУТРЕННЯЯ РЕКЛАМА",
            content:
              "Все типы внутренней рекламы. Стенды, световые короба, светодиодные и цифровые экраны, мобайлы, муляжи и прочее.",
          },
          fourth: {
            header: "POSM МАТЕРИАЛЫ",
            content:
              "Привлекающие внимание и нестандартные pos-материалы. ОТС, навесные дисплеи, напольные дисплеи, шелфтокеры световые и прочее.",
          },
          fifth: {
            header: "ТОРГОВОЕ ОБОРУДОВАНИЕ",
            content:
              "Индивидуальный подход к торговому оборудованию. Бренд-зоны, shop-in-shop, endcap, торцы, пристенные модули, бренд шоп и прочее.",
          },
          sixth: {
            header: "БРЕНДИНГ",
            content:
              "Выделение продукта различной сложности. Брендинг категории, торгового пространства, выделение продукта на полке, кассовая зона, входная группа и прочее.",
          },
          seventh: {
            header: "КОММЕРЧЕСКАЯ МЕБЕЛЬ",
            content:
              "Разработка дизайна с нуля, адаптация, файлы для печати, технические файлы к производству.",
          },
          eighth: {
            header: "ПРОИЗВОДСТВО МЕБЕЛИ",
            content:
              "Бренд зоны, стенды любой сложности и масштаба. Оформление и стилизация под бренд.",
          },
          ninth: {
            header: "АРЕНДА ОБОРУДОВАНИЯ",
            content:
              "Разработка дизайна с нуля, адаптация, файлы для печати, технические файлы к производству.",
          },
        },
        benefits: {
          first: "Высокий уровень сервиса",
          second: "Индивидуальный подход",
          third: "Логистика и монтаж по всему Казахстану",
        },
      },
      touch: {
        header: "НАШ ПОДХОД",
        first: {
          header: "Разработаем дизайн и подготовим файлы",
          content: {
            first: "технические файлы",
            second: "файлы для печати",
          },
        },
        second: {
          header: "Инженер спроектирует",
          content: {
            first: "технические файлы",
            second: "файлы для печати",
          },
        },
        third: {
          header: "Команда изготовит",
          content: {
            first: "технические файлы",
            second: "файлы для печати",
          },
        },
      },
      team: {
        header: "КОМАНДА",
        first: {
          name: "Юлия Склярова",
          position: "Генеральный директор.",
          experience: "Опыт в управлении 6 лет.",
        },
        second: {
          name: "Александр Бычков",
          position: "Генеральный директор.",
          experience: "Опыт в управлении 6 лет.",
        },
        third: {
          name: "Артем Цымбал",
          position: "Генеральный директор.",
          experience: "Опыт в управлении 6 лет.",
        },
        content: {
          first:
            "Высокий уровень менеджмента помогает принимать верные управленческие решения, разрабатывать новые технологии и решать задачи наших клиентов.",
          second:
            "Профессионализм специалистов на производстве помогает создавать качественные изделия и выдерживать сроки производства.",
        },
        button:
          "Общий штат специалистов на производстве <b>20 человек</b> с опытом работы от 5 лет и выше",
      },
      contacts: {
        header: "ДОВЕРЬТЕСЬ ПРОФЕССИОНАЛАМ!",
        content:
          "Мы предлагаем Вам комплексный подход в решении задач в области разработки и производства рекламной продукции.",
        form: {
          header: "Оставьте заявку",
          content: "Мы свяжемся с Вами в ближайшее время",
          direction: {
            header: "Направление*",
            placeholder: "Производство ПОСМ",
            error: "Ввод направления не заполнен",
          },
          name: {
            header: "Имя*",
            placeholder: "Иван Иванов",
            error: "Ввод имени не заполнен",
          },
          email: {
            header: "Email*",
            placeholder: "i.ivanov@gmail.com",
            error: "Ввод email не заполнен",
          },
          phone: {
            header: "Телефон*",
            placeholder: "+7 (777) 777 77 77",
            error: "Ввод телефона не заполнен",
          },
          note: {
            header: "Краткое описание задачи",
            placeholder: "Введите текст",
            error: "",
          },
          button: "Отправить",
        },
      },
      footer: {
        address: {
          header: "АДРЕС",
          city: "г. Алматы",
          street: "пр. Райымбека 417а/3",
        },
        contacts: {
          header: "КОНТАКТЫ",
          instagram: "Мы в Instagram",
        },
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
      about: {
        header: "ABOUT US",
        content:
          "It should be noted that the semantic analysis of external counteractions ensures the relevance of rethinking foreign economic policies. For the modern world, the high quality of positional research, in its classical form, allows the implementation of the economic feasibility of decisions! In our quest to improve the user experience, we miss that the elements of the political process are functionally separated into independent elements.",
        blocks: {
          first: "Own production base",
          second: "Own storage warehouses",
          third: "High-tech equipment",
          fourth: "Own staff of specialists",
        },
      },
      manufacture: {
        header: "OUR PRODUCTION",
        first: "Milling and engraving machines",
        second: "Laser engraving machines",
        third: "UV printing",
        fourth: "Large format printing 1440 dpi",
        fifth: "Equipment for working with wood and metal",
        sixth: "Painting",
        seventh: "Logistics, installation throughout Kazakhstan",
      },
      whyUs: {
        header: "WHY WE?",
        first: "Wide range of services",
        second: "Качество работы",
        third: "Quality of work",
        fourth: "Turnkey advertising",
        fifth: "Work guarantee",
      },
      services: {
        header: "SERVICES",
        list: {
          first: {
            header: "DESIGN AND DEVELOPMENT",
            content:
              "Development of design from scratch of any complexity, adaptation, files for printing, technical files for production.",
          },
          second: {
            header: "OUTDOOR ADVERTISING",
            content:
              "Effective turnkey outdoor advertising. Lightboxes, signs, volumetric letters, neon advertising and more.",
          },
          third: {
            header: "INTERNAL ADVERTISING",
            content:
              "All types of internal advertising. Stands, light boxes, LED and digital screens, mobiles, models and more.",
          },
          fourth: {
            header: "POSM MATERIALS",
            content:
              "Attracting attention and non-standard pos-materials. OTS, hanging displays, floor displays, light shelftalkers and more.",
          },
          fifth: {
            header: "RETAIL STORE EQUIPMENT",
            content:
              "Individual approach to commercial equipment. Brand zones, shop-in-shop, endcap, ends, wall modules, brand shop and more.",
          },
          sixth: {
            header: "BRANDING",
            content:
              "Selection of a product of varying complexity. Category branding, retail space, product highlighting on the shelf, checkout area, entrance group, etc.",
          },
          seventh: {
            header: "COMMERCIAL FURNITURE",
            content:
              "Design development from scratch, adaptation, files for printing, technical files for production.",
          },
          eighth: {
            header: "FURNITURE MANUFACTURE",
            content:
              "Zone brand, stands of any complexity and scale. Branding and styling.",
          },
          ninth: {
            header: "EQUIPMENT RENT",
            content:
              "Design development from scratch, adaptation, files for printing, technical files for production.",
          },
        },
        benefits: {
          first: "High level of service",
          second: "Individual approach",
          third: "Logistics and installation throughout Kazakhstan",
        },
      },
      touch: {
        header: "OUR APPROACH",
        first: {
          header: "We will develop the design and prepare the files",
          content: {
            first: "technical files",
            second: "printable files",
          },
        },
        second: {
          header: "Engineer will design",
          content: {
            first: "technical files",
            second: "printable files",
          },
        },
        third: {
          header: "The team will make",
          content: {
            first: "technical files",
            second: "printable files",
          },
        },
      },
      team: {
        header: "TEAM",
        first: {
          name: "Julia Sklyarova",
          position: "CEO.",
          experience: "6 years management experience.",
        },
        second: {
          name: "Alexander Bychkov",
          position: "CEO.",
          experience: "6 years management experience.",
        },
        third: {
          name: "Artem Tsymbal",
          position: "CEO.",
          experience: "6 years management experience.",
        },
        content: {
          first:
            "A high level of management helps to make the right management decisions, develop new technologies and solve the problems of our clients.",
          second:
            "The professionalism of production specialists helps to create high-quality products and meet production deadlines.",
        },
        button:
          "The total staff of specialists in the production of <b>20 people</b> with experience of 5 years and more",
      },
      contacts: {
        header: "TRUST THE PROFESSIONALS!",
        content:
          "We offer you a comprehensive approach to solving problems in the development and production of advertising products.",
        form: {
          header: "Leave a request",
          content: "We will contact you shortly",
          direction: {
            header: "Direction*",
            placeholder: "POSM production",
            error: "Direction input is empty",
          },
          name: {
            header: "Name*",
            placeholder: "Ivan Ivanov",
            error: "Name entry is not filled",
          },
          email: {
            header: "Email*",
            placeholder: "i.ivanov@gmail.com",
            error: "Email input is empty",
          },
          phone: {
            header: "Phone*",
            placeholder: "+7 (777) 777 77 77",
            error: "Phone input is empty",
          },
          note: {
            header: "Brief description of the task",
            placeholder: "Enter text",
            error: "",
          },
          button: "Send",
        },
      },
      footer: {
        address: {
          header: "ADDRESS",
          city: "Almaty city",
          street: "417а/3 Raiymbek Ave.",
        },
        contacts: {
          header: "CONTACTS",
          instagram: "We are on Instagram",
        },
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
      about: {
        header: "БІЗ ТУРАЛЫ",
        content:
          "Сыртқы қарсы әрекеттердің семантикалық талдауы сыртқы экономикалық саясатты қайта қараудың өзектілігін қамтамасыз ететінін атап өткен жөн. Қазіргі әлем үшін позициялық зерттеулердің жоғары сапасы, оның классикалық түрінде шешімдердің экономикалық орындылығын жүзеге асыруға мүмкіндік береді! Пайдаланушы тәжірибесін жақсартуға ұмтылу барысында біз саяси процестің элементтері функционалды түрде тәуелсіз элементтерге бөлінгенін сағынамыз.",
        blocks: {
          first: "Жеке өндірістік база",
          second: "Меншікті сақтау қоймалары",
          third: "Жоғары технологиялық жабдық",
          fourth: "Мамандардың жеке құрамы",
        },
      },
      manufacture: {
        header: "БІЗДІҢ ӨНДІРІС",
        first: "Фрезерлік және гравировка станоктары",
        second: "Лазерлік ою машиналары",
        third: "УК басып шығару",
        fourth: "Үлкен форматты басып шығару 1440 dpi",
        fifth: "Ағашпен және металлмен жұмыс істеуге арналған жабдықтар",
        sixth: "Кескіндеме",
        seventh: "Логистика, Қазақстан бойынша монтаждау",
      },
      whyUs: {
        header: "НЕГЕ БІЗ?",
        first: "Қызметтердің кең спектрі",
        second: "Жұмыс сапасы",
        third: "Тұтынушыға бағдарлану",
        fourth: "Жарнамаға кілт тапсыру",
        fifth: "Жұмысқа кепілдік",
      },
      services: {
        header: "ҚЫЗМЕТТЕР",
        list: {
          first: {
            header: "ӘРЛЕМ МЕН ДАМЫТУ",
            content:
              "Кез келген күрделіліктегі дизайнды нөлден әзірлеу, бейімдеу, басып шығаруға арналған файлдар, өндіріске арналған техникалық файлдар.",
          },
          second: {
            header: "СЫРТҚЫ ЖАРНАМА",
            content:
              "Тиімді сыртқы жарнаманы кілтке тапсыру. Лайтбокстар, белгілер, көлемді әріптер, неондық жарнама және т.б.",
          },
          third: {
            header: "ІШКІ ЖАРНАМА",
            content:
              "Ішкі жарнаманың барлық түрлері. Стендтер, жарықтандырғыштар, LED және сандық экрандар, ұялы телефондар, модельдер және т.б.",
          },
          fourth: {
            header: "POSM МАТЕРИАЛДАР",
            content:
              "Назар аудару және стандартты емес pos-материалдар. OTS, ілулі дисплейлер, едендік дисплейлер, жеңіл сөрешілер және т.б.",
          },
          fifth: {
            header: "САУДА ЖАБДЫҒЫ",
            content:
              "Коммерциялық жабдыққа жеке көзқарас. Бренд аймақтары, дүкендегі дүкен, қақпақ, ұштар, қабырға модульдері, бренд дүкені және т.б.",
          },
          sixth: {
            header: "БРЕНДИНГ",
            content:
              "Әртүрлі күрделіліктегі өнімді таңдау. Санат бренді, сауда алаңы, сөредегі өнімді бөлектеу, касса аймағы, кіру тобы және т.б.",
          },
          seventh: {
            header: "КОММЕРЦИЯЛЫҚ ЖИБАЗ",
            content:
              "Дизайнды нөлден әзірлеу, бейімдеу, басып шығаруға арналған файлдар, өндіріске арналған техникалық файлдар.",
          },
          eighth: {
            header: "ЖИБАЗ ӨНДІРУ",
            content:
              "Аймақ бренді, кез келген күрделілік пен масштабтағы стендтер. Брендинг және сәндеу.",
          },
          ninth: {
            header: "ЖАБДЫҚТЫ ЖАЛДАУ",
            content:
              "Дизайнды нөлден әзірлеу, бейімдеу, басып шығаруға арналған файлдар, өндіріске арналған техникалық файлдар.",
          },
        },
        benefits: {
          first: "Қызмет көрсетудің жоғары деңгейі",
          second: "Жеке көзқарас",
          third: "Қазақстан бойынша логистика және орнату",
        },
      },
      touch: {
        header: "БІЗДІҢ ТӘСІЛДЕРІМІЗ",
        first: {
          header: "Біз дизайнды әзірлеп, файлдарды дайындаймыз",
          content: {
            first: "техникалық файлдар",
            second: "басып шығарылатын файлдар",
          },
        },
        second: {
          header: "Инженер спроектирует",
          content: {
            first: "техникалық файлдар",
            second: "басып шығарылатын файлдар",
          },
        },
        third: {
          header: "Команда изготовит",
          content: {
            first: "техникалық файлдар",
            second: "басып шығарылатын файлдар",
          },
        },
      },
      team: {
        header: "КОМАНДА",
        first: {
          name: "Юлия Склярова",
          position: "БАС АТҚАРУШЫ ДИРЕКТОР.",
          experience: "6 жыл басқару тәжірибесі.",
        },
        second: {
          name: "Александр Бычков",
          position: "БАС АТҚАРУШЫ ДИРЕКТОР.",
          experience: "6 жыл басқару тәжірибесі.",
        },
        third: {
          name: "Артем Цымбал",
          position: "БАС АТҚАРУШЫ ДИРЕКТОР.",
          experience: "6 жыл басқару тәжірибесі.",
        },
        content: {
          first:
            "Менеджменттің жоғары деңгейі дұрыс басқару шешімдерін қабылдауға, жаңа технологияларды дамытуға және клиенттеріміздің мәселелерін шешуге көмектеседі.",
          second:
            "Өндіріс мамандарының кәсібилігі жоғары сапалы өнім жасауға және өндіріс мерзімін орындауға көмектеседі.",
        },
        button:
          "Өндірістегі мамандардың жалпы саны<b>20 адам</b>5 жыл және одан да көп жұмыс тәжірибесі бар",
      },
      contacts: {
        header: "Кәсіби мамандарға сеніңіз!",
        content:
          "Біз сізге жарнамалық өнімдерді әзірлеу мен өндірудегі мәселелерді шешудің кешенді тәсілін ұсынамыз.",
        form: {
          header: "Өтініш қалдырыңыз",
          content: "Біз сізге жақын арада хабарласамыз",
          direction: {
            header: "Бағыт*",
            placeholder: "POSM өндірісі",
            error: "Бағыт енгізуі бос",
          },
          name: {
            header: "Аты*",
            placeholder: "Иван Иванов",
            error: "Аты-жөні толтырылмаған",
          },
          email: {
            header: "Email*",
            placeholder: "i.ivanov@gmail.com",
            error: "Электрондық пошта кірісі бос",
          },
          phone: {
            header: "Телефон*",
            placeholder: "+7 (777) 777 77 77",
            error: "Телефон кірісі бос",
          },
          note: {
            header: "Тапсырманың қысқаша сипаттамасы",
            placeholder: "Мәтінді енгізіңіз",
            error: "",
          },
          button: "Жіберу",
        },
      },
      footer: {
        address: {
          header: "АДРЕС",
          city: "Алматы қаласы",
          street: "Райымбек даңғылы 417а/3.",
        },
        contacts: {
          header: "БАЙЛАНЫСТАР",
          instagram: "Біз Instagram желісіндеміз",
        },
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
