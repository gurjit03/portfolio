import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getPostBySlug, getPostSlugs } from "@/app/lib/posts";
import styles from "../blog.module.css";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post" };
  return {
    title: post.title,
    description: post.description || undefined,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className={styles.wrap}>
      <Link href="/blog" className={styles.back}>
        ← Blog
      </Link>
      <article>
        <h1 className={styles.pageTitle}>{post.title}</h1>
        {post.date ? (
          <p className={styles.pageLead}>
            <time dateTime={post.date}>{post.date}</time>
          </p>
        ) : null}
        {post.canonical ? (
          <p className={styles.canonical}>
            Originally published on{" "}
            <a href={post.canonical} rel="noopener noreferrer">
              Medium
            </a>
            .
          </p>
        ) : null}
        <div className={styles.prose}>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
