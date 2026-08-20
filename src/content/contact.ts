import type { Locale } from "./site";

type ContactCopy = {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    callLabel: string;
    whatsapp: string;
  };
  details: {
    title: string;
    body: string;
    items: Array<{
      title: string;
      body: string;
    }>;
    note: string;
  };
  coverage: {
    title: string;
    body: string;
    places: string[];
  };
  media: {
    truckAlt: string;
  };
};

export const contactCopy: Record<Locale, ContactCopy> = {
  ka: {
    seo: {
      title: "RoadHelp | კონტაქტი და ევაკუატორის გამოძახება",
      description:
        "დაუკავშირდით RoadHelp-ს ავტომობილის ევაკუაციისა და ტრანსპორტირების შესათანხმებლად თბილისში, საქართველოში ან მეზობელ ქვეყნებში.",
    },
    hero: {
      eyebrow: "დაგვიკავშირდით",
      title: "სად არის ავტომობილი?",
      body:
        "დაგვირეკეთ ან მოგვწერეთ WhatsApp-ში და გაგვიზიარეთ მარშრუტის ძირითადი დეტალები.",
      callLabel: "დარეკვა",
      whatsapp: "WhatsApp",
    },
    details: {
      title: "რა ინფორმაცია დაგვჭირდება",
      body:
        "საუბრისას სამი დეტალი დაგვეხმარება მარშრუტისა და გადაყვანის პირობების დაზუსტებაში.",
      items: [
        {
          title: "ავტომობილის მდებარეობა",
          body:
            "ქუჩა, უბანი ან ზუსტი პინი, საიდანაც ავტომობილი უნდა ავიყვანოთ.",
        },
        {
          title: "მოდელი და მდგომარეობა",
          body:
            "გვითხარით ავტომობილის მოდელი და შეუძლია თუ არა მას ბაქანზე დამოუკიდებლად ასვლა.",
        },
        {
          title: "დანიშნულების ადგილი",
          body:
            "მისამართი ან ქალაქი, სადაც ავტომობილი უნდა მივიყვანოთ.",
        },
      ],
      note:
        "დრო, პირობები და საერთაშორისო მარშრუტები თანხმდება ტრანსპორტირების დაწყებამდე.",
    },
    coverage: {
      title: "ერთი ნომერი. სამი მიმართულება.",
      body:
        "RoadHelp ემსახურება საქალაქო, საქალაქთაშორისო და წინასწარ შეთანხმებულ საერთაშორისო მარშრუტებს.",
      places: ["თბილისი", "მთელი საქართველო", "მეზობელი ქვეყნები"],
    },
    media: {
      truckAlt:
        "RoadHelp-ის ევაკუატორი ავტომობილით საქართველოს მთის გზაზე",
    },
  },
  en: {
    seo: {
      title: "RoadHelp | Contact for flatbed towing and transport",
      description:
        "Contact RoadHelp to arrange vehicle recovery or transport in Tbilisi, across Georgia, or to neighboring countries.",
    },
    hero: {
      eyebrow: "Contact RoadHelp",
      title: "Where is the vehicle?",
      body:
        "Call or message us on WhatsApp with the pickup point, vehicle details, and destination.",
      callLabel: "Call now",
      whatsapp: "WhatsApp",
    },
    details: {
      title: "What we need to know",
      body:
        "Three details help us confirm the route and transport conditions before the journey.",
      items: [
        {
          title: "Vehicle location",
          body:
            "Share the street, district, or an exact map pin for collection.",
        },
        {
          title: "Model and condition",
          body:
            "Tell us the vehicle model and whether it can move onto the flatbed under its own power.",
        },
        {
          title: "Destination",
          body:
            "Share the address or city where the vehicle needs to be delivered.",
        },
      ],
      note:
        "Timing, conditions, and cross-border routes are agreed before transport begins.",
    },
    coverage: {
      title: "One number. Three transport scopes.",
      body:
        "RoadHelp handles city, intercity, and pre-arranged cross-border vehicle transport.",
      places: ["Tbilisi", "All of Georgia", "Neighboring countries"],
    },
    media: {
      truckAlt:
        "RoadHelp flatbed tow truck carrying a car on a Georgian mountain road",
    },
  },
  ru: {
    seo: {
      title: "RoadHelp | Контакты для вызова эвакуатора",
      description:
        "Свяжитесь с RoadHelp, чтобы согласовать эвакуацию или перевозку автомобиля по Тбилиси, Грузии или в соседние страны.",
    },
    hero: {
      eyebrow: "Связаться с RoadHelp",
      title: "Где находится автомобиль?",
      body:
        "Позвоните или напишите в WhatsApp, указав место погрузки, данные автомобиля и пункт назначения.",
      callLabel: "Позвонить",
      whatsapp: "WhatsApp",
    },
    details: {
      title: "Что нужно сообщить",
      body:
        "Три детали помогут заранее согласовать маршрут и условия перевозки.",
      items: [
        {
          title: "Местоположение автомобиля",
          body:
            "Укажите улицу, район или отправьте точную отметку на карте.",
        },
        {
          title: "Модель и состояние",
          body:
            "Сообщите модель автомобиля и может ли он самостоятельно заехать на платформу.",
        },
        {
          title: "Пункт назначения",
          body:
            "Укажите адрес или город, куда нужно доставить автомобиль.",
        },
      ],
      note:
        "Время, условия и международные маршруты согласовываются до начала перевозки.",
    },
    coverage: {
      title: "Один номер. Три направления.",
      body:
        "RoadHelp выполняет городские, междугородние и заранее согласованные международные перевозки автомобилей.",
      places: ["Тбилиси", "Вся Грузия", "Соседние страны"],
    },
    media: {
      truckAlt:
        "Эвакуатор RoadHelp перевозит автомобиль по горной дороге в Грузии",
    },
  },
};
