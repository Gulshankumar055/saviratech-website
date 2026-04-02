export const SERVICES = [
  {
    id: "wordpress",
    icon: "grid",
    title: "WordPress Ecommerce Website",
    priceLabel: "Starting from ₹20,000",
    priceValue: "₹20,000+",
    description:
      "We develop professional ecommerce websites using WordPress that allow businesses to easily manage products, orders, and payments.",
    features: [
      "Responsive mobile-friendly design",
      "Product catalog management",
      "Secure payment gateway integration",
      "Shipping configuration",
      "SEO-friendly structure",
      "Easy admin panel"
    ],
    timeline: "2-4 weeks",
    bestFor: "Small to medium businesses",
    support: "1 year hosting included",
    keywords: ["wordpress", "woocommerce", "wp ecommerce"]
  },
  {
    id: "shopify",
    icon: "code",
    title: "Shopify Ecommerce Website",
    priceLabel: "Starting from ₹50,000",
    priceValue: "₹50,000+",
    description:
      "Launch a modern online store using Shopify, designed for performance, reliability, and scalability.",
    features: [
      "Professional store setup",
      "Custom theme design",
      "Payment gateway integration",
      "Shipping and tax configuration",
      "Product upload and catalog setup",
      "Store optimization"
    ],
    timeline: "3-6 weeks",
    bestFor: "Growing businesses",
    support: "Ongoing technical support included",
    keywords: ["shopify", "shopify store", "shopify ecommerce"]
  },
  {
    id: "custom-web-app",
    icon: "spark",
    title: "Custom Web Application Development",
    priceLabel: "Starting from ₹70,000",
    priceValue: "₹70,000+",
    description:
      "We build powerful and scalable business applications using modern technologies such as .NET, Laravel, and React.",
    features: [
      "CRM systems",
      "Business automation tools",
      "Workflow management systems",
      "SaaS platforms",
      "Custom dashboards"
    ],
    timeline: "4-12 weeks",
    bestFor: "Businesses with custom workflows",
    support: "Long-term technical support available",
    keywords: ["custom web", "web application", "web app", "crm", "saas"]
  },
  {
    id: "mobile-app",
    icon: "doc",
    title: "Mobile App Development",
    priceLabel: "Starting from ₹50,000",
    priceValue: "₹50,000+",
    description:
      "We develop high-performance mobile applications for businesses looking to reach customers through smartphones.",
    features: [
      "Android and iOS app development",
      "Custom UI/UX design",
      "Secure login and authentication",
      "API integrations",
      "App deployment to stores"
    ],
    timeline: "4-8 weeks",
    bestFor: "Businesses targeting mobile users",
    support: "6 months free maintenance",
    keywords: ["mobile app", "android", "ios", "app development"]
  },
  {
    id: "ui-ux",
    icon: "thumb",
    title: "UI / UX Designing",
    priceLabel: "Starting from ₹25,000",
    priceValue: "₹25,000+",
    description:
      "We design user-friendly interfaces that improve engagement and deliver excellent user experience.",
    features: [
      "Website UI design",
      "Mobile app UI design",
      "Wireframes and prototypes",
      "UX optimization"
    ],
    timeline: "1-3 weeks",
    bestFor: "Products needing better user experience",
    support: "Unlimited revisions based on scope",
    keywords: ["ui", "ux", "ui ux", "design", "figma"]
  },
  {
    id: "graphic-design",
    icon: "mic",
    title: "Graphic Designing",
    priceLabel: "Starting from ₹15,000",
    priceValue: "₹15,000+",
    description: "Creative design solutions that enhance your brand identity.",
    features: [
      "Logo design",
      "Social media graphics",
      "Website banners",
      "Marketing creatives",
      "Brochures and business cards"
    ],
    timeline: "3-10 days",
    bestFor: "Branding and marketing teams",
    support: "Revision support included",
    keywords: ["graphic", "logo", "banner", "creative", "brand design"]
  },
  {
    id: "content-writing",
    icon: "file",
    title: "Content Writing",
    priceLabel: "Starting from ₹12,000",
    priceValue: "₹12,000+",
    description:
      "High-quality content that communicates your brand message clearly and helps improve search rankings.",
    features: [
      "Website content writing",
      "SEO blog articles",
      "Product descriptions",
      "Marketing copywriting"
    ],
    timeline: "3-7 days",
    bestFor: "SEO and brand communication",
    support: "Content revisions included",
    keywords: ["content", "copywriting", "blog", "seo content"]
  },
  {
    id: "sql-migration",
    icon: "database",
    title: "SQL Migration",
    priceLabel: "Starting from ₹40,000",
    priceValue: "₹40,000+",
    description:
      "We migrate databases securely to modern database systems such as Microsoft SQL Server ensuring data integrity and minimal downtime.",
    features: [
      "Schema migration planning",
      "Data validation",
      "Zero/minimal downtime strategy",
      "Performance optimization"
    ],
    timeline: "1-3 weeks",
    bestFor: "Businesses moving legacy databases",
    support: "Post-migration support available",
    keywords: ["sql", "database migration", "db migration", "data migration"]
  },
  {
    id: "cloud-migration",
    icon: "pulse",
    title: "Cloud Migration",
    priceLabel: "Starting from ₹55,000",
    priceValue: "₹55,000+",
    description:
      "We help businesses move their applications and infrastructure to reliable cloud platforms like Microsoft Azure and Amazon Web Services.",
    features: [
      "Improved scalability",
      "Higher security",
      "Reduced infrastructure cost",
      "Better performance"
    ],
    timeline: "2-6 weeks",
    bestFor: "Scaling teams and modern workloads",
    support: "Monitoring and support packages available",
    keywords: ["cloud", "azure", "aws", "cloud migration"]
  },
  {
    id: "digital-marketing",
    icon: "chart",
    title: "Digital Marketing & Lead Generation",
    priceLabel: "Starting from ₹30,000/month",
    priceValue: "₹30,000/month+",
    description:
      "We help businesses increase online visibility and generate leads through targeted marketing strategies.",
    features: [
      "Search Engine Optimization (SEO)",
      "Social media marketing",
      "Lead generation campaigns",
      "Paid advertising using Google Ads"
    ],
    timeline: "2-4 weeks setup + ongoing",
    bestFor: "Businesses focused on growth",
    support: "Monthly optimization and reporting",
    keywords: ["digital marketing", "seo", "lead generation", "google ads", "social media"]
  }
];

