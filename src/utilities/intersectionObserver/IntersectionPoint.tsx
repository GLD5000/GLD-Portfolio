"use client";

import { useEffect } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import { useIntersectionProviderContext } from "./IntersectionProvider";

export default function IntersectionPoint({
  identity,
  top = false,
}: {
  identity: string;
  top?: boolean;
}) {
  const { elementRef, onScreen } = useIntersectionObserver();
  const { setcurrentSection } = useIntersectionProviderContext();

  useEffect(() => {
    let run = true;
    const refElement = elementRef.current;
    if (run && onScreen && refElement != null) {
      const { id } = refElement;
      console.log("id:", id);
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
          id={identity}
          ref={elementRef}
          className="absolute top-0 left-0 h-[150px] w-[1px]"
        />
      ) : (
        <div
          id={`${identity}-bottom`}
          ref={elementRef}
          className="absolute bottom-0 left-0 h-[150px] w-[1px]"
        />
      )}
    </>
  );
}
