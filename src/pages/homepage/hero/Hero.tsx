import { useEffect } from "react";
import { useIntersectionProviderContext } from "@/utilities/contexts/IntersectionProvider";
import useIntersectionObserver from "@/utilities/hooks/useIntersectionObserver";
import MoonSvg from "@/icons/MoonSvg";
import SunSvg from "@/icons/SunSvg";
import SvgButtonNew from "@/elements/SvgButtonNew";
import Stars from "./Stars";
import HeroCta from "./HeroCta";

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
      <div className=" absolute top-0  z-[997] grid h-screen w-full bg-secondary-light dark:bg-secondary max-lg:landscape:h-[100vmax]">
        <Stars />
      </div>
      <div
        id="hero"
        ref={elementRef}
        className=" absolute top-0  z-[997] grid h-screen w-screen max-lg:landscape:h-[100vmax] "
      >
        <div className="absolute top-0 left-0 w-full">
          <div className="mx-auto w-body-sm min-w-body max-w-body flex-col bg-transparent sm:w-body">
            <SvgButtonNew
              showTextIn={undefined}
              clickFunction={toggleColourTheme}
              reverse={false}
              id="colour-theme-button-hero"
              name="Dark Mode Button"
              className="relative rounded text-xs"
              buttonClasses="w-fit h-fit overflow-visible flex-col flex text-current pb-4 pt-1 ml-auto mt-3 px-2"
              textElement={
                <span className="absolute bottom-0 w-fit rounded-t-none bg-transparent text-current ">
                  {colourTheme ? "Light" : "Dark"}
                </span>
              }
              svg={getDarkToggleIcon(colourTheme)}
            />
          </div>
        </div>

        <HeroCta />
      </div>
    </>
  );
}
