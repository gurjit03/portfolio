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

export default function HomePage() {
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
            </span>
          ))}
        </p>
      </section>
    </main>
  );
}
