import Image from "next/image";
import AboutPortrait from "src/assets/LDW/AboutPortrait.jpg";
import ContactLandscape from "src/assets/LDW/ContactLandscape.jpg";
import HeroLandscape from "src/assets/LDW/HeroLandscape.jpg";
import SchedulePortrait from "src/assets/LDW/SchedulePortrait.jpg";
import { Righteous } from "next/font/google";
import ProjectCard from "./ProjectCard";

const imageCollection = (
  <>
    <Image
      placeholder="blur"
      className="absolute top-0 right-[3%] h-[50%] w-auto rounded-3xl shadow-xl shadow-black"
      src={HeroLandscape}
      alt="Colour Picker"
    />
    <Image
      placeholder="blur"
      className="absolute bottom-0 left-[5%] h-[48%] w-auto rounded-3xl shadow-xl shadow-black"
      src={ContactLandscape}
      alt="Colour Picker"
    />
    <Image
      placeholder="blur"
      className="absolute top-[2%] left-0 h-[60%] w-auto rounded-3xl shadow-xl shadow-black"
      src={AboutPortrait}
      alt="Colour Picker"
    />
    <Image
      placeholder="blur"
      className="absolute bottom-[2%] right-0 h-[59%] w-auto rounded-3xl shadow-xl shadow-black"
      src={SchedulePortrait}
      alt="Colour Picker"
    />
  </>
);

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const titleDiv = (
  <div className={`${righteous.className} mx-auto mt-10 text-center`}>
    <div className="  flex flex-row overflow-clip rounded-lg border-2 border-current ">
      <h1 className=" rounded-none bg-white p-3 font-black leading-8  text-black sm:p-[0.95rem] sm:text-5xl">
        LONDON DATA WEEK
      </h1>
    </div>
  </div>
);
export default function LondonDataWeekCard() {
  return (
    <ProjectCard
      images={imageCollection}
      text="The offical website of London Data Week 2023 - a citywide festival about data where you can learn, create, discuss, and explore how to use data to shape our city for the better."
      subtitle="Data in the public, for the public"
      title={titleDiv}
      mainUrl="https://www.londondataweek.org/"
      repoUrl="https://github.com/GLD5000/GLD-London-Data-Week"
    />
  );
}
