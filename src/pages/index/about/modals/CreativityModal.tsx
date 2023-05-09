import Link from "next/link";
import Modal from "../../../../elements/Modal";
import { RefObject } from "react";
import Image from "next/image";
import scope from "src/assets/aboutme/ScopeCropped.jpg";
import scales from "src/assets/aboutme/ScalesCroppedB.jpg";

export default function CreativityModal({
  refPassed,
}: {
  refPassed: RefObject<HTMLDialogElement>;
}) {
  return (
    <Modal
      refIn={refPassed}
      content={
        <div className="grid gap-6 p-4 lg:grid-cols-3">
          <figure>
            <figcaption className="text-bold mb-4 text-center text-xl">
              My Stack
            </figcaption>
            <ul className="list-disc pl-6">
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind</li>
              <li>Vite</li>
              <li>Vitest</li>
              <li>Husky</li>
              <li>Lint-Staged</li>
              <li>VSCode</li>
              <li>GitHub</li>
            </ul>
          </figure>
          <figure>
            <figcaption className="text-bold mb-4 text-center text-xl">
              Web Skills
            </figcaption>
            <ul className="list-disc pl-6">
              <li>React</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>Tailwind CSS</li>
              <li>SCSS</li>
              <li>HTML5</li>
            </ul>
          </figure>
          <figure>
            <figcaption className="text-bold mb-4 text-center text-xl">
              Other Skills
            </figcaption>
            <ul className="list-disc pl-6">
              <li>
                <Link
                  href="https://www.cockos.com/EEL2/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="underline"
                >
                  EEL2
                </Link>{" "}
                Music Plugin Development
              </li>
              <li>Lua Scripting</li>
              <li>Visual Basic for Application (VBA)</li>
              <li>Google Apps Script (GAS)</li>
              <li>Graphic Design - InkScape</li>
              <li>Music Production - Reaper / Cubase</li>
              <li>Sound Design</li>
            </ul>
          </figure>
          <Image
            placeholder="blur"
            src={scope}
            className="m-auto h-auto w-full rounded shadow-xl shadow-black"
            alt={"GLD Scope Oscilloscope"}
          />
          <Image
            placeholder="blur"
            src={scales}
            className="m-auto h-auto w-full rounded-3xl shadow-xl shadow-black"
            alt={"GLD Scope Oscilloscope"}
          />
        </div>
      }
    />
  );
}
