export const contact = {
  phoneDisplay: "+995 555 00 00 00",
  phoneHref: "+995555000000",
  whatsappHref: "https://wa.me/995555000000",
} as const;

export type Locale = "ka" | "en";

type Copy = {
  localeName: string;
  lang: string;
  path: string;
  seo: {
    title: string;
    description: string;
  };
  nav: {
    services: string;
    coverage: string;
    process: string;
    call: string;
    menu: string;
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
};

export const copy: Record<Locale, Copy> = {
  ka: {
    localeName: "English",
    lang: "ka",
    path: "/",
    seo: {
      title: "Tow Auto | ევაკუატორი თბილისში და მთელ საქართველოში",
      description:
        "ავტომობილის უსაფრთხო ევაკუაცია და ტრანსპორტირება თბილისში, საქართველოს მასშტაბით და მეზობელ ქვეყნებში.",
    },
    nav: {
      services: "მომსახურება",
      coverage: "არეალი",
      process: "როგორ ვმუშაობთ",
      call: "დარეკვა",
      menu: "მენიუ",
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
  },
  en: {
    localeName: "ქართული",
    lang: "en",
    path: "/en/",
    seo: {
      title: "Tow Auto | Flatbed towing in Tbilisi and Georgia",
      description:
        "Safe vehicle evacuation and transport across Tbilisi, throughout Georgia, and to neighboring countries.",
    },
    nav: {
      services: "Services",
      coverage: "Coverage",
      process: "How it works",
      call: "Call now",
      menu: "Menu",
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
  },
};
