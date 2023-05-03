import GldSvgHero from "@/icons/GldSvgHero";
import Stars from "./Stars";
import { useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  let originURL = "https://gld-portfolio.vercel.app/";
  let hrefProjects = `${originURL}/projects`;
  useEffect(() => {
    let run = true;
    if (run) {
      originURL = document.location.origin;
      hrefProjects = `${originURL}/projects`;
      console.log("originURL:", originURL);
      console.log("hrefProjects:", originURL);
    }

    return () => {
      run = false;
    };
  }, [originURL, hrefProjects]);

  return (
    <div className=" absolute top-0  z-[997] grid h-screen w-full  bg-bg-dk ">
      <Stars />
      <div className=" h-full w-full ">
        <div className="mx-auto grid h-fit w-fit skew-x-2 gap-12 ">
          <div className="mx-auto h-auto w-[98vmin]  drop-shadow-hero-dk sm:w-[80vmin]">
            <GldSvgHero />
          </div>
          <div className="zoom-in-slow mx-auto grid h-fit  w-fit  drop-shadow-hero-dk">
            <div className="h-4 w-full rounded-b-full border-8 border-transparent border-x-white border-b-white "></div>
            <div className="mx-4 grid h-fit w-64 grid-cols-2 gap-2 overflow-clip rounded-b-full bg-white px-2 pb-2 text-lg font-bold">
              <Link
                href="#about"
                target="_self"
                className="h-fit w-full rounded-r rounded-br-md rounded-bl-full bg-pink-400  p-4 text-center text-black"
              >
                About
              </Link>
              <Link
                href="/projects"
                target="_self"
                className="h-fit w-full rounded-l rounded-bl-md rounded-br-full bg-pink-400 p-4 text-center text-black"
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
