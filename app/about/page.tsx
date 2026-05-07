import type { Metadata } from "next";
import {
  aboutBio,
  aboutValues,
  contactIntro,
  person,
  socialLinks,
} from "@/app/lib/content";
import styles from "@/app/site.module.css";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className={styles.wrap}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>About</h1>
        <p className={styles.pageLead}>
          Background, what I optimize for, and how to get in touch.
        </p>
      </header>

      <section className={styles.section} aria-labelledby="bio-heading">
        <h2 id="bio-heading" className={styles.sectionTitle}>
          Bio
        </h2>
        {aboutBio.map((paragraph, i) => (
          <p key={`bio-${i}`} className={styles.lead}>
            {paragraph}
          </p>
        ))}
      </section>

      <section className={styles.section} aria-labelledby="values-heading">
        <h2 id="values-heading" className={styles.sectionTitle}>
          What I care about
        </h2>
        {aboutValues.map((v) => (
          <div key={v.title} className={styles.valueBlock}>
            <h3 className={styles.valueTitle}>{v.title}</h3>
            <p className={styles.valueBody}>{v.body}</p>
          </div>
        ))}
      </section>

      <section className={styles.section} aria-labelledby="contact-heading">
        <h2 id="contact-heading" className={styles.sectionTitle}>
          Contact
        </h2>
        <div className={styles.contactCard}>
          <p>{contactIntro}</p>
          <p className={styles.inlineLinks}>
            <strong>{person.name}</strong>
            <br />
            {socialLinks.map((s, i) => (
              <span key={s.href}>
                {i > 0 ? " · " : null}
                <a href={s.href} rel="noopener noreferrer">
                  {s.label}
                </a>
              </span>
            ))}
          </p>
        </div>
      </section>
    </main>
  );
}
