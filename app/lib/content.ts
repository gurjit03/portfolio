export type Talk = {
  href: string;
  title: string;
  meta: string;
  description: string;
};

export type Article = {
  href: string;
  title: string;
  meta: string;
  description: string;
};

export type Book = {
  title: string;
  href?: string;
  note?: string;
};

export type OpenSourceHighlight = {
  href: string;
  title: string;
  meta: string;
  description: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type HomeHighlight = {
  title: string;
  href: string;
  meta: string;
};

export const person = {
  name: "Gurjit Singh",
  role: "Frontend engineer & technical writer",
  employer: {
    name: "Storyblok",
    href: "https://www.storyblok.com",
  },
  location: "Berlin",
} as const;

export const hero = {
  eyebrow: person.name,
  title: person.role,
  subtitle:
    "Scalable, performant interfaces with React & TypeScript — talks, articles, book reviews, and long-running open source.",
} as const;

/** Short line under hero on Home */
export const homeTagline =
  "I build production UIs, teach through long-form sessions and writing, review engineering books, and lead development on STTM.";

export const talks: Talk[] = [
  {
    href: "https://www.youtube.com/live/kynP5XTRWls",
    title: "Framer Motion Deep Dive",
    meta: "Video · 1h 48m",
    description:
      "An in-depth technical session covering Framer Motion's animation model, performance considerations, and real-world implementation patterns.",
  },
];

export const writing: Article[] = [
  {
    href: "https://medium.com/bitsrc/improving-google-page-speed-score-using-code-splitting-239d2a027e1b",
    title: "Improving Google Page Speed Score Using Code Splitting",
    meta: "Medium · BitSrc",
    description:
      "A practical guide to using code splitting to improve Lighthouse and Core Web Vitals scores — directly relevant to the web performance space.",
  },
  {
    href: "https://medium.com/@gurjitmehta/smooth-scroll-with-javascript-571283e9a3cd",
    title: "Smooth Scroll with JavaScript",
    meta: "Medium",
    description:
      "A focused tutorial on implementing smooth scroll behaviour natively in JavaScript without libraries.",
  },
];

export const books: Book[] = [
  {
    title: "Clean Code with TypeScript",
    href: "https://www.amazon.com/dp/B0F9YCZYKT",
  },
  {
    title: "Learn React with TypeScript",
    href: "https://www.amazon.com/dp/1836643179",
  },
  {
    title: "Production-grade React Applications",
    note: "Upcoming — performance, accessibility, testing",
  },
];

export const bookReviewsIntro =
  "I've served as a technical reviewer on published engineering books — validating frontend architecture, TypeScript patterns, and how examples hold up in real products.";

export const openSource: OpenSourceHighlight[] = [
  {
    href: "https://sttm.co",
    title: "STTM",
    meta: "sttm.co · 5+ years, leading development",
    description:
      "Large-scale open source Gurbani streaming platform serving 30k+ active users across the USA. A real production app maintained entirely by a volunteer community — not a demo or side sketch.",
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/gurjit03" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/gurjit03" },
  { label: "Medium", href: "https://medium.com/@gurjitmehta" },
  { label: "@gurjitsmehta", href: "https://twitter.com/gurjitsmehta" },
];

/** Footer includes socials plus project home (STTM). */
export const siteFooterLinks: SocialLink[] = [
  ...socialLinks,
  { label: "sttm.co", href: "https://sttm.co" },
];

export const homeHighlights: HomeHighlight[] = [
  {
    title: "Framer Motion Deep Dive",
    href: "/work#talks",
    meta: "Talk · 1h 48m · YouTube",
  },
  {
    title: "Writing on performance & the web platform",
    href: "/work#writing",
    meta: `${writing.length} articles · Medium`,
  },
  {
    title: "STTM — open source at scale",
    href: "/work#open-source",
    meta: "Leading development · 30k+ users",
  },
  {
    title: "Technical book reviews",
    href: "/work#book-reviews",
    meta: `${books.length} titles · including upcoming work`,
  },
];

export const aboutBio: string[] = [
  `I'm ${person.name}, a frontend-heavy full-stack engineer at ${person.employer.name} in ${person.location}. Most of my day-to-day work lives in React and TypeScript: shipping interfaces that stay fast under real data, coordinating with design and backend teams, and keeping complexity visible so it can be simplified.`,
  "Before and beyond the job, I'm drawn to teaching and clarity. That shows up as long-form technical sessions (like a full deep dive on Framer Motion), practical articles on Lighthouse and Core Web Vitals, and smaller tutorials on fundamentals such as smooth scrolling without dependencies.",
  "I've also been a technical reviewer on published engineering books — checking that architecture advice and TypeScript patterns match how teams actually build products. On the open source side, I've spent more than five years leading development on STTM (SikhiToTheMax), a volunteer-run Gurbani streaming platform with tens of thousands of active users. It's production software maintained by a community, which keeps me honest about trade-offs, reliability, and scope.",
];

export const aboutValues: { title: string; body: string }[] = [
  {
    title: "Performance users feel",
    body: "Metrics matter, but so does perceived speed and resilience. I care about code splitting, rendering cost, and animation performance — not as scores alone, but as part of a calm, trustworthy UI.",
  },
  {
    title: "Honest technical writing",
    body: "Articles and reviews should hold up when someone tries the approach in a real codebase. I aim for specifics: constraints, pitfalls, and when not to use a pattern.",
  },
  {
    title: "Animation with intent",
    body: "Motion should clarify hierarchy and feedback, not decorate. Framer Motion and the platform APIs are tools to express that intent without shipping unnecessary weight.",
  },
  {
    title: "Open source that ships",
    body: "STTM is a reminder that volunteer maintenance, accessibility, and scale are compatible when the scope is clear and the community is invested. I value long-horizon stewardship over one-off demos.",
  },
];

export const contactIntro =
  "The fastest way to reach me is LinkedIn or Twitter/X for short messages, or GitHub for code and collaboration. For book- or talk-related enquiries, mention that in your note so it stands out.";

export const siteColophon = {
  creditLabel: "Layout inspiration",
  creditHref: "https://inders.in/",
  fontsNote: "Fraunces & DM Sans via Google Fonts.",
} as const;
