"use client";

import About from "@/pages/homepage/about/About";
import Footer from "@/pages/homepage/footer/Footer";
import Header from "@/pages/homepage/header/Header";
import MainContentLink from "@/pages/homepage/header/MainContentLink";
import Hero from "@/pages/homepage/hero/Hero";
import Projects from "@/pages/homepage/projects/Projects";
import IntersectionProvider from "@/utilities/contexts/IntersectionProvider";
import { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "GLD Portfolio",
  description:
    "View my portfolio projects, see my source code and get in touch with me.",
  keywords:
    "portfolio, React, web, coding, developer, HTML, CSS, JavaScript, TypeScript",
  authors: [{ name: "GLD", url: "https://github.com/GLD5000" }],
  manifest: "/manifest.json",
  icons: { icon: "/gldcondensed.ico" },
};

export default function HomePage() {
  const [colourTheme, setColourTheme] = useState(true);
  function toggleColourTheme() {
    setColourTheme((currentTheme: boolean) => !currentTheme);
  }

  return (
    <section
      id="theme-wrapper"
      className={`h-screen w-screen ${colourTheme ? "dark" : ""}`}
    >
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
          <div className="h-screen bg-secondary-light dark:bg-secondary"></div>

          <About />
          <Projects />
        </IntersectionProvider>

        <Footer />
      </main>
    </section>
  );
}
