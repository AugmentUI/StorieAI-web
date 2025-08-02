import Link from "next/link";
//import { posts } from "./[slug]/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – StorieAI",
  description:
    "Insights, updates, and best practices from the team behind StorieAI – the AI-powered Storybook toolkit for developers and designers.",
};

// BlogPost type and sample blog data
type BlogPost = {
  title: string;
  slug: string;
  content: string;
  description: string;
};

const posts: BlogPost[] = [
  {
    title: "AI-generated Docs for React Components",
    slug: "ai-docs-react",
    description:
      "Learn how StorieAI automates Storybook docs using AI for your React code.",
    content: `## Automate Documentation with AI

StorieAI deeply understands your React component tree and generates Storybook stories from it.

No manual stories. Just smart defaults and intuitive controls.

---

### Why It Matters
- Saves 10–12 hours per week for devs
- Keeps docs in sync with code
- Integrates with Figma annotations`,
  },
  {
    title: "Storybook vs MDX vs StorieAI",
    slug: "storybook-vs-mdx",
    description:
      "Compare traditional MDX authoring in Storybook with AI-powered alternatives.",
    content: `## Authoring Experience

Writing MDX is powerful but tedious.

With StorieAI, you focus on writing components. Stories are derived intelligently.

---

### Tradeoffs
- MDX: control but manual effort
- StorieAI: fast, zero-config, visual
- Hybrid? Also supported.`,
  },
  {
    title: "The Future of Design Systems",
    slug: "design-systems-future",
    description:
      "Explore the role of AI in testing, documenting, and evolving modern design systems.",
    content: `## Design Systems at Scale

StorieAI helps you:
- Visualize variant coverage
- Detect broken props and usage
- Stay consistent with tokens

---

### What's Coming
- LLM-generated usage hints
- Auto-snapshots for regressions`,
  },
];

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-10">From the StorieAI Blog</h1>
        <section className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="border-b pb-6">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-muted-foreground mb-2">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-primary font-medium hover:underline"
              >
                Read more →
              </Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
