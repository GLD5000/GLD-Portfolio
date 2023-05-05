import ColourmaticCard from "./body/ColourTheoryCard";
import ContrastToolCard from "./body/ContrastLabCard";
import DevTipsCard from "./body/DevTipsCard";
import Hero from "../hero/Hero";
import LondonDataWeekCard from "./body/LondonDataWeekCard";
import { useIntersectionProviderContext } from "@/utilities/contexts/IntersectionProvider";
import useIntersectionObserver from "@/utilities/hooks/useIntersectionObserver";
import { useEffect } from "react";

export default function Projects() {
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
    <main
      id="projects"
      ref={elementRef}
      className="relative grid w-screen flex-grow pt-2  sm:justify-items-center  "
    >
      <section
        id="main-content"
        className="flex h-full w-body min-w-body max-w-body flex-col bg-transparent "
      >
        <div className="mt-20 grid w-body-sm min-w-body max-w-body grow gap-10 sm:w-body">
          <LondonDataWeekCard />
          <ContrastToolCard />
          <DevTipsCard />
          <ColourmaticCard />
        </div>
      </section>
    </main>
  );
}
