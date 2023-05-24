import GldSvg from "@/icons/GldSvg";
import Image from "next/image";
import { RefObject } from "react";
import scores from "src/assets/aboutme/Performance.jpg";
import MoonSvg from "@/icons/MoonSvg";
import ArrowSvg from "@/icons/ArrowSvg";
import ArrowReversedSvg from "@/icons/ArrowReversedSvg";
import TickSvg from "@/icons/TickSvg";
import Modal from "../../../../elements/Modal";

export default function AccessibilityModal({
  refPassed,
}: {
  refPassed: RefObject<HTMLDialogElement>;
}) {
  return (
    <Modal
      refIn={refPassed}
      content={
        <>
          <figure className="px-2">
            <figcaption className="mx-auto my-6 w-fit text-center text-xl font-bold">
              Accessiblity Features of GLD Websites
            </figcaption>
            <div className="mx-auto flex h-fit w-fit min-w-[280px] flex-col rounded-lg border-white bg-bg-dk py-4 text-white dark:border-black dark:bg-secondary-light dark:text-black">
              <div className="my-2 ml-auto mr-4 flex w-fit flex-row  font-bold">
                <p className="my-auto px-1 font-bold">1. Light / Dark Mode</p>{" "}
                <ArrowSvg />
              </div>
              <div className="grid h-8 grid-cols-autoFrAuto rounded-none border-t bg-bg-var-dk px-4 dark:bg-secondary-light">
                <div className="mx-auto h-8 w-fit text-txt-mid-dk dark:text-txt-mid">
                  <GldSvg />
                </div>
                <div className="mx-auto h-8 w-fit font-bold text-txt-mid-dk dark:text-txt-mid">
                  Header
                </div>
                <div className="mx-auto h-8 w-fit rounded-full border-4 border-secondary-light  p-1 text-txt-mid-dk dark:border-primary dark:text-txt-mid">
                  <MoonSvg />
                </div>
              </div>
              <div className="grid h-7 grid-cols-autoFrAuto rounded-none border-y border-border-dk bg-bg-var-dk px-4 dark:bg-secondary-light">
                <div className=" col-start-2 mx-auto grid grid-cols-3 gap-2 rounded-full border-4 border-secondary-light  dark:border-primary ">
                  <p className="my-auto mx-auto w-20 text-center text-txt-mid-dk dark:text-txt-mid">
                    About
                  </p>
                  <p className="my-auto mx-auto w-20 text-center text-txt-mid-dk dark:text-txt-mid">
                    Schedule
                  </p>
                  <p className="my-auto mx-auto w-20 text-center text-txt-mid-dk dark:text-txt-mid">
                    Contact
                  </p>
                </div>
              </div>
              <div className="my-2 mx-auto flex w-fit flex-row font-bold">
                <p className="my-auto px-1 font-bold">
                  2. One-Click Navigation{" "}
                </p>
                <ArrowReversedSvg rotate />
              </div>

              <p className="my-0 ml-2 h-fit w-fit rounded-full border-4 border-secondary-light p-1  font-bold text-txt-mid-dk dark:border-primary dark:text-txt-mid">
                Skip to main content
              </p>
              <div className="my-2 mr-auto ml-4 grid w-fit grid-cols-autoFr font-bold">
                <ArrowSvg rotate />
                <p className="my-auto px-1 font-bold">
                  3. Main content link for keyboard users
                </p>
              </div>
              <div className="my-2 mx-auto flex w-fit flex-row font-bold">
                <p className="my-auto px-1 font-bold">
                  4. Clear, legible fonts and sensible sizing{" "}
                </p>
                <ArrowSvg />
              </div>
              <div className="mx-auto w-fit bg-primary py-4 px-4 sm:px-16">
                <h2 className="mx-auto w-fit font-bold text-black">
                  Contrast Ratio
                </h2>
                <p className="my-0 mx-auto h-fit w-fit text-sm text-black">
                  Black text
                </p>
                <div className="mx-auto mt-6 mb-0 flex h-fit w-fit flex-row gap-2 rounded-lg border-4 py-2 px-4 font-bold text-black">
                  <p className="m-auto">4.61 : 1 (AA+) - Pass</p>
                  <TickSvg />
                </div>
              </div>
              <div className="my-2 mx-auto flex w-fit flex-row font-bold">
                <p className="my-auto px-1 font-bold">
                  5. Thoughtful colours with good contrast levels{" "}
                </p>
                <ArrowReversedSvg rotate />
              </div>
            </div>
          </figure>
          <div className="mx-auto grid w-fit max-w-[500px] gap-4">
            <h2 className="mx-auto my-4 w-fit text-center text-xl font-bold">
              Features you can also expect include:
            </h2>
            <ul className="mx-auto w-fit list-disc pl-8 pr-4">
              <li>
                Subtle animations and smooth-scrolling that adapts to reduced
                motion preferences
              </li>
              <li>
                Logical ordering and ARIA labelling for Assistive technologies
              </li>
              <li>Text to be selectable and readable by screen readers</li>
              <li>
                Websites that work as Progressive Web Apps for mobile users
              </li>
              <li>Optimised site speed and performance</li>
              <li>Search Engine Optimisations</li>
            </ul>
          </div>
          <Image
            placeholder="blur"
            src={scores}
            className="mx-auto mt-10 h-auto w-[280px] max-w-[40rem] rounded-xl shadow-xl shadow-black xs:w-[23rem] sm:w-[30rem] md:w-[40rem]"
            alt="100 percent Lighthouse Scores"
          />
        </>

        // <div className="grid max-w-[30rem] px-8">
        //   <figcaption className="text-bold mb-4 text-center text-xl">
        //     GLD Designs Include:
        //   </figcaption>
        //   <div className=" list-none pl-6 ">
        //     <div>
        //       Hidden links for keyboard users that skip to main content.
        //       <Image
        //         placeholder="blur"
        //         src={hiddenlink}
        //         className="m-auto h-auto w-full rounded shadow-xl shadow-black"
        //         alt={"Hidden Link"}
        //       />
        //     </div>
        //     <div>
        //       Light and Dark modes for different abilities and preferences
        //     </div>
        //     <div>Perfect colour contrast for easy reading and navigating</div>
        //     <div>Responsive layouts for any screen size or magnification</div>
        //   </div>

        //   <Image
        //     placeholder="blur"
        //     src={scores}
        //     className="m-auto h-auto w-full rounded shadow-xl shadow-black"
        //     alt={"100 percent Lighthouse Scores"}
        //   />

        //   {/* <figcaption className="text-bold mb-4 text-center text-xl">
        //       My Tools for Developers:
        //     </figcaption>
        //     <div className=" list-none pl-6 ">
        //       <div>
        //         Colour Scheme generator with automatic text colours & tonal
        //         gradients
        //       </div>
        //       <div>Contrast Ratio checker and creator for colour schemes</div>
        //       <div>Developer tips and tricks to help new / junior developers</div>
        //     </div> */}
        // </div>
      }
    />
  );
}
