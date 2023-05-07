import GldSvgHero from "@/icons/GldSvgHero";
import Stars from "./Stars";
import { useEffect } from "react";
import Link from "next/link";
import { useIntersectionProviderContext } from "@/utilities/contexts/IntersectionProvider";
import useIntersectionObserver from "@/utilities/hooks/useIntersectionObserver";

export default function Hero() {
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
    <div
      id="hero"
      ref={elementRef}
      className=" absolute top-0  z-[997] grid h-screen w-full  bg-black"
    >
      <Stars />
      <div className=" mx-auto grid h-full w-full items-center gap-8 lg:grid-cols-2 2xl:w-fit">
        <div className="mx-auto h-full w-screen max-w-[35rem] drop-shadow-hero-dk  lg:w-full lg:max-w-[50rem] ">
          <GldSvgHero />
        </div>
        <div className="grid h-fit gap-2">
          <p className=" mx-auto mb-0 w-fit text-xl lg:text-2xl xl:text-3xl">
            Hi, I am
          </p>

          <h1 className="mx-auto text-4xl font-bold xs:text-5xl xl:text-7xl 2xl:text-8xl">
            Gareth L Devlin
          </h1>
          <h2 className="mx-auto text-2xl font-bold xl:text-4xl">
            Web Developer
          </h2>
          <p className="my-0 mx-auto w-fit text-sm sm:text-base md:text-lg lg:text-xl">
            I am a React developer based near London, UK.
          </p>
          <p className="my-0 mx-auto w-fit text-sm sm:text-base md:text-lg lg:text-xl">
            I build innovative and accessible websites and apps.
          </p>
        </div>
      </div>
    </div>
  );
}
