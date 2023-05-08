import GldSvgHero from "@/icons/GldSvgHero";
import Stars from "./Stars";
import { useEffect } from "react";
import Link from "next/link";
import { useIntersectionProviderContext } from "@/utilities/contexts/IntersectionProvider";
import useIntersectionObserver from "@/utilities/hooks/useIntersectionObserver";
import SpanSplitter from "./SpanSplitter";
import StarSvg from "@/icons/StarSvg";

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
    <>
      <div className=" absolute top-0  z-[997] grid h-screen w-full bg-gradient-to-t from-black to-purple"></div>
      <Stars />
      <div
        id="hero"
        ref={elementRef}
        className=" absolute top-0  z-[997] grid h-screen w-full "
      >
        <div className=" mx-auto grid h-full w-min items-center gap-8 lg:w-fit lg:grid-cols-2">
          <div className="mx-auto h-full w-screen max-w-[35rem] drop-shadow-hero-dk lg:h-auto lg:w-full lg:max-w-[50rem] ">
            <GldSvgHero />
          </div>
          <div className="mx-auto grid h-fit w-max gap-2">
            {/* <p className=" ml:4 mr-auto mb-0 w-fit text-xl md:ml-16 lg:text-2xl  xl:text-3xl">
              <SpanSplitter word={"Hi, I am"} />
            </p> */}

            <div className="px:4 relative mx-auto w-fit max-w-[90%] pt-4 pb-4 md:px-16  md:pt-10">
              <h1 className="mx-auto grid grid-cols-frAutoFr gap-2 text-3xl font-bold xs:text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl">
                <span
                  key="g"
                  className="colour-in-g cursor-default [transition-duration:800ms] [transition-delay:100ms] hover:text-brand"
                >
                  Gareth{" "}
                </span>
                <span
                  key="l"
                  className="colour-in-l cursor-default [transition-duration:800ms] [transition-delay:100ms] hover:text-brand"
                >
                  L{" "}
                </span>
                <span
                  key="d"
                  className="colour-in-d cursor-default [transition-duration:800ms] [transition-delay:100ms] hover:text-brand"
                >
                  Devlin
                </span>
              </h1>
              <div className=" wobblingStar absolute right-0 top-0 aspect-square h-6  sm:h-8 md:h-10 lg:h-12 xl:h-14">
                <StarSvg />
              </div>
            </div>
            <h2 className="mx-auto text-2xl font-bold sm:text-3xl xl:text-4xl">
              <SpanSplitter word={"Web Developer"} />
            </h2>
            <p className="my-0 mx-auto w-fit text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl">
              <SpanSplitter
                word={"I am a React developer based near London, UK."}
              />
            </p>
            <p className="my-0 mx-auto w-fit text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl">
              <SpanSplitter
                word={"I build innovative and accessible websites and apps."}
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
