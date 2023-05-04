import Head from "next/head";
import { Inter } from "@next/font/google";
import Body from "./projects/Body";
import Header from "./projects/Header";
import Footer from "./projects/Footer";
import { useState } from "react";
import MainContentLink from "./projects/header/MainContentLink";
import Hero from "./hero/Hero";
import About from "./hero/About";

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
      <main className="relative h-screen w-screen overflow-y-auto overflow-x-hidden scroll-smooth">
        <Hero />
        <Header
          toggleColourTheme={toggleColourTheme}
          colourTheme={colourTheme}
        />
        <div className="h-screen bg-black"></div>
        <About />
      </main>
    </>
  );
}
