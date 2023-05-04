import { useRef } from "react";
import Link from "next/link";

export default function About() {
  const stackModal = useRef<HTMLDialogElement>(null);
  return (
    <section
      id="about"
      className="h-screen w-full bg-bg-var-dk text-txt-main-dk"
    >
      <div className="mx-auto flex  h-full  w-body min-w-body max-w-body flex-col bg-transparent ">
        <div className="mt-20 grid w-body-sm min-w-body max-w-body grow gap-10 bg-mesh-gradient bg-right bg-no-repeat sm:w-body">
          <h1 className="mx-auto text-8xl">{`Hello, I'm Gareth`}</h1>
          <p className=" mx-auto w-fit text-xl">
            I am a web developer based near London, UK.
          </p>

          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2>Creative</h2>
              <p className=" max-w-[40rem]">
                From software, to music, sound and graphics: I love to create
                and believe in the power of innovation. I enjoy finding new ways
                to tackle challenges within a project and create value for
                users. Click to see the tools I use to make it happen.
              </p>
            </div>
            <button
              type="button"
              className="m-auto h-fit w-full bg-brand p-4 text-xl"
              onClick={() => {
                stackModal.current?.showModal();
              }}
            >
              My Stack
            </button>
            <dialog
              className="m-auto gap-6 rounded p-10 text-black lg:grid-cols-3"
              ref={stackModal}
            >
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
                </ul>
              </figure>

              <figure>
                <figcaption className="text-bold mb-4 text-center text-xl">
                  Web Skills
                </figcaption>
                <ul className="list-disc">
                  <li>TypeScript</li>
                  <li>JavaScript</li>
                  <li>Tailwind CSS</li>
                  <li>Sassy CSS</li>
                  <li>HTML 5</li>
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
                    >
                      EEL2
                    </Link>{" "}
                    Software Plugin Development
                  </li>
                  <li>Lua Scripting</li>
                  <li>Visual Basic for Application (VBA)</li>
                  <li>Google Apps Script (GAS)</li>
                  <li>Vector-Based Graphic Design - InkScape</li>
                  <li>Sound Design</li>
                  <li>Music Production - Reaper / Cubase</li>
                </ul>
              </figure>
            </dialog>
          </div>
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2>Accessible</h2>
              <p>
                The web is even better when it is available to everyone. I am
                passionate about ease-of-access and bake it in to my designs. I
                seek out best practices and make tools for developers to help
                make websites more accessible.
              </p>
            </div>
            <ul className=" list-disc ">
              <li>Links that skip to main content for keyboard navigation</li>
              <li>
                Light and Dark modes for different abilities and preferences
              </li>
              <li>Perfect colour contrast for easy reading and navigating</li>
            </ul>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2>Open-Source</h2>
              <p>
                No developer is an island and Open-Source software is what
                allows us to connect and share good ideas. My background as a
                teacher showed me the value of sharing best practices and you
                can find the source code for all my projects on GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
