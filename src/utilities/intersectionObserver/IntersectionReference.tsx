"use client";

import { useEffect } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import { useIntersectionProviderContext } from "./IntersectionProvider";

export default function IntersectionReference({
  identity,
}: {
  identity: string;
}) {
  const { elementRef, onScreen } = useIntersectionObserver();
  const { setcurrentSection } = useIntersectionProviderContext();

  useEffect(() => {
    let run = true;
    const refElement = elementRef.current;
    if (run && onScreen && refElement != null) {
      setcurrentSection(refElement.id);
    }

    return () => {
      run = false;
    };
  }, [onScreen, elementRef, setcurrentSection]);

  return <div id={identity} ref={elementRef} />;
}
