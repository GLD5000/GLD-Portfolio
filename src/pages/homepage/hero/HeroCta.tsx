import StarSvg from "@/icons/StarSvg";
import Image from "next/image";
import gldLogo from "src/assets/hero/GLDLogo3D.png";
import MyStack from "./MyStack";

export default function HeroCta() {
  return (
    <div className=" m-auto grid h-fit max-h-[screen] w-screen gap-8 pt-10 lg:my-auto  lg:w-fit lg:grid-cols-2">
      <Image
        priority
        loading="eager"
        placeholder="empty"
        width={740}
        height={740}
        src={gldLogo}
        className="m-auto aspect-square w-full max-w-[90vw] xs:max-w-[80vw] sm:max-w-[440px] lg:max-w-[45vw] "
        alt="GLD Logo"
      />
      <div className="m-auto grid h-fit w-fit gap-6 bg-transparent py-4">
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
        {/* <h2 className="h-fit w-full text-center text-2xl font-bold sm:text-3xl xl:text-4xl">
          <SpanSplitter word="Web Developer" />
        </h2> */}

        <p className="my-0 h-fit w-full text-center text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl">
          I am a Web Developer based near London, UK.
        </p>
        <p className="my-0 h-fit w-full text-center text-xs xs:text-sm sm:text-base lg:text-lg xl:text-xl">
          I build innovative and accessible websites and apps.
        </p>
        <MyStack />
        <a
          href="#projects"
          className="mx-auto h-14 w-60 rounded-full border-2 border-black bg-primary px-4 py-3 text-center text-2xl font-bold text-white hover:bg-white hover:text-black hover:transition  focus:bg-white focus:text-black focus:transition"
        >{`Let's Go`}</a>
      </div>
    </div>
  );
}
