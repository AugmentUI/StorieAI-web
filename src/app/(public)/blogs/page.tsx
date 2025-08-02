import Link from 'next/link';
import { posts } from './[slug]/page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog – StorieAI',
  description:
    'Insights, updates, and best practices from the team behind StorieAI – the AI-powered Storybook toolkit for developers and designers.',
};

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
