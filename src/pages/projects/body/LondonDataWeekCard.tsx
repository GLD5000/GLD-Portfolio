import Image from "next/image";
import AboutLandscape from "src/assets/LDW/AboutLandscape.jpg";
import AboutPortrait from "src/assets/LDW/AboutPortrait.jpg";
import ContactLandscape from "src/assets/LDW/ContactLandscape.jpg";
import ContactPortrait from "src/assets/LDW/ContactPortrait.jpg";
import HeroLandscape from "src/assets/LDW/HeroLandscape.jpg";
import HeroPortrait from "src/assets/LDW/HeroPortrait.jpg";
import ScheduleLandscape from "src/assets/LDW/ScheduleLandscape.jpg";
import SchedulePortrait from "src/assets/LDW/SchedulePortrait.jpg";

export default function LondonDataWeekCard() {
  return (
    <div className="mx-auto grid w-screen  max-w-body items-center self-center px-4 py-10 sm:w-full sm:px-8 lg:grid-cols-2">
      <div className="grid">
        <a
          className=" mx-auto mt-10"
          href="https://www.londondataweek.org/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="  flex flex-row overflow-clip rounded-lg border-2 border-current ">
            <h1 className=" rounded-none bg-white p-3 font-black  leading-6 text-black sm:p-[0.95rem] sm:text-5xl">
              London Data Week
            </h1>
          </div>
        </a>

        <b className="mx-auto mt-2 mb-20 text-center text-lg sm:text-xl">
          Data in the public, for the public
        </b>
      </div>
      <div className="relative mx-auto flex aspect-[1/1] w-[80%] max-w-[35rem]">
        {/* <Image
          placeholder="blur"
          className="absolute bottom-0 left-0 h-[45%] w-auto rounded-md shadow-xl shadow-black"
          src={AboutLandscape}
          alt="Colour Picker"
        /> */}
        {/* <Image placeholder="blur"
          className="absolute rounded-md bottom-0 left-0 h-[45%] w-auto shadow-xl shadow-black"
          src={ContactPortrait}
          alt="Colour Picker"
        /> */}
        <Image
          placeholder="blur"
          className="absolute top-0 right-[3%] h-[50%] w-auto rounded-3xl shadow-xl shadow-black"
          src={HeroLandscape}
          alt="Colour Picker"
        />
        {/* <Image
            placeholder="blur"
            className="absolute top-[47%] right-0 h-[45%] w-auto rounded-3xl shadow-xl shadow-black"
            src={ScheduleLandscape}
            alt="Colour Picker"
          /> */}
        <Image
          placeholder="blur"
          className="absolute bottom-0 left-[5%] h-[48%] w-auto rounded-md shadow-xl shadow-black"
          src={ContactLandscape}
          alt="Colour Picker"
        />
        <Image
          placeholder="blur"
          className="absolute top-0 left-0 h-[57%] w-auto rounded-md shadow-xl shadow-black"
          src={AboutPortrait}
          alt="Colour Picker"
        />
        {/* <Image
          placeholder="blur"
          className="absolute top-[7%] left-[17%] h-[45%] w-auto rounded-3xl shadow-xl shadow-black"
          src={HeroPortrait}
          alt="Colour Picker"
        /> */}
        <Image
          placeholder="blur"
          className="absolute bottom-0 right-0 h-[57%] w-auto rounded-3xl shadow-xl shadow-black"
          src={SchedulePortrait}
          alt="Colour Picker"
        />
      </div>
    </div>
  );
}
