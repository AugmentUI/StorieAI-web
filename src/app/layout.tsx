import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "StorieAI – AI-powered Storybook generator for React",
    template: "%s | StorieAI",
  },
  description:
    "Generate comprehensive Storybook stories directly from your component code instantly.",
  metadataBase: new URL("https://www.augmentui.ai"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "StorieAI – AI-powered Storybook generator for React",
    description:
      "Generate Storybook stories directly from your component code using AI. StorieAI helps developers visualize, document, and track UI coverage effortlessly.",
    url: "https://www.augmentui.ai",
    siteName: "StorieAI",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "StorieAI – Storybook UI coverage demo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StorieAI – AI Powered Storybook for React",
    description:
      "AI-native docs and coverage for your component libraries. Say goodbye to boilerplate.",
    images: ["/og-preview.png"],
    creator: "@your_twitter_handle", // optional
  },
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon-180x180.png",
  },
  other: {
    "vs-marketplace":
      "https://marketplace.visualstudio.com/items?itemName=StorieAI.storieai",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://augmentui.ai/" />

        <meta
          property="og:image"
          content="https://augmentui.ai/og-preview.png"
        />
        <meta
          property="twitter:image"
          content="https://augmentui.ai/og-preview.png"
        />

        {/* Primary Meta Tags */}
        <title>StorieAI – AI-powered Storybook Generator for React</title>
        <meta
          name="title"
          content="StorieAI – AI-powered Storybook Generator for React"
        />
        <meta
          name="description"
          content="Generate comprehensive Storybook stories directly from your React component code with AI. StorieAI helps you build, test, and document UI faster, with seamless Storybook integration."
        />

        {/* OpenGraph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://augmentui.ai/" />
        <meta
          property="og:title"
          content="StorieAI – AI-powered Storybook Generator for React"
        />
        <meta
          property="og:description"
          content="Generate Storybook stories directly from your component code using AI. StorieAI helps developers visualize, document, and track UI coverage effortlessly."
        />
        <meta
          property="og:image"
          content="https://augmentui.ai/og-preview.png"
        />

        {/*Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://augmentui.ai/" />
        <meta
          property="twitter:title"
          content="StorieAI – AI-powered Storybook Generator for React"
        />
        <meta
          property="twitter:description"
          content="Generate comprehensive Storybook stories for your React components instantly."
        />
        <meta
          property="twitter:image"
          content="https://augmentui.ai/og-preview.png"
        />

        {/* Apple Touch Icons */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />

        {/* Favicons */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* Manifest and Meta */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "StorieAI",
              url: "https://www.augmentui.ai",
              image: "https://www.augmentui.ai/og-preview.png",
              description:
                "Generate comprehensive Storybook stories directly from your React component code with AI. StorieAI helps you build, test, and document UI faster, with seamless Storybook integration.",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              creator: {
                "@type": "Person",
                name: "Sajal Jain",
              },
              softwareVersion: "1.0.0",
              keywords: [
                "storybook",
                "react",
                "ai",
                "documentation",
                "component testing",
                "design systems",
              ],
              datePublished: "2025-08-01",
            }),
          }}
        />

        {/* Prefetching */}
        <link
          rel="preload"
          as="image"
          href="@/assets/parallax/hero-core.png"
          type="image/png"
        />
        <link
          rel="preload"
          as="video"
          href="@/assets/parallax/StorieAI-demo.mp4"
          type="video/mp4"
        />

        {/* federated identity */}
        <link
          rel="me"
          href="https://marketplace.visualstudio.com/items?itemName=StorieAI.storieai"
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
