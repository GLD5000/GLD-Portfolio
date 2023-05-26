import StarSvg from "@/icons/StarSvg";
import Image from "next/image";
import gldLogo from "src/assets/hero/g22813.png";
import SpanSplitter from "./SpanSplitter";

export default function HeroCta() {
  return (
    <div className=" mx-auto grid h-fit w-screen gap-8 py-12 lg:my-auto lg:w-fit lg:grid-cols-2">
      <div className="m-auto h-fit w-screen max-w-[35rem] lg:h-auto lg:w-full lg:max-w-[50rem] ">
        <div className="h-full w-full px-8">
          <Image
            priority
            loading="eager"
            placeholder="empty"
            src={gldLogo}
            className="max-landscapeMobile:landscape:h-[50vmin] max-landscapeMobile:landscape:w-auto m-auto h-auto w-[95vw] max-w-full lg:w-[50vw] "
            alt="GLD Logo"
          />
        </div>
      </div>
      <div className="m-auto grid h-fit w-max gap-6 bg-transparent py-4">
        {/* <p className=" ml:4 mr-auto mb-0 w-fit text-xl md:ml-16 lg:text-2xl  xl:text-3xl">
              <SpanSplitter word={"Hi, I am"} />
            </p> */}

        <div className="px:4 relative mx-auto w-full pt-4 pb-4  md:pt-10">
          <h1 className="mx-auto grid w-fit grid-cols-frAutoFr gap-2 text-3xl font-bold xs:text-4xl sm:gap-4 sm:text-4xl md:text-5xl xl:text-6xl">
            <span
              key="g"
              className="colour-in-g cursor-default hover:text-primary hover:[transition-duration:800ms] hover:[transition-delay:100ms]"
            >
              Gareth
            </span>
            <span
              key="l"
              className="colour-in-l cursor-default hover:text-primary hover:[transition-duration:800ms] hover:[transition-delay:100ms]"
            >
              L
            </span>
            <span
              key="d"
              className="colour-in-d cursor-default hover:text-primary hover:[transition-duration:800ms] hover:[transition-delay:100ms]"
            >
              Devlin
            </span>
          </h1>
          <div className=" wobblingStar absolute right-2 top-0 aspect-square h-6  sm:h-8 md:h-10 lg:h-12">
            <StarSvg />
          </div>
        </div>
        <h2 className="mx-auto text-2xl font-bold sm:text-3xl xl:text-4xl">
          <SpanSplitter word="Web Developer" />
        </h2>
        <p className="my-0 mx-auto w-fit text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl">
          I am a React developer based near London, UK.
        </p>
        <p className="my-0 mx-auto w-fit text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl">
          I build innovative and accessible websites and apps.
        </p>
        <a
          href="#projects"
          className="mx-auto h-fit w-60 rounded-full border-2 border-black bg-primary px-4 py-3 text-center text-2xl font-bold text-white hover:bg-white hover:text-black hover:transition  focus:bg-white focus:text-black focus:transition"
        >{`Let's Go`}</a>
      </div>
    </div>
  );
}
