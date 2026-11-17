/**
 * Single source of truth for portfolio content.
 * Components only handle presentation — edit copy, links and data here.
 */

export const profile = {
  name: "Rohit Aggarwal",
  firstName: "Rohit",
  lastName: "Aggarwal",
  role: "Senior Software Engineer",
  location: "Delhi, India",
  timezone: "Asia/Kolkata",
  email: "rohitaggarwal376@gmail.com",
  phone: "+91 8588 0871 66",
  phoneHref: "tel:+918588087166",
  resume:
    "https://drive.google.com/file/d/1SoXpH3Pdn6mIDV95lGXipXNRbmh3r4aG/view?usp=sharing",
  github: "https://github.com/iamrohitagg",
  linkedin: "https://www.linkedin.com/in/rohit-aggarwalm",
  careerStart: new Date(2020, 9, 1), // Oct 2020
  status: "Open to new opportunities",
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
] as const;

export type Experience = {
  position: string;
  company: string;
  start: Date;
  end: Date | null; // null = present
  summary: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    position: "Senior Software Engineer",
    company: "Classic Informatics Pvt. Ltd.",
    start: new Date(2024, 9, 1),
    end: null,
    summary:
      "Leading development of mobile applications using React Native. Mentoring junior developers and implementing best practices for code quality and performance optimization.",
    highlights: [
      "Lead React Native development across client mobile apps",
      "Mentor junior developers through reviews and pairing",
      "Set code-quality standards and drive performance work",
    ],
  },
  {
    position: "Software Engineer",
    company: "Classic Informatics Pvt. Ltd.",
    start: new Date(2020, 9, 1),
    end: new Date(2024, 9, 1),
    summary:
      "Built responsive cross platform mobile applications using React Native. Collaborated with design team to create intuitive user interfaces.",
    highlights: [
      "Shipped cross-platform apps to production on React Native",
      "Worked hand-in-hand with design on interface and interaction",
      "Took features from design hand-off through to release",
    ],
  },
];

export const coreStack = ["TypeScript", "React Native", "React", "Next.js"];

export const skillGroups = [
  {
    title: "Mobile",
    note: "Where most of my production work lives",
    items: [
      "React Native",
      "iOS & Android delivery",
      "Offline-first data",
      "Push & real-time notifications",
      "Audio playback",
    ],
  },
  {
    title: "Web",
    note: "Fast, accessible front-ends",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    title: "Full-stack",
    note: "Owning features end to end",
    items: ["Node.js", "REST APIs", "State management", "App store releases"],
  },
  {
    title: "Practice",
    note: "How I work with a team",
    items: ["Mentoring", "Code review", "Performance optimization", "Design collaboration"],
  },
];

export const principles = [
  {
    title: "Performance is a feature",
    body: "Apps should feel instant on a mid-range Android phone, not just on a developer's flagship.",
  },
  {
    title: "Code a teammate can own",
    body: "Clear structure and sensible conventions, so the next engineer moves faster, not slower.",
  },
  {
    title: "Design is a partner",
    body: "The best interfaces come from engineers and designers solving the same problem together.",
  },
];

export type Screenshot = { src: string; alt: string; width: number; height: number };

export type Project = {
  slug: "student-portal" | "gaatha";
  title: string;
  publishedAs?: string;
  kicker: string;
  icon: string;
  description: string;
  highlights: string[];
  technologies: string[];
  platform: string;
  results: { value: string; label: string }[];
  screenshots: Screenshot[];
  liveLink?: string;
  liveLabel?: string;
  /** Leave undefined for private / client codebases. */
  githubLink?: string;
};

// Results and screenshots come from each app's public Google Play listing (Nov 2026).
export const projects: Project[] = [
  {
    slug: "gaatha",
    title: "Gaatha",
    kicker: "Audio stories, audiobooks & poetry in Hindi",
    icon: "/projects/gaatha-icon.webp",
    description:
      "An audio-based storytelling platform featuring content in multiple languages, with personalized recommendations and offline listening capabilities.",
    highlights: [
      "Story library spanning original series, classics and poetry",
      "Personalised recommendations from listening history",
      "Offline listening with unlimited downloads",
    ],
    technologies: ["React Native"],
    platform: "Android",
    results: [
      { value: "10K+", label: "Installs on Google Play" },
      { value: "4.3", label: "Average rating from 112 reviews" },
    ],
    screenshots: [
      { src: "/projects/gaatha-anywhere.webp", alt: "Gaatha store screenshot: listen anytime, anywhere, showing several app screens", width: 600, height: 1067 },
      { src: "/projects/gaatha-home.webp", alt: "Gaatha store screenshot: featured stories on the home screen", width: 600, height: 1067 },
      { src: "/projects/gaatha-player.webp", alt: "Gaatha store screenshot: unlimited downloads and the audio player", width: 600, height: 1067 },
      { src: "/projects/gaatha-writers.webp", alt: "Gaatha store screenshot: stories by famous writers", width: 600, height: 1067 },
      { src: "/projects/gaatha-poetry.webp", alt: "Gaatha store screenshot: famous Hindi poetry collections", width: 600, height: 1067 },
    ],
    liveLink:
      "https://play.google.com/store/apps/details?id=com.gaathaonair.gaatha&hl=en_IN",
    liveLabel: "View on Google Play",
  },
  {
    slug: "student-portal",
    title: "Student Portal",
    publishedAs: "ESIM Campus Solution",
    kicker: "Campus companion app for students",
    icon: "/projects/student-portal-icon.webp",
    description:
      "A comprehensive platform for students to access course materials, submit assignments, and track their progress. Includes real-time notifications.",
    highlights: [
      "Course materials and progress tracking in a single app",
      "Assignment submission straight from the phone",
      "Real-time notifications for deadlines and announcements",
    ],
    technologies: ["React Native"],
    platform: "Android",
    results: [
      { value: "10K+", label: "Installs on Google Play" },
      { value: "133", label: "Reviews from students" },
    ],
    screenshots: [
      { src: "/projects/student-portal-login.webp", alt: "Student Portal sign-in screen", width: 186, height: 392 },
      { src: "/projects/student-portal-splash.webp", alt: "ESIM Campus Solution launch screen", width: 186, height: 392 },
    ],
    liveLink:
      "https://play.google.com/store/apps/details?id=com.mkt.studentportal&hl=en",
    liveLabel: "View on Google Play",
  },
];

/** Whole years since a date, e.g. 6 for Oct 2020 → Nov 2026. */
export function yearsSince(date: Date, now = new Date()) {
  let years = now.getFullYear() - date.getFullYear();
  if (now.getMonth() < date.getMonth()) years -= 1;
  return years;
}

export function formatMonth(date: Date) {
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function formatDuration(start: Date, end: Date | null) {
  const to = end ?? new Date();
  const months =
    (to.getFullYear() - start.getFullYear()) * 12 + (to.getMonth() - start.getMonth());
  const y = Math.floor(months / 12);
  const m = months % 12;
  const parts = [];
  if (y) parts.push(`${y} yr${y > 1 ? "s" : ""}`);
  if (m) parts.push(`${m} mo`);
  return parts.join(" ") || "< 1 mo";
}
