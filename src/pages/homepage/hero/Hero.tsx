// "use client";

// import { useEffect } from "react";
// import { useIntersectionProviderContext } from "@/utilities/intersectionObserver/IntersectionProvider";
// import useIntersectionObserver from "@/utilities/intersectionObserver/useIntersectionObserver";
// import MoonSvg from "@/icons/MoonSvg";
// import SunSvg from "@/icons/SunSvg";
// import SvgButtonNew from "@/elements/SvgButtonNew";
// import { usePortfolioStore } from "@/zustand/zustand";
import IntersectionReference from "@/utilities/intersectionObserver/IntersectionReference";
import Stars from "./Stars";
import HeroCta from "./HeroCta";
import DarkModeBtn from "./DarkModeBtn";

// function getDarkToggleIcon(isDark: boolean) {
//   const wrapper = (
//     <div className=" text:inherit my-auto aspect-square h-6">
//       {isDark ? <SunSvg /> : <MoonSvg />}{" "}
//     </div>
//   );
//   return wrapper;
// }

export default function Hero() {
  // const { elementRef, onScreen } = useIntersectionObserver();
  // const { setcurrentSection } = useIntersectionProviderContext();
  // const colourTheme = usePortfolioStore((state) => state.darkTheme);
  // const toggleColourTheme = usePortfolioStore((state) => state.toggleDarkTheme);

  // useEffect(() => {
  //   let run = true;
  //   const refElement = elementRef.current;
  //   if (run && onScreen && refElement != null) {
  //     setcurrentSection(refElement.id);
  //   }

  //   return () => {
  //     run = false;
  //   };
  // }, [onScreen, elementRef, setcurrentSection]);

  return (
    <>
      <div className=" absolute top-0  z-[997] grid h-screen w-full bg-secondary-light dark:bg-secondary lg:min-h-[46.25rem] max-lg:landscape:h-[100vmax]">
        <Stars />
      </div>
      <div
        // id="hero"
        // ref={elementRef}
        className=" absolute top-0  z-[997] grid h-screen w-screen lg:min-h-[46.25rem] max-lg:landscape:h-[100vmax] "
      >
        <IntersectionReference identity="hero" />
        <div className="absolute top-0 left-0 w-full">
          <div className="mx-auto w-body-sm min-w-body max-w-body flex-col bg-transparent sm:w-body">
            <DarkModeBtn />
          </div>
        </div>

        <HeroCta />
      </div>
    </>
  );
}
