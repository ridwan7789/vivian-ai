import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxOptions {
  offset?: [string, string];
  speed?: number;
}

export function useParallax(options: ParallaxOptions = {}) {
  const { offset = ["start end", "end start"], speed = 0.3 } = options;
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });

  const y = useTransform(scrollYProgress, [0, 1], [`${speed * 100}px`, `${-speed * 100}px`]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.7, 1, 1, 0.7]);

  return { ref, y, scale, opacity, scrollYProgress };
}

export function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return { ref, opacity, y };
}
