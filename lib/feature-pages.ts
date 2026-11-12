import type { FeaturePageSlug, Locale } from "@/lib/i18n";

export interface FeatureMetricItem {
  value: string;
  label: string;
  detail: string;
}

export interface FeatureStepItem {
  step: string;
  title: string;
  description: string;
}

export interface FeatureBenefitItem {
  title: string;
  description: string;
}

export interface FeaturePageContent {
  slug: FeaturePageSlug;
  badge: string;
  title: string;
  heroSubtitle: string;
  overview: string;
  image: string;
  imageAlt: string;
  keyPoints: string[];
  metrics: FeatureMetricItem[];
  workflowSteps: FeatureStepItem[];
  benefits: FeatureBenefitItem[];
}

export interface FeaturePageUiCopy {
  homeLabel: string;
  featuresLabel: string;
  keyCapabilitiesLabel: string;
  orderCollarCta: string;
  contactSalesCta: string;
  telemetryEyebrow: string;
  workflowEyebrow: string;
  workflowHeading: string;
  workflowSubheading: string;
  benefitsEyebrow: string;
  benefitsHeading: string;
  benefitsSubheading: string;
  exploreOthersHeading: string;
  exploreOthersDescription: string;
  bannerHeading: string;
  bannerDescription: string;
  bannerPricingCta: string;
  bannerWhatsappCta: string;
}

export const featurePageUiCopy: Record<Locale, FeaturePageUiCopy> = {
  en: {
    homeLabel: "Home",
    featuresLabel: "Features",
    keyCapabilitiesLabel: "Core Module Capabilities",
    orderCollarCta: "Order Smart Collar",
    contactSalesCta: "Contact Sales for Details",
    telemetryEyebrow: "Performance & Precision",
    workflowEyebrow: "Farm Workflow",
    workflowHeading: "How This Module Works",
    workflowSubheading:
      "Seamless 24/7 collar sensing, cloud analysis, and actionable alerts built for Pakistan's dairy farms.",
    benefitsEyebrow: "Dairy Herd Impact",
    benefitsHeading: "Why It Matters for Your Farm",
    benefitsSubheading:
      "Turn continuous neck-collar data into healthier cows, better nutrition management, and higher milk yield.",
    exploreOthersHeading: "Explore Other AI Monitoring Modules",
    exploreOthersDescription:
      "Every Cowgenic collar combines all six smart monitoring modules inside one rugged unit.",
    bannerHeading: "Ready to Upgrade Your Dairy Herd Monitoring?",
    bannerDescription:
      "Start with a modular collar pack or speak directly with our Lahore team for a custom herd setup.",
    bannerPricingCta: "View Pricing & Packages",
    bannerWhatsappCta: "Contact Sales",
  },
  ur: {
    homeLabel: "ہوم",
    featuresLabel: "خصوصیات",
    keyCapabilitiesLabel: "اس ماڈیول کی اہم خوبیاں",
    orderCollarCta: "سمارٹ کالر آرڈر کریں",
    contactSalesCta: "تفصیلات کے لیے سیلز سے رابطہ کریں",
    telemetryEyebrow: "کارکردگی اور درستگی",
    workflowEyebrow: "فارم ورک فلو",
    workflowHeading: "یہ ماڈیول کیسے کام کرتا ہے",
    workflowSubheading:
      "پاکستان کے ڈیری فارمز کے لیے 24/7 مسلسل کالر سینسنگ، کلاؤڈ تجزیہ اور فوری الرٹس۔",
    benefitsEyebrow: "ڈیری فارم پر اثر",
    benefitsHeading: "آپ کے فارم کے لیے یہ کیوں اہم ہے",
    benefitsSubheading:
      "مسلسل کالر ڈیٹا کو جانوروں کی بہتر صحت، خوراک کے درست انتظام اور زیادہ دودھ کی پیداوار میں بدلیں۔",
    exploreOthersHeading: "دیگر AI مانیٹرنگ ماڈیولز دیکھیں",
    exploreOthersDescription:
      "کاوجینک کا ہر سمارٹ کالر ایک ہی مضبوط ڈیوائس میں یہ تمام چھ مانیٹرنگ ماڈیولز فراہم کرتا ہے۔",
    bannerHeading: "اپنے ڈیری فارم کی نگرانی کو جدید بنانے کے لیے تیار ہیں؟",
    bannerDescription:
      "آسان پیکج سے آغاز کریں یا اپنے فارم کے مطابق مشورے کے لیے ہماری لاہور ٹیم سے براہ راست رابطہ کریں۔",
    bannerPricingCta: "قیمتیں اور پیکجز دیکھیں",
    bannerWhatsappCta: "سیلز سے رابطہ کریں",
  },
};

export const featurePagesData: Record<
  Locale,
  Record<FeaturePageSlug, FeaturePageContent>
