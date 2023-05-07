import ColourmaticCard from "./ColourTheoryCard";
import ContrastToolCard from "./ContrastLabCard";
import DevTipsCard from "./DevTipsCard";
import Hero from "../hero/Hero";
import LondonDataWeekCard from "./LondonDataWeekCard";
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
      className="relative grid w-screen  flex-grow sm:justify-items-center  "
    >
      <section
        id="main-content"
        className="mx-auto flex h-full w-body min-w-body max-w-body snap-start flex-col bg-transparent py-20 "
      >
        <h1 className="mx-auto mt-10 w-fit text-4xl lg:text-8xl">
          My Projects
        </h1>
        <div className="mt-10 grid w-full grow gap-10 lg:gap-32 ">
          <LondonDataWeekCard />
          <ContrastToolCard />
          <DevTipsCard />
          <ColourmaticCard />
        </div>
      </section>
    </main>
  );
}
