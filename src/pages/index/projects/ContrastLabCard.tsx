import Image from "next/image";
import ComboCropped from "src/assets/contrastlab/ComboCropped.jpg";
import InfoTableCropped from "src/assets/contrastlab/InfoTableCropped.jpg";
import MatrixACropped from "src/assets/contrastlab/MatrixACropped.jpg";
import PickerCropped from "src/assets/contrastlab/PickerSoloCropped.jpg";
import InputCropped from "src/assets/contrastlab/InputCropped.jpg";
import ProjectCard from "./ProjectCard";

const imageCollection = (
  <>
    {" "}
    <Image
      placeholder="blur"
      className="absolute bottom-0 left-0 h-[25%] w-auto rounded-md shadow-xl shadow-black"
      src={PickerCropped}
      alt="Colour Picker"
    />
    <Image
      placeholder="blur"
      className="absolute top-0 left-0 h-[37%] w-auto rounded-md shadow-xl shadow-black"
      src={InputCropped}
      alt="Colour Picker"
    />
    <Image
      placeholder="blur"
      className="absolute top-[36%] left-[5%] h-[38%] w-auto rounded-md shadow-xl shadow-black"
      src={InfoTableCropped}
      alt="Colour Picker"
    />
    <Image
      placeholder="blur"
      className="absolute bottom-0 right-0 h-[45%] w-auto rounded-3xl shadow-xl shadow-black"
      src={MatrixACropped}
      alt="Colour Picker"
    />
    <Image
      placeholder="blur"
      className="absolute top-[7%] right-[12%] h-[53%] w-auto rounded-3xl shadow-xl shadow-black"
      src={ComboCropped}
      alt="Colour Picker"
    />
  </>
);

const titleDiv = (
  <div className=" mx-auto mt-10">
    <div className="  flex flex-row overflow-clip rounded-lg border-2 border-current ">
      <h1 className=" rounded-none bg-white p-3 font-black  leading-6 text-black sm:p-[0.95rem] sm:text-6xl">
        CONTRAST
      </h1>
      <h1 className="  rounded-none bg-black p-3 font-black leading-6 text-white sm:p-[0.95rem] sm:text-6xl">
        LAB
      </h1>
    </div>
  </div>
);

export default function ContrastLabCard() {
  return (
    <>
      <div className="mx-auto grid w-full  max-w-body items-center self-center sm:w-full sm:px-8 lg:grid-cols-2">
        <div className="grid"></div>
      </div>
      <ProjectCard
        images={imageCollection}
        text={
          "A colour playground that allows you to quickly compare any number of colours and ensure that they meet current standards for visual Contrast Ratios and accessibility (WCAG 2.1)."
        }
        subtitle={"Create Accessible Colour Combinations"}
        title={titleDiv}
        cta={undefined}
        url={"https://contrast-tool.vercel.app/"}
      />
    </>
  );
}
