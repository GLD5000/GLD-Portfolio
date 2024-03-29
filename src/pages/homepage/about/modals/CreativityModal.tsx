import Link from "next/link";
import Image from "next/image";
import scope from "src/assets/aboutme/ScopeCropped.jpg";
import scales from "src/assets/aboutme/ScalesCroppedB.jpg";
import pool from "src/assets/aboutme/poolPodcastCropped.jpg";
import morethan from "src/assets/aboutme/morethanPodcast.jpg";
import assessment from "src/assets/aboutme/assessmentPortal.jpg";
import logo from "src/assets/aboutme/gldInkscape.jpg";
import Modal from "../../../../elements/Modal";
import MyStack from "../../hero/MyStack";

export default function CreativityModal() {
  return (
    <Modal
      cta="See My Skills"
      content={
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="grid h-fit max-w-[20rem] px-8">
            <h2 className="mx-auto mb-4 w-fit text-center text-3xl font-bold">
              Web Skills / My Stack
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <MyStack />
              {/*  <Link
                href="https://vitejs.dev/"
                target="_blank"
                referrerPolicy="no-referrer"
                className=" w-fit rounded bg-primary p-2 text-white"
              >
                {" "}
                Vite
              </Link>
              <Link
                href="https://vitest.dev/"
                target="_blank"
                referrerPolicy="no-referrer"
                className=" w-fit rounded bg-primary p-2 text-white"
              >
                {" "}
                Vitest
              </Link>
              <Link
                href="https://www.npmjs.com/package/husky"
                target="_blank"
                referrerPolicy="no-referrer"
                className=" w-fit rounded bg-primary p-2 text-white"
              >
                {" "}
                Husky
              </Link>
              <Link
                href="https://www.npmjs.com/package/lint-staged"
                target="_blank"
                referrerPolicy="no-referrer"
                className=" w-fit rounded bg-primary p-2 text-white"
              >
                {" "}
                Lint-Staged
              </Link>
              <Link
                href="https://code.visualstudio.com/"
                target="_blank"
                referrerPolicy="no-referrer"
                className=" w-fit rounded bg-primary p-2 text-white"
              >
                {" "}
                VSCode
              </Link>
              <Link
                href="https://github.com/GLD5000"
                target="_blank"
                referrerPolicy="no-referrer"
                className=" w-fit rounded bg-primary p-2 text-white"
              >
                {" "}
                GitHub
              </Link> */}
              {/* <Link
                href="https://git-scm.com/"
                target="_blank"
                referrerPolicy="no-referrer"
                className=" w-fit rounded bg-primary p-2 text-white"
              >
                {" "}
                Git
              </Link> */}
              {/* <Link
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                referrerPolicy="no-referrer"
                className=" w-fit rounded bg-primary p-2 text-white"
              >
                {" "}
                JavaScript
              </Link> */}
              {/* <Link
                href="https://sass-lang.com/"
                target="_blank"
                referrerPolicy="no-referrer"
                className=" w-fit rounded bg-primary p-2 text-white"
              >
                {" "}
                SCSS
              </Link> */}
              {/* <Link
                href="https://html.spec.whatwg.org/"
                target="_blank"
                referrerPolicy="no-referrer"
                className=" w-fit rounded bg-primary p-2 text-white"
              >
                {" "}
                HTML5+
              </Link> */}
              {/* <Link
                href="https://freecodecamp.org/certification/GLD5000/javascript-algorithms-and-data-structures"
                target="_blank"
                referrerPolicy="no-referrer"
                aria-label="Go to my Free code camp certificate"
              >
                <Image
                  placeholder="blur"
                  src={cert}
                  className="m-auto h-auto w-full max-h-[248px] rounded shadow-xl shadow-black"
                  alt={"Freecode camp certificate"}
                />
              </Link> */}
            </div>
          </div>

          {/* <h2 className="mx-auto mt-8 mb-4 w-fit text-center text-3xl font-bold">
            Other Skills
          </h2> */}
          {/* <div className="mx-auto grid max-w-[20rem] items-center gap-8 px-8"> */}
          <div className="grid h-fit w-full min-w-[18rem] max-w-[20rem] items-center gap-2">
            <h3 className="mx-auto flex h-fit w-fit gap-6 text-center font-bold">
              Music Plugin Development
            </h3>
            <Link
              href="https://www.cockos.com/EEL2/"
              target="_blank"
              referrerPolicy="no-referrer"
              className="mx-auto w-fit rounded bg-primary p-2 text-white"
            >
              EEL2
            </Link>

            <Image
              placeholder="blur"
              src={scope}
              className="m-auto h-full max-h-[248px] w-auto rounded shadow-xl shadow-black"
              alt="GLD Scope Oscilloscope"
            />
          </div>

          <div className="grid h-fit w-full min-w-[18rem] max-w-[20rem] items-center gap-2">
            <h3 className="mx-auto h-fit w-fit text-center font-bold">
              Google Apps Script
            </h3>
            <Link
              href="https://www.google.com/script/start/"
              target="_blank"
              referrerPolicy="no-referrer"
              className="mx-auto w-fit rounded bg-primary p-2 text-white"
            >
              GAS
            </Link>
            <Image
              placeholder="blur"
              src={assessment}
              className="m-auto h-auto max-h-[248px] w-auto rounded-3xl shadow-xl shadow-black"
              alt="Assessments Portal"
            />
          </div>

          <div className="grid h-fit w-full min-w-[18rem] max-w-[20rem] items-center gap-2">
            <h3 className="mx-auto h-fit w-fit text-center font-bold">
              Graphic Design
            </h3>
            <Link
              href="https://inkscape.org/"
              target="_blank"
              referrerPolicy="no-referrer"
              className="mx-auto w-fit rounded bg-primary p-2 text-white"
            >
              Inkscape
            </Link>
            <div>
              <div className="relative mx-auto aspect-[2/1.2] h-full max-h-[248px] w-auto">
                <Image
                  placeholder="blur"
                  src={scales}
                  className="absolute right-0 bottom-0 m-auto h-[60%] w-auto rounded-3xl shadow-xl shadow-black"
                  alt="Inkscape graphic poster"
                />
                <Image
                  placeholder="blur"
                  src={logo}
                  className="absolute left-0 top-0 m-auto h-auto w-[45%] rounded-3xl shadow-xl shadow-black"
                  alt="Inkscape logo work"
                />
              </div>
            </div>
          </div>
          <div className="grid h-fit w-full min-w-[18rem] max-w-[20rem] items-center gap-2">
            <h3 className="mx-auto h-fit w-fit text-center font-bold">
              Music Production
            </h3>
            <p className="mx-auto mb-0 w-fit text-sm">
              Including some theme music for podcasts
            </p>
            <Link
              href="https://inkscape.org/"
              target="_blank"
              referrerPolicy="no-referrer"
              className="mx-auto w-fit rounded bg-primary p-2 text-white"
            >
              Reaper
            </Link>
            <div>
              <div className="relative mx-auto aspect-[2/1.2] h-full max-h-[248px] w-auto">
                <Image
                  placeholder="blur"
                  src={morethan}
                  className="absolute left-0 top-0 m-auto h-auto w-[55%] rounded-3xl shadow-xl shadow-black"
                  alt="More Than Meets the Eye Podcast"
                />
                <Image
                  placeholder="blur"
                  src={pool}
                  className="absolute right-0 bottom-0 m-auto h-auto w-[55%] rounded-3xl shadow-xl shadow-black"
                  alt="Prime of Our Lives Podcast"
                />
              </div>
            </div>
          </div>
          <div className="grid h-fit w-full min-w-[18rem] max-w-[20rem] items-center gap-2">
            {/* <h3 className="font-bold mx-auto h-fit w-fit text-center">Sound Design</h3> */}
            {/* add image */}
          </div>
          {/* <h3 className="font-bold mx-auto h-fit w-fit text-center">Lua Scripting</h3> */}
          {/* <h3 className="font-bold mx-auto h-fit w-fit text-center">
              Visual Basic for Application (VBA)
            </h3> */}
        </div>
        // </div>
      }
    />
  );
}
