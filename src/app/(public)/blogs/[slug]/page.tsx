import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import { posts } from '@/content/blog-posts';

async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    slug: `blogs/${post.slug}`,
  });
}

const window = new JSDOM('').window;
const purify = DOMPurify(window);

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  // If your `marked` returns a Promise, keep await; if it's sync, use marked.parse(...)
  const rawHtml = await marked(post.content); // or: marked.parse(post.content)
  const html = purify.sanitize(rawHtml);

  return (
    <main className="prose mx-auto px-4 py-12 dark:prose-invert">
      <h1>{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
