import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/app/lib/posts";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Blog",
  description: "Short notes and articles — also published on Medium.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className={styles.wrap}>
      <h1 className={styles.pageTitle}>Blog</h1>
      <p className={styles.pageLead}>
        Markdown posts mirrored here; longer versions often live on Medium.
      </p>
      <ul className={styles.list}>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className={styles.postLink}>
              {post.title}
            </Link>
            {post.date ? (
              <span className={styles.postMeta}>{post.date}</span>
            ) : null}
            {post.description ? (
              <p className={styles.postDescription}>{post.description}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </main>
  );
}
