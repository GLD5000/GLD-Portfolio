import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "./src/pages/homepage/header/Header";
import Footer from "./src/pages/homepage/footer/Footer";
import { useState } from "react";
import MainContentLink from "./src/pages/homepage/header/MainContentLink";
import Hero from "./src/pages/homepage/hero/Hero";
import About from "./src/pages/homepage/about/About";
import Projects from "./src/pages/homepage/projects/Projects";
import IntersectionProvider from "@/utilities/contexts/IntersectionProvider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [colourTheme, setColourTheme] = useState(true);
  function toggleColourTheme() {
    setColourTheme((currentTheme: boolean) => !currentTheme);
  }

  return (
    <>
      <Head>
        <title>GLD Portfolio</title>
        <meta
          name="description"
          content="View my portfolio projects, see my source code and get in touch with me."
        />
        <meta
          name="keywords"
          content="web, coding, developer, HTML, CSS, JavaScript"
        />
        <meta name="author" content="GLD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/gldcondensed.ico" />
      </Head>
      <section id="theme-wrapper" className={colourTheme ? "dark" : undefined}>
        <main
          className={`relative h-screen w-screen snap-y snap-proximity snap-normal flex-col overflow-y-auto overflow-x-hidden border-border   bg-bg text-txt-main motion-safe:scroll-smooth dark:border-border-dk dark:bg-bg-dk dark:text-txt-main-dk  ${
            colourTheme ? "dark" : ""
          }`}
        >
          <IntersectionProvider>
            <MainContentLink />
            <Hero
              toggleColourTheme={toggleColourTheme}
              colourTheme={colourTheme}
            />
            <Header
              toggleColourTheme={toggleColourTheme}
              colourTheme={colourTheme}
            />
            <div className="h-screen bg-purple-light dark:bg-purple"></div>

            <About />
            <Projects />
          </IntersectionProvider>

          <Footer />
        </main>
      </section>
    </>
  );
}
