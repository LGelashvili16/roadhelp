import type { Locale } from "./site";

type AboutCopy = {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    body: string;
    primary: string;
    secondary: string;
  };
  overview: {
    title: string;
    paragraphs: string[];
  };
  approach: {
    title: string;
    items: Array<{
      title: string;
      body: string;
    }>;
  };
  coverage: {
    title: string;
    body: string;
    places: string[];
    note: string;
  };
  cta: {
    title: string;
    body: string;
    primary: string;
    secondary: string;
  };
  media: {
    truckAlt: string;
    caption: string;
  };
};

export const aboutCopy: Record<Locale, AboutCopy> = {
  ka: {
    seo: {
      title: "RoadHelp | ჩვენ შესახებ — ავტომობილის გადაყვანის სერვისი",
      description:
        "გაიგეთ, როგორ გადააქვს RoadHelp-ს ავტომობილები flatbed ბაქნით თბილისში, საქართველოს მასშტაბით და მეზობელ ქვეყნებში წინასწარი შეთანხმებით.",
    },
    hero: {
      title: "ავტომობილის გადაყვანა",
      body: "RoadHelp ემსახურება ავტომობილების ტრანსპორტირებას თბილისში, საქართველოს მასშტაბით და, წინასწარი შეთანხმებით, მეზობელ ქვეყნებში.",
      primary: "დარეკვა",
      secondary: "მომსახურების ნახვა",
    },
    overview: {
      title: "ერთი კონკრეტული საქმე.",
      paragraphs: [
        "RoadHelp-ის სერვისს ერთი მძღოლი ასრულებს. ავტომობილის აყვანიდან, სატვირთო ძარაზე განთავსებიდან და შეთანხმებულ მისამართამდე ტრანსპორტირებამდე. მარშრუტი შეიძლება იყოს მოკლე საქალაქო გზა ან გადაადგილება საქართველოს მასშტაბით.",
        "სატვირთო ძარაზე ავტომობილის ოთხივე ბორბალი გზის ზედაპირისგან თავისუფალია. ეს მიდგომა გამოსადეგია დაზიანებული, გაუმართავი, დაბალი კლირენსის, ძვირფასი ან ახლად შეძენილი ავტომობილის გადასაყვანად.",
      ],
    },
    approach: {
      title: "როგორ იგეგმება თითოეული გადაყვანა",
      items: [
        {
          title: "დეტალების დაზუსტება",
          body: "წინასწარ ზუსტდება ავტომობილის მდებარეობა, მოდელი და დანიშნულების ადგილი.",
        },
        {
          title: "სატვირთო ძარაზე განთავსება",
          body: "ავტომობილი სრულად თავსდება სატვირთო ძარაზე და მაგრდება შესაბამის წერტილებში.",
        },
        {
          title: "მარშრუტის დაგეგმვა",
          body: "დრო, პირობები და საერთაშორისო მიმართულებები თანხმდება ტრანსპორტირების დაწყებამდე.",
        },
      ],
    },
    coverage: {
      title: "ტრანსპორტირება სადაც თქვენ გსურთ",
      body: "RoadHelp აერთიანებს საქალაქო და საქალაქთაშორისო ტრანსპორტირებას ერთ სერვისში.",
      places: ["თბილისი", "მთელი საქართველო", "მეზობელი ქვეყნები"],
      note: "საერთაშორისო მარშრუტები და პირობები შეთანხმდება ინდივიდუალურად.",
    },
    cta: {
      title: "გჭირდებათ ავტომობილის გადაყვანა?",
      body: "დაგვიკავშირდით და გაგვიზიარეთ მდებარეობა, ავტომობილის მოდელი და დანიშნულების ადგილი.",
      primary: "დარეკვა",
      secondary: "WhatsApp",
    },
    media: {
      truckAlt:
        "RoadHelp-ის flatbed ევაკუატორი ავტომობილით საქართველოს მთის გზაზე",
      caption: "ავტომობილის ტრანსპორტირება საქართველოს მასშტაბით",
    },
  },
  en: {
    seo: {
      title: "RoadHelp | About our flatbed vehicle transport service",
      description:
        "Learn how RoadHelp transports vehicles by flatbed in Tbilisi, across Georgia, and to neighboring countries by prior arrangement.",
    },
    hero: {
      title: "Vehicle transport",
      body: "RoadHelp provides vehicle transport in Tbilisi, throughout Georgia, and, by prior arrangement, to neighboring countries.",
      primary: "Call now",
      secondary: "View services",
    },
    overview: {
      title: "One specific job.",
      paragraphs: [
        "RoadHelp is operated by one driver: from collecting the vehicle and placing it on the flatbed through transport to the agreed address. The route may be a short city journey or a trip across Georgia.",
        "On a flatbed, all four wheels remain off the road. This approach suits damaged, non-running, low-clearance, valuable, and newly purchased vehicles.",
      ],
    },
    approach: {
      title: "How each transport is handled",
      items: [
        {
          title: "Confirm the details",
          body: "Share the vehicle location, model, and destination before the journey.",
        },
        {
          title: "Load onto the flatbed",
          body: "The entire vehicle is placed on the flatbed and secured at the appropriate points.",
        },
        {
          title: "Plan the route",
          body: "Timing, conditions, and cross-border routes are agreed before transport begins.",
        },
      ],
    },
    coverage: {
      title: "Transport wherever you want to go",
      body: "RoadHelp combines city and intercity vehicle transport in one service.",
      places: ["Tbilisi", "All of Georgia", "Neighboring countries"],
      note: "Cross-border routes and conditions are arranged individually.",
    },
    cta: {
      title: "Need to transport a vehicle?",
      body: "Contact us with the location, vehicle model, and destination.",
      primary: "Call now",
      secondary: "WhatsApp",
    },
    media: {
      truckAlt:
        "RoadHelp flatbed tow truck carrying a car on a Georgian mountain road",
      caption: "Vehicle transport across Georgia",
    },
  },
  ru: {
    seo: {
      title: "RoadHelp | О сервисе перевозки автомобилей на платформе",
      description:
        "Узнайте, как RoadHelp перевозит автомобили на платформе по Тбилиси, всей Грузии и в соседние страны по предварительной договорённости.",
    },
    hero: {
      title: "Перевозка автомобиля",
      body: "RoadHelp выполняет перевозку автомобилей по Тбилиси, всей Грузии и, по предварительной договорённости, в соседние страны.",
      primary: "Позвонить",
      secondary: "Смотреть услуги",
    },
    overview: {
      title: "Одна конкретная задача.",
      paragraphs: [
        "Услугу RoadHelp выполняет один водитель: от забора автомобиля и размещения на платформе до перевозки по согласованному адресу. Это может быть короткий городской маршрут или поездка по Грузии.",
        "На платформе все четыре колеса автомобиля не соприкасаются с дорогой. Такой способ подходит для повреждённых, неисправных, низких, дорогих и недавно приобретённых автомобилей.",
      ],
    },
    approach: {
      title: "Как организована каждая перевозка",
      items: [
        {
          title: "Уточнение деталей",
          body: "До выезда уточняются местоположение, модель автомобиля и пункт назначения.",
        },
        {
          title: "Погрузка на платформу",
          body: "Автомобиль полностью размещается на платформе и закрепляется в подходящих точках.",
        },
        {
          title: "Планирование маршрута",
          body: "Время, условия и международные маршруты согласовываются до начала перевозки.",
        },
      ],
    },
    coverage: {
      title: "Перевозка туда, куда вам нужно",
      body: "RoadHelp объединяет городскую и междугороднюю перевозку автомобилей в одном сервисе.",
      places: ["Тбилиси", "Вся Грузия", "Соседние страны"],
      note: "Международные маршруты и условия согласовываются индивидуально.",
    },
    cta: {
      title: "Нужно перевезти автомобиль?",
      body: "Сообщите нам местоположение, модель автомобиля и пункт назначения.",
      primary: "Позвонить",
      secondary: "WhatsApp",
    },
    media: {
      truckAlt:
        "Эвакуатор RoadHelp перевозит автомобиль по горной дороге в Грузии",
      caption: "Перевозка автомобилей по всей Грузии",
    },
  },
};
