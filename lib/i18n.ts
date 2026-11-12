export type Locale = "en" | "ur";

export const FEATURE_PAGE_SLUGS = [
  "eating-time-monitoring",
  "rumination-time-monitoring",
  "activity-level-monitoring",
  "heat-detection-for-insemination",
  "exact-insemination-time",
  "theft-and-boundary-alert",
] as const;

export type FeaturePageSlug = (typeof FEATURE_PAGE_SLUGS)[number];

export interface FeatureLinkItem {
  id: FeaturePageSlug;
  label: string;
  href: `/features/${FeaturePageSlug}`;
  badge: string;
  summary: string;
}

export interface FooterFeatureLinkItem {
  id: string;
  label: string;
  href: string;
}

export interface SiteDictionary {
  header: {
    announcementText: string;
    announcementHighlight: string;
    features: string;
    allFeaturesLabel: string;
    pricing: string;
    contact: string;
    orderNow: string;
    languageToggle: string;
    languageAriaLabel: string;
    openMenu: string;
    closeMenu: string;
    featureItems: FeatureLinkItem[];
  };
  hero: {
    badge: string;
    heading: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  collarSection: {
    heading: string;
    description: string;
    imageAlt: string;
    stats: Array<{
      label: string;
      value: string;
      sublabel: string;
    }>;
  };
  coreFeatures: {
    eyebrow: string;
    heading: string;
    viewDetails: string;
    items: Array<{
      id:
        | "eating-time"
        | "rumination"
        | "activity-level"
        | "heat-detection"
        | "exact-insemination-time"
        | "theft-alert";
      title: string;
      href: string;
    }>;
  };
  deepInsights: {
    eyebrow: string;
    heading: string;
    description: string;
    ctaLabel: string;
    modules: Array<{
      id: string;
      badge: string;
      title: string;
      description: string;
      points: string[];
      image: string;
      imageAlt: string;
      imagePosition: "left" | "right";
    }>;
  };
  pricingSection: {
    eyebrow: string;
    heading: string;
    description: string;
    componentsHeading: string;
    componentsDescription: string;
    collarDevice: {
      title: string;
      discount: string;
      price: string;
      originalPrice: string;
      imageAlt: string;
      features: string[];
    };
    baseStations: {
      title: string;
      discount: string;
      imageAlt: string;
      tiers: Array<{
        label: string;
        price: string;
        originalPrice: string;
      }>;
      features: string[];
    };
    dealsHeading: string;
    dealsDescription: string;
    totalInvestmentLabel: string;
    packages: Array<{
      id: "basic" | "standard" | "premium";
      title: string;
      hardware: string[];
      price: string;
      benefits: string[];
      ctaLabel: string;
      ctaUrl: string;
      featured?: boolean;
    }>;
    taxNote: string;
  };
  contactSection: {
    eyebrow: string;
    heading: string;
    description: string;
    infoTitle: string;
    phoneLabel: string;
    phoneDisplay: string;
    phoneHref: string;
    whatsappLabel: string;
    whatsappDisplay: string;
    whatsappUrl: string;
    emailLabel: string;
    emailAddress: string;
    addressLabel: string;
    address: string;
    responseNote: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitLabel: string;
      submittingLabel: string;
      successMessage: string;
    };
  };
  footer: {
    description: string;
    whatsappCta: string;
    featuresHeading: string;
    featureLinks: FooterFeatureLinkItem[];
    companyHeading: string;
    pricingPlans: string;
    contactUs: string;
    headOffice: string;
    nationwideDelivery: string;
    copyright: string;
    privacyPolicy: string;
  };
}

