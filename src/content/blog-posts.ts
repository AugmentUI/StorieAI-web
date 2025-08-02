export type BlogPost = {
  title: string;
  slug: string;
  description: string;
  content: string;
};

export const posts: BlogPost[] = [
  {
    title: 'AI-generated Docs for React Components',
    slug: 'ai-docs-react',
    description:
      'Learn how StorieAI automates Storybook docs using AI for your React code.',
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
    title: 'Storybook vs MDX vs StorieAI',
    slug: 'storybook-vs-mdx',
    description:
      'Compare traditional MDX authoring in Storybook with AI-powered alternatives.',
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
    title: 'The Future of Design Systems',
    slug: 'design-systems-future',
    description:
      'Explore the role of AI in testing, documenting, and evolving modern design systems.',
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
