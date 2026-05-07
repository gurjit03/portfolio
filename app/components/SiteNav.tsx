"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { person } from "@/app/lib/content";
import styles from "./SiteNav.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
] as const;

export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className={styles.bar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          {person.name}
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          {links.map(({ href, label }) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                className={active ? styles.linkActive : styles.link}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
