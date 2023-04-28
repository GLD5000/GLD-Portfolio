import Head from "next/head";
import { Inter } from "@next/font/google";
import Body from "./index/Body";
import Header from "./index/Header";
import Footer from "./index/Footer";
import { useState } from "react";
import MainContentLink from "./index/header/MainContentLink";
import Hero from "./index/hero/Hero";

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
            <Hero />
            <Header
              toggleColourTheme={toggleColourTheme}
              colourTheme={colourTheme}
            />
            <Body />
            <Footer />
          </section>
        </section>
      </main>
    </>
  );
}