const normalize = (value) => (value || "").toLowerCase().trim();

export const findServiceByMessage = (message) => {
  const lower = normalize(message);

  return SERVICES.find((service) => {
    const keywordMatch = service.keywords.some((keyword) => lower.includes(normalize(keyword)));
    const titleMatch = lower.includes(normalize(service.title));
    return keywordMatch || titleMatch;
  });
};

export const findServicesByMessage = (message) => {
  const lower = normalize(message);
  if (!lower) {
    return [];
  }

  return SERVICES.filter((service) => {
    const keywordMatch = service.keywords.some((keyword) => lower.includes(normalize(keyword)));
    const titleMatch = lower.includes(normalize(service.title));
    return keywordMatch || titleMatch;
  });
};

export const buildServiceDetailsResponse = (service, language = "en") => {
  if (!service) {
    return language === "hi"
      ? "माफ कीजिए, यह service नहीं मिली। कृपया service का नाम दोबारा भेजें।"
      : "Sorry, I could not find that service. Please share the service name again.";
  }

  if (language === "hi") {
    return [
      `${service.title}`,
      `यह क्या है: ${service.description}`,
      `कीमत: ${service.priceValue}`,
      `समय: ${service.timeline}`,
      "",
      "इसमें शामिल:",
      ...service.features.map((feature) => `- ${feature}`),
      "",
      `किसके लिए बेहतर: ${service.bestFor}`,
      `सपोर्ट: ${service.support}`
    ].join("\n");
  }

  return [
    `${service.title}`,
    `What it is: ${service.description}`,
    `Price: ${service.priceValue}`,
    `Timeline: ${service.timeline}`,
    "",
    "What's included:",
    ...service.features.map((feature) => `- ${feature}`),
    "",
    `Best for: ${service.bestFor}`,
    `Support: ${service.support}`
  ].join("\n");
};

export const buildServicesListResponse = (language = "en") => {
  if (language === "hi") {
    return [
      "हमारी सेवाएं:",
      "",
      ...SERVICES.map((service, index) => `${index + 1}. ${service.title}\n   कीमत: ${service.priceValue}`),
      "",
      "कौन सी service के बारे में details चाहिए?"
    ].join("\n");
  }

  return [
    "Our Services:",
    "",
    ...SERVICES.map((service, index) => `${index + 1}. ${service.title}\n   Price: ${service.priceValue}`),
    "",
    "Tell me which service you want detailed info about."
  ].join("\n");
};

export const buildPricingResponse = (language = "en") => {
  if (language === "hi") {
    return [
      "हमारी service pricing:",
      "",
      ...SERVICES.map((service) => `- ${service.title}: ${service.priceValue}`),
      "",
      "Final cost scope पर depend करती है. Exact quote के लिए requirement share करें."
    ].join("\n");
  }

  return [
    "Our service pricing:",
    "",
    ...SERVICES.map((service) => `- ${service.title}: ${service.priceValue}`),
    "",
    "Final cost depends on scope. Share your requirement for an exact quote."
  ].join("\n");
};

export const buildAllServiceDetailsResponse = (language = "en") => {
  if (language === "hi") {
    return [
      "हमारी सभी services की details:",
      "",
      ...SERVICES.flatMap((service, index) => [
        `${index + 1}. ${service.title}`,
        `   यह क्या है: ${service.description}`,
        `   कीमत: ${service.priceValue}`,
        `   समय: ${service.timeline}`,
        "   इसमें शामिल:",
        ...service.features.map((feature) => `   - ${feature}`),
        `   किसके लिए बेहतर: ${service.bestFor}`,
        `   सपोर्ट: ${service.support}`,
        ""
      ]),
      "अगर चाहें तो मैं किसी एक service की और भी deep guidance दे सकता हूँ।"
    ].join("\n");
  }

  return [
    "Full details of all our services:",
    "",
    ...SERVICES.flatMap((service, index) => [
      `${index + 1}. ${service.title}`,
      `   What it is: ${service.description}`,
      `   Price: ${service.priceValue}`,
      `   Timeline: ${service.timeline}`,
      "   What's included:",
      ...service.features.map((feature) => `   - ${feature}`),
      `   Best for: ${service.bestFor}`,
      `   Support: ${service.support}`,
      ""
    ]),
    "If you want, I can also suggest the best service for your business goal."
  ].join("\n");
};
