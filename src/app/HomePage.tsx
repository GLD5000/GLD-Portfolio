"use client";

import About from "@/pages/homepage/about/About";
import Contact from "@/pages/homepage/contact/Contact";
import Footer from "@/pages/homepage/footer/Footer";
import Header from "@/pages/homepage/header/Header";
import MainContentLink from "@/pages/homepage/header/MainContentLink";
import Hero from "@/pages/homepage/hero/Hero";
import Projects from "@/pages/homepage/projects/Projects";
import IntersectionProvider from "@/utilities/contexts/IntersectionProvider";
import { useState } from "react";

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
        className={`relative h-screen w-screen flex-col overflow-y-auto overflow-x-hidden border-border   bg-bg text-txt-main motion-safe:scroll-smooth dark:border-border-dk dark:bg-bg-dk dark:text-txt-main-dk  ${
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
          <div className="h-screen bg-secondary-light dark:bg-secondary" />
          <Projects />
          <About />
          <Contact />
        </IntersectionProvider>

        <Footer />
      </main>
    </section>
  );
}
