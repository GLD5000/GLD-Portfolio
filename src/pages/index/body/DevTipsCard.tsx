import Image from "next/image";
import BlankSectionCropped from "src/assets/devtips/BlankSectionCropped.jpg";
import CreateCropped from "src/assets/devtips/CreateCropped.jpg";
import SectionCropped from "src/assets/devtips/SectionCropped.jpg";
import tagsCropped from "src/assets/devtips/tagsCropped.jpg";
import TipBCropped from "src/assets/devtips/TipBCropped.jpg";
import TipCropped from "src/assets/devtips/TipCropped.jpg";
import TipsCropped from "src/assets/devtips/TipsCroppedB.jpg";

export default function ColourTheoryCard() {
  return (
    <div className="mx-auto grid w-screen  max-w-body items-center self-center px-4 py-10 sm:w-full sm:px-8 lg:grid-cols-2">
      <div className="grid">
        <a
          className=" mx-auto mt-10"
          href="https://glddevtips.web.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className=" flex flex-row overflow-clip rounded-lg border-2 border-current ">
            <h1 className=" rounded-none bg-white px-2 pb-4 pt-1 font-devTips text-6xl font-black tracking-wide text-black sm:px-4 sm:pt-2 sm:pb-8 sm:text-8xl">
              DevTips
            </h1>
          </div>
        </a>
        <b className=" mx-auto mt-2 mb-20 text-center text-lg sm:text-xl">
          Tips and Tricks for Developers
        </b>{" "}
      </div>
      <div className="relative mx-auto flex aspect-[1/1] w-[80%] max-w-[35rem] ">
        {/* <Image
          className="absolute rounded-md bottom-[45%] right-0 h-[45%] w-auto shadow-xl shadow-black"
          src={BlankSectionCropped}
          alt="Colour Picker"
        /> */}
        <Image
          className="absolute top-0 left-0 h-[37%] w-auto rounded-md shadow-xl shadow-black"
          src={TipsCropped}
          alt="Colour Picker"
        />
        <Image
          className="absolute top-[31%] left-0 h-[45%] w-auto rounded-md shadow-xl shadow-black"
          src={tagsCropped}
          alt="Colour Picker"
        />
        {/* <Image
          className="absolute rounded-md bottom-0 right-0 h-[37%] w-auto shadow-xl shadow-black"
          src={TipBCropped}
          alt="Colour Picker"
        /> */}
        <Image
          className="absolute bottom-0 left-0 h-[50%] w-auto rounded-md object-contain shadow-xl shadow-black"
          src={TipCropped}
          alt="Colour Picker"
        />
        <Image
          className="absolute bottom-[4%] right-0 h-[41%] w-auto rounded-md shadow-xl shadow-black"
          src={SectionCropped}
          alt="Colour Picker"
        />
        <Image
          className="absolute top-[14%] right-0 h-[18%] w-auto rounded-md shadow-xl shadow-black"
          src={CreateCropped}
          alt="Colour Picker"
        />
      </div>
    </div>
  );
}
