import type { Locale } from "@/lib/i18n";

export type PrivacySectionIcon =
  | "intro"
  | "collection"
  | "usage"
  | "security"
  | "disclosure"
  | "hardware"
  | "permissions"
  | "deletion"
  | "rights"
  | "contact"
  | "changes";

export interface PrivacyLabeledItem {
  label: string;
  description: string;
}

export interface PrivacySectionContent {
  id: string;
  number: string;
  icon: PrivacySectionIcon;
  title: string;
  paragraphs?: string[];
  leadText?: string;
  labeledItems?: PrivacyLabeledItem[];
  bullets?: string[];
  closingNote?: string;
  deletionHighlight?: {
    emailLabel: string;
    email: string;
    steps: string[];
    timelineNote: string;
  };
  contactDetails?: {
    company: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    phoneDisplay: string;
    phoneHref: string;
    emailLabel: string;
    email: string;
    supportEmailLabel: string;
    supportEmail: string;
    websiteLabel: string;
    websiteDisplay: string;
    websiteUrl: string;
  };
}

export interface PrivacyPolicyDocument {
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  eyebrow: string;
  title: string;
  lastUpdated: string;
  subtitle: string;
  quickNavLabel: string;
  sections: PrivacySectionContent[];
  footerBanner: {
    heading: string;
    description: string;
    homeCta: string;
    contactCta: string;
  };
}

