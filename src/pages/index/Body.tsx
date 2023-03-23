import ColourmaticCard from "./body/ColourmaticCard";
import ContrastToolCard from "./body/ContrastToolCard";
import DevTipsCard from "./body/DevTipsCard";

export default function Body() {
  return (
    <main
      id="body-container"
      className=" grid w-screen  flex-grow pt-2  sm:justify-items-center  "
    >
      <section className="flex h-full w-body min-w-body max-w-body flex-col ">
        <div className=" w-body-sm min-w-body max-w-body grow sm:w-body">
          <ContrastToolCard />
          <DevTipsCard />
          <ColourmaticCard />
        </div>
      </section>
    </main>
  );
}
