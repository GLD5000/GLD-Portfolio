import ColourmaticCard from "./body/ColourmaticCard";
import ContrastToolCard from "./body/ContrastToolCard";
import DevTipsCard from "./body/DevTipsCard";
import Hero from "./hero/Hero";

export default function Body() {
  return (
    <main
      id="body-container"
      className="relative grid w-screen  flex-grow pt-2  sm:justify-items-center  "
    >
      <div className="mb-20 h-screen w-screen" />

      <section
        id="main-content"
        className="flex h-full w-body min-w-body max-w-body flex-col bg-transparent "
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