> = {
  en: {
    "eating-time-monitoring": {
      slug: "eating-time-monitoring",
      badge: "AI Module 1",
      title: "Eating Time Monitoring",
      heroSubtitle:
        "Continuous daily feed-intake tracking to spot appetite drops before milk production falls.",
      overview:
        "Tracks the feeding behavior of each animal around the clock to ensure consistent nutrition and early detection of health issues. By establishing every cow's normal feeding baseline, Cowgenic alerts your farm manager the moment intake slows down.",
      image: "/images/EatingTime.webp",
      imageAlt:
        "Cow wearing Cowgenic smart neck collar during feeding with live eating duration telemetry",
      keyPoints: [
        "Detects changes in appetite",
        "Helps optimize feed management",
        "Identifies early signs of illness",
        "Reduces feed wastage",
      ],
      metrics: [
        {
          value: "24/7",
          label: "Continuous Intake Log",
          detail: "Automatic day-and-night tracking across every feeding cycle.",
        },
        {
          value: "< 60 Sec",
          label: "Alert Latency",
          detail: "Instant notification when a cow skips or reduces ration intake.",
        },
        {
          value: "1 Year",
          label: "Collar Battery Life",
          detail: "Replaceable battery inside an IP68 waterproof collar enclosure.",
        },
      ],
      workflowSteps: [
        {
          step: "01",
          title: "Precision Neck Motion Sensing",
          description:
            "On-collar sensors distinguish active feed-bunk eating head movements from standing or resting postures.",
        },
        {
          step: "02",
          title: "Individual Baseline Comparison",
          description:
            "Cowgenic AI compares each animal's daily eating minutes against its 7-day rolling herd and personal baseline.",
        },
        {
          step: "03",
          title: "Early Ration & Health Alerts",
          description:
            "Managers receive clear alerts on mobile to check ration quality, bunk access, or early metabolic stress.",
        },
      ],
      benefits: [
        {
          title: "Catch Health Drops Early",
          description:
            "A dip in eating time often appears 24–48 hours before visible fever or a drop in parlor milk output.",
        },
        {
          title: "Lower Feed Wastage",
          description:
            "Spot when cows reject spoiled silage or unbalanced TMR mixes so you adjust feed formulation promptly.",
        },
        {
          title: "Steady Herd Milk Yield",
          description:
            "Consistent dry-matter intake directly protects daily lactation curves across high-producing dairy cows.",
        },
      ],
    },
    "rumination-time-monitoring": {
      slug: "rumination-time-monitoring",
      badge: "AI Module 2",
      title: "Rumination Time Monitoring",
      heroSubtitle:
        "Precision cud-chewing analysis to safeguard rumen health and track post-treatment recovery.",
      overview:
        "Continuously monitors rumination (cud-chewing) patterns to evaluate digestive health across every animal in your barn. Smooth, rhythmic rumination reflects a healthy rumen, whereas sudden declines give you an unmistakable early warning of digestive or metabolic stress.",
      image: "/images/RuminationTime.webp",
      imageAlt:
        "Cow resting while wearing Cowgenic smart collar tracking active rumination chews per minute",
      keyPoints: [
        "Early indicator of metabolic issues",
        "Tracks recovery from illness",
        "Monitors post-calving digestive stability",
        "Ensures balanced rumen performance",
      ],
      metrics: [
        {
          value: "24/7",
          label: "Cud-Chewing Tracking",
          detail: "Captures every rumination bout during rest and lying periods.",
        },
        {
          value: "250",
          label: "Collars Per Base Station",
          detail: "Centralized barn sync covering medium and large dairy herds.",
        },
        {
          value: "IP68",
          label: "Waterproof Hardware",
          detail: "Built for washdowns, humidity, and monsoon farm conditions.",
        },
      ],
      workflowSteps: [
        {
          step: "01",
          title: "Rhythmic Jaw & Neck Detection",
          description:
            "High-sensitivity motion algorithms capture distinct regurgitation and rhythmic cud-chewing intervals.",
        },
        {
          step: "02",
          title: "Digestive Stability Indexing",
          description:
            "Cloud analytics turn raw chewing duration into an easy-to-read daily digestive health trend for each cow.",
        },
        {
          step: "03",
          title: "Proactive Vet & Ration Action",
          description:
            "Use dropping rumination alerts to intervene early on subacute ruminal acidosis, ketosis, or transition stress.",
        },
      ],
      benefits: [
        {
          title: "Transition-Cow Protection",
          description:
            "Track fresh cows closely after calving when metabolic risk is highest and prompt intervention saves lactation.",
        },
        {
          title: "Objective Treatment Follow-Up",
          description:
            "Confirm when a sick cow truly rebounds by watching daily rumination minutes return steadily toward baseline.",
        },
        {
          title: "Smarter Forage Balance",
          description:
            "See herd-wide dips immediately if roughage fiber length or concentrate ratios upset rumen fermentation.",
        },
      ],
    },
    "activity-level-monitoring": {
      slug: "activity-level-monitoring",
      badge: "AI Module 3",
      title: "Activity Level Monitoring",
      heroSubtitle:
        "Real-time movement, rest, and behavior analytics for early lameness and herd-comfort detection.",
      overview:
        "Monitors movement and daily activity levels continuously to identify abnormal behavior patterns across the herd. Whether an animal becomes unusually restless or shows a sudden drop in steps due to weakness or lameness, you see it long before manual observation catches up.",
      image: "/images/ActivityLevels.webp",
      imageAlt:
        "Dairy cow walking outdoors wearing Cowgenic collar with daily step activity graph",
      keyPoints: [
        "Detects sudden drops in activity",
        "Early detection of weakness in animals",
        "Tracks daily behavioral patterns",
        "Supports herd-level analysis",
      ],
      metrics: [
        {
          value: "Real-Time",
          label: "Activity Telemetry",
          detail: "Tracks active walking, standing, and resting shifts continuously.",
        },
        {
          value: "80–100m",
          label: "Gateway Range Coverage",
          detail: "Reliable barn and paddock sync via 2G/4G or 5G Base Stations.",
        },
        {
          value: "24/7",
          label: "Herd Comfort Watch",
          detail: "Detects heat stress or bedding discomfort across cow groups.",
        },
      ],
      workflowSteps: [
        {
          step: "01",
          title: "Multi-Axis Movement Capture",
          description:
            "Collar accelerometers record posture shifts, walking cadence, and daily active versus resting distribution.",
        },
        {
          step: "02",
          title: "Deviation & Anomaly Scoring",
          description:
            "Sudden activity spikes or sluggish drops are flagged against individual and group norms.",
        },
        {
          step: "03",
          title: "Targeted Herd Inspection",
          description:
            "Farm staff inspect flagged animals immediately for hoof soreness, injury, fatigue, or heat stress.",
        },
      ],
      benefits: [
        {
          title: "Faster Lameness & Weakness Catch",
          description:
            "Reduced step counts pinpoint sore hooves or sluggish cows early when simple trimming or care prevents culling.",
        },
        {
          title: "Barn Comfort Benchmarking",
          description:
            "Compare activity shifts across pens to evaluate cooling fans, bedding quality, and watering access.",
        },
        {
          title: "Less Manual Patrol Effort",
          description:
            "Instead of watching hundreds of cows by eye, focus staff time directly on the animals needing attention.",
        },
      ],
    },
    "heat-detection-for-insemination": {
      slug: "heat-detection-for-insemination",
      badge: "AI Module 4",
      title: "Heat Detection For Insemination",
      heroSubtitle:
        "95%+ accuracy automated estrus alerts—including silent and overnight heats—for profitable breeding.",
      overview:
        "Automatically detects heat cycles using behavioral, restlessness, and feeding shifts around the clock. Locally tuned for dairy breeds across Pakistan, Cowgenic helps farms catch quiet or short nighttime estrus events that manual visual checks routinely miss.",
      image: "/images/HeatDetection.webp",
      imageAlt:
        "Dairy farmer checking real-time Heat Detection alert on smartphone beside collared cow",
      keyPoints: [
        "Identifies optimal breeding time",
        "Detects silent heat cases",
        "Reduces missed heat cycles",
        "Improves reproductive efficiency",
      ],
      metrics: [
        {
          value: "95%+",
          label: "Detection Accuracy",
          detail: "Proven behavioral estrus recognition across dairy herds.",
        },
        {
          value: "24/7",
          label: "Silent Heat Watch",
          detail: "Captures subtle overnight and short-duration estrus peaks.",
        },
        {
          value: "< 60 Sec",
          label: "Alert Notification",
          detail: "Real-time estrus notifications delivered straight to farm managers.",
        },
      ],
      workflowSteps: [
        {
          step: "01",
          title: "Behavioral Surge Recognition",
          description:
            "Sensors spot characteristic restlessness alongside temporary dips in rumination and eating duration.",
        },
        {
          step: "02",
          title: "AI Heat Cycle Validation",
          description:
            "Multiple behavioral signals are correlated together so false positives from routine barn crowding stay minimal.",
        },
        {
          step: "03",
          title: "Immediate Heat Alert Delivery",
          description:
            "Farmers get clear estrus alerts listing which cows entered heat and when onset began.",
        },
      ],
      benefits: [
        {
          title: "Zero Missed Nighttime Heats",
          description:
            "Most heat signs intensify overnight when barn staff aren't watching—Cowgenic captures every hour automatically.",
        },
        {
          title: "Catch Silent Heats Reliably",
          description:
            "Detect cows showing weak standing behavior through sensitive collar telemetry before the 21-day cycle slips away.",
        },
        {
          title: "Shorter Calving Intervals",
          description:
            "Fewer missed cycles keep cows breeding back on schedule for higher lifetime milk production.",
        },
      ],
    },
    "exact-insemination-time": {
      slug: "exact-insemination-time",
      badge: "AI Module 5",
      title: "Exact Insemination Time",
      heroSubtitle:
        "Pinpoint the exact peak breeding window from heat onset to maximize first-service conception.",
      overview:
        "Provides precise timing guidance for artificial insemination based on real-time heat detection onset and estrus progression curves. Knowing a cow is in heat is only half the battle—Cowgenic shows your AI technician the optimal window so every straw counts.",
      image: "/images/InsaminationTime.webp",
      imageAlt:
        "Cowgenic mobile app displaying optimal insemination time window inside a dairy barn",
      keyPoints: [
        "Suggests optimal insemination window",
        "Increases conception success rate",
        "Reduces wasted semen cost",
        "Improves breeding planning",
      ],
      metrics: [
        {
          value: "Precision",
          label: "AI Window Countdown",
          detail: "Calculated directly from verified estrus onset peak curves.",
        },
        {
          value: "95%+",
          label: "Estrus Precision Base",
          detail: "Powered by continuous behavioral and activity correlation.",
        },
        {
          value: "Fewer",
          label: "Repeat Services",
          detail: "Protects high-value imported or sexed semen investments.",
        },
      ],
      workflowSteps: [
        {
          step: "01",
          title: "Timestamped Heat Onset",
          description:
            "The system locks in the exact hour the cow's estrus activity curve climbs past threshold.",
        },
        {
          step: "02",
          title: "Optimal Window Calculation",
          description:
            "AI maps out peak fertility timing relative to ovulation so technicians avoid breeding too early or too late.",
        },
        {
          step: "03",
          title: "Scheduled Technician Action",
          description:
            "Plan morning or evening AI rounds accurately with clear per-cow readiness windows.",
        },
      ],
      benefits: [
        {
          title: "Higher First-Service Conception",
          description:
            "Accurate timing brings sperm capacitation and ovulation together for stronger pregnancy rates.",
        },
        {
          title: "Protect High-Value Semen",
          description:
            "Eliminate guesswork and cut wasted imported, genomic, or sexed semen straws on poorly timed services.",
        },
        {
          title: "Organized Breeding Calendar",
          description:
            "Give your AI team predictable daily schedules instead of guessing when heat started hours earlier.",
        },
      ],
    },
    "theft-and-boundary-alert": {
      slug: "theft-and-boundary-alert",
      badge: "AI Module 6",
      title: "Theft & Boundary Alert",
      heroSubtitle:
        "Instant alerts within 60 seconds for unusual nighttime movement, collar tampering, or out-of-range departures.",
      overview:
        "Provides proactive perimeter and herd-security awareness by notifying farm owners immediately of unusual rapid movement, suspected collar removal (no data / inactivity), or a collared animal leaving base-station range. Helps keep you informed around the clock, though hardware alerts do not guarantee complete theft prevention.",
      image: "/images/TheftAlert.webp",
      imageAlt:
        "Instant Cowgenic Animal Movement Theft Alert warning triggered on farmer's smartphone at night",
      keyPoints: [
        "Instant alerts within 60 seconds",
        "Detects possible collar removal or inactivity (no data)",
        "Notifies when the device goes out of range",
        "Helps you stay aware, without guaranteeing full theft prevention",
      ],
      metrics: [
        {
          value: "< 60 Sec",
          label: "Rapid Alert Delivery",
          detail: "Fast notification on unusual herd disturbance or range loss.",
        },
        {
          value: "80–100m",
          label: "Gateway Boundary Zone",
          detail: "Monitors continuous signal heartbeat within station perimeter.",
        },
        {
          value: "24/7",
          label: "Signal & Tamper Watch",
          detail: "Flags sudden telemetry drop or abnormal off-hours motion.",
        },
      ],
      workflowSteps: [
        {
          step: "01",
          title: "Continuous Signal Heartbeat",
          description:
            "Every collar checks in regularly with your 2G/4G or 5G Base Station across an 80–100 meter coverage radius.",
        },
        {
          step: "02",
          title: "Anomaly, Inactivity & Range Triggers",
          description:
            "Unscheduled rapid movement, flat inactivity from collar removal, or missing range heartbeats trigger alerts immediately.",
        },
        {
          step: "03",
          title: "Fast Owner Notification",
          description:
            "Farm owners and night watchmen get alert notices under 60 seconds so they can inspect the barn promptly.",
        },
      ],
      benefits: [
        {
          title: "Immediate Awareness at Night",
          description:
            "Get notified right away during vulnerable late-night hours if unusual barn commotion occurs.",
        },
        {
          title: "Collar Removal Detection",
          description:
            "Spot flat-line inactivity patterns quickly if a collar is removed or stops transmitting live cow motion.",
        },
        {
          title: "Practical Perimeter Visibility",
          description:
            "Know the moment a collared cow leaves your gateway coverage area so staff can act fast.",
        },
      ],
    },
  },
  ur: {
    "eating-time-monitoring": {
      slug: "eating-time-monitoring",
      badge: "AI ماڈیول 1",
      title: "کھانے کے وقت کی نگرانی",
      heroSubtitle:
        "دودھ کی پیداوار کم ہونے سے پہلے بھوک میں کمی کا پتہ لگانے کے لیے روزانہ خوراک کی مسلسل نگرانی۔",
      overview:
        "متوازن خوراک یقینی بنانے اور بیماری کی ابتدائی علامات کی بروقت تشخیص کے لیے چوبیس گھنٹے ہر جانور کے کھانے کے رویے کی نگرانی کرتا ہے۔ ہر گائے کے معمول کا ریکارڈ رکھ کر، خوراک میں معمولی کمی پر بھی فارم مینیجر کو فوری اطلاع مل جاتی ہے۔",
      image: "/images/EatingTime.webp",
      imageAlt:
        "چارہ کھاتی ہوئی گائے کاوجینک سمارٹ کالر اور لائیو فیڈنگ ڈیٹا کے ساتھ",
      keyPoints: [
        "بھوک میں تبدیلی کی نشاندہی کرتا ہے",
        "خوراک کے بہتر انتظام میں مدد دیتا ہے",
        "بیماری کی ابتدائی علامات کی شناخت کرتا ہے",
        "چارے کے ضیاع کو کم کرتا ہے",
      ],
      metrics: [
        {
          value: "24/7",
          label: "خوراک کا مسلسل ریکارڈ",
          detail: "دن اور رات ہر فیڈنگ سائیکل کی خودکار نگرانی۔",
        },
        {
          value: "< 60 سیکنڈ",
          label: "الرٹ کی رفتار",
          detail: "خوراک میں اچانک کمی پر فوری نوٹیفکیشن۔",
        },
        {
          value: "1 سال",
          label: "کالر بیٹری لائف",
          detail: "IP68 واٹر پروف ڈیزائن میں تبدیل کے قابل بیٹری۔",
        },
      ],
      workflowSteps: [
        {
          step: "01",
          title: "گردن کی حرکت کی درست سینسنگ",
          description:
            "کالر کے سینسرز کھانے کی حرکت کو آرام یا کھڑے رہنے کی حالت سے بالکل الگ پہچانتے ہیں۔",
        },
        {
          step: "02",
          title: "انفرادی معمول سے موازنہ",
          description:
            "کاوجینک AI ہر جانور کے روزانہ کھانے کے وقت کا اس کے گزشتہ معمول سے تجزیہ کرتا ہے۔",
        },
        {
          step: "03",
          title: "خوراک اور صحت کا فوری الرٹ",
          description:
            "خوراک میں کمی کی صورت میں موبائل پر الرٹ آتا ہے تاکہ بروقت معائنہ کیا جا سکے۔",
        },
      ],
      benefits: [
        {
          title: "بیماری کی بروقت تشخیص",
          description:
            "بخار یا دودھ میں کمی ظاہر ہونے سے 24 سے 48 گھنٹے پہلے ہی بھوک میں کمی سامنے آ جاتی ہے۔",
        },
        {
          title: "چارے کے ضیاع میں کمی",
          description:
            "اگر جانور خراب چارہ یا راشن چھوڑ رہے ہوں تو فوراً پتہ چلتا ہے اور راشن بہتر بنایا جا سکتا ہے۔",
        },
        {
          title: "دودھ کی مستحکم پیداوار",
          description:
            "خوراک کا متوازن وقت اعلیٰ پیداوار دینے والی گائیوں میں دودھ کے تسلسل کو برقرار رکھتا ہے۔",
        },
      ],
    },
    "rumination-time-monitoring": {
      slug: "rumination-time-monitoring",
      badge: "AI ماڈیول 2",
      title: "جگالی کے وقت کی نگرانی",
      heroSubtitle:
        "ہاضمے کی صحت کی حفاظت اور علاج کے بعد صحت یابی جانچنے کے لیے جگالی کا درست تجزیہ۔",
      overview:
        "آپ کے فارم کے ہر جانور کے ہاضمے کی صحت جانچنے کے لیے جگالی کرنے کے پیٹرن کی مسلسل نگرانی کرتا ہے۔ باقاعدہ جگالی صحت مند معدے کی نشانی ہے، جبکہ جگالی میں اچانک کمی ہاضمے یا میٹابولک مسائل کی ابتدائی وارننگ فراہم کرتی ہے۔",
      image: "/images/RuminationTime.webp",
      imageAlt:
        "آرام کرتی ہوئی گائے کاوجینک سمارٹ کالر اور فعال جگالی کے ڈیٹا کے ساتھ",
      keyPoints: [
        "میٹابولک مسائل کی ابتدائی علامت",
        "بیماری سے صحت یابی کو ٹریک کرتا ہے",
        "بچہ دینے کے بعد ہاضمے کے استحکام کی نگرانی",
        "ہاضمے کی متوازن کارکردگی یقینی بناتا ہے",
      ],
      metrics: [
        {
          value: "24/7",
          label: "جگالی کی نگرانی",
          detail: "آرام کے دوران جگالی کے ہر دورانیے کا مکمل ڈیٹا۔",
        },
        {
          value: "250",
          label: "کالر فی بیس اسٹیشن",
          detail: "درمیانے اور بڑے ڈیری فارمز کے لیے مرکزی کلاؤڈ سنک۔",
        },
        {
          value: "IP68",
          label: "واٹر پروف ہارڈویئر",
          detail: "پانی، نمی اور فارم کے سخت ماحول کے لیے مضبوط ڈیزائن۔",
        },
      ],
      workflowSteps: [
        {
          step: "01",
          title: "جگالی کی ردھم کی شناخت",
          description:
            "حساس موشن الگورتھم جگالی کے مخصوص دورانیے اور جبڑے کی حرکت کو درست طریقے سے ریکارڈ کرتے ہیں۔",
        },
        {
          step: "02",
          title: "ہاضمے کی صحت کا تجزیہ",
          description:
            "کلاؤڈ سسٹم روزانہ جگالی کے وقت کو آسان گراف اور صحت کے اسکور میں تبدیل کرتا ہے۔",
        },
        {
          step: "03",
          title: "بروقت طبی اور راشن اقدام",
          description:
            "جگالی کم ہونے کے الرٹ سے تیزابیت، کیٹوسس یا دباؤ پر فوراً قابو پایا جا سکتا ہے۔",
        },
      ],
      benefits: [
        {
          title: "بچہ دینے کے بعد خصوصی حفاظت",
          description:
            "نئی بیانی والی گائیوں کی قریبی نگرانی کریں جہاں میٹابولک خطرات سب سے زیادہ ہوتے ہیں۔",
        },
        {
          title: "صحت یابی کا درست ثبوت",
          description:
            "بیمار جانور کے علاج کے بعد جگالی کا وقت معمول پر آنا مکمل صحت یابی کو ظاہر کرتا ہے۔",
        },
        {
          title: "چارے اور فائبر کا بہتر توازن",
          description:
            "راشن میں فائبر یا ونڈے کی خرابی سے پورے ریوڑ کی جگالی پر اثر فوراً واضح ہو جاتا ہے۔",
        },
      ],
    },
    "activity-level-monitoring": {
      slug: "activity-level-monitoring",
      badge: "AI ماڈیول 3",
      title: "سرگرمی کی سطح کی نگرانی",
      heroSubtitle:
        "کمزوری، لنگڑے پن اور جانوروں کے آرام کا بروقت پتہ لگانے کے لیے حرکت و سرگرمی کا لائیو تجزیہ۔",
      overview:
        "ریوڑ میں غیر معمولی رویے کی نشاندہی کے لیے جانوروں کی حرکت اور روزمرہ سرگرمی کی سطح کی مسلسل نگرانی کرتا ہے۔ چاہے کوئی جانور غیر معمولی بے چینی دکھائے یا کمزوری کے باعث چلنا کم کر دے، آپ کو بروقت خبر مل جاتی ہے۔",
      image: "/images/ActivityLevels.webp",
      imageAlt:
        "کھیت میں چلتی ہوئی گائے کاوجینک کالر اور روزانہ قدموں کے گراف کے ساتھ",
      keyPoints: [
        "سرگرمی میں اچانک کمی کی نشاندہی کرتا ہے",
        "جانوروں میں کمزوری کی بروقت تشخیص",
        "روزمرہ کے رویے کے پیٹرن کو ٹریک کرتا ہے",
        "پورے ریوڑ کے تجزیے میں معاونت کرتا ہے",
      ],
      metrics: [
        {
          value: "ریئل ٹائم",
          label: "سرگرمی کا ڈیٹا",
          detail: "چلنے، کھڑے ہونے اور آرام کے وقت کی مسلسل پیمائش۔",
        },
        {
          value: "80–100m",
          label: "گیٹ وے رینج کوریج",
          detail: "2G/4G یا 5G بیس اسٹیشن کے ساتھ باڑے میں قابلِ اعتماد سنک۔",
        },
        {
          value: "24/7",
          label: "ریوڑ کے آرام کی نگرانی",
          detail: "گرمی کے دباؤ یا جگہ کی تکلیف کی بروقت نشاندہی۔",
        },
      ],
      workflowSteps: [
        {
          step: "01",
          title: "حرکت اور قدموں کا ریکارڈ",
          description:
            "کالر کے سینسرز جانور کے چلنے کی رفتار، کھڑے ہونے اور آرام کرنے کے اوقات ریکارڈ کرتے ہیں۔",
        },
        {
          step: "02",
          title: "معمول سے ہٹ کر تبدیلی کی شناخت",
          description:
            "روزانہ سرگرمی میں اچانک کمی یا اضافے کو ریوڑ اور انفرادی معیار کے مطابق پرکھا جاتا ہے۔",
        },
        {
          step: "03",
          title: "فوری معائنہ اور دیکھ بھال",
          description:
            "فارم کا عملہ الرٹ ملتے ہی کھر کی تکلیف، چوٹ یا کمزوری کے لیے جانور کا معائنہ کرتا ہے۔",
        },
      ],
      benefits: [
        {
          title: "کھر کے مسائل اور کمزوری کی جلد شناخت",
          description:
            "قدموں میں کمی ابتدائی مرحلے میں ہی تکلیف ظاہر کر دیتی ہے جس سے بروقت علاج ممکن ہوتا ہے۔",
        },
        {
          title: "شیڈ کے آرام کا جائزہ",
          description:
            "پنکھوں، بستر اور پانی کی دستیابی کے مطابق جانوروں کے آرام کا موازنہ کرنا آسان ہوتا ہے۔",
        },
        {
          title: "دستی نگرانی میں بڑی کمی",
          description:
            "سینکڑوں جانوروں پر نظر رکھنے کے بجائے عملہ صرف ان جانوروں پر توجہ دیتا ہے جنہیں ضرورت ہو۔",
        },
      ],
    },
    "heat-detection-for-insemination": {
      slug: "heat-detection-for-insemination",
      badge: "AI ماڈیول 4",
      title: "حمل ٹھہرانے کے لیے ہیٹ کی تشخیص",
      heroSubtitle:
        "95%+ درستگی کے ساتھ خودکار ہیٹ الرٹس — بشمول خاموش اور رات کے ہیٹ کیسز۔",
      overview:
        "رویے، بے چینی اور خوراک میں تبدیلیوں کے ذریعے چوبیس گھنٹے ہیٹ سائیکل کی خودکار تشخیص کرتا ہے۔ پاکستان کی مقامی اور ڈیری نسلوں کے مطابق تیار کردہ یہ نظام رات کے وقت یا خاموش ہیٹ کو بھی پکڑ لیتا ہے جو عام نظر سے رہ جاتی ہے۔",
      image: "/images/HeatDetection.webp",
      imageAlt:
        "کاوجینک کالر والی گائے کے ساتھ اسمارٹ فون پر ہیٹ ڈیٹیکشن الرٹ",
      keyPoints: [
        "نسل کشی کے بہترین وقت کی نشاندہی کرتا ہے",
        "خاموش ہیٹ کیسز کی تشخیص کرتا ہے",
        "ضائع ہونے والے ہیٹ سائیکل کم کرتا ہے",
        "افزائش نسل کی کارکردگی بہتر بناتا ہے",
      ],
      metrics: [
        {
          value: "95%+",
          label: "تشخیص کی درستگی",
          detail: "ڈیری ریوڑ میں ہیٹ کے رویے کی انتہائی درست پہچان۔",
        },
        {
          value: "24/7",
          label: "خاموش ہیٹ کی نگرانی",
          detail: "رات گئے اور ہلکی علامات والی ہیٹ کا خودکار ریکارڈ۔",
        },
        {
          value: "< 60 سیکنڈ",
          label: "فوری اطلاع",
          detail: "فارم مینیجر کے موبائل پر ہیٹ شروع ہوتے ہی الرٹ۔",
        },
      ],
      workflowSteps: [
        {
          step: "01",
          title: "بے چینی اور حرکت میں اضافے کی پہچان",
          description:
            "سینسرز ہیٹ کے دوران سرگرمی میں تیزی کے ساتھ کھانے اور جگالی میں عارضی کمی کو نوٹ کرتے ہیں۔",
        },
        {
          step: "02",
          title: "AI ہیٹ سائیکل کی تصدیق",
          description:
            "متعدد علامات کا ایک ساتھ تجزیہ کر کے غلط الرٹس کو روکا جاتا ہے اور اصل ہیٹ کی تصدیق ہوتی ہے۔",
        },
        {
          step: "03",
          title: "موبائل پر فوری ہیٹ الرٹ",
          description:
            "کسان کو واضح الرٹ ملتا ہے کہ کون سی گائے ہیٹ میں آئی ہے اور کب آغاز ہوا۔",
        },
      ],
      benefits: [
        {
          title: "رات کی ہیٹ کبھی ضائع نہ ہو",
          description:
            "زیادہ تر ہیٹ علامات رات کو ظاہر ہوتی ہیں جب عملہ موجود نہیں ہوتا؛ کاوجینک ہر گھنٹے نظر رکھتا ہے۔",
        },
        {
          title: "خاموش ہیٹ کی قابلِ اعتماد تشخیص",
          description:
            "کمزور علامات والی گائیوں کو اگلے 21 دن ضائع ہونے سے پہلے ہی کالر ڈیٹا سے پہچان لیا جاتا ہے۔",
        },
        {
          title: "کم وقت میں اگلا حمل",
          description:
            "کم ضائع ہونے والے سائیکلز گائیوں کے دوبارہ حاملہ ہونے کا وقفہ کم اور پیداوار زیادہ کرتے ہیں۔",
        },
      ],
    },
    "exact-insemination-time": {
      slug: "exact-insemination-time",
      badge: "AI ماڈیول 5",
      title: "حمل ٹھہرانے کا درست وقت",
      heroSubtitle:
        "پہلی ہی کوشش میں حمل ٹھہرنے کی کامیابی بڑھانے کے لیے ہیٹ کے آغاز سے درست ترین وقت کی نشاندہی۔",
      overview:
        "ہیٹ کی تشخیص کے آغاز اور سرگرمی کے گراف کی بنیاد پر مصنوعی نسل کشی کے بہترین وقت کے لیے درست رہنمائی فراہم کرتا ہے۔ صرف ہیٹ کا جاننا کافی نہیں — کاوجینک آپ کے ٹیکنیشن کو بالکل صحیح ونڈو دکھاتا ہے تاکہ کوئی موقع ضائع نہ ہو۔",
      image: "/images/InsaminationTime.webp",
      imageAlt:
        "کاوجینک ایپ پر مصنوعی نسل کشی کے بہترین وقت کی ونڈو کا مظاہرہ",
      keyPoints: [
        "حمل ٹھہرانے کا بہترین دورانیہ تجویز کرتا ہے",
        "حمل ٹھہرنے کی کامیابی کی شرح بڑھاتا ہے",
        "سیمن کے ضیاع اور لاگت کو کم کرتا ہے",
        "بریڈنگ کی منصوبہ بندی کو بہتر بناتا ہے",
      ],
      metrics: [
        {
          value: "درست ونڈو",
          label: "AI ٹائمنگ گائیڈ",
          detail: "ہیٹ کے عروج کے گراف کے مطابق حساب شدہ وقت۔",
        },
        {
          value: "95%+",
          label: "ہیٹ تشخیص کی بنیاد",
          detail: "مسلسل سرگرمی اور رویے کے ڈیٹا پر مبنی درست حساب۔",
        },
        {
          value: "کم ضیاع",
          label: "قیمتی سیمن کی بچت",
          detail: "درآمد شدہ اور سیکسڈ سیمن کے ضیاع میں نمایاں کمی۔",
        },
      ],
      workflowSteps: [
        {
          step: "01",
          title: "ہیٹ کے آغاز کا صحیح وقت",
          description:
            "سسٹم اس عین گھنٹے کو نوٹ کرتا ہے جب جانور کی سرگرمی ہیٹ کی حد کو عبور کرتی ہے۔",
        },
        {
          step: "02",
          title: "بہترین ونڈو کا حساب",
          description:
            "AI نظام اوولیشن کے حساب سے بہترین وقت بتاتا ہے تاکہ نسل کشی نہ بہت جلد ہو اور نہ تاخیر سے۔",
        },
        {
          step: "03",
          title: "منظم ٹیکنیشن شیڈول",
          description:
            "صبح اور شام کے AI راؤنڈز کی درست منصوبہ بندی ہر گائے کی تیاری کے مطابق کی جاتی ہے۔",
        },
      ],
      benefits: [
        {
          title: "پہلی کوشش میں کامیابی کی بلند شرح",
          description:
            "عین مناسب وقت پر ٹیکہ لگنے سے حمل ٹھہرنے کے امکانات نمایاں طور پر بڑھ جاتے ہیں۔",
        },
        {
          title: "قیمتی سیمن کی حفاظت",
          description:
            "اندازوں کے بجائے ڈیٹا پر فیصلہ کریں اور مہنگے درآمد شدہ سیمن اسٹراز کے ضیاع سے بچیں۔",
        },
        {
          title: "مربوط بریڈنگ کیلنڈر",
          description:
            "AI ٹیکنیشن کو اندازے لگانے کے بجائے روزانہ واضح وقت کے مطابق شیڈول ملتا ہے۔",
        },
      ],
    },
    "theft-and-boundary-alert": {
      slug: "theft-and-boundary-alert",
      badge: "AI ماڈیول 6",
      title: "چوری اور باؤنڈری الرٹ",
      heroSubtitle:
        "رات کے وقت غیر معمولی حرکت، کالر اتارنے یا رینج سے باہر جانے پر 60 سیکنڈ میں فوری الرٹس۔",
      overview:
        "غیر معمولی تیز حرکت، ممکنہ کالر اتارنے یا غیر فعال ہونے (کوئی ڈیٹا نہ ملنے)، اور بیس اسٹیشن کی رینج سے باہر جانے پر فارم مالکان کو فوری اطلاع دے کر بنیادی سیکیورٹی فراہم کرتا ہے۔ یہ نظام آپ کو چوبیس گھنٹے آگاہ رکھتا ہے، تاہم چوری سے مکمل تحفظ کی ضمانت نہیں دیتا۔",
      image: "/images/TheftAlert.webp",
      imageAlt:
        "رات کے وقت کسان کے فون پر فوری مویشی حرکت اور چوری کا الرٹ",
      keyPoints: [
        "60 سیکنڈ کے اندر فوری الرٹس",
        "کالر اتارنے یا غیر فعال ہونے (کوئی ڈیٹا نہ ہونے) کی اطلاع",
        "ڈیوائس رینج سے باہر جانے پر الرٹ بھیجتا ہے",
        "آگاہ رہنے میں مدد دیتا ہے، تاہم مکمل تحفظ کی ضمانت نہیں دیتا",
      ],
      metrics: [
        {
          value: "< 60 سیکنڈ",
          label: "تیز ترین الرٹ",
          detail: "غیر معمولی ہلچل یا سگنل منقطع ہونے پر فوری خبر۔",
        },
        {
          value: "80–100m",
          label: "باؤنڈری کوریج رینج",
          detail: "بیس اسٹیشن کے دائرہ کار میں مسلسل سگنل کی نگرانی۔",
        },
        {
          value: "24/7",
          label: "سگنل اور چھیڑ چھاڑ مانیٹر",
          detail: "ڈیٹا رکنے یا رات گئے تیز حرکت پر فوری الرٹ۔",
        },
      ],
      workflowSteps: [
        {
          step: "01",
          title: "مسلسل سگنل رابطہ",
          description:
            "ہر کالر 80 سے 100 میٹر رینج کے اندر آپ کے 2G/4G یا 5G بیس اسٹیشن سے مسلسل رابطے میں رہتا ہے۔",
        },
        {
          step: "02",
          title: "خطرے یا رینج سے باہر ہونے کی شناخت",
          description:
            "بے وقت تیز حرکت، کالر اتارنے سے ڈیٹا رکنا، یا رینج سے باہر نکلنا فوراً سسٹم میں پکڑا جاتا ہے۔",
        },
        {
          step: "03",
          title: "مالک کو فوری نوٹیفکیشن",
          description:
            "60 سیکنڈ کے اندر الرٹ موصول ہوتا ہے تاکہ فارم کا عملہ اور چوکیدار فوری معائنہ کر سکیں۔",
        },
      ],
      benefits: [
        {
          title: "رات کے اوقات میں فوری آگاہی",
          description:
            "رات کے حساس اوقات میں باڑے میں غیر معمولی ہلچل ہونے پر فوراً باخبر رہیں۔",
        },
        {
          title: "کالر اتارنے کی فوری اطلاع",
          description:
            "اگر کالر اتارا جائے یا ڈیوائس حرکت کا ڈیٹا بھیجنا بند کرے تو غیر فعالی کا پیٹرن فوراً الرٹ دیتا ہے۔",
        },
        {
          title: "باڑے کی حدود کی مؤثر نگرانی",
          description:
            "جیسے ہی کوئی جانور گیٹ وے کوریج سے باہر نکلے، عملہ فوراً موقع پر کارروائی کر سکتا ہے۔",
        },
      ],
    },
  },
};

