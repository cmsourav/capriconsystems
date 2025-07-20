'use client';

import { useRef, type ElementType } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';

type AnimateOnScrollProps<T extends ElementType> = {
  children: React.ReactNode;
  className?: string;
  as?: T;
  delay?: number;
  threshold?: number;
} & React.ComponentPropsWithout<T>;

export function AnimateOnScroll<T extends ElementType = 'div'>({
  children,
  className,
  as,
  delay = 0,
  threshold = 0.1,
  ...props
}: AnimateOnScrollProps<T>) {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold });
  const isVisible = !!entry?.isIntersecting;

  const Component = as || 'div';

  return (
    <Component
      ref={ref}
      className={cn('transition-all duration-700', isVisible ? 'animate-fade-in-blur' : 'opacity-0 translate-y-4 blur-sm', className)}
      style={{
        transitionDelay: `${delay}s`,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
