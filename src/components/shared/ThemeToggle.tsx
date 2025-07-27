import { useTheme } from '@/lib/use-theme';
import { Moon, Sun } from 'lucide-react'; // optional icons

export function ThemeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-full border border-border bg-card text-foreground hover:bg-muted transition"
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
}