export const dictionaries: Record<Locale, SiteDictionary> = {
  en: {
    header: {
      announcementText:
        "Pakistan’s First & Only Native AI Smart Cow Neck Collar System",
      announcementHighlight: "24/7 Real-Time Herd Health & Heat Alerts",
      features: "Features",
      allFeaturesLabel: "Explore All Features",
      pricing: "Pricing",
      contact: "Contact",
      orderNow: "Order Now",
      languageToggle: "اردو",
      languageAriaLabel: "Switch language to Urdu",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      featureItems: [
        {
          id: "eating-time-monitoring",
          label: "Eating Time Monitoring",
          href: "/features/eating-time-monitoring",
          badge: "AI Module 1",
          summary: "Track daily feed intake and early appetite shifts.",
        },
        {
          id: "rumination-time-monitoring",
          label: "Rumination Time Monitoring",
          href: "/features/rumination-time-monitoring",
          badge: "AI Module 2",
          summary: "Monitor digestive health and chewing patterns 24/7.",
        },
        {
          id: "activity-level-monitoring",
          label: "Activity Level Monitoring",
          href: "/features/activity-level-monitoring",
          badge: "AI Module 3",
          summary: "Measure herd movement, rest cycles, and vitality.",
        },
        {
          id: "heat-detection-for-insemination",
          label: "Heat Detection For Insemination",
          href: "/features/heat-detection-for-insemination",
          badge: "AI Module 4",
          summary: "Pinpoint optimal breeding windows automatically.",
        },
        {
          id: "exact-insemination-time",
          label: "Exact Insemination Time",
          href: "/features/exact-insemination-time",
          badge: "AI Module 5",
          summary: "Get optimal AI timing windows to boost conception.",
        },
        {
          id: "theft-and-boundary-alert",
          label: "Theft & Boundary Alert",
          href: "/features/theft-and-boundary-alert",
          badge: "AI Module 6",
          summary: "Receive instant movement and range-breach alerts.",
        },
      ],
    },
    hero: {
      badge: "Pakistan's First & Only Native Cow Neck Collar System",
      heading: "Optimize Your Dairy Farm with Cowgenic Smart Neck Collar",
      description:
        "Advanced monitoring system providing real-time insights into animal health and behavior for smarter farming decisions.",
      primaryCta: "Get Started Today",
      secondaryCta: "Contact Sales Team",
    },
    collarSection: {
      heading: "Smart Neck Collar System",
      description:
        "Smart neck collars continuously monitor animal behavior, activity, and health using advanced sensors. The system collects data and provides real-time insights, helping farmers detect issues early and improve overall herd performance.",
      imageAlt:
        "Cowgenic AI Powered Neck Collar features including eating time, rumination, activity, heat detection, insemination timing, and theft alert",
      stats: [
        {
          label: "Battery Life",
          value: "1 Year",
          sublabel: "Replaceable",
        },
        {
          label: "Alert Latency",
          value: "< 60 Sec",
          sublabel: "Real-time",
        },
        {
          label: "Accuracy",
          value: "95%+",
          sublabel: "Heat Detection For Insemination",
        },
        {
          label: "Service",
          value: "Support",
          sublabel: "Free For 1 year",
        },
      ],
    },
    coreFeatures: {
      eyebrow: "At a Glance",
      heading: "Core Monitoring Features",
      viewDetails: "View Details",
      items: [
        {
          id: "eating-time",
          title: "Eating Time Monitoring",
          href: "/features/eating-time-monitoring",
        },
        {
          id: "rumination",
          title: "Ruminating Time Monitoring",
          href: "/features/rumination-time-monitoring",
        },
        {
          id: "activity-level",
          title: "Body Activity Levels",
          href: "/features/activity-level-monitoring",
        },
        {
          id: "heat-detection",
          title: "Heat Detection For Insemination",
          href: "/features/heat-detection-for-insemination",
        },
        {
          id: "exact-insemination-time",
          title: "Exact Insemination Time",
          href: "/features/exact-insemination-time",
        },
        {
          id: "theft-alert",
          title: "Theft Alert",
          href: "/features/theft-and-boundary-alert",
        },
      ],
    },
    deepInsights: {
      eyebrow: "Deep Insights & Full Control",
      heading: "Smarter Monitoring, Higher Production",
      description:
        "Discover how every single monitoring aspect contributes to a perfectly optimized dairy farm. Locally made for Pakistan's specific conditions.",
      ctaLabel: "Contact Sales for Details",
      modules: [
        {
          id: "module-eating-time",
          badge: "AI Module 1",
          title: "Eating Time Monitoring",
          description:
            "Tracks the feeding behavior of each animal to ensure consistent nutrition and early detection of health issues.",
          points: [
            "Detects changes in appetite",
            "Helps optimize feed management",
            "Identifies early signs of illness",
            "Reduces feed wastage",
          ],
          image: "/images/EatingTime.webp",
          imageAlt:
            "Cow wearing Cowgenic collar during feeding with live eating duration telemetry",
          imagePosition: "right",
        },
        {
          id: "module-rumination-time",
          badge: "AI Module 2",
          title: "Rumination Time Monitoring",
          description:
            "Continuously monitors rumination (cud-chewing) patterns to evaluate digestive health.",
          points: [
            "Early indicator of metabolic issues",
            "Track recovery from illness",
            "Helps monitor recovery from illness",
            "Ensures stable digestive performance",
          ],
          image: "/images/RuminationTime.webp",
          imageAlt:
            "Cow resting while wearing Cowgenic smart collar tracking active rumination chews per minute",
          imagePosition: "left",
        },
        {
          id: "module-body-activity",
          badge: "AI Module 3",
          title: "Body Activity Levels",
          description:
            "Monitors movement and activity levels to identify abnormal behavior patterns.",
          points: [
            "Detects sudden drops in activity",
            "Early detection of weakness in animals",
            "Tracks daily behavioral patterns",
            "Supports herd-level analysis",
          ],
          image: "/images/ActivityLevels.webp",
          imageAlt:
            "Dairy cow walking outdoors wearing Cowgenic collar with daily step activity graph",
          imagePosition: "right",
        },
        {
          id: "module-heat-detection",
          badge: "AI Module 4",
          title: "Heat Detection For Insemination",
          description:
            "Automatically detects heat cycles using behavioral and activity changes.",
          points: [
            "Identifies optimal breeding time",
            "Detects silent heat cases",
            "Reduces missed heat cycles",
            "Improves reproductive efficiency",
          ],
          image: "/images/HeatDetection.webp",
          imageAlt:
            "Dairy farmer checking real-time Heat Detection alert on smartphone beside collared cow",
          imagePosition: "left",
        },
        {
          id: "module-exact-insemination-time",
          badge: "AI Module 5",
          title: "Exact Insemination Time",
          description:
            "Provides precise alerts for the best insemination timing based on heat detection data.",
          points: [
            "Suggests optimal insemination window",
            "Increases conception success rate",
            "Reduces wasted semen cost",
            "Improves breeding planning",
          ],
          image: "/images/InsaminationTime.webp",
          imageAlt:
            "Cowgenic mobile app displaying optimal insemination time window in dairy barn",
          imagePosition: "right",
        },
        {
          id: "module-theft-alert",
          badge: "AI Module 6",
          title: "Theft Alert",
          description:
            "Provides basic security by notifying you of unusual activity or potential risks.",
          points: [
            "Instant alerts within 60 seconds",
            "Detects possible collar removal or inactivity (no data)",
            "Notifies when the device goes out of range",
            "Helps you stay aware, but does not guarantee theft prevention",
          ],
          image: "/images/TheftAlert.webp",
          imageAlt:
            "Instant Cowgenic Animal Movement Theft Alert warning triggered on farmer's phone at night",
          imagePosition: "left",
        },
      ],
    },
    pricingSection: {
      eyebrow: "Investment & Packages",
      heading: "Transparent Pricing for Every Farm Size",
      description: "Choose the right monitoring setup for your farm.",
      componentsHeading: "Individual Components",
      componentsDescription:
        "Build your custom monitoring system with modular hardware.",
      collarDevice: {
        title: "Collar Device",
        discount: "43% OFF",
        price: "Rs. 20,000",
        originalPrice: "Rs. 35,000",
        imageAlt: "Cowgenic Smart Cow Neck Collar Device with blue strap",
        features: [
          "Precision AI Sensors",
          "Waterproof design (IP68)",
          "1 Year Battery Life",
        ],
      },
      baseStations: {
        title: "Base Stations",
        discount: "50% OFF",
        imageAlt: "Cowgenic Base Station wireless gateway with antenna",
        tiers: [
          {
            label: "2G/4G",
            price: "Rs. 50,000",
            originalPrice: "Rs. 100,000",
          },
          {
            label: "5G",
            price: "Rs. 100,000",
            originalPrice: "Rs. 200,000",
          },
        ],
        features: [
          "80 to 100 Meters Range Coverage",
          "Cloud Data Sync",
          "250 Collar Support",
        ],
      },
      dealsHeading: "Recommended Package Deals",
      dealsDescription:
        "Save more with our carefully curated bundles for every farm size.",
      totalInvestmentLabel: "Total Investment",
      packages: [
        {
          id: "basic",
          title: "Basic Package",
          hardware: ["2 Collar Devices", "1 Base Station"],
          price: "Rs. 90,000",
          benefits: [
            "Low initial investment",
            "Easy to start smart monitoring",
            "Covers essential herd tracking needs",
          ],
          ctaLabel: "Select Basic",
          ctaUrl:
            "https://wa.me/923211044549?text=Asalam-o-Alaikum%20Cowgenic%2C%20I%20am%20interested%20in%20the%20Basic%20Package%20(Rs.%2090%2C000).%20Please%20share%20more%20details.",
        },
        {
          id: "standard",
          title: "Standard Package",
          hardware: ["5 Collar Devices", "1 Base Station"],
          price: "Rs. 150,000",
          benefits: [
            "Improved monitoring efficiency with more animals",
            "Saves time with centralized tracking",
            "Balanced cost and performance",
          ],
          ctaLabel: "Select Standard",
          ctaUrl:
            "https://wa.me/923211044549?text=Asalam-o-Alaikum%20Cowgenic%2C%20I%20am%20interested%20in%20the%20Standard%20Package%20(Rs.%20150%2C000).%20Please%20share%20more%20details.",
          featured: true,
        },
        {
          id: "premium",
          title: "Premium Package",
          hardware: ["10 Collar Devices", "1 Base Station"],
          price: "Rs. 250,000",
          benefits: [
            "Complete herd visibility and control",
            "Reduces manual effort significantly",
            "Designed for high-performance dairy farms",
          ],
          ctaLabel: "Select Premium",
          ctaUrl:
            "https://wa.me/923211044549?text=Asalam-o-Alaikum%20Cowgenic%2C%20I%20am%20interested%20in%20the%20Premium%20Package%20(Rs.%20250%2C000).%20Please%20share%20more%20details.",
        },
      ],
      taxNote:
        "(All prices are in PKR and inclusive of all taxes. Custom packages for 50+ collars available upon request.)",
    },
    contactSection: {
      eyebrow: "Get In Touch",
      heading: "Contact Us",
      description: "We'd love to hear from you. Please fill out the form below.",
      infoTitle: "Get in Touch",
      phoneLabel: "Phone",
      phoneDisplay: "+92 321 1044549",
      phoneHref: "tel:+923211044549",
      whatsappLabel: "WhatsApp",
      whatsappDisplay: "+92 321 1044549",
      whatsappUrl: "https://wa.me/923211044549",
      emailLabel: "Email",
      emailAddress: "cowgenic.ai@gmail.com",
      addressLabel: "Office Address",
      address: "12A, Block K Gulberg 2, Lahore, 54000",
      responseNote: "Our team will respond within 24 hours.",
      form: {
        nameLabel: "Full Name",
        namePlaceholder: "Muhammad Ali",
        emailLabel: "Email Address",
        emailPlaceholder: "you@example.com",
        phoneLabel: "Phone Number",
        phonePlaceholder: "+92 300 1234567",
        messageLabel: "Message",
        messagePlaceholder:
          "Tell us about your herd size and monitoring requirements...",
        submitLabel: "Send Message",
        submittingLabel: "Sending...",
        successMessage:
          "Thank you! Your message has been received and our team will respond within 24 hours.",
      },
    },
    footer: {
      description:
        "The first locally developed smart neck collar system in Pakistan, designed to improve dairy farm productivity through intelligent monitoring technology.",
      whatsappCta: "Chat on WhatsApp",
      featuresHeading: "FEATURES",
      featureLinks: [
        {
          id: "eating-time",
          label: "Eating Time Monitoring",
          href: "/#module-eating-time",
        },
        {
          id: "rumination",
          label: "Rumination",
          href: "/#module-rumination-time",
        },
        {
          id: "activity-level",
          label: "Activity Level",
          href: "/#module-body-activity",
        },
        {
          id: "heat-detection",
          label: "Heat Detection For Insemination",
          href: "/#module-heat-detection",
        },
      ],
      companyHeading: "COMPANY",
      pricingPlans: "Pricing Plans",
      contactUs: "Contact Us",
      headOffice: "Head Office: Lahore",
      nationwideDelivery: "Nationwide Delivery",
      copyright: "© 2026 Cowgenic. Built natively in Pakistan.",
      privacyPolicy: "PRIVACY POLICY",
    },
  },
  ur: {
    header: {
      announcementText:
        "پاکستان کا پہلا اور واحد مقامی AI سمارٹ گائے نیک کالر سسٹم",
      announcementHighlight: "24/7 صحت اور ہیٹ کے فوری الرٹس",
      features: "خصوصیات",
      allFeaturesLabel: "تمام خصوصیات دیکھیں",
      pricing: "قیمتیں",
      contact: "رابطہ",
      orderNow: "ابھی آرڈر کریں",
      languageToggle: "English",
      languageAriaLabel: "Switch language to English",
      openMenu: "نیویگیشن مینو کھولیں",
      closeMenu: "نیویگیشن مینو بند کریں",
      featureItems: [
        {
          id: "eating-time-monitoring",
          label: "کھانے کے وقت کی نگرانی",
          href: "/features/eating-time-monitoring",
          badge: "AI ماڈیول 1",
          summary: "روزانہ خوراک کے وقت اور بھوک میں تبدیلیوں کی نگرانی۔",
        },
        {
          id: "rumination-time-monitoring",
          label: "جگالی کے وقت کی نگرانی",
          href: "/features/rumination-time-monitoring",
          badge: "AI ماڈیول 2",
          summary: "ہاضمے کی صحت اور جگالی کے پیٹرن کی 24/7 نگرانی۔",
        },
        {
          id: "activity-level-monitoring",
          label: "سرگرمی کی سطح کی نگرانی",
          href: "/features/activity-level-monitoring",
          badge: "AI ماڈیول 3",
          summary: "مویشیوں کی حرکت، آرام اور چستی کا مسلسل تجزیہ۔",
        },
        {
          id: "heat-detection-for-insemination",
          label: "حمل ٹھہرانے کے لیے ہیٹ کی تشخیص",
          href: "/features/heat-detection-for-insemination",
          badge: "AI ماڈیول 4",
          summary: "نسل کشی کے بہترین وقت کی خودکار نشاندہی۔",
        },
        {
          id: "exact-insemination-time",
          label: "حمل ٹھہرانے کا درست وقت",
          href: "/features/exact-insemination-time",
          badge: "AI ماڈیول 5",
          summary: "حمل کی کامیابی بڑھانے کے لیے مصنوعی نسل کشی کا درست وقت۔",
        },
        {
          id: "theft-and-boundary-alert",
          label: "چوری اور باؤنڈری الرٹ",
          href: "/features/theft-and-boundary-alert",
          badge: "AI ماڈیول 6",
          summary: "غیر معمولی حرکت اور باؤنڈری سے باہر جانے کے فوری الرٹس۔",
        },
      ],
    },
    hero: {
      badge: "پاکستان کا پہلا اور واحد مقامی گائے نیک کالر سسٹم",
      heading: "کاوجینک سمارٹ نیک کالر کے ساتھ اپنے ڈیری فارم کو بہتر بنائیں",
      description:
        "جدید مانیٹرنگ سسٹم جو بہتر فارمنگ فیصلوں کے لیے جانوروں کی صحت اور رویے کے بارے میں فوری معلومات فراہم کرتا ہے۔",
      primaryCta: "آج ہی شروع کریں",
      secondaryCta: "سیلز ٹیم سے رابطہ کریں",
    },
    collarSection: {
      heading: "سمارٹ نیک کالر سسٹم",
      description:
        "سمارٹ نیک کالر جدید سینسرز کی مدد سے جانوروں کے رویے، سرگرمی اور صحت کی مسلسل نگرانی کرتے ہیں۔ یہ نظام ڈیٹا اکٹھا کر کے فوری معلومات فراہم کرتا ہے، جس سے فارمرز کو مسائل کی بروقت تشخیص اور ریوڑ کی مجموعی کارکردگی بہتر بنانے میں مدد ملتی ہے۔",
      imageAlt:
        "کاوجینک اے آئی پاورڈ نیک کالر کی خصوصیات بشمول خوراک، جگالی، سرگرمی، ہیٹ کی تشخیص، حمل کا وقت اور چوری کا الرٹ",
      stats: [
        {
          label: "بیٹری لائف",
          value: "1 سال",
          sublabel: "تبدیل کے قابل",
        },
        {
          label: "الرٹ کی رفتار",
          value: "< 60 سیکنڈ",
          sublabel: "ریئل ٹائم",
        },
        {
          label: "درستگی",
          value: "95%+",
          sublabel: "حمل ٹھہرانے کے لیے ہیٹ کی تشخیص",
        },
        {
          label: "سروس",
          value: "سپورٹ",
          sublabel: "1 سال کے لیے مفت",
        },
      ],
    },
    coreFeatures: {
      eyebrow: "ایک نظر میں",
      heading: "بنیادی مانیٹرنگ خصوصیات",
      viewDetails: "تفصیلات دیکھیں",
      items: [
        {
          id: "eating-time",
          title: "کھانے کے وقت کی نگرانی",
          href: "/features/eating-time-monitoring",
        },
        {
          id: "rumination",
          title: "جگالی کے وقت کی نگرانی",
          href: "/features/rumination-time-monitoring",
        },
        {
          id: "activity-level",
          title: "جسمانی سرگرمی کی سطح",
          href: "/features/activity-level-monitoring",
        },
        {
          id: "heat-detection",
          title: "حمل ٹھہرانے کے لیے ہیٹ کی تشخیص",
          href: "/features/heat-detection-for-insemination",
        },
        {
          id: "exact-insemination-time",
          title: "حمل ٹھہرانے کا درست وقت",
          href: "/features/exact-insemination-time",
        },
        {
          id: "theft-alert",
          title: "چوری کا الرٹ",
          href: "/features/theft-and-boundary-alert",
        },
      ],
    },
    deepInsights: {
      eyebrow: "گہری معلومات اور مکمل کنٹرول",
      heading: "سمارٹ نگرانی، زیادہ پیداوار",
      description:
        "جانیں کہ نگرانی کا ہر پہلو کس طرح ایک بہترین ڈیری فارم بنانے میں مدد دیتا ہے۔ پاکستان کے مخصوص حالات کے مطابق مقامی طور پر تیار کردہ۔",
      ctaLabel: "تفصیلات کے لیے سیلز سے رابطہ کریں",
      modules: [
        {
          id: "module-eating-time",
          badge: "AI ماڈیول 1",
          title: "کھانے کے وقت کی نگرانی",
          description:
            "متوازن خوراک یقینی بنانے اور بیماری کی ابتدائی علامات کی بروقت تشخیص کے لیے ہر جانور کے کھانے کے رویے کی نگرانی کرتا ہے۔",
          points: [
            "بھوک میں تبدیلی کی نشاندہی کرتا ہے",
            "خوراک کے بہتر انتظام میں مدد دیتا ہے",
            "بیماری کی ابتدائی علامات کی شناخت کرتا ہے",
            "چارے کے ضیاع کو کم کرتا ہے",
          ],
          image: "/images/EatingTime.webp",
          imageAlt:
            "چارہ کھاتی ہوئی گائے کاوجینک سمارٹ کالر اور لائیو فیڈنگ ڈیٹا کے ساتھ",
          imagePosition: "right",
        },
        {
          id: "module-rumination-time",
          badge: "AI ماڈیول 2",
          title: "جگالی کے وقت کی نگرانی",
          description:
            "ہاضمے کی صحت جانچنے کے لیے جانور کے جگالی کرنے کے پیٹرن کی مسلسل نگرانی کرتا ہے۔",
          points: [
            "میٹابولک مسائل کی ابتدائی علامت",
            "بیماری سے صحت یابی کو ٹریک کرتا ہے",
            "صحت یابی کی نگرانی میں مددگار ہے",
            "ہاضمے کی مستحکم کارکردگی یقینی بناتا ہے",
          ],
          image: "/images/RuminationTime.webp",
          imageAlt:
            "آرام کرتی ہوئی گائے کاوجینک سمارٹ کالر اور فعال جگالی کے ڈیٹا کے ساتھ",
          imagePosition: "left",
        },
        {
          id: "module-body-activity",
          badge: "AI ماڈیول 3",
          title: "جسمانی سرگرمی کی سطح",
          description:
            "غیر معمولی رویے کی نشاندہی کے لیے جانور کی حرکت اور سرگرمی کی سطح کی نگرانی کرتا ہے۔",
          points: [
            "سرگرمی میں اچانک کمی کی نشاندہی کرتا ہے",
            "جانوروں میں کمزوری کی بروقت تشخیص",
            "روزمرہ کے رویے کے پیٹرن کو ٹریک کرتا ہے",
            "پورے ریوڑ کے تجزیے میں معاونت کرتا ہے",
          ],
          image: "/images/ActivityLevels.webp",
          imageAlt:
            "کھیت میں چلتی ہوئی گائے کاوجینک کالر اور روزانہ قدموں کے گراف کے ساتھ",
          imagePosition: "right",
        },
        {
          id: "module-heat-detection",
          badge: "AI ماڈیول 4",
          title: "حمل ٹھہرانے کے لیے ہیٹ کی تشخیص",
          description:
            "رویے اور سرگرمی کی تبدیلیوں کے ذریعے ہیٹ سائیکل کی خودکار تشخیص کرتا ہے۔",
          points: [
            "نسل کشی کے بہترین وقت کی نشاندہی کرتا ہے",
            "خاموش ہیٹ کیسز کی تشخیص کرتا ہے",
            "ضائع ہونے والے ہیٹ سائیکل کم کرتا ہے",
            "افزائش نسل کی کارکردگی بہتر بناتا ہے",
          ],
          image: "/images/HeatDetection.webp",
          imageAlt:
            "کاوجینک کالر والی گائے کے ساتھ اسمارٹ فون پر ہیٹ ڈیٹیکشن الرٹ",
          imagePosition: "left",
        },
        {
          id: "module-exact-insemination-time",
          badge: "AI ماڈیول 5",
          title: "حمل ٹھہرانے کا درست وقت",
          description:
            "ہیٹ کی تشخیص کے ڈیٹا کی بنیاد پر مصنوعی نسل کشی کے بہترین وقت کے لیے درست الرٹس فراہم کرتا ہے۔",
          points: [
            "حمل ٹھہرانے کا بہترین دورانیہ تجویز کرتا ہے",
            "حمل ٹھہرنے کی کامیابی کی شرح بڑھاتا ہے",
            "سیمن کے ضیاع اور لاگت کو کم کرتا ہے",
            "بریڈنگ کی منصوبہ بندی کو بہتر بناتا ہے",
          ],
          image: "/images/InsaminationTime.webp",
          imageAlt:
            "کاوجینک ایپ پر مصنوعی نسل کشی کے بہترین وقت کی ونڈو کا مظاہرہ",
          imagePosition: "right",
        },
        {
          id: "module-theft-alert",
          badge: "AI ماڈیول 6",
          title: "چوری کا الرٹ",
          description:
            "غیر معمولی حرکت یا ممکنہ خطرات کی اطلاع دے کر بنیادی سیکیورٹی فراہم کرتا ہے۔",
          points: [
            "60 سیکنڈ کے اندر فوری الرٹس",
            "کالر اتارنے یا غیر فعال ہونے (کوئی ڈیٹا نہ ہونے) کی اطلاع",
            "ڈیوائس رینج سے باہر جانے پر الرٹ بھیجتا ہے",
            "آگاہ رہنے میں مدد دیتا ہے، تاہم چوری سے مکمل تحفظ کی ضمانت نہیں دیتا",
          ],
          image: "/images/TheftAlert.webp",
          imageAlt:
            "رات کے وقت کسان کے فون پر فوری مویشی حرکت اور چوری کا الرٹ",
          imagePosition: "left",
        },
      ],
    },
    pricingSection: {
      eyebrow: "سرمایہ کاری اور پیکجز",
      heading: "ہر فارم کے سائز کے لیے شفاف قیمتیں",
      description: "اپنے فارم کے لیے بہترین مانیٹرنگ سیٹ اپ کا انتخاب کریں۔",
      componentsHeading: "انفرادی پرزہ جات",
      componentsDescription:
        "ماڈیولر ہارڈویئر کے ساتھ اپنا حسبِ منشاء مانیٹرنگ سسٹم بنائیں۔",
      collarDevice: {
        title: "کالر ڈیوائس",
        discount: "43% رعایت",
        price: "Rs. 20,000",
        originalPrice: "Rs. 35,000",
        imageAlt: "نیلے پٹے کے ساتھ کاوجینک سمارٹ گائے نیک کالر ڈیوائس",
        features: [
          "درست AI سینسرز",
          "واٹر پروف ڈیزائن (IP68)",
          "1 سال کی بیٹری لائف",
        ],
      },
      baseStations: {
        title: "بیس اسٹیشنز",
        discount: "50% رعایت",
        imageAlt: "انٹینا کے ساتھ کاوجینک بیس اسٹیشن وائرلیس گیٹ وے",
        tiers: [
          {
            label: "2G/4G",
            price: "Rs. 50,000",
            originalPrice: "Rs. 100,000",
          },
          {
            label: "5G",
            price: "Rs. 100,000",
            originalPrice: "Rs. 200,000",
          },
        ],
        features: [
          "80 سے 100 میٹر رینج کوریج",
          "کلاؤڈ ڈیٹا سنک",
          "250 کالر کی سپورٹ",
        ],
      },
      dealsHeading: "تجویز کردہ پیکج ڈیلز",
      dealsDescription:
        "ہر فارم کے سائز کے لیے ہمارے خاص بنڈلز کے ساتھ مزید بچت کریں۔",
      totalInvestmentLabel: "کل سرمایہ کاری",
      packages: [
        {
          id: "basic",
          title: "بیسک پیکج",
          hardware: ["2 کالر ڈیوائسز", "1 بیس اسٹیشن"],
          price: "Rs. 90,000",
          benefits: [
            "کم ابتدائی سرمایہ کاری",
            "سمارٹ مانیٹرنگ شروع کرنے کا آسان طریقہ",
            "ریوڑ کی بنیادی نگرانی کی ضروریات پوری کرتا ہے",
          ],
          ctaLabel: "بیسک منتخب کریں",
          ctaUrl:
            "https://wa.me/923211044549?text=Asalam-o-Alaikum%20Cowgenic%2C%20I%20am%20interested%20in%20the%20Basic%20Package%20(Rs.%2090%2C000).%20Please%20share%20more%20details.",
        },
        {
          id: "standard",
          title: "اسٹینڈرڈ پیکج",
          hardware: ["5 کالر ڈیوائسز", "1 بیس اسٹیشن"],
          price: "Rs. 150,000",
          benefits: [
            "زیادہ جانوروں کے ساتھ بہتر مانیٹرنگ کارکردگی",
            "مرکزی ٹریکنگ کے ساتھ وقت کی بچت",
            "لاگت اور کارکردگی کا بہترین توازن",
          ],
          ctaLabel: "اسٹینڈرڈ منتخب کریں",
          ctaUrl:
            "https://wa.me/923211044549?text=Asalam-o-Alaikum%20Cowgenic%2C%20I%20am%20interested%20in%20the%20Standard%20Package%20(Rs.%20150%2C000).%20Please%20share%20more%20details.",
          featured: true,
        },
        {
          id: "premium",
          title: "پریمیم پیکج",
          hardware: ["10 کالر ڈیوائسز", "1 بیس اسٹیشن"],
          price: "Rs. 250,000",
          benefits: [
            "پورے ریوڑ کی مکمل نگرانی اور کنٹرول",
            "دستی محنت میں نمایاں کمی",
            "اعلیٰ کارکردگی والے ڈیری فارمز کے لیے ڈیزائن کردہ",
          ],
          ctaLabel: "پریمیم منتخب کریں",
          ctaUrl:
            "https://wa.me/923211044549?text=Asalam-o-Alaikum%20Cowgenic%2C%20I%20am%20interested%20in%20the%20Premium%20Package%20(Rs.%20250%2C000).%20Please%20share%20more%20details.",
        },
      ],
      taxNote:
        "(تمام قیمتیں پاکستانی روپے میں اور تمام ٹیکسز سمیت ہیں۔ 50 سے زائد کالرز کے لیے کسٹم پیکجز درخواست پر دستیاب ہیں۔)",
    },
    contactSection: {
      eyebrow: "رابطے میں رہیں",
      heading: "ہم سے رابطہ کریں",
      description:
        "ہم آپ کی بات سن کر خوش ہوں گے۔ براہ کرم نیچے دیا گیا فارم پُر کریں۔",
      infoTitle: "رابطہ معلومات",
      phoneLabel: "فون",
      phoneDisplay: "+92 321 1044549",
      phoneHref: "tel:+923211044549",
      whatsappLabel: "واٹس ایپ",
      whatsappDisplay: "+92 321 1044549",
      whatsappUrl: "https://wa.me/923211044549",
      emailLabel: "ای میل",
      emailAddress: "cowgenic.ai@gmail.com",
      addressLabel: "آفس کا پتہ",
      address: "12A، بلاک K گلبرگ 2، لاہور، 54000",
      responseNote: "ہماری ٹیم 24 گھنٹوں کے اندر جواب دے گی۔",
      form: {
        nameLabel: "مکمل نام",
        namePlaceholder: "محمد علی",
        emailLabel: "ای میل ایڈریس",
        emailPlaceholder: "you@example.com",
        phoneLabel: "فون نمبر",
        phonePlaceholder: "+92 300 1234567",
        messageLabel: "پیغام",
        messagePlaceholder:
          "اپنے فارم کے جانوروں کی تعداد اور ضروریات کے بارے میں بتائیں...",
        submitLabel: "پیغام بھیجیں",
        submittingLabel: "بھیجا جا رہا ہے...",
        successMessage:
          "شکریہ! آپ کا پیغام موصول ہو گیا ہے، ہماری ٹیم 24 گھنٹوں میں رابطہ کرے گی۔",
      },
    },
    footer: {
      description:
        "پاکستان میں مقامی طور پر تیار کردہ پہلا سمارٹ نیک کالر سسٹم، جو جدید مانیٹرنگ ٹیکنالوجی کے ذریعے ڈیری فارم کی پیداوار بڑھانے کے لیے ڈیزائن کیا گیا ہے۔",
      whatsappCta: "واٹس ایپ پر بات کریں",
      featuresHeading: "خصوصیات",
      featureLinks: [
        {
          id: "eating-time",
          label: "کھانے کے وقت کی نگرانی",
          href: "/#module-eating-time",
        },
        {
          id: "rumination",
          label: "جگالی کی نگرانی",
          href: "/#module-rumination-time",
        },
        {
          id: "activity-level",
          label: "سرگرمی کی سطح",
          href: "/#module-body-activity",
        },
        {
          id: "heat-detection",
          label: "حمل ٹھہرانے کے لیے ہیٹ کی تشخیص",
          href: "/#module-heat-detection",
        },
      ],
      companyHeading: "کمپنی",
      pricingPlans: "قیمتوں کے پلان",
      contactUs: "ہم سے رابطہ کریں",
      headOffice: "ہیڈ آفس: لاہور",
      nationwideDelivery: "ملک بھر میں ڈیلیوری",
      copyright: "© 2026 Cowgenic. پاکستان میں مقامی طور پر تیار کردہ۔",
      privacyPolicy: "پرائیویسی پالیسی",
    },
  },
};

