import ColourmaticCard from "./body/ColourmaticCard";
import ContrastToolCard from "./body/ContrastToolCard";
import DevTipsCard from "./body/DevTipsCard";
import Hero from "./Hero";

export default function Body() {
  return (
    <main
      id="body-container"
      className=" grid w-screen  flex-grow pt-2  sm:justify-items-center  "
    >
      <Hero />
      <section
        id="main-content"
        className="flex h-full w-body min-w-body max-w-body flex-col "
      >
        <div className=" mt-20 w-body-sm min-w-body max-w-body grow sm:w-body">
          <ContrastToolCard />
          <DevTipsCard />
          <ColourmaticCard />
        </div>
      </section>
    </main>
  );
}