export const privacyPolicyData: Record<Locale, PrivacyPolicyDocument> = {
  en: {
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Privacy Policy",
    eyebrow: "Legal & Data Protection",
    title: "Privacy Policy",
    lastUpdated: "Last Updated: January 2026",
    subtitle:
      "How Cowgenic collects, uses, and safeguards farm, animal health, and user information across our Smart Neck Collars, Base Stations, and Digital Farm Management System (DFMS).",
    quickNavLabel: "Quick Section Navigation",
    sections: [
      {
        id: "introduction",
        number: "01",
        icon: "intro",
        title: "Introduction",
        paragraphs: [
          'Cowgenic ("we," "our," or "the Company") respects your privacy and is committed to protecting your personal information. This Privacy Policy describes what information we collect through our Digital Farm Management System (DFMS), how we use it, and how we protect it.',
          "Cowgenic is a comprehensive cow monitoring system that operates through Smart Neck Collars and Base Stations, providing real-time health, activity, and heat cycle data to improve dairy farm management.",
        ],
      },
      {
        id: "information-collection",
        number: "02",
        icon: "collection",
        title: "Information Collection",
        leadText: "Our DFMS collects the following types of data:",
        labeledItems: [
          {
            label: "Sensor Data",
            description:
              "Data collected from Cow Neck Collars including movement patterns, activity levels, and behavioral indicators.",
          },
          {
            label: "Cow Health Data",
            description:
              "Heat detection alerts, health indicators, milk production trends, and reproductive cycle information.",
          },
          {
            label: "User Contact Information",
            description:
              "Name, phone number, email address, and farm details provided during account registration or inquiry.",
          },
          {
            label: "Device Data",
            description:
              "Transmission data from Base Stations and network connectivity information.",
          },
        ],
      },
      {
        id: "data-usage",
        number: "03",
        icon: "usage",
        title: "Data Usage",
        leadText: "We use the collected information for the following purposes:",
        bullets: [
          "To provide real-time monitoring of cow health and activity",
          "To detect heat cycles and improve reproductive management",
          "To send alerts for early detection of health issues and diseases",
          "To analyze milk production trends and farm performance",
          "To improve our DFMS application and services",
          "To provide technical support and customer service",
        ],
      },
      {
        id: "data-security",
        number: "04",
        icon: "security",
        title: "Data Security",
        leadText:
          "We take the security of your farm data seriously. The following security measures are in place:",
        labeledItems: [
          {
            label: "Encryption",
            description:
              "All farm-specific data stored in the DFMS is encrypted using industry-standard encryption protocols.",
          },
          {
            label: "Secure Transmission",
            description:
              "Data transmitted between Neck Collars and Base Stations uses secure channels.",
          },
          {
            label: "Access Control",
            description:
              "Only authorized users can access farm data through their account credentials.",
          },
          {
            label: "Regular Audits",
            description:
              "We conduct regular security audits to keep our security protocols up to date.",
          },
        ],
      },
      {
        id: "third-party-disclosure",
        number: "05",
        icon: "disclosure",
        title: "Third-Party Disclosure",
        leadText: "We respect your privacy and explicitly state:",
        bullets: [
          "We do not sell, trade, or share your farm-specific data with any third parties.",
          "Your data is used solely to improve your dairy farm operations.",
          "We do not share your information with other companies for marketing purposes.",
          "In compliance with legal requirements, we may be required to provide data to law enforcement agencies.",
        ],
      },
      {
        id: "hardware-and-sensor-data",
        number: "06",
        icon: "hardware",
        title: "Hardware and Sensor Data",
        leadText: "The Cowgenic system includes physical hardware devices:",
        labeledItems: [
          {
            label: "Smart Neck Collars",
            description:
              "Wearable devices on cows that collect activity, behavior, and health indicators using motion sensors.",
          },
          {
            label: "Base Stations",
            description:
              "Farm-installed devices that receive data from collars and transmit to DFMS cloud servers.",
          },
        ],
        closingNote:
          "All data collected from this hardware is processed solely for the benefit of your farm and is protected under our data security policies.",
      },
      {
        id: "app-permissions",
        number: "07",
        icon: "permissions",
        title: "App Permissions",
        leadText:
          "The Cowgenic DFMS mobile application may request the following permissions to function properly:",
        labeledItems: [
          {
            label: "Bluetooth",
            description:
              "Required to connect and communicate with Base Stations and Neck Collars.",
          },
          {
            label: "Location",
            description:
              "Required to discover nearby Bluetooth devices (Base Station). This is an Android system requirement for Bluetooth scanning.",
          },
          {
            label: "Internet",
            description:
              "Required to sync data with cloud servers and receive real-time alerts.",
          },
        ],
        closingNote:
          "These permissions are used solely for app functionality and are not used for any other purpose.",
      },
      {
        id: "data-deletion-request",
        number: "08",
        icon: "deletion",
        title: "Data Deletion Request",
        leadText:
          "You can request deletion of your personal data and account at any time. To request data deletion:",
        deletionHighlight: {
          emailLabel: "Email us at:",
          email: "cowgenic.ai@gmail.com",
          steps: [
            'Include "Data Deletion Request" in the subject line',
            "Include your registered email address and farm name",
          ],
          timelineNote:
            "We will process your request within 30 days and permanently delete all your personal data from our systems.",
        },
      },
      {
        id: "user-rights",
        number: "09",
        icon: "rights",
        title: "User Rights",
        leadText: "As a user, you have the following rights:",
        bullets: [
          "Right to access and view your stored data",
          "Right to request correction of inaccurate information",
          "Right to request deletion of your account and data",
          "Right to obtain a copy of your data",
        ],
      },
      {
        id: "contact-us",
        number: "10",
        icon: "contact",
        title: "Contact Us",
        leadText:
          "If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us:",
        contactDetails: {
          company: "Cowgenic",
          addressLabel: "Address",
          address: "2nd Floor, 12-K, Block A, Gulberg III, Lahore, Pakistan",
          phoneLabel: "Phone",
          phoneDisplay: "+92 321 1044549",
          phoneHref: "tel:+923211044549",
          emailLabel: "Email",
          email: "cowgenic@gmail.com",
          supportEmailLabel: "Support Email",
          supportEmail: "cowgenic.ai@gmail.com",
          websiteLabel: "Website",
          websiteDisplay: "cowgenic.com",
          websiteUrl: "https://cowgenic.com/",
        },
      },
      {
        id: "changes-to-this-policy",
        number: "11",
        icon: "changes",
        title: "Changes to This Policy",
        paragraphs: [
          'We may update this Privacy Policy from time to time. Any changes will be posted on this page and the "Last Updated" date will be revised. We encourage users to review this page regularly.',
        ],
      },
    ],
    footerBanner: {
      heading: "Questions about your farm data?",
      description:
        "Reach our team directly in Lahore for support regarding account access, sensor telemetry, or data privacy.",
      homeCta: "Back to Home",
      contactCta: "Contact Team",
    },
  },
  ur: {
    breadcrumbHome: "ہوم",
    breadcrumbCurrent: "پرائیویسی پالیسی",
    eyebrow: "قانونی اور ڈیٹا تحفظ",
    title: "پرائیویسی پالیسی",
    lastUpdated: "آخری اپ ڈیٹ: جنوری 2026",
    subtitle:
      "کاوجینک ہمارے سمارٹ نیک کالرز، بیس اسٹیشنز اور ڈیجیٹل فارم مینجمنٹ سسٹم (DFMS) کے ذریعے فارم، جانوروں کی صحت اور صارف کی معلومات کیسے اکٹھا، استعمال اور محفوظ رکھتا ہے۔",
    quickNavLabel: "فوری سیکشن نیویگیشن",
    sections: [
      {
        id: "introduction",
        number: "01",
        icon: "intro",
        title: "تعارف",
        paragraphs: [
          'کاوجینک ("ہم"، "ہمارا"، یا "کمپنی") آپ کی رازداری کا احترام کرتا ہے اور آپ کی ذاتی معلومات کے تحفظ کے لیے پُرعزم ہے۔ یہ پرائیویسی پالیسی وضاحت کرتی ہے کہ ہم اپنے ڈیجیٹل فارم مینجمنٹ سسٹم (DFMS) کے ذریعے کون سی معلومات جمع کرتے ہیں، انہیں کیسے استعمال کرتے ہیں اور کیسے محفوظ رکھتے ہیں۔',
          "کاوجینک ایک جامع گائے مانیٹرنگ سسٹم ہے جو سمارٹ نیک کالرز اور بیس اسٹیشنز کے ذریعے کام کرتا ہے، اور ڈیری فارم کے بہتر انتظام کے لیے جانوروں کی صحت، سرگرمی اور ہیٹ سائیکل کا ریئل ٹائم ڈیٹا فراہم کرتا ہے۔",
        ],
      },
      {
        id: "information-collection",
        number: "02",
        icon: "collection",
        title: "معلومات کا حصول",
        leadText: "ہمارا DFMS درج ذیل اقسام کا ڈیٹا جمع کرتا ہے:",
        labeledItems: [
          {
            label: "سینسر ڈیٹا",
            description:
              "گائے کے نیک کالرز سے حاصل کردہ ڈیٹا، بشمول حرکت کے انداز، سرگرمی کی سطح اور رویے کے اشارے۔",
          },
          {
            label: "گائے کی صحت کا ڈیٹا",
            description:
              "ہیٹ کی تشخیص کے الرٹس، صحت کے اشاریے، دودھ کی پیداوار کے رجحانات اور افزائشِ نسل کے چکر کی معلومات۔",
          },
          {
            label: "صارف کی رابطہ معلومات",
            description:
              "اکاؤنٹ رجسٹریشن یا انکوائری کے دوران فراہم کردہ نام، فون نمبر، ای میل ایڈریس اور فارم کی تفصیلات۔",
          },
          {
            label: "ڈیوائس ڈیٹا",
            description:
              "بیس اسٹیشنز سے ٹرانسمیشن ڈیٹا اور نیٹ ورک کنیکٹیویٹی کی معلومات۔",
          },
        ],
      },
      {
        id: "data-usage",
        number: "03",
        icon: "usage",
        title: "ڈیٹا کا استعمال",
        leadText: "ہم جمع کی گئی معلومات درج ذیل مقاصد کے لیے استعمال کرتے ہیں:",
        bullets: [
          "گائے کی صحت اور سرگرمی کی ریئل ٹائم نگرانی فراہم کرنے کے لیے",
          "ہیٹ سائیکل کی تشخیص اور افزائشِ نسل کے انتظام کو بہتر بنانے کے لیے",
          "صحت کے مسائل اور بیماریوں کی بروقت شناخت کے لیے الرٹس بھیجنے کے لیے",
          "دودھ کی پیداوار کے رجحانات اور فارم کی کارکردگی کا تجزیہ کرنے کے لیے",
          "اپنی DFMS ایپلیکیشن اور سروسز کو بہتر بنانے کے لیے",
          "تکنیکی معاونت اور کسٹمر سروس فراہم کرنے کے لیے",
        ],
      },
      {
        id: "data-security",
        number: "04",
        icon: "security",
        title: "ڈیٹا سیکیورٹی",
        leadText:
          "ہم آپ کے فارم کے ڈیٹا کی حفاظت کو انتہائی سنجیدگی سے لیتے ہیں۔ درج ذیل حفاظتی اقدامات موجود ہیں:",
        labeledItems: [
          {
            label: "انکرپشن",
            description:
              "DFMS میں محفوظ تمام فارم ڈیٹا کو انڈسٹری کے معیاری انکرپشن پروٹوکولز کے ذریعے انکرپٹ کیا جاتا ہے۔",
          },
          {
            label: "محفوظ منتقلی",
            description:
              "نیک کالرز اور بیس اسٹیشنز کے درمیان منتقل ہونے والا ڈیٹا محفوظ چینلز استعمال کرتا ہے۔",
          },
          {
            label: "رسائی کا کنٹرول",
            description:
              "صرف مجاز صارفین ہی اپنے اکاؤنٹ کی اسناد کے ذریعے فارم کے ڈیٹا تک رسائی حاصل کر سکتے ہیں۔",
          },
          {
            label: "باقاعدہ آڈٹ",
            description:
              "ہم اپنے سیکیورٹی پروٹوکولز کو اپ ٹو ڈیٹ رکھنے کے لیے باقاعدگی سے سیکیورٹی آڈٹ کرتے ہیں۔",
          },
        ],
      },
      {
        id: "third-party-disclosure",
        number: "05",
        icon: "disclosure",
        title: "فریقِ ثالث کو معلومات کی فراہمی",
        leadText: "ہم آپ کی رازداری کا احترام کرتے ہیں اور واضح طور پر بیان کرتے ہیں:",
        bullets: [
          "ہم آپ کے فارم کا مخصوص ڈیٹا کسی بھی تیسرے فریق کو فروخت، تجارت یا شیئر نہیں کرتے۔",
          "آپ کا ڈیٹا صرف آپ کے ڈیری فارم کے امور کو بہتر بنانے کے لیے استعمال کیا جاتا ہے۔",
          "ہم مارکیٹنگ کے مقاصد کے لیے آپ کی معلومات کسی دوسری کمپنی کے ساتھ شیئر نہیں کرتے۔",
          "قانونی تقاضوں کی تعمیل میں، ہمیں قانون نافذ کرنے والے اداروں کو ڈیٹا فراہم کرنے کی ضرورت پیش آ سکتی ہے۔",
        ],
      },
      {
        id: "hardware-and-sensor-data",
        number: "06",
        icon: "hardware",
        title: "ہارڈویئر اور سینسر ڈیٹا",
        leadText: "کاوجینک سسٹم میں فزیکل ہارڈویئر ڈیوائسز شامل ہیں:",
        labeledItems: [
          {
            label: "سمارٹ نیک کالرز",
            description:
              "گائے کے گلے میں پہننے والی ڈیوائسز جو موشن سینسرز کے ذریعے سرگرمی، رویے اور صحت کے اشارے جمع کرتی ہیں۔",
          },
          {
            label: "بیس اسٹیشنز",
            description:
              "فارم پر نصب ڈیوائسز جو کالرز سے ڈیٹا وصول کر کے DFMS کلاؤڈ سرورز تک منتقل کرتی ہیں۔",
          },
        ],
        closingNote:
          "اس ہارڈویئر سے اکٹھا کیا گیا تمام ڈیٹا صرف آپ کے فارم کے فائدے کے لیے پروسیس کیا جاتا ہے اور ہماری ڈیٹا سیکیورٹی پالیسیوں کے تحت محفوظ رہتا ہے۔",
      },
      {
        id: "app-permissions",
        number: "07",
        icon: "permissions",
        title: "ایپ کی اجازتیں",
        leadText:
          "کاوجینک DFMS موبائل ایپلیکیشن کو درست طریقے سے کام کرنے کے لیے درج ذیل اجازتوں کی ضرورت ہو سکتی ہے:",
        labeledItems: [
          {
            label: "بلوٹوتھ",
            description:
              "بیس اسٹیشنز اور نیک کالرز سے منسلک ہونے اور رابطہ کرنے کے لیے ضروری ہے۔",
          },
          {
            label: "لوکیشن",
            description:
              "قریبی بلوٹوتھ ڈیوائسز (بیس اسٹیشن) تلاش کرنے کے لیے ضروری ہے۔ یہ بلوٹوتھ اسکیننگ کے لیے اینڈرائیڈ سسٹم کا لازمی تقاضا ہے۔",
          },
          {
            label: "انٹرنیٹ",
            description:
              "کلاؤڈ سرورز کے ساتھ ڈیٹا سنک کرنے اور ریئل ٹائم الرٹس موصول کرنے کے لیے ضروری ہے۔",
          },
        ],
        closingNote:
          "یہ اجازتیں صرف ایپ کے فعال ہونے کے لیے استعمال کی جاتی ہیں اور کسی دوسرے مقصد کے لیے استعمال نہیں ہوتیں۔",
      },
      {
        id: "data-deletion-request",
        number: "08",
        icon: "deletion",
        title: "ڈیٹا حذف کرنے کی درخواست",
        leadText:
          "آپ کسی بھی وقت اپنے ذاتی ڈیٹا اور اکاؤنٹ کو حذف کرنے کی درخواست کر سکتے ہیں۔ ڈیٹا حذف کرنے کے لیے:",
        deletionHighlight: {
          emailLabel: "ہمیں ای میل کریں:",
          email: "cowgenic.ai@gmail.com",
          steps: [
            'سبجیکٹ لائن میں "Data Deletion Request" لکھیں',
            "اپنا رجسٹرڈ ای میل ایڈریس اور فارم کا نام شامل کریں",
          ],
          timelineNote:
            "ہم 30 دنوں کے اندر آپ کی درخواست پر عمل کریں گے اور آپ کا تمام ذاتی ڈیٹا اپنے سسٹمز سے مستقل طور پر حذف کر دیں گے۔",
        },
      },
      {
        id: "user-rights",
        number: "09",
        icon: "rights",
        title: "صارف کے حقوق",
        leadText: "ایک صارف کے طور پر، آپ کو درج ذیل حقوق حاصل ہیں:",
        bullets: [
          "اپنے محفوظ شدہ ڈیٹا تک رسائی اور اسے دیکھنے کا حق",
          "غلط معلومات کی درستی کی درخواست کرنے کا حق",
          "اپنا اکاؤنٹ اور ڈیٹا حذف کرنے کی درخواست کرنے کا حق",
          "اپنے ڈیٹا کی کاپی حاصل کرنے کا حق",
        ],
      },
      {
        id: "contact-us",
        number: "10",
        icon: "contact",
        title: "ہم سے رابطہ کریں",
        leadText:
          "اگر آپ کو اس پرائیویسی پالیسی کے بارے میں کوئی سوال ہے یا آپ اپنے ڈیٹا کے حقوق استعمال کرنا چاہتے ہیں، تو براہ کرم ہم سے رابطہ کریں:",
        contactDetails: {
          company: "Cowgenic",
          addressLabel: "پتہ",
          address: "دوسری منزل، 12-K، بلاک A، گلبرگ III، لاہور، پاکستان",
          phoneLabel: "فون",
          phoneDisplay: "+92 321 1044549",
          phoneHref: "tel:+923211044549",
          emailLabel: "ای میل",
          email: "cowgenic@gmail.com",
          supportEmailLabel: "سپورٹ ای میل",
          supportEmail: "cowgenic.ai@gmail.com",
          websiteLabel: "ویب سائٹ",
          websiteDisplay: "cowgenic.com",
          websiteUrl: "https://cowgenic.com/",
        },
      },
      {
        id: "changes-to-this-policy",
        number: "11",
        icon: "changes",
        title: "اس پالیسی میں تبدیلیاں",
        paragraphs: [
          'ہم وقتاً فوقتاً اس پرائیویسی پالیسی کو اپ ڈیٹ کر سکتے ہیں۔ کسی بھی تبدیلی کو اس صفحے پر شائع کیا جائے گا اور "آخری اپ ڈیٹ" کی تاریخ تبدیل کر دی جائے گی۔ ہم صارفین کو ترغیب دیتے ہیں کہ وہ باقاعدگی سے اس صفحے کا جائزہ لیں۔',
        ],
      },
    ],
    footerBanner: {
      heading: "اپنے فارم ڈیٹا سے متعلق کوئی سوال ہے؟",
      description:
        "اکاؤنٹ رسائی، سینسر ڈیٹا، یا پرائیویسی سے متعلق رہنمائی کے لیے لاہور میں ہماری ٹیم سے براہِ راست رابطہ کریں۔",
      homeCta: "ہوم پیج پر واپس جائیں",
      contactCta: "ٹیم سے رابطہ کریں",
    },
  },
};

