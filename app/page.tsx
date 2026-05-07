import styles from "./page.module.css";

const talks = [
  {
    href: "https://www.youtube.com/live/kynP5XTRWls",
    title: "Framer Motion Deep Dive",
    meta: "Video · 1h 48m",
    description:
      "An in-depth technical session covering Framer Motion's animation model, performance considerations, and real-world implementation patterns.",
  },
];

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
      <header className={styles.header}>
        <p className={styles.eyebrow}>Gurjit Singh</p>
        <h1 className={styles.title}>
          Frontend engineer &amp; technical writer
        </h1>
        <p className={styles.subtitle}>
          Scalable, performant interfaces with React &amp; TypeScript — talks,
          articles, book reviews, and long-running open source.
        </p>
      </header>

      <section className={styles.section} aria-labelledby="intro-heading">
        <h2 id="intro-heading" className="sr-only">
          Introduction
        </h2>
        <p className={styles.greeting}>Hey — thanks for stopping by.</p>
        <p className={styles.lead}>
          I&apos;m <strong>Gurjit Singh</strong>, a frontend-heavy full-stack
          engineer at{" "}
          <a href="https://www.storyblok.com" rel="noopener noreferrer">
            Storyblok
          </a>{" "}
          in Berlin. I care about real-time, performant systems, clear technical
          writing, and sharing what I learn in depth — from Lighthouse scores to
          animation APIs.
        </p>
        <p className={styles.tldr}>
          <strong>TL;DR:</strong> I build production UIs, give long-form
          technical sessions (e.g. Framer Motion), write on performance and the
          web platform, review engineering books, and lead development on{" "}
          <a href="https://sttm.co" rel="noopener noreferrer">
            STTM
          </a>
          , a volunteer-run Gurbani streaming platform.
        </p>
      </section>

      <section className={styles.section} aria-labelledby="connect-heading">
        <h2 id="connect-heading" className={styles.sectionTitle}>
          Connect
        </h2>
        <p className={styles.lead}>
          <a href="https://github.com/gurjit03" rel="noopener noreferrer">
            GitHub
          </a>
          {" · "}
          <a
            href="https://www.linkedin.com/in/gurjit03"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          {" · "}
          <a href="https://medium.com/@gurjitmehta" rel="noopener noreferrer">
            Medium
          </a>
          {" · "}
          <a href="https://twitter.com/gurjitsmehta" rel="noopener noreferrer">
            @gurjitsmehta
          </a>
        </p>
      </section>

      <section className={styles.section} aria-labelledby="talks-heading">
        <h2 id="talks-heading" className={styles.sectionTitle}>
          Talks
        </h2>
        <ul className={styles.list}>
          {talks.map((item) => (
            <li key={item.href}>
              <a
                className={styles.itemTitle}
                href={item.href}
                rel="noopener noreferrer"
              >
                {item.title}
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
