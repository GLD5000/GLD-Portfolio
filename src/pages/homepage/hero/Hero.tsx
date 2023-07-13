import IntersectionReference from "@/utilities/intersectionObserver/IntersectionReference";
import Stars from "./Stars";
import HeroCta from "./HeroCta";
import DarkModeBtn from "./DarkModeBtn";

export default function Hero() {
  return (
    <>
      <div className=" absolute top-0  z-[997] grid h-screen w-full bg-secondary-light dark:bg-secondary lg:min-h-[46.25rem] max-lg:landscape:h-[100vmax]">
        <Stars />
      </div>
      <div className=" absolute top-0  z-[997] grid h-screen w-screen lg:min-h-[46.25rem] max-lg:landscape:h-[100vmax] ">
        <IntersectionReference identity="hero" bottom />
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
