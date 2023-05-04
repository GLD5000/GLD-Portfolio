import { useRef } from "react";
import Link from "next/link";

export default function About() {
  const stackModal = useRef<HTMLDialogElement>(null);
  const accessModal = useRef<HTMLDialogElement>(null);
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-bg-var bg-mesh-gradient bg-right bg-no-repeat text-txt-main dark:bg-bg-var-dk dark:text-txt-main-dk"
    >
      <div className="mx-auto flex  h-full w-body-sm min-w-body max-w-body flex-col bg-transparent sm:w-body ">
        <div className="mt-20 grid w-body-sm min-w-body max-w-body grow gap-10  sm:w-body">
          <h1 className="mx-auto mt-20 text-4xl lg:text-8xl">{`Hello, I'm Gareth`}</h1>
          <p className=" mx-auto w-fit text-xl">
            I am a web developer based near London, UK.
          </p>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="grid gap-4">
              <h2>Creative</h2>
              <p className=" max-w-[40rem]">
                From software, to music, sound and graphics: I love to create
                and believe in the power of innovation. I enjoy finding new ways
                to tackle challenges within a project and create value for
                users.
              </p>
            </div>
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
                    Software Plugin Development
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
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="grid gap-4">
              <h2>Accessible</h2>
              <p>
                The web is even better when it is available to everyone. I am
                passionate about ease-of-access and bake it in to my designs. I
                seek out best practices and make tools for developers to help
                make websites more accessible.
              </p>
            </div>
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
              className="m-auto max-w-[95vw] gap-6 rounded p-10 text-black lg:grid-cols-3"
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

              <Link
                className="m-auto h-fit w-60 rounded-full border-2 border-black bg-brand px-4 py-3 text-center text-xl text-white hover:bg-white hover:text-black hover:transition focus:bg-white focus:text-black focus:transition"
                href="/projects"
              >
                See My Projects
              </Link>
            </dialog>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <div className="grid gap-4">
              <h2>Open-Source</h2>
              <p>
                No developer is an island and Open-Source software is what
                allows us to connect and share good ideas. My background as a
                teacher showed me the value of sharing best practices and you
                can find the source code for all my projects on GitHub.
              </p>
            </div>
            <Link
              className="m-auto h-fit w-60 rounded-full border-2 border-black bg-brand px-4 py-3 text-center text-xl text-white hover:bg-white hover:text-black hover:transition focus:bg-white focus:text-black focus:transition"
              target="_blank"
              referrerPolicy="no-referrer"
              href="https://github.com/GLD5000"
            >
              Go To GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
