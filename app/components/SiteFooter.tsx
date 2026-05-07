import { social } from "../lib/content";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.note}>
          Built with Next.js. Set in Fraunces &amp; DM Sans. Layout inspired by{" "}
          <a href="https://inders.in/" rel="noopener noreferrer">
            inders.in
          </a>
          .
        </p>
        <ul className={styles.links}>
          <li>
            <a href={social.github} rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={social.linkedin} rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href={social.medium} rel="noopener noreferrer">
              Medium
            </a>
          </li>
          <li>
            <a href="https://sttm.co" rel="noopener noreferrer">
              sttm.co
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
