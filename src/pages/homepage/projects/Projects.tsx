import IntersectionReference from "@/utilities/intersectionObserver/IntersectionReference";
import ColourmaticCard from "./ColourTheoryCard";
import ContrastToolCard from "./ContrastLabCard";
import DevTipsCard from "./DevTipsCard";
import LondonDataWeekCard from "./LondonDataWeekCard";
import DevBlogCard from "./DevBlogCard";

export default function Projects() {
  return (
    <main
      className="relative grid w-screen  flex-grow bg-gradient-to-t  from-bg-var to-secondary-light text-txt-main dark:bg-gradient-to-t dark:from-bg-var-dk  dark:to-secondary dark:text-txt-main-dk 
      sm:justify-items-center  "
    >
      <section className="mx-auto grid h-full w-body min-w-body max-w-body flex-col gap-10 bg-transparent py-20 ">
        <IntersectionReference identity="projects" />
        <h1 className="mx-auto my-10 w-fit text-4xl lg:text-6xl"> My Work</h1>

        <p className="m-0 mx-auto max-w-[60rem] text-center xs:text-justify">
          Coding allows me to bring my imagination to life. It is also a way to
          create enticing and interactive tools and products that others can
          enjoy. I make websites with a focus on user experience and
          accessibility. I also make tools for myself and other developers to
          help push web development forwards. See below to find out more about
          my projects, see them in action and view their source code on GitHub.
        </p>

        <div className="mt-10 grid w-full grow gap-10 lg:gap-24 ">
          <LondonDataWeekCard />
          <DevBlogCard />
          <ContrastToolCard />
          <DevTipsCard />
          <ColourmaticCard />
        </div>
      </section>
    </main>
  );
}
