import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "./projects/Header";
import Footer from "./projects/Footer";
import { useState } from "react";
import MainContentLink from "./projects/header/MainContentLink";
import Hero from "./hero/Hero";
import Projects from "./projects/Projects";

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
      <main>
        <section
          id="theme-wrapper"
          className={colourTheme ? "dark" : undefined}
        >
          <section className="relative flex h-screen snap-y snap-proximity snap-normal flex-col overflow-x-hidden overflow-y-scroll scroll-smooth border-border bg-bg text-txt-main dark:border-border-dk dark:bg-bg-dk dark:text-txt-main-dk ">
            <MainContentLink />
            <Header
              toggleColourTheme={toggleColourTheme}
              colourTheme={colourTheme}
            />
            <Projects />
            <Footer />
          </section>
        </section>
      </main>
    </>
  );
}
