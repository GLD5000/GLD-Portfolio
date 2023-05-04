import Image from "next/image";
import AboutPortrait from "src/assets/LDW/AboutPortrait.jpg";
import ContactLandscape from "src/assets/LDW/ContactLandscape.jpg";
import HeroLandscape from "src/assets/LDW/HeroLandscape.jpg";
import SchedulePortrait from "src/assets/LDW/SchedulePortrait.jpg";
import { Righteous } from "@next/font/google";

const righteous = Righteous({ subsets: ["latin"], weight: "400" });

export default function LondonDataWeekCard() {
  return (
    <div className="mx-auto grid w-screen  max-w-body items-center self-center px-4 py-10 sm:w-full sm:px-8 lg:grid-cols-2">
      <div className="grid">
        <a
          className={`${righteous.className} mx-auto mt-10 text-center`}
          href="https://www.londondataweek.org/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="  flex flex-row overflow-clip rounded-lg border-2 border-current ">
            <h1 className=" rounded-none bg-white p-3 font-black leading-8  text-black sm:p-[0.95rem] sm:text-5xl">
              LONDON DATA WEEK
            </h1>
          </div>
        </a>

        <b className="mx-auto mt-2 mb-20 text-center text-lg sm:text-xl">
          Data in the public, for the public
        </b>
      </div>
      <div className="relative mx-auto flex aspect-[1/1] w-[80%] max-w-[35rem]">
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
      </div>
    </div>
  );
}
