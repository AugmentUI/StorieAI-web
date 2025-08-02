import type { Metadata } from 'next';

export const defaultMeta = {
  title: 'StorieAI – AI-powered Storybook Generator for React',
  description:
    'Generate comprehensive Storybook stories directly from your React component code with AI. StorieAI helps you build, test, and document UI faster, with seamless Storybook integration.',
  image: 'https://augmentui.ai/og-preview.png',
  url: 'https://augmentui.ai',
};

export function buildMetadata({
  title,
  description,
  slug,
}: {
  title?: string;
  description?: string;
  slug?: string;
}): Metadata {
  const metaTitle = title || defaultMeta.title;
  const metaDescription = description || defaultMeta.description;
  const fullUrl = slug ? `${defaultMeta.url}/blog/${slug}` : defaultMeta.url;

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: fullUrl,
      type: 'article',
      images: [defaultMeta.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [defaultMeta.image],
    },
    metadataBase: new URL(defaultMeta.url),
  };
}
