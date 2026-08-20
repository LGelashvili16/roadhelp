export const contact = {
  phoneDisplay: "+995 555 00 00 00",
  phoneHref: "+995555000000",
  whatsappHref: "https://wa.me/995555000000",
} as const;

export type Locale = "ka" | "en" | "ru";
export type PageKey = "home" | "about" | "contact";

export const routePaths: Record<PageKey, Record<Locale, string>> = {
  home: {
    ka: "/",
    en: "/en/",
    ru: "/ru/",
  },
  about: {
    ka: "/about/",
    en: "/en/about/",
    ru: "/ru/about/",
  },
  contact: {
    ka: "/contact/",
    en: "/en/contact/",
    ru: "/ru/contact/",
  },
};

export const getLocalizedPath = (page: PageKey, locale: Locale) =>
  routePaths[page][locale];

export const localeOptions: Array<{
  code: Locale;
  label: string;
  shortLabel: string;
  path: string;
}> = [
  { code: "ka", label: "ქართული", shortLabel: "GE", path: routePaths.home.ka },
  { code: "en", label: "English", shortLabel: "EN", path: routePaths.home.en },
  { code: "ru", label: "Русский", shortLabel: "RU", path: routePaths.home.ru },
];

type Copy = {
  lang: string;
  path: string;
  seo: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    services: string;
    contact: string;
    call: string;
    menu: string;
    home: string;
    primaryLabel: string;
    mobileLabel: string;
    languages: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
  trust: string[];
  intro: {
    title: string;
    body: string;
  };
  services: Array<{
    number: string;
    title: string;
    body: string;
  }>;
  coverage: {
    title: string;
    body: string;
    places: string[];
    note: string;
  };
  process: {
    title: string;
    items: Array<{ title: string; body: string }>;
  };
  standards: {
    title: string;
    body: string;
    items: string[];
  };
  cta: {
    title: string;
    body: string;
    primary: string;
    secondary: string;
  };
  footer: {
    area: string;
    hours: string;
    rights: string;
  };
  media: {
    heroAlt: string;
    regionAlt: string;
    trustLabel: string;
  };
};

