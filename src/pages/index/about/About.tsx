import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import githubHeatMap from "src/assets/aboutme/GitHubHeatMap.jpg";
import inkscape from "src/assets/aboutme/inkscape.jpg";
import accessible from "src/assets/aboutme/accessible.jpg";

import useIntersectionObserver from "@/utilities/hooks/useIntersectionObserver";
import { useIntersectionProviderContext } from "@/utilities/contexts/IntersectionProvider";
import AboutCard from "./AboutCard";
import CardGrid from "./CardGrid";

export default function About() {
  const stackModal = useRef<HTMLDialogElement>(null);
  const accessModal = useRef<HTMLDialogElement>(null);

  const { elementRef, onScreen } = useIntersectionObserver();
  const { setcurrentSection, hasScrolled, setHasScrolled } =
    useIntersectionProviderContext();

  useEffect(() => {
    let run = true;
    const refElement = elementRef.current;
    if (run && onScreen && refElement != null) {
      setcurrentSection(refElement.id);

      if (!hasScrolled) setHasScrolled(true);
    }

    return () => {
      run = false;
    };
  }, [onScreen, elementRef, setcurrentSection, hasScrolled, setHasScrolled]);

  return (
    <section
      id="about"
      ref={elementRef}
      className="min-h-screen w-full snap-start bg-bg-var bg-mesh-gradient bg-right bg-no-repeat py-20 text-txt-main dark:bg-bg-var-dk dark:text-txt-main-dk"
    >
      <div className="mx-auto flex  h-full w-body-sm min-w-body max-w-body flex-col bg-transparent sm:w-body ">
        <div className=" grid w-body-sm min-w-body max-w-body grow gap-10  sm:w-body">
          <h1 className="mx-auto my-10 text-4xl lg:text-8xl">About Me</h1>
          <CardGrid />
        </div>
      </div>
    </section>
  );
}
