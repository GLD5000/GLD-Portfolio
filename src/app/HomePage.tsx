import About from "@/pages/homepage/about/About";
import Contact from "@/pages/homepage/contact/Contact";
import Footer from "@/pages/homepage/footer/Footer";
import Header from "@/pages/homepage/header/Header";
import MainContentLink from "@/pages/homepage/header/MainContentLink";
import Hero from "@/pages/homepage/hero/Hero";
import Projects from "@/pages/homepage/projects/Projects";
import {
  IntersectionProvider,
  IntersectionWrapper,
} from "@/utilities/intersectionObserver";

export default function HomePage() {
  return (
    <main
      className={`relative h-screen w-screen flex-col overflow-y-auto overflow-x-hidden border-border   bg-secondary-light text-txt-main motion-safe:scroll-smooth dark:border-border-dk dark:bg-secondary  dark:text-txt-main-dk  
        `}
    >
      <IntersectionProvider>
        <MainContentLink />
        <Header />
        <IntersectionWrapper identity="hero">
          <Hero />
        </IntersectionWrapper>
        <IntersectionWrapper identity="projects">
          <Projects />
        </IntersectionWrapper>
        <IntersectionWrapper identity="about">
          <About />
        </IntersectionWrapper>
        <IntersectionWrapper identity="contact">
          <Contact />
        </IntersectionWrapper>
      </IntersectionProvider>

      <Footer />
    </main>
  );
}
