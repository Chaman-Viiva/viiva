import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import siteData from "@/data/site.json";
import blogPosts from "@/data/blog-posts.json";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageSeed: string;
  content: string[];
};

const posts = blogPosts as Record<string, BlogPost>;

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Blog | Viiva" };
  return {
    title: `${post.title} | ${siteData.company.name} Blog`,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <main>
      <article className="section-padding pt-28">
        <div className="container-narrow">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-[var(--viiva-red)]"
          >
            ← All posts
          </Link>

          <header className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--viiva-red)]">
              Blog
            </p>
            <h1 className="mt-2 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-white/80">
              {post.excerpt}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/60">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>·</span>
              <span>{post.author}</span>
            </div>
          </header>

          <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-[var(--viiva-gray)]">
            <Image
              src={`https://picsum.photos/seed/${post.imageSeed}/960/540`}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 960px) 100vw, 960px"
              priority
            />
          </div>

          <div className="prose prose-invert mt-12 max-w-none">
            <div className="space-y-6 text-lg leading-relaxed text-white/90">
              {post.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <footer className="mt-16 border-t border-white/10 pt-10">
            <Link href="/blog" className="btn-outline">
              ← Back to all posts
            </Link>
            <Link href="/contact" className="btn-primary ml-4">
              Get in Touch
            </Link>
          </footer>
        </div>
      </article>
    </main>
  );
}
