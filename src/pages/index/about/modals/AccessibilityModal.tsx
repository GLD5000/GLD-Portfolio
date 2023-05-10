import Modal from "../../../../elements/Modal";
import Image from "next/image";
import { RefObject } from "react";
import scores from "src/assets/aboutme/Performance.jpg";

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
          <figure>
            <figcaption className="text-bold mb-4 text-center text-xl">
              GLD Designs Include:
            </figcaption>
            <ul className=" list-none pl-6 ">
              <li>Links that skip to main content for keyboard navigation</li>
              <li>
                Light and Dark modes for different abilities and preferences
              </li>
              <li>Perfect colour contrast for easy reading and navigating</li>
              <li>Responsive layouts for any screen size or magnification</li>
            </ul>
          </figure>

          <figure>
            <Image
              placeholder="blur"
              src={scores}
              className="m-auto h-auto w-full rounded shadow-xl shadow-black"
              alt={"Freecode camp certificate"}
            />

            <figcaption className="text-bold mb-4 text-center text-xl">
              My Tools for Developers:
            </figcaption>
            <ul className=" list-none pl-6 ">
              <li>
                Colour Scheme generator with automatic text colours & tonal
                gradients
              </li>
              <li>Contrast Ratio checker and creator for colour schemes</li>
              <li>Developer tips and tricks to help new / junior developers</li>
            </ul>
          </figure>
        </div>
      }
    />
  );
}
