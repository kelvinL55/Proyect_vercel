'use client';

import { Button } from '@/components/ui/button';
import { 
  Sun, 
  Moon, 
  Monitor,
  Check
} from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

export function ThemeToggle() {
  const { theme, resolvedTheme, toggleTheme } = useTheme();

  const getIcon = () => {
    if (theme === 'system') return <Monitor className="w-4 h-4" />;
    return resolvedTheme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />;
  };

  const getLabel = () => {
    if (theme === 'system') return 'Sistema';
    return resolvedTheme === 'dark' ? 'Oscuro' : 'Claro';
  };

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="relative"
        >
          {getIcon()}
          <span className="sr-only">Cambiar tema</span>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-48">
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Tema actual</h4>
          <p className="text-sm text-muted-foreground">
            {getLabel()}
          </p>
          <div className="text-xs text-muted-foreground">
            Haz clic para cambiar entre claro, oscuro y sistema
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

