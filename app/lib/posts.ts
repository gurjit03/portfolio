import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  canonical: string;
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
};

function parseFrontmatter(data: Record<string, unknown>): PostFrontmatter {
  return {
    title: String(data.title ?? "Untitled"),
    description: String(data.description ?? ""),
    date: String(data.date ?? ""),
    canonical: String(data.canonical ?? ""),
  };
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  return {
    slug,
    ...parseFrontmatter(data as Record<string, unknown>),
    content,
  };
}

export function getAllPosts(): Omit<Post, "content">[] {
  return getPostSlugs()
    .map((slug) => {
      const post = getPostBySlug(slug);
      if (!post) return null;
      return {
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        canonical: post.canonical,
      };
    })
    .filter((p): p is Omit<Post, "content"> => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
