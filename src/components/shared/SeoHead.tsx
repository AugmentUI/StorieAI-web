import Head from 'next/head';

type SeoProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  canonical?: string;
};

const defaultMeta = {
  title: 'StorieAI – AI-powered Storybook Generator for React & Figma',
  description:
    'Generate comprehensive Storybook stories directly from your React component code with AI. StorieAI helps you build, test, and document UI faster, with seamless Figma and Storybook integration.',
  image: 'https://augmentui.ai/og-preview.png',
  url: 'https://augmentui.ai',
  canonical: 'https://augmentui.ai',
};

export default function SeoHead({
  title,
  description,
  image,
  url,
  canonical,
}: SeoProps) {
  const meta = {
    ...defaultMeta,
    title: title || defaultMeta.title,
    description: description || defaultMeta.description,
    image: image || defaultMeta.image,
    url: url || defaultMeta.url,
    canonical: canonical || defaultMeta.canonical,
  };

  return (
    <Head>
      {/* Primary */}
      <title>{meta.title}</title>
      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={meta.canonical} />

      {/* OpenGraph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={meta.url} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Head>
  );
}
