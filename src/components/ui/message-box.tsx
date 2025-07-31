// src/components/ui/message-box.tsx
'use client';

import { useUI } from '@/contexts/ui-context';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { CheckCircle, XCircle } from 'lucide-react';

export function MessageBox() {
  const { message, hideMessage } = useUI();

  if (!message.text) {
    return null;
  }

  const isError = message.type === 'error';

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div
        className={cn(
          'w-full max-w-sm rounded-lg border bg-background p-6 shadow-xl animate-fade-in-blur mx-4 sm:mx-0',
          isError ? 'border-destructive/50' : 'border-primary/50'
        )}
      >
        <div className="flex flex-col items-center text-center">
          {isError ? (
            <XCircle className="w-12 h-12 text-destructive mb-4" />
          ) : (
            <CheckCircle className="w-12 h-12 text-primary mb-4" />
          )}
          <h3 className="text-lg font-semibold font-headline mb-2">
            {isError ? 'Error' : 'Success'}
          </h3>
          <p className="text-muted-foreground text-sm mb-6">{message.text}</p>
          <Button onClick={hideMessage} className="w-full">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
