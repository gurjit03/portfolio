import type { Metadata } from "next";
import {
  bookReviewsIntro,
  books,
  openSource,
  talks,
  writing,
} from "@/app/lib/content";
import styles from "@/app/site.module.css";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <main className={styles.wrap}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Work</h1>
        <p className={styles.pageLead}>
          Talks, writing, open source, and technical book reviews — the longer
          form of what I share publicly.
        </p>
      </header>

      <section
        className={styles.section}
        id="talks"
        aria-labelledby="talks-heading"
      >
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

      <section
        className={styles.section}
        id="writing"
        aria-labelledby="writing-heading"
      >
        <h2 id="writing-heading" className={styles.sectionTitle}>
          Writing
        </h2>
        <ul className={styles.list}>
          {writing.map((item) => (
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

      <section
        className={styles.section}
        id="open-source"
        aria-labelledby="oss-heading"
      >
        <h2 id="oss-heading" className={styles.sectionTitle}>
          Open source
        </h2>
        <ul className={styles.list}>
          {openSource.map((item) => (
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

      <section
        className={styles.section}
        id="book-reviews"
        aria-labelledby="books-heading"
      >
        <h2 id="books-heading" className={styles.sectionTitle}>
          Technical book reviews
        </h2>
        <p className={styles.sectionIntro}>{bookReviewsIntro}</p>
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
    </main>
  );
}
