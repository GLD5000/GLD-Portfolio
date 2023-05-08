import Image from "next/image";
import ComboCropped from "src/assets/colourtheory/ComboCropped.jpg";
import CopyCropped from "src/assets/colourtheory/CopyCropped.jpg";
import PickerCropped from "src/assets/colourtheory/PickerBCropped.jpg";
import SaveCropped from "src/assets/colourtheory/SaveCropped.jpg";
import SmallPickerCropped from "src/assets/colourtheory/SmallPickerBCropped.jpg";
import ProjectCard from "./ProjectCard";

const imagesCollection = (
  <>
    {" "}
    <Image
      placeholder="blur"
      className="absolute bottom-0 right-0 h-[30%] w-auto rounded shadow-xl shadow-black"
      src={SmallPickerCropped}
      alt="Colour Picker"
    />
    <Image
      className="absolute bottom-[50%] left-0 h-[45%] w-auto rounded shadow-xl shadow-black"
      src={SaveCropped}
      alt="Colour Picker"
    />
    <Image
      className="absolute top-0 right-0 h-[35%] w-auto rounded shadow-xl shadow-black"
      src={CopyCropped}
      alt="Colour Picker"
    />
    <Image
      className="absolute bottom-0 left-0 h-[45%] w-auto rounded shadow-xl shadow-black"
      src={ComboCropped}
      alt="Colour Picker"
    />
    <Image
      className="absolute bottom-[25%] left-[30%] h-[45%] w-auto rounded shadow-xl shadow-black"
      src={PickerCropped}
      alt="Colour Picker"
    />
  </>
);

const titleDiv = (
  <div className=" mx-auto mt-10">
    <div className=" flex flex-row overflow-clip rounded-lg border-2 border-current font-colourmatic ">
      <h1 className=" text rounded-none bg-white p-3 font-colourmatic text-lg tracking-tight text-black text-shadow-colourmatic xs:text-2xl sm:p-[0.95rem] sm:text-3xl xl:text-4xl">
        &lt;ColourTheory&gt;
      </h1>
    </div>
  </div>
);
export default function ColourTheoryCard() {
  return (
    <ProjectCard
      images={imagesCollection}
      text={
        "Colour theory-based colour palette generator with contrast ratios, auto-gradients and auto-text colour. Easily export your colour schemes in CSS or SCSS formats."
      }
      subtitle={"Custom CSS Colour Scheme Generator"}
      title={titleDiv}
      cta={undefined}
      url={"https://colour-theory.netlify.app/"}
    />
  );
}