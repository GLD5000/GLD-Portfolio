import GldSvgHero from "@/icons/GldSvgHero";
import Stars from "./Stars";
import { useEffect } from "react";
import Link from "next/link";
import { useIntersectionProviderContext } from "@/utilities/contexts/IntersectionProvider";
import useIntersectionObserver from "@/utilities/hooks/useIntersectionObserver";
import SpanSplitter from "./SpanSplitter";
import StarSvg from "@/icons/StarSvg";
import MoonSvg from "@/icons/MoonSvg";
import SunSvg from "@/icons/SunSvg";
import SvgButtonNew from "@/elements/SvgButtonNew";
import Image from "next/image";
import gldLogo from "src/assets/hero/g22813.png";

function getDarkToggleIcon(isDark: boolean) {
  const wrapper = (
    <div className=" text:inherit my-auto aspect-square h-6">
      {isDark ? <SunSvg /> : <MoonSvg />}{" "}
    </div>
  );
  return wrapper;
}

export default function Hero({
  toggleColourTheme,
  colourTheme,
}: {
  toggleColourTheme: () => void;
  colourTheme: boolean;
}) {
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
      <div className=" absolute top-0  z-[997] grid h-screen w-full bg-purple-light dark:bg-purple"></div>
      <Stars />
      <div
        id="hero"
        ref={elementRef}
        className=" absolute top-0  z-[997] grid h-screen w-full "
      >
        <div className=" mx-auto grid h-full w-min items-center gap-8 lg:w-fit lg:grid-cols-2">
          <div className="m-auto h-fit w-screen max-w-[35rem] lg:h-auto lg:w-full lg:max-w-[50rem] ">
            {/* <GldSvgHero /> */}
            <div className="h-full w-full px-8">
              <Image
                loading="eager"
                placeholder="empty"
                src={gldLogo}
                className="m-auto h-auto w-full"
                alt={"GLD Logo"}
              />
            </div>
          </div>
          <div className="mx-auto grid h-fit w-max gap-2">
            {/* <p className=" ml:4 mr-auto mb-0 w-fit text-xl md:ml-16 lg:text-2xl  xl:text-3xl">
              <SpanSplitter word={"Hi, I am"} />
            </p> */}

            <div className="px:4 relative mx-auto w-full pt-4 pb-4  md:pt-10">
              <h1 className="mx-auto grid w-fit grid-cols-frAutoFr gap-2 text-3xl font-bold xs:text-4xl sm:gap-4 sm:text-4xl md:text-5xl xl:text-6xl">
                <span
                  key="g"
                  className="colour-in-g cursor-default hover:text-brand hover:[transition-duration:800ms] hover:[transition-delay:100ms]"
                >
                  Gareth
                </span>
                <span
                  key="l"
                  className="colour-in-l cursor-default hover:text-brand hover:[transition-duration:800ms] hover:[transition-delay:100ms]"
                >
                  L
                </span>
                <span
                  key="d"
                  className="colour-in-d cursor-default hover:text-brand hover:[transition-duration:800ms] hover:[transition-delay:100ms]"
                >
                  Devlin
                </span>
              </h1>
              <div className=" wobblingStar absolute right-2 top-0 aspect-square h-6  sm:h-8 md:h-10 lg:h-12">
                <StarSvg />
              </div>
            </div>
            <h2 className="mx-auto text-2xl font-bold sm:text-3xl xl:text-4xl">
              <SpanSplitter word={"Web Developer"} />
            </h2>
            <p className="my-0 mx-auto w-fit text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl">
              I am a React developer based near London, UK.
            </p>
            <p className="my-0 mx-auto w-fit text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl">
              I build innovative and accessible websites and apps.
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full">
          <div className="mx-auto w-body-sm min-w-body max-w-body flex-col bg-transparent sm:w-body">
            <SvgButtonNew
              showTextIn={undefined}
              clickFunction={toggleColourTheme}
              reverse={false}
              id="colour-theme-button-hero"
              name="Dark Mode Button"
              className="relative rounded text-xs"
              buttonClasses={`w-fit h-fit overflow-visible flex-col flex text-current pb-4 pt-1 ml-auto mt-3 px-2`}
              textElement={
                <span className="absolute bottom-0 w-fit rounded-t-none bg-transparent text-current ">
                  {colourTheme ? "Light" : "Dark"}
                </span>
              }
              svg={getDarkToggleIcon(colourTheme)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
