import { siteFooterLinks } from "@/app/lib/content";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.note}>
          Built with Next.js. Set in Fraunces &amp; DM Sans.
        </p>
        <ul className={styles.links}>
          {siteFooterLinks.map((s) => (
            <li key={s.href}>
              <a href={s.href} rel="noopener noreferrer">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
