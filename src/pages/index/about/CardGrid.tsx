import { useRef } from "react";
import githubHeatMap from "src/assets/aboutme/GitHubHeatMap.jpg";
import inkscape from "src/assets/aboutme/inkscape.jpg";
import accessible from "src/assets/aboutme/accessible.jpg";
import Link from "next/link";
import AboutCard from "./AboutCard";

export default function CardGrid() {
  const stackModal = useRef<HTMLDialogElement>(null);
  const accessModal = useRef<HTMLDialogElement>(null);
  const contactModal = useRef<HTMLDialogElement>(null);

  return (
    <div className="grid gap-10 lg:grid-cols-3">
      <AboutCard
        image={inkscape}
        text={
          "From software, to music, sound and graphics: I love to create and believe in the power of innovation. I enjoy finding new ways to tackle challenges within a project and create value for users."
        }
        title={"Creative"}
        cta={
          <>
            {" "}
            <button
              type="button"
              className="m-auto h-fit w-60 rounded-full border-2 border-black bg-brand px-4 py-3 text-xl text-white hover:bg-white hover:text-black hover:transition  focus:bg-white focus:text-black focus:transition"
              onClick={() => {
                stackModal.current?.showModal();
              }}
            >
              See My Stack
            </button>
            <dialog
              className="m-auto gap-6 rounded p-10 text-black lg:grid-cols-3"
              ref={stackModal}
            >
              <button
                className="absolute right-0 top-0 m-1 p-1 text-xs text-txt-mid hover:bg-black hover:text-white hover:transition focus:bg-black focus:text-white focus:transition"
                type="button"
                onClick={() => {
                  stackModal.current?.close();
                }}
              >
                Close
              </button>

              <figure>
                <figcaption className="text-bold mb-4 text-center text-xl">
                  My Stack
                </figcaption>
                <ul className="list-disc">
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
                <ul className="list-disc">
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
                <ul className="list-disc">
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
            </dialog>
          </>
        }
      />{" "}
      <AboutCard
        image={accessible}
        text={
          "The web is even better when it is available to everyone. I am passionate about ease-of-access and bake it in to my designs. I seek out best practices and make tools for developers to help make websites more accessible."
        }
        title={"Accessible"}
        cta={
          <>
            <button
              type="button"
              className="m-auto h-fit w-60 rounded-full border-2 border-black bg-brand px-4 py-3 text-xl text-white hover:bg-white hover:text-black hover:transition focus:bg-white focus:text-black focus:transition"
              onClick={() => {
                accessModal.current?.showModal();
              }}
            >
              Find Out More
            </button>
            <dialog
              className="m-auto max-w-[95vw] gap-6 rounded p-10 text-black lg:grid-cols-2"
              ref={accessModal}
            >
              <button
                className="absolute right-0 top-0 m-1 p-1 text-xs text-txt-mid hover:bg-black hover:text-white hover:transition focus:bg-black focus:text-white focus:transition"
                type="button"
                onClick={() => {
                  accessModal.current?.close();
                }}
              >
                Close
              </button>

              <figure>
                <figcaption className="text-bold mb-4 text-center text-xl">
                  GLD Designs Include:
                </figcaption>
                <ul className=" list-disc pl-6 ">
                  <li>
                    Links that skip to main content for keyboard navigation
                  </li>
                  <li>
                    Light and Dark modes for different abilities and preferences
                  </li>
                  <li>
                    Perfect colour contrast for easy reading and navigating
                  </li>
                  <li>
                    Responsive layouts for any screen size or magnification
                  </li>
                </ul>
              </figure>

              <figure>
                <figcaption className="text-bold mb-4 text-center text-xl">
                  My Tools for Developers:
                </figcaption>
                <ul className=" list-disc pl-6 ">
                  <li>
                    Colour Scheme generator with automatic text colours & tonal
                    gradients
                  </li>
                  <li>Contrast Ratio checker and creator for colour schemes</li>
                  <li>
                    Developer tips and tricks to help new / junior developers
                  </li>
                </ul>
              </figure>

              {/* <Link
                className="m-auto h-fit w-60 rounded-full border-2 border-black bg-brand px-4 py-3 text-center text-xl text-white hover:bg-white hover:text-black hover:transition focus:bg-white focus:text-black focus:transition"
                href="#projects"
              >
                See My Projects
              </Link> */}
            </dialog>
          </>
        }
      />{" "}
      <AboutCard
        image={githubHeatMap}
        text={
          "No developer is an island and Open-Source software is what allows us to connect and share good ideas. Every tool I make is free and open source. All my source code is freely available on GitHub on my profile where I have over 2,800 commits over the past year."
        }
        title={"Open-Source"}
        cta={
          <>
            <button
              type="button"
              className="m-auto h-fit w-60 rounded-full border-2 border-black bg-brand px-4 py-3 text-xl text-white hover:bg-white hover:text-black hover:transition focus:bg-white focus:text-black focus:transition"
              onClick={() => {
                contactModal.current?.showModal();
              }}
            >
              Connect With Me
            </button>
            <dialog
              className="m-auto max-w-[95vw] gap-6 rounded p-10 text-black lg:grid-cols-2"
              ref={contactModal}
            >
              <button
                className="absolute right-0 top-0 m-1 p-1 text-xs text-txt-mid hover:bg-black hover:text-white hover:transition focus:bg-black focus:text-white focus:transition"
                type="button"
                onClick={() => {
                  contactModal.current?.close();
                }}
              >
                Close
              </button>

              {/* <figure>
                <figcaption className="text-bold mb-4 text-center text-xl">
                  GLD Designs Include:
                </figcaption>
                <ul className=" list-disc pl-6 ">
                  <li>
                    Links that skip to main content for keyboard navigation
                  </li>
                  <li>
                    Light and Dark modes for different abilities and preferences
                  </li>
                  <li>
                    Perfect colour contrast for easy reading and navigating
                  </li>
                  <li>
                    Responsive layouts for any screen size or magnification
                  </li>
                </ul>
              </figure>

              <figure>
                <figcaption className="text-bold mb-4 text-center text-xl">
                  My Tools for Developers:
                </figcaption>
                <ul className=" list-disc pl-6 ">
                  <li>
                    Colour Scheme generator with automatic text colours & tonal
                    gradients
                  </li>
                  <li>Contrast Ratio checker and creator for colour schemes</li>
                  <li>
                    Developer tips and tricks to help new / junior developers
                  </li>
                </ul>
              </figure> */}

              {/* <Link
                className="m-auto h-fit w-60 rounded-full border-2 border-black bg-brand px-4 py-3 text-center text-xl text-white hover:bg-white hover:text-black hover:transition focus:bg-white focus:text-black focus:transition"
                href="#projects"
              >
                See My Projects
              </Link> */}
              <Link
                className="m-auto h-fit w-60 rounded-full border-2 border-black bg-brand px-4 py-3 text-center text-xl text-white hover:bg-white hover:text-black hover:transition focus:bg-white focus:text-black focus:transition"
                target="_blank"
                referrerPolicy="no-referrer"
                href="https://www.linkedin.com/in/garethlouisdevlin/"
              >
                Go To LinkedIn
              </Link>
              <Link
                className="m-auto h-fit w-60 rounded-full border-2 border-black bg-brand px-4 py-3 text-center text-xl text-white hover:bg-white hover:text-black hover:transition focus:bg-white focus:text-black focus:transition"
                target="_blank"
                referrerPolicy="no-referrer"
                href="https://github.com/GLD5000"
              >
                Go To GitHub
              </Link>
            </dialog>
          </>
        }
      />
    </div>
  );
}
