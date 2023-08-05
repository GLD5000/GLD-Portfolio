import IntersectionReference from "@/utilities/intersectionObserver/IntersectionReference";
import CardGrid from "./CardGrid";

export default function About() {
  return (
    <section className="relative min-h-screen w-full bg-gradient-to-t  from-secondary-light via-bg-var to-bg-var py-20 dark:bg-gradient-to-t dark:from-secondary dark:via-bg-var-dk dark:to-bg-var-dk">
      <div className="mx-auto flex  h-full w-body-sm min-w-body max-w-body flex-col bg-transparent sm:w-body ">
        <div className=" grid w-body-sm min-w-body max-w-body grow gap-10  sm:w-body">
          <IntersectionReference identity="about" />
          <h1 className="mx-auto my-10 w-fit text-4xl lg:text-6xl">About Me</h1>
          <p className="m-0 mx-auto max-w-[60rem] text-center xs:text-justify">
            I am a self-taught software developer and former teacher. I
            discovered my passion for coding after learning VBA and JavaScript
            to build assessment data processors and dashboards for my work.
            Since then, I have found lots of creative ways to apply my skills
            and love building for the web. Below are some of the qualities I
            really value as a developer.
          </p>
          <CardGrid />
        </div>
      </div>
    </section>
  );
}
