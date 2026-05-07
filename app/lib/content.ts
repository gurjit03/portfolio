export type Item = {
  href?: string;
  title: string;
  meta: string;
  description?: string;
};

export const talks: Item[] = [
  {
    href: "https://www.youtube.com/live/kynP5XTRWls",
    title: "Framer Motion Deep Dive",
    meta: "Video · 1h 48m",
    description:
      "An in-depth technical session covering Framer Motion's animation model, performance considerations, and real-world implementation patterns.",
  },
];

export const writing: Item[] = [
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

export const books: Item[] = [
  {
    href: "https://www.amazon.com/dp/B0F9YCZYKT",
    title: "Clean Code with TypeScript",
    meta: "Technical reviewer",
  },
  {
    href: "https://www.amazon.com/dp/1836643179",
    title: "Learn React with TypeScript",
    meta: "Technical reviewer",
  },
  {
    title: "Production-grade React Applications",
    meta: "Upcoming — performance, accessibility, testing",
  },
];

export const openSource: Item[] = [
  {
    href: "https://sttm.co",
    title: "STTM",
    meta: "sttm.co · 5+ years, leading development",
    description:
      "Large-scale open source Gurbani streaming platform serving 30k+ active users across the USA. A real production app maintained entirely by a volunteer community.",
  },
];

export const social = {
  github: "https://github.com/gurjit03",
  linkedin: "https://www.linkedin.com/in/gurjit03",
  medium: "https://medium.com/@gurjitmehta",
  twitter: "https://twitter.com/gurjitsmehta",
};
