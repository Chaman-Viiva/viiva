import type { Metadata } from "next";
import Link from "next/link";
import siteData from "@/data/site.json";
import blogPosts from "@/data/blog-posts.json";
import DummyImage from "@/components/DummyImage";

export const metadata: Metadata = {
  title: `Blog & Insights | ${siteData.company.name} — How We Deliver`,
  description: "Blogs, thought leadership, and perspectives from Viiva.",
};

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageSeed: string;
  content: string[];
};

const posts = Object.entries(blogPosts as Record<string, BlogPost>).map(
  ([slug, post]) => ({ ...post, slug })
);

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <main>
      <section className="section-padding pt-28">
        <div className="container-narrow">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            Blogs & Thought Leadership
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/80">
            How we deliver: insights, perspectives, and practical guidance from
            the Viiva team.
          </p>
          <Link href="/contact" className="btn-primary mt-8">
            Get in Touch
          </Link>
        </div>
      </section>

      <section className="section-padding border-t border-white/10 bg-[var(--viiva-black-soft)]">
        <div className="container-narrow">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group hover-lift flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[var(--viiva-gray)] transition hover:border-[var(--viiva-red)]/30"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <DummyImage
                    seed={post.imageSeed}
                    alt={post.title}
                    className="h-full w-full"
                    aspect="video"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--viiva-red)]">
                    Blog · {formatDate(post.date)}
                  </span>
                  <h2 className="mt-2 font-semibold text-white group-hover:text-[var(--viiva-red)] line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm text-white/70 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm text-[var(--viiva-red)]">
                    Read more
                    <span className="transition group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
