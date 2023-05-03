import ColourmaticCard from "./body/ColourTheoryCard";
import ContrastToolCard from "./body/ContrastLabCard";
import DevTipsCard from "./body/DevTipsCard";
import Hero from "../hero/Hero";

export default function Body() {
  return (
    <main
      id="body-container"
      className="relative grid w-screen flex-grow pt-2  sm:justify-items-center  "
    >
      <section
        id="main-content"
        className="flex h-full w-body min-w-body max-w-body flex-col bg-transparent "
      >
        <div className="mt-20 grid w-body-sm min-w-body max-w-body grow gap-10 sm:w-body">
          <ContrastToolCard />
          <DevTipsCard />
          <ColourmaticCard />
        </div>
      </section>
    </main>
  );
}