export const copy: Record<Locale, Copy> = {
  ka: {
    lang: "ka",
    path: "/",
    seo: {
      title: "RoadHelp | ევაკუატორი თბილისში და მთელ საქართველოში",
      description:
        "ავტომობილის უსაფრთხო ევაკუაცია და ტრანსპორტირება თბილისში, საქართველოს მასშტაბით და მეზობელ ქვეყნებში.",
    },
    nav: {
      about: "ჩვენ შესახებ",
      services: "მომსახურება",
      contact: "კონტაქტი",
      call: "დარეკვა",
      menu: "მენიუ",
      home: "RoadHelp-ის მთავარი გვერდი",
      primaryLabel: "მთავარი ნავიგაცია",
      mobileLabel: "მობილური ნავიგაცია",
      languages: "ენის არჩევა",
    },
    hero: {
      eyebrow: "ევაკუატორი თბილისში",
      title: "თქვენი მანქანა. უსაფრთხოდ გზაში.",
      description:
        "ევაკუაცია და ტრანსპორტირება თბილისში, მთელ საქართველოში და საზღვარგარეთ.",
      primary: "დარეკვა ახლავე",
      secondary: "მომსახურების ნახვა",
    },
    trust: [
      "ბაქანზე სრული განთავსება",
      "ფრთხილი დამაგრება",
      "საქართველო და რეგიონი",
    ],
    intro: {
      title: "ერთი სერვისი. ნებისმიერი მარშრუტი.",
      body:
        "დაზიანებული, გაუმართავი ან ახლად შეძენილი ავტომობილი გადაგვყავს ზუსტად იქ, სადაც გჭირდებათ.",
    },
    services: [
      {
        number: "01",
        title: "ევაკუაცია თბილისში",
        body:
          "ავტომობილის აყვანა და გადაყვანა თბილისის ნებისმიერ უბანში.",
      },
      {
        number: "02",
        title: "ტრანსპორტირება საქართველოში",
        body:
          "საქალაქთაშორისო გადაყვანა საქართველოს ნებისმიერ მიმართულებაზე.",
      },
      {
        number: "03",
        title: "საერთაშორისო გადაყვანა",
        body:
          "წინასწარი შეთანხმებით ავტომობილის ტრანსპორტირება მეზობელ ქვეყნებში.",
      },
    ],
    coverage: {
      title: "თბილისიდან მთელ რეგიონამდე",
      body:
        "მოკლე საქალაქო გამოძახება თუ გრძელი მარშრუტი, გადაადგილებას წინასწარ ვგეგმავთ და ავტომობილს ბაქანზე უსაფრთხოდ ვამაგრებთ.",
      places: ["თბილისი", "მთელი საქართველო", "მეზობელი ქვეყნები"],
      note: "საერთაშორისო მარშრუტი შეთანხმდება ინდივიდუალურად.",
    },
    process: {
      title: "მარტივი პროცესი, თავიდან ბოლომდე",
      items: [
        {
          title: "გვირეკავთ",
          body: "გვიზიარებთ მდებარეობას, ავტომობილის მოდელს და დანიშნულების ადგილს.",
        },
        {
          title: "ვათანხმებთ მარშრუტს",
          body: "წინასწარ ვაზუსტებთ პირობებს, დროს და ტრანსპორტირების დეტალებს.",
        },
        {
          title: "უსაფრთხოდ გადაგვყავს",
          body: "ავტომობილს ბაქანზე ვტვირთავთ, ვამაგრებთ და დანიშნულებამდე მიგვყავს.",
        },
      ],
    },
    standards: {
      title: "ფრთხილად ვეკიდებით იმას, რაც თქვენთვის მნიშვნელოვანია.",
      body:
        "Flatbed ბაქანი ავტომობილს გზის ზედაპირთან შეხების გარეშე გადაადგილებს. ეს განსაკუთრებით მნიშვნელოვანია დაბალი კლირენსის, დაზიანებული და ძვირფასი ავტომობილებისთვის.",
      items: [
        "ოთხივე ბორბალი ბაქანზე",
        "სწორი დამაგრების წერტილები",
        "მარშრუტის წინასწარი დაგეგმვა",
      ],
    },
    cta: {
      title: "გჭირდებათ ევაკუატორი?",
      body: "დაგვირეკეთ და გვაცნობეთ სად არის ავტომობილი.",
      primary: "დარეკვა",
      secondary: "WhatsApp",
    },
    footer: {
      area: "თბილისი, საქართველო და რეგიონი",
      hours: "გამოძახება შეთანხმებით",
      rights: "ყველა უფლება დაცულია.",
    },
    media: {
      heroAlt: "ევაკუატორი ავტომობილით თბილისში",
      regionAlt: "ევაკუატორი საქართველოს მთის გზაზე",
      trustLabel: "მომსახურების უპირატესობები",
    },
  },
  en: {
    lang: "en",
    path: "/en/",
    seo: {
      title: "RoadHelp | Flatbed towing in Tbilisi and Georgia",
      description:
        "Safe vehicle evacuation and transport across Tbilisi, throughout Georgia, and to neighboring countries.",
    },
    nav: {
      about: "About",
      services: "Services",
      contact: "Contact",
      call: "Call now",
      menu: "Menu",
      home: "RoadHelp home",
      primaryLabel: "Primary navigation",
      mobileLabel: "Mobile navigation",
      languages: "Choose language",
    },
    hero: {
      eyebrow: "Flatbed towing in Tbilisi",
      title: "Your car. Safely delivered.",
      description:
        "Vehicle recovery and transport across Tbilisi, Georgia, and neighboring countries.",
      primary: "Call now",
      secondary: "View services",
    },
    trust: [
      "Full flatbed transport",
      "Careful securement",
      "Georgia and the region",
    ],
    intro: {
      title: "One service. Any route.",
      body:
        "We move damaged, non-running, or newly purchased vehicles exactly where they need to go.",
    },
    services: [
      {
        number: "01",
        title: "Towing in Tbilisi",
        body: "Vehicle pickup and transport across every district of Tbilisi.",
      },
      {
        number: "02",
        title: "Transport across Georgia",
        body: "Intercity vehicle transport to destinations throughout Georgia.",
      },
      {
        number: "03",
        title: "Cross-border transport",
        body:
          "Vehicle transport to neighboring countries by prior arrangement.",
      },
    ],
    coverage: {
      title: "From Tbilisi across the region",
      body:
        "From a short city pickup to a long-distance route, every move is planned and every vehicle is secured on the flatbed.",
      places: ["Tbilisi", "All of Georgia", "Neighboring countries"],
      note: "Cross-border routes are arranged individually.",
    },
    process: {
      title: "Simple from pickup to delivery",
      items: [
        {
          title: "Call us",
          body: "Share your location, vehicle model, and destination.",
        },
        {
          title: "Confirm the route",
          body: "We agree on timing, conditions, and transport details.",
        },
        {
          title: "Move safely",
          body: "We load, secure, and deliver your vehicle to its destination.",
        },
      ],
    },
    standards: {
      title: "We take care of what matters to you.",
      body:
        "A flatbed keeps every wheel off the road. It is the careful choice for low-clearance, damaged, and valuable vehicles.",
      items: [
        "All four wheels on the bed",
        "Correct securement points",
        "Route planned in advance",
      ],
    },
    cta: {
      title: "Need a tow truck?",
      body: "Call us and tell us where the vehicle is.",
      primary: "Call now",
      secondary: "WhatsApp",
    },
    footer: {
      area: "Tbilisi, Georgia, and the region",
      hours: "Dispatch by arrangement",
      rights: "All rights reserved.",
    },
    media: {
      heroAlt: "Flatbed tow truck carrying a car in Tbilisi",
      regionAlt: "Flatbed tow truck on a Georgian mountain road",
      trustLabel: "Service benefits",
    },
  },
  ru: {
    lang: "ru",
    path: "/ru/",
    seo: {
      title: "RoadHelp | Эвакуатор в Тбилиси и по всей Грузии",
      description:
        "Безопасная эвакуация и перевозка автомобилей по Тбилиси, всей Грузии и в соседние страны.",
    },
    nav: {
      about: "О сервисе",
      services: "Услуги",
      contact: "Контакты",
      call: "Позвонить",
      menu: "Меню",
      home: "Главная страница RoadHelp",
      primaryLabel: "Основная навигация",
      mobileLabel: "Мобильная навигация",
      languages: "Выбор языка",
    },
    hero: {
      eyebrow: "Эвакуатор в Тбилиси",
      title: "Ваш автомобиль. В надёжных руках.",
      description:
        "Эвакуация и перевозка автомобилей по Тбилиси, всей Грузии и в соседние страны.",
      primary: "Позвонить сейчас",
      secondary: "Смотреть услуги",
    },
    trust: [
      "Полная погрузка на платформу",
      "Надёжная фиксация",
      "Грузия и соседние страны",
    ],
    intro: {
      title: "Одна услуга. Любой маршрут.",
      body:
        "Перевезём повреждённый, неисправный или недавно приобретённый автомобиль точно по нужному адресу.",
    },
    services: [
      {
        number: "01",
        title: "Эвакуация в Тбилиси",
        body: "Заберём и перевезём автомобиль из любого района Тбилиси.",
      },
      {
        number: "02",
        title: "Перевозка по Грузии",
        body: "Междугородняя перевозка автомобиля в любую точку Грузии.",
      },
      {
        number: "03",
        title: "Международная перевозка",
        body:
          "Перевозка автомобиля в соседние страны по предварительной договорённости.",
      },
    ],
    coverage: {
      title: "Из Тбилиси по всему региону",
      body:
        "От короткого городского вызова до дальнего маршрута: заранее планируем поездку и надёжно закрепляем автомобиль на платформе.",
      places: ["Тбилиси", "Вся Грузия", "Соседние страны"],
      note: "Международные маршруты согласовываются индивидуально.",
    },
    process: {
      title: "Простой процесс от погрузки до доставки",
      items: [
        {
          title: "Позвоните нам",
          body: "Сообщите местоположение, модель автомобиля и пункт назначения.",
        },
        {
          title: "Согласуем маршрут",
          body: "Заранее уточним время, условия и детали перевозки.",
        },
        {
          title: "Безопасно доставим",
          body: "Погрузим, закрепим и доставим автомобиль в пункт назначения.",
        },
      ],
    },
    standards: {
      title: "Бережно относимся к тому, что важно для вас.",
      body:
        "Платформа позволяет перевозить автомобиль без контакта колёс с дорогой. Это особенно важно для машин с низким клиренсом, повреждённых и дорогих автомобилей.",
      items: [
        "Все четыре колеса на платформе",
        "Правильные точки крепления",
        "Маршрут спланирован заранее",
      ],
    },
    cta: {
      title: "Нужен эвакуатор?",
      body: "Позвоните нам и сообщите, где находится автомобиль.",
      primary: "Позвонить",
      secondary: "WhatsApp",
    },
    footer: {
      area: "Тбилиси, Грузия и соседние страны",
      hours: "Выезд по договорённости",
      rights: "Все права защищены.",
    },
    media: {
      heroAlt: "Эвакуатор перевозит автомобиль по Тбилиси",
      regionAlt: "Эвакуатор на горной дороге в Грузии",
      trustLabel: "Преимущества услуги",
    },
  },
};
