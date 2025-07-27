import { useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  // Update resolved theme on mount or system change
  useEffect(() => {
    const root = window.document.documentElement;
    const stored = localStorage.getItem('theme') as ThemeMode | null;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const getPreferred = () => (mediaQuery.matches ? 'dark' : 'light');
    const appliedTheme =
      stored === 'light' || stored === 'dark' ? stored : getPreferred();

    root.classList.toggle('dark', appliedTheme === 'dark');
    setTheme(stored ?? 'system');
    setResolvedTheme(appliedTheme);

    if (!stored || stored === 'system') {
      const handleChange = (e: MediaQueryListEvent) => {
        const newResolved = e.matches ? 'dark' : 'light';
        root.classList.toggle('dark', newResolved === 'dark');
        setResolvedTheme(newResolved);
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  const setThemeMode = (newTheme: ThemeMode) => {
    const root = window.document.documentElement;
    if (newTheme === 'system') {
      localStorage.removeItem('theme');
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      root.classList.toggle('dark', prefersDark);
      setResolvedTheme(prefersDark ? 'dark' : 'light');
    } else {
      localStorage.setItem('theme', newTheme);
      root.classList.toggle('dark', newTheme === 'dark');
      setResolvedTheme(newTheme);
    }
    setTheme(newTheme);
  };

  return {
    theme,
    resolvedTheme,
    setTheme: setThemeMode,
    isDark: resolvedTheme === 'dark',
  };
}
