import GldSvgHero from "@/icons/GldSvgHero";

export default function Hero() {
  return (
    <div className="-rotate-8 hover-transition focus-transition mx-auto h-[60rem] w-[60rem] skew-x-12 drop-shadow-hero [transition-duration:1500ms] [transition-delay:100ms] hover:-rotate-12 dark:drop-shadow-hero-dk ">
      <GldSvgHero />
    </div>
  );
}
