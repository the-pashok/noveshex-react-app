export type Screen = { src: string; title: string; sub: string };

export const SCREENS: Screen[] = [
  { src: "/shots/01-home-dark.jpg", title: "Today at a glance", sub: "Goals, weight, water and the next session — the whole day on one screen." },
  { src: "/shots/02-training-dark.jpg", title: "Today's session", sub: "Every exercise with sets and reps. Start it, move it, or skip it." },
  { src: "/shots/03-nutrition-dark.jpg", title: "Meals and macros", sub: "Choose a plan and the week fills itself in — schedule, macros, shopping list." },
  { src: "/shots/04-injections-dark.jpg", title: "Protocols", sub: "Schedule, site rotation and history for supervised courses." },
  { src: "/shots/05-menu-dark.jpg", title: "Everything, one tap away", sub: "All sections in a single list — no hunting through tabs." },
  { src: "/shots/06-subscription-dark.jpg", title: "Plans that fit", sub: "Month, quarter or year across Base, Pro and Max." },
  { src: "/shots/07-home-light.jpg", title: "Light mode", sub: "The same screen, brighter — every colour retuned, not just inverted." },
  { src: "/shots/08-vitamins-light.jpg", title: "Supplements", sub: "A basic minimum to start from, plus your own stack and intake times." },
  { src: "/shots/09-about-light.jpg", title: "Your profile", sub: "Goal, current data and body measurements in kg/cm or lb/ft." },
  { src: "/shots/10-nutrition-plan-light.jpg", title: "Your nutrition plan", sub: "Daily meals, macro targets and a seven-day shopping list." },
];

export const SECTIONS = ["Training", "Nutrition", "Vitamins", "Protocols", "Calculator", "Body & progress", "Analytics"];

export type Feature = { icon: "dumbbell" | "apple" | "pill" | "calendar" | "calculator" | "chart"; title: string; body: string };

export const FEATURES: Feature[] = [
  { icon: "dumbbell", title: "Training plans", body: "Ready-made programs or your own. Sets, reps and weekly volume are tracked as you go — start, move or skip a session." },
  { icon: "apple", title: "Nutrition & macros", body: "Pick a plan and the day fills itself in: meals, calories, protein, fats and carbs — plus a shopping list for the week." },
  { icon: "pill", title: "Vitamins & supplements", body: "A basic minimum stack to start from, your own supplements on top, and a morning-evening check that takes one tap." },
  { icon: "calendar", title: "Protocols & schedules", body: "For users who follow a supervised course: a schedule, site rotation and history — kept private and quietly in order." },
  { icon: "calculator", title: "Calculator", body: "Plan ahead and see the real cost per week and per month, with a plain read on risk, safety and effectiveness." },
  { icon: "chart", title: "Body & progress", body: "Weight, measurements and charts in kg/cm or lb/ft — the direction of travel, not just today's number." },
];

export type Period = "Month" | "Quarter" | "Year";

export const PERIOD_LABEL: Record<Period, string> = {
  Month: "per month",
  Quarter: "per 3 months",
  Year: "per year",
};

export type PlanFeature = { text: string; soon?: boolean };

export type Plan = {
  name: string;
  badge?: string;
  featured?: boolean;
  price: Record<Period, string>;
  note: Record<Period, string>;
  features: PlanFeature[];
};

export const PLANS: Plan[] = [
  {
    name: "Base",
    price: { Month: "4,99 $", Quarter: "12,99 $", Year: "39,99 $" },
    note: { Month: "", Quarter: "≈ 4,33 $ / mo.", Year: "≈ 3,33 $ / mo." },
    features: [
      { text: "Up to 3 custom training programs" },
      { text: "Up to 3 custom nutrition plans" },
      { text: "5 AI requests per month" },
      { text: "Basic progress analytics" },
    ],
  },
  {
    name: "Pro",
    badge: "RECOMMENDED",
    featured: true,
    price: { Month: "9,99 $", Quarter: "24,99 $", Year: "79,99 $" },
    note: { Month: "", Quarter: "≈ 8,33 $ / mo.", Year: "≈ 6,57 $ / mo." },
    features: [
      { text: "Up to 10 custom training programs" },
      { text: "Up to 10 custom nutrition plans" },
      { text: "20 AI requests per month" },
      { text: "AI assistance for training and nutrition" },
      { text: "Advanced progress analytics" },
      { text: "Food recognition from a photo", soon: true },
    ],
  },
  {
    name: "Max",
    price: { Month: "14,99 $", Quarter: "37,99 $", Year: "119,99 $" },
    note: { Month: "", Quarter: "≈ 12,66 $ / mo.", Year: "≈ 9,99 $ / mo." },
    features: [
      { text: "Unlimited custom programs and plans" },
      { text: "60 AI requests per month" },
      { text: "AI assistance for training and nutrition" },
      { text: "Advanced progress analytics" },
      { text: "Priority support" },
      { text: "Early access to new features" },
    ],
  },
];

export const FAQ: { q: string; a: string }[] = [
  { q: "Which platforms is Noveshex on?", a: "iOS and Android, built from a single React Native codebase — so both platforms get the same screens and the same update at the same time." },
  { q: "Do I need a subscription to use it?", a: "No. Day-to-day tracking — training, meals, water, weight and supplements — is free. Base, Pro and Max add custom programs, AI assistance and advanced analytics." },
  { q: "What languages does it speak?", a: "English, Русский and Українська, switchable at any time from Settings — along with kg/cm or lb/ft units." },
  { q: "What happens to my data?", a: "Usage analytics contain no health data and no personal content, and you can switch them off in Settings. Your plans, measurements and history stay yours." },
  { q: "Can I build my own programs and plans?", a: "Yes. Start from a ready-made template or create your own training program and nutrition plan from scratch — up to 3 on Base, 10 on Pro, unlimited on Max." },
  { q: "Does the app give medical advice?", a: "No. Noveshex is a planning and tracking tool. It records what you decide to do with a qualified professional — it never prescribes, recommends or encourages anything." },
];
