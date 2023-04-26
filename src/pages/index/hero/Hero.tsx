import GldSvgHero from "@/icons/GldSvgHero";
import Stars from "./Stars";

export default function Hero() {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-transparent">
      <Stars />
      <div className="h-full w-full bg-transparent">
        <div className="md:-rotate-8  zoom-in mx-auto aspect-square w-[98vmin] skew-x-12 drop-shadow-hero dark:drop-shadow-hero-dk sm:w-[80vmin]">
          <GldSvgHero />
        </div>
        <div className="grid">
          <button>About Me</button>
          <button>Projects</button>
        </div>
      </div>
    </div>
  );
}
