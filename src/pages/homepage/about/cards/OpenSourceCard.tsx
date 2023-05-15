import { useRef } from "react";
import imageIn from "src/assets/aboutme/GitHubHeatMap.jpg";
import AboutCard from "../AboutCard";

import OpenSourceModal from "../modals/OpenSourceModal";

export default function OpenSourceCard() {
  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <AboutCard
        image={imageIn}
        text="No developer is an island and Open-Source software is what allows us to connect and share good ideas. Every tool I make is free and open source. All my source code is freely available on GitHub on my profile where I have over 2,800 commits over the past year."
        title="Open-Source"
        cta={
          <button
            type="button"
            className="m-auto h-fit w-60 rounded-full border-2 border-black bg-primary px-4 py-3 text-xl text-white hover:bg-white hover:text-black hover:transition focus:bg-white focus:text-black focus:transition"
            onClick={() => {
              modalRef.current?.showModal();
            }}
          >
            Connect With Me
          </button>
        }
      />
      <OpenSourceModal refPassed={modalRef} />
    </>
  );
}
