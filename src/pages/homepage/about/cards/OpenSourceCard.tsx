import imageIn from "src/assets/aboutme/GitHubHeatMap.jpg";
import AboutCard from "../AboutCard";

export default function OpenSourceCard() {
  return (
    <AboutCard
      image={imageIn}
      text="No developer is an island and Open-Source software is what allows us to connect and share good ideas. Every tool I make is free and open source. All my source code is freely available on GitHub on my profile where I have over 3,000 commits over the past year."
      title="Open-Source"
      cta={
        <a
          href="#contact"
          className="mx-auto h-fit w-60 rounded-full border-2 border-black bg-primary px-4 py-3 text-center text-xl font-bold text-white hover:bg-white hover:text-black hover:transition focus:bg-white focus:text-black focus:transition"
        >
          Connect With Me
        </a>
      }
    />
  );
}
