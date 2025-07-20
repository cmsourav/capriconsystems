// hooks/use-parallax.ts
import { useEffect, type RefObject } from 'react';

export function useParallax(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        // The 'transform' property on the element itself handles the parallax container setup.
        // We don't need to apply transforms here anymore as CSS handles it.
        // The JS is just here to ensure scroll events are captured if we need more complex logic later.
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);
}
