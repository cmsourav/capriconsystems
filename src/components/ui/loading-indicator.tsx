// src/components/ui/loading-indicator.tsx
'use client';

import { useUI } from '@/contexts/ui-context';
import { cn } from '@/lib/utils';

export function LoadingIndicator() {
  const { isLoaderVisible } = useUI();

  return (
    <div
      className={cn(
        'fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300',
        isLoaderVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
