import Head from "next/head";
import { Inter } from "@next/font/google";
import Body from "./index/Body";
import Header from "./index/Header";
import Footer from "./index/Footer";
import { useState } from "react";
import MainContentLink from "./index/header/MainContentLink";

const inter = Inter({ subsets: ["latin"] });

function setThemeToLocalStorage(themeBoolean: boolean) {
  if (typeof window !== "undefined") {
    localStorage.setItem("theme", themeBoolean.toString());
  }
}

export default function Home() {
  const [colourTheme, setColourTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") !== "false"
      : true
  );
  function toggleColourTheme() {
    setColourTheme((currentTheme: boolean) => !currentTheme);
    setThemeToLocalStorage(!colourTheme);
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
          <section className="flex h-screen flex-col overflow-x-hidden overflow-y-scroll border-border bg-bg text-txt-main dark:border-border-dk dark:bg-bg-dk dark:text-txt-main-dk ">
            <MainContentLink />
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
