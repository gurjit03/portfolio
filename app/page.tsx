import type { Metadata } from "next";
import Link from "next/link";
import {
  hero,
  homeHighlights,
  homeTagline,
  person,
  socialLinks,
} from "@/app/lib/content";
import styles from "@/app/site.module.css";

export const metadata: Metadata = {
  title: {
    absolute: "Gurjit Singh — Frontend engineer & technical writer",
  },
};

const writing = [
  {
    href: "/blog/improving-google-page-speed-code-splitting",
    title: "Improving Google Page Speed Score Using Code Splitting",
    meta: "Blog · also on Medium (BitSrc)",
    description:
      "A practical guide to using code splitting to improve Lighthouse and Core Web Vitals scores — directly relevant to the web performance space.",
  },
  {
    href: "/blog/smooth-scroll-with-javascript",
    title: "Smooth Scroll with JavaScript",
    meta: "Blog · also on Medium",
    description:
      "A focused tutorial on implementing smooth scroll behaviour natively in JavaScript without libraries.",
  },
];

const books: {
  title: string;
  href?: string;
  note?: string;
}[] = [
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

export default function Home() {
  return (
    <main className={styles.wrap}>
      <header className={`${styles.header} ${styles.headerHome}`}>
        <p className={styles.eyebrow}>{hero.eyebrow}</p>
        <h1 className={styles.title}>{hero.title}</h1>
        <p className={styles.subtitle}>{hero.subtitle}</p>
      </header>

      <section className={styles.section} aria-labelledby="highlights-heading">
        <p id="highlights-heading" className={styles.greeting}>
          Hey — thanks for stopping by.
        </p>
        <p className={styles.lead}>{homeTagline}</p>
        <p className={styles.lead}>
          I&apos;m <strong>{person.name}</strong>, based in {person.location},{" "}
          working at{" "}
          <a href={person.employer.href} rel="noopener noreferrer">
            {person.employer.name}
          </a>
          . The detail lives on{" "}
          <Link href="/work">Work</Link> and <Link href="/about">About</Link>.
        </p>

        <h2 className={styles.sectionTitle}>Highlights</h2>
        <ul className={styles.highlights}>
          {homeHighlights.map((item) => (
            <li key={item.href} className={styles.highlightItem}>
              <Link href={item.href} className={styles.highlightLink}>
                {item.title}
              </Link>
              <span className={styles.highlightMeta}>{item.meta}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="connect-heading">
        <h2 id="connect-heading" className={styles.sectionTitle}>
          Connect
        </h2>
        <p className={styles.inlineLinks}>
          {socialLinks.map((s, i) => (
            <span key={s.href}>
              {i > 0 ? " · " : null}
              <a href={s.href} rel="noopener noreferrer">
                {s.label}
              </a>
              <span className={styles.meta}>{item.meta}</span>
              <p className={styles.itemDescription}>{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="writing-heading">
        <h2 id="writing-heading" className={styles.sectionTitle}>
          Writing
        </h2>
        <ul className={styles.list}>
          {writing.map((item) => (
            <li key={item.href}>
              <a
                className={styles.itemTitle}
                href={item.href}
                {...(item.href.startsWith("http")
                  ? { rel: "noopener noreferrer" as const }
                  : {})}
              >
                {item.title}
              </a>
              <span className={styles.meta}>{item.meta}</span>
              <p className={styles.itemDescription}>{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="books-heading">
        <h2 id="books-heading" className={styles.sectionTitle}>
          Technical book reviews
        </h2>
        <p className={styles.sectionIntro}>
          I&apos;ve served as a technical reviewer on published engineering
          books — validating frontend architecture, TypeScript patterns, and how
          examples hold up in real products.
        </p>
        <ul className={styles.list}>
          {books.map((book) => (
            <li key={book.title}>
              {book.href ? (
                <a
                  className={styles.itemTitle}
                  href={book.href}
                  rel="noopener noreferrer"
                >
                  {book.title}
                </a>
              ) : (
                <span className={styles.itemTitleStatic}>{book.title}</span>
              )}
              <span className={styles.meta}>
                {book.note ?? "Technical reviewer"}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="oss-heading">
        <h2 id="oss-heading" className={styles.sectionTitle}>
          Open source
        </h2>
        <ul className={styles.list}>
          <li>
            <a
              className={styles.itemTitle}
              href="https://sttm.co"
              rel="noopener noreferrer"
            >
              STTM
            </a>
            <span className={styles.meta}>
              sttm.co · 5+ years, leading development
            </span>
            <p className={styles.itemDescription}>
              Large-scale open source Gurbani streaming platform serving 30k+
              active users across the USA. A real production app maintained
              entirely by a volunteer community — not a demo or side sketch.
            </p>
          </li>
        </ul>
      </section>

    </main>
  );
}
