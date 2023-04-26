import GldSvgHero from "@/icons/GldSvgHero";
import Stars from "./Stars";

export default function Hero() {
  return (
    <div className="absolute top-0 z-[997] grid  min-h-screen w-screen bg-bg dark:bg-bg-dk">
      <Stars />
      <div className="grid h-full w-full gap-8 bg-transparent">
        <div className="  zoom-in mx-auto h-auto w-[98vmin] skew-x-12 drop-shadow-hero dark:drop-shadow-hero-dk sm:w-[80vmin]">
          <GldSvgHero />
        </div>
        <div className="mx-auto grid  h-fit w-fit  translate-x-20 skew-x-12 bg-transparent drop-shadow-hero dark:drop-shadow-hero-dk">
          <div className="h-4 w-full rounded-b-full border-8 border-transparent border-x-white border-b-white bg-transparent"></div>
          <div className="mx-20 grid w-fit grid-cols-2 gap-2 overflow-clip rounded-b-3xl bg-white px-2 pb-2">
            <button className="h-40 w-full rounded-none rounded-bl-3xl bg-pink-400 p-4 text-black">
              About Me
            </button>
            <button className="h-40 w-full rounded-none rounded-br-3xl bg-pink-400 p-4 text-black">
              Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
