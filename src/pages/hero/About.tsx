export default function About() {
  return (
    <section
      id="about"
      className="h-screen w-full bg-bg-var-dk text-txt-main-dk"
    >
      <div className="mx-auto flex  h-full  w-body min-w-body max-w-body flex-col bg-transparent ">
        <div className="mt-20 grid w-body-sm min-w-body max-w-body grow gap-10 bg-mesh-gradient bg-right bg-no-repeat sm:w-body">
          <h1 className="mx-auto text-8xl">{`Hello, I'm Gareth`}</h1>
          <p className=" mx-auto w-fit text-xl">
            I am a web developer based near London in the UK.
          </p>

          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2>Creative</h2>
              <p className=" max-w-[40rem]">
                From software, to music, sound and graphics: I love to create
                and believe in the power of innovation. I enjoy finding new ways
                to tackle challenges within a project and create value for
                users. These are the tools I like using to make it happen.
              </p>
            </div>
            <ul className="list-disc">
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind</li>
              <li>Vite</li>
              <li>Vitest</li>
              <li>Husky</li>
            </ul>
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
