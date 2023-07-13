"use client";

import { useEffect } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import { useIntersectionProviderContext } from "./IntersectionProvider";

export default function IntersectionReference({
  identity,
  header,
  top = true,
}: {
  identity: string;
  header?: string;
  top?: boolean;
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

  return (
    <>
      {header ? (
        <h1
          id={identity}
          ref={elementRef}
          className="mx-auto my-10 w-fit scroll-m-32 text-4xl lg:text-6xl"
        >
          {header}
        </h1>
      ) : (
        <div
          id={identity}
          ref={elementRef}
          className={`absolute ${
            top ? "top-0" : "bottom-0"
          } left-0 h-[1px] w-[1px]`}
        />
      )}
    </>
  );
}
