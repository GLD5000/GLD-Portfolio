import GldSvgHero from "@/icons/GldSvgHero";
import Stars from "./Stars";

export default function Hero() {
  return (
    <div className=" absolute top-0  z-[997] grid min-h-screen w-screen  bg-gradient-to-b from-bg-dk via-[98.5%]  to-transparent ">
      <Stars />
      <div className=" h-full w-full bg-transparent">
        <div className="zoom-in mx-auto grid h-fit w-fit gap-12 [transition-duration:1500ms] [transition-delay:100ms]">
          <div className="  mx-auto h-auto w-[98vmin]  drop-shadow-hero dark:drop-shadow-hero-dk sm:w-[80vmin]">
            <GldSvgHero />
          </div>
          <div className="zoom-in-slow mx-auto  grid h-fit  w-fit bg-transparent drop-shadow-hero dark:drop-shadow-hero-dk">
            <div className="h-4 w-full rounded-b-full border-8 border-transparent border-x-white border-b-white bg-transparent"></div>
            <div className="mx-20 grid w-fit grid-cols-2 gap-2 overflow-clip rounded-b-3xl bg-white px-2 pb-2 text-lg font-bold">
              <button className="h-24 w-full rounded-none rounded-bl-3xl bg-pink-400 p-4 text-black">
                About
              </button>
              <button className="h-24 w-full rounded-none rounded-br-3xl bg-pink-400 p-4 text-black">
                Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
