import Image from "next/image";
import drafts from "src/assets/devblog/DraftsDk.jpg";
// import edit from "src/assets/devblog/Edit.jpg";
import front from "src/assets/devblog/Front.jpg";
// import frontDark from "src/assets/devblog/FrontDk.jpg";
import hi from "src/assets/devblog/HiGareth.jpg";
import { Fredericka_the_Great as FredTheGreat } from "next/font/google";
import ProjectCard from "./ProjectCard";

const theGreat = FredTheGreat({ weight: "400", subsets: ["latin"] });

const imageCollection = (
  <>
    <Image
      placeholder="blur"
      className="absolute top-[0%] left-[0%] h-auto w-[95%] rounded-3xl shadow-xl shadow-black"
      src={front}
      alt="Colour Picker"
    />
    <Image
      placeholder="blur"
      className="absolute bottom-[6%] right-[0%] h-auto w-[72%] rounded-3xl shadow-xl shadow-black"
      src={hi}
      alt="Colour Picker"
    />
    <Image
      placeholder="blur"
      className="absolute bottom-0 left-[1%] h-[42%] w-auto rounded-3xl shadow-xl shadow-black"
      src={drafts}
      alt="Colour Picker"
    />
    {/* <Image
      placeholder="blur"
      className="absolute top-[2%] right-0 h-[39%] w-auto rounded-3xl shadow-xl shadow-black"
      src={frontDark}
      alt="Colour Picker"
    /> */}
    {/* <Image
      placeholder="blur"
      className="absolute bottom-[2%] right-0 h-[59%] w-auto rounded-3xl shadow-xl shadow-black"
      src={edit}
      alt="Colour Picker"
    /> */}
  </>
);

const titleDiv = (
  <div className={`${theGreat.className} mx-auto text-center`}>
    <div className="  flex flex-row overflow-clip rounded-lg border-2 border-current bg-white p-4 sm:p-[0.95rem] ">
      <h1 className=" mb-1  rounded-none text-5xl leading-8  text-black  sm:text-7xl">
        DevBlog
      </h1>
    </div>
  </div>
);
export default function DevBlogCard() {
  return (
    <ProjectCard
      images={imageCollection}
      text="A blog site for developers built for speed with tagging and search. Sign in with Github to add your own story."
      subtitle="Find Your Story Here"
      title={titleDiv}
      mainUrl="https://gld-dev-blog.vercel.app/"
      repoUrl="https://github.com/GLD5000/GLD-DevBlog"
    />
  );
}
