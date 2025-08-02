import Link from 'next/link';
import { posts } from '@/content/blog-posts';
import { Metadata } from 'next';

export default function BlogIndexPage() {
  return (
    <main className="prose mx-auto px-4 py-12 dark:prose-invert">
      <h1 className="mb-8 text-4xl font-bold">Latest from the Blog</h1>
      <ul className="space-y-10">
        {posts.map((post) => (
          <li key={post.slug}>
            <h2 className="text-2xl font-semibold">
              <Link
                href={`/blogs/${post.slug}`}
                className="text-primary hover:underline"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-muted-foreground">{post.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
