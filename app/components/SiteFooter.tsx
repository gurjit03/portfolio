import { siteColophon, siteFooterLinks } from "@/app/lib/content";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          Personal site — {siteColophon.fontsNote}{" "}
          <a href={siteColophon.creditHref} rel="noopener noreferrer">
            {siteColophon.creditLabel}
          </a>
          .
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
