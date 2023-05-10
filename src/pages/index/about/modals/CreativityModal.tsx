import Link from "next/link";
import Modal from "../../../../elements/Modal";
import { RefObject } from "react";
import Image from "next/image";
import scope from "src/assets/aboutme/ScopeCropped.jpg";
import scales from "src/assets/aboutme/ScalesCroppedB.jpg";
import pool from "src/assets/aboutme/poolPodcastCropped.jpg";
import morethan from "src/assets/aboutme/morethanPodcast.jpg";
import assessment from "src/assets/aboutme/assessmentPortal.jpg";
import cert from "src/assets/aboutme/cert.jpg";
import logo from "src/assets/aboutme/gldInkscape.jpg";
export default function CreativityModal({
  refPassed,
}: {
  refPassed: RefObject<HTMLDialogElement>;
}) {
  return (
    <Modal
      refIn={refPassed}
      content={
        <div className="grid ">
          <div className="grid max-w-[30rem] px-8">
            <h2 className="mx-auto mb-4 w-fit text-center text-3xl font-bold">
              Web Skills / My Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://react.dev/"
                target="_blank"
                referrerPolicy="no-referrer"
                className=" w-fit rounded bg-brand p-1 text-white"
              >
                {" "}
                React
              </Link>
              <Link
                href="https://www.typescriptlang.org/"
                target="_blank"
                referrerPolicy="no-referrer"
                className=" w-fit rounded bg-brand p-1 text-white"
              >
                {" "}
                TypeScript
              </Link>
              <Link
                href="https://nextjs.org"
                target="_blank"
                referrerPolicy="no-referrer"
                className=" w-fit rounded bg-brand p-1 text-white"
              >
                {" "}
                Next.js
              </Link>
              <Link
                href="https://tailwindcss.com/"
                target="_blank"
                referrerPolicy="no-referrer"
                className=" w-fit rounded bg-brand p-1 text-white"
              >
                {" "}
                Tailwind CSS
              </Link>
              <Link
                href="https://vitejs.dev/"
                target="_blank"
                referrerPolicy="no-referrer"
                className=" w-fit rounded bg-brand p-1 text-white"
              >
                {" "}
                Vite
              </Link>
              <Link
                href="https://vitest.dev/"
                target="_blank"
                referrerPolicy="no-referrer"
                className=" w-fit rounded bg-brand p-1 text-white"
              >
                {" "}
                Vitest
              </Link>
              <Link
                href="https://www.npmjs.com/package/husky"
                target="_blank"
                referrerPolicy="no-referrer"
                className=" w-fit rounded bg-brand p-1 text-white"
              >
                {" "}
                Husky
              </Link>
              <Link
                href="https://www.npmjs.com/package/lint-staged"
                target="_blank"
                referrerPolicy="no-referrer"
                className=" w-fit rounded bg-brand p-1 text-white"
              >
                {" "}
                Lint-Staged
              </Link>
              <Link
                href="https://code.visualstudio.com/"
                target="_blank"
                referrerPolicy="no-referrer"
                className=" w-fit rounded bg-brand p-1 text-white"
              >
                {" "}
                VSCode
              </Link>
              <Link
                href="https://github.com/GLD5000"
                target="_blank"
                referrerPolicy="no-referrer"
                className=" w-fit rounded bg-brand p-1 text-white"
              >
                {" "}
                GitHub
              </Link>
              <Link
                href="https://git-scm.com/"
                target="_blank"
                referrerPolicy="no-referrer"
                className=" w-fit rounded bg-brand p-1 text-white"
              >
                {" "}
                Git
              </Link>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                referrerPolicy="no-referrer"
                className=" w-fit rounded bg-brand p-1 text-white"
              >
                {" "}
                JavaScript
              </Link>
              <Link
                href="https://sass-lang.com/"
                target="_blank"
                referrerPolicy="no-referrer"
                className=" w-fit rounded bg-brand p-1 text-white"
              >
                {" "}
                SCSS
              </Link>
              <Link
                href="https://html.spec.whatwg.org/"
                target="_blank"
                referrerPolicy="no-referrer"
                className=" w-fit rounded bg-brand p-1 text-white"
              >
                {" "}
                HTML5+
              </Link>
              <Link
                href={
                  "https://freecodecamp.org/certification/GLD5000/javascript-algorithms-and-data-structures"
                }
                target="_blank"
                referrerPolicy="no-referrer"
                aria-label="Go to my Free code camp certificate"
              >
                <Image
                  placeholder="blur"
                  src={cert}
                  className="m-auto h-auto w-full rounded shadow-xl shadow-black"
                  alt={"Freecode camp certificate"}
                />
              </Link>
            </div>
          </div>

          <h2 className="mx-auto mt-8 mb-4 w-fit text-center text-3xl font-bold">
            Other Skills
          </h2>
          <div className="mx-auto grid max-w-[30rem] items-center gap-8 px-8">
            <div className="grid items-center gap-2">
              <h3 className="mx-auto flex h-fit w-fit gap-6 text-center font-bold">
                Music Plugin Development
              </h3>
              <Link
                href="https://www.cockos.com/EEL2/"
                target="_blank"
                referrerPolicy="no-referrer"
                className="mx-auto w-fit rounded bg-brand p-1 text-white"
              >
                EEL2
              </Link>

              <Image
                placeholder="blur"
                src={scope}
                className="m-auto h-auto w-full rounded shadow-xl shadow-black"
                alt={"GLD Scope Oscilloscope"}
              />
            </div>

            <div className="grid gap-2">
              <h3 className="mx-auto h-fit w-fit text-center font-bold">
                Google Apps Script
              </h3>
              <Link
                href="https://www.google.com/script/start/"
                target="_blank"
                referrerPolicy="no-referrer"
                className="mx-auto w-fit rounded bg-brand p-1 text-white"
              >
                GAS
              </Link>
              <Image
                placeholder="blur"
                src={assessment}
                className="m-auto h-auto w-full rounded-3xl shadow-xl shadow-black"
                alt={"Assessments Portal"}
              />
            </div>

            <div className="grid gap-2">
              <h3 className="mx-auto h-fit w-fit text-center font-bold">
                Graphic Design
              </h3>
              <Link
                href="https://inkscape.org/"
                target="_blank"
                referrerPolicy="no-referrer"
                className="mx-auto w-fit rounded bg-brand p-1 text-white"
              >
                Inkscape
              </Link>

              <div className="relative aspect-[2/1.2] w-full">
                <Image
                  placeholder="blur"
                  src={scales}
                  className="absolute right-0 bottom-0 m-auto h-[60%] w-auto rounded-3xl shadow-xl shadow-black"
                  alt={"Inkscape graphic poster"}
                />
                <Image
                  placeholder="blur"
                  src={logo}
                  className="absolute left-0 top-0 m-auto h-auto w-[45%] rounded-3xl shadow-xl shadow-black"
                  alt={"Inkscape logo work"}
                />
              </div>
            </div>
            <div className="grid gap-2">
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
                className="mx-auto w-fit rounded bg-brand p-1 text-white"
              >
                Reaper
              </Link>
              <div className="relative aspect-[2/1.2] w-full">
                <Image
                  placeholder="blur"
                  src={morethan}
                  className="absolute left-0 top-0 m-auto h-auto w-[55%] rounded-3xl shadow-xl shadow-black"
                  alt={"More Than Meets the Eye Podcast"}
                />
                <Image
                  placeholder="blur"
                  src={pool}
                  className="absolute right-0 bottom-0 m-auto h-auto w-[55%] rounded-3xl shadow-xl shadow-black"
                  alt={"Prime of Our Lives Podcast"}
                />
              </div>
            </div>
            <div className="grid gap-2">
              {/* <h3 className="font-bold mx-auto h-fit w-fit text-center">Sound Design</h3> */}
              {/* add image */}
            </div>
            {/* <h3 className="font-bold mx-auto h-fit w-fit text-center">Lua Scripting</h3> */}
            {/* <h3 className="font-bold mx-auto h-fit w-fit text-center">
              Visual Basic for Application (VBA)
            </h3> */}
          </div>
        </div>
      }
    />
  );
}
