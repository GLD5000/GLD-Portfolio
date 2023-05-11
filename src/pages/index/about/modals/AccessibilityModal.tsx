import Modal from "../../../../elements/Modal";
import Image from "next/image";
import { RefObject } from "react";
import scores from "src/assets/aboutme/Performance.jpg";
import hiddenlink from "src/assets/aboutme/hiddenlinkC.jpg";

export default function AccessibilityModal({
  refPassed,
}: {
  refPassed: RefObject<HTMLDialogElement>;
}) {
  return (
    <Modal
      refIn={refPassed}
      content={
        <div className="grid max-w-[30rem] px-8">
          <figcaption className="text-bold mb-4 text-center text-xl">
            GLD Designs Include:
          </figcaption>
          <div className=" list-none pl-6 ">
            <div>
              Hidden links for keyboard users that skip to main content.
              <Image
                placeholder="blur"
                src={hiddenlink}
                className="m-auto h-auto w-full rounded shadow-xl shadow-black"
                alt={"Hidden Link"}
              />
            </div>
            <div>
              Light and Dark modes for different abilities and preferences
            </div>
            <div>Perfect colour contrast for easy reading and navigating</div>
            <div>Responsive layouts for any screen size or magnification</div>
          </div>

          <Image
            placeholder="blur"
            src={scores}
            className="m-auto h-auto w-full rounded shadow-xl shadow-black"
            alt={"100 percent Lighthouse Scores"}
          />

          {/* <figcaption className="text-bold mb-4 text-center text-xl">
              My Tools for Developers:
            </figcaption>
            <div className=" list-none pl-6 ">
              <div>
                Colour Scheme generator with automatic text colours & tonal
                gradients
              </div>
              <div>Contrast Ratio checker and creator for colour schemes</div>
              <div>Developer tips and tricks to help new / junior developers</div>
            </div> */}
        </div>
      }
    />
  );
}
