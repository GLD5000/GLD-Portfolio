"use client";

import { useEffect } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import { useIntersectionProviderContext } from "./IntersectionProvider";

export default function IntersectionPoint({
  identity,
  top = false,
  offset = false,
}: {
  identity: string;
  top?: boolean;
  offset?: boolean;
}) {
  const { elementRef, onScreen } = useIntersectionObserver();
  const { setcurrentSection } = useIntersectionProviderContext();

  useEffect(() => {
    let run = true;
    const refElement = elementRef.current;
    if (run && onScreen && refElement != null) {
      const { id } = refElement;
      const sectionName = id.includes("-") ? id.split("-")[0] : id;
      setcurrentSection(sectionName);
    }

    return () => {
      run = false;
    };
  }, [onScreen, elementRef, setcurrentSection]);

  return (
    <>
      {top ? (
        <div
          id={offset ? `${identity}-offset` : identity}
          ref={elementRef}
          className={`absolute ${
            offset ? "top-40" : "top-0"
          } left-0 h-[50px] w-[1px] bg-white`}
        />
      ) : (
        <div
          id={`${identity}-bottom-${offset}`}
          ref={elementRef}
          className={`absolute ${
            offset ? "bottom-40" : "bottom-2"
          } left-0 h-[50px] w-[1px] bg-pink-400`}
        />
      )}
    </>
  );
}
