import { useEffect, useRef, useState } from "react";

export default function useIntersectionObserver(
  options: Partial<{
    root: null | Element;
    rootMargin: string;
    threshold: number | number[];
  }> = {
    root: null,
    rootMargin: "10% 0px -85% 0px",
    threshold: [0, 0.01, 0.3],
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
