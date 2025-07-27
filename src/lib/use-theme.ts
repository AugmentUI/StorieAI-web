import { useEffect, useState } from 'react';

export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const stored = localStorage.getItem('theme');
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initial = stored || (system ? 'dark' : 'light');
    root.classList.toggle('dark', initial === 'dark');
    setIsDark(initial === 'dark');
  }, []);

  const toggle = () => {
    const root = window.document.documentElement;
    const newTheme = isDark ? 'light' : 'dark';

    root.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setIsDark(newTheme === 'dark');
  };

  return { isDark, toggle };
}
