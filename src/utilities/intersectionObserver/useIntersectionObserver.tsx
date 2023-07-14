import { useEffect, useRef, useState } from "react";

export default function useIntersectionObserver(
  options: Partial<{
    root: null | Element;
    rootMargin: string;
    threshold: number | number[];
  }> = {
    root: null,
    rootMargin: "0% 0px -70% 0px",
    threshold: [0.05, 0.1, 0.15],
  }
) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [onScreen, setOnScreen] = useState(false);

  function callback(entries: IntersectionObserverEntry[]) {
    const [entry] = entries;
    setOnScreen(entry.isIntersecting);
  }

  useEffect(() => {
    let run = true;
    const { current } = elementRef;
    const observer = new IntersectionObserver(callback, options);
    if (run) {
      if (current !== null) observer.observe(current);
    }
    return () => {
      run = false;
      if (current !== null) observer.unobserve(current);
    };
  }, [elementRef, onScreen, options]);

  return { elementRef, onScreen };
}