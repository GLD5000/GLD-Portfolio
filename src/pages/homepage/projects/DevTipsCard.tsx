import Image from "next/image";
import CreateCropped from "src/assets/devtips/CreateCropped.jpg";
import SectionCropped from "src/assets/devtips/SectionCropped.jpg";
import tagsCropped from "src/assets/devtips/tagsCropped.jpg";
import TipBCropped from "src/assets/devtips/TipBCropped.jpg";
import TipsCropped from "src/assets/devtips/TipsDCropped.jpg";
import ProjectCard from "./ProjectCard";

const imagesCollection = (
  <>
    {" "}
    <Image
      placeholder="blur"
      className="absolute top-0 right-[10%] h-[47%] w-auto rounded-md shadow-xl shadow-black"
      src={tagsCropped}
      alt="Colour Picker"
    />
    <Image
      placeholder="blur"
      className="absolute top-[10%] left-0 h-[42%] w-auto rounded-md shadow-xl shadow-black"
      src={TipsCropped}
      alt="Colour Picker"
    />
    <Image
      placeholder="blur"
      className="absolute top-[38%] right-0 h-[46%] w-auto rounded-md shadow-xl shadow-black"
      src={TipBCropped}
      alt="Colour Picker"
    />
    <Image
      placeholder="blur"
      className="absolute bottom-0 left-0 h-[43%] w-auto rounded-md shadow-xl shadow-black"
      src={SectionCropped}
      alt="Colour Picker"
    />
    <Image
      placeholder="blur"
      className="absolute bottom-[9%] left-[45%] h-[15%] w-auto rounded-md shadow-xl shadow-black"
      src={CreateCropped}
      alt="Colour Picker"
    />
  </>
);
const titleDiv = (
  <div className=" mx-auto mt-10">
    <div className=" flex flex-row overflow-clip rounded-lg border-2 border-current ">
      <h1 className=" rounded-none bg-white px-2 pb-4 pt-1 font-devTips text-6xl font-black tracking-wide text-black sm:px-4 sm:pt-2 sm:pb-8 sm:text-8xl">
        DevTips
      </h1>
    </div>
  </div>
);
export default function DevTipsCard() {
  return (
    <ProjectCard
      images={imagesCollection}
      text="A website full of tips and tricks for developers. Simply search by keyword or filter by tag to explore and learn. If you are feeling creative, you can even add your own tips too."
      subtitle="Tips and Tricks for Developers"
      title={titleDiv}
      url="https://glddevtips.web.app/"
    />
  );
}
