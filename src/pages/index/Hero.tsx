import GldSvgHero from "@/icons/GldSvgHero";

export default function Hero() {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="md:-rotate-8 hover-transition focus-transition mx-auto aspect-square w-[98vmin] skew-x-12 drop-shadow-hero [transition-duration:1500ms] [transition-delay:100ms] hover:-rotate-12 dark:drop-shadow-hero-dk sm:w-[80vmin] ">
        <GldSvgHero />
      </div>
      <div className="grid">
        <button>About Me</button>
        <button>Projects</button>
      </div>
    </div>
  );
}
