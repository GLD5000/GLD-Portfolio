import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "./index/header/Header";
import Footer from "./index/footer/Footer";
import { useState } from "react";
import MainContentLink from "./index/header/MainContentLink";
import Hero from "./index/hero/Hero";
import About from "./index/about/About";
import Projects from "./index/projects/Projects";
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
          className={`relative h-screen w-screen snap-y snap-proximity snap-normal flex-col overflow-y-auto overflow-x-hidden scroll-smooth   border-border bg-bg text-txt-main dark:border-border-dk dark:bg-bg-dk dark:text-txt-main-dk  ${
            colourTheme ? "dark" : ""
          }`}
        >
          <IntersectionProvider>
            <MainContentLink />
            <Hero />
            <Header
              toggleColourTheme={toggleColourTheme}
              colourTheme={colourTheme}
            />
            <div className="h-screen bg-black"></div>

            <About />
            <Projects />
          </IntersectionProvider>

          <Footer />
        </main>
      </section>
    </>
  );
}
