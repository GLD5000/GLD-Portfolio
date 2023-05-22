import { useRef } from "react";
import inkscape from "src/assets/aboutme/inkscape.jpg";
import AboutCard from "../AboutCard";
import CreativityModal from "../modals/CreativityModal";

export default function CreativityCard() {
  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <AboutCard
        image={inkscape}
        text="From software, to music, sound and graphics: I love to create and believe in the power of innovation. I enjoy finding new ways to tackle challenges within a project and create value for users."
        title="Creativity"
        cta={
          <>
            <button
              type="button"
              className="mx-auto h-fit w-60 rounded-full border-2 border-black bg-primary px-4 py-3 text-xl text-white hover:bg-white hover:text-black hover:transition  focus:bg-white focus:text-black focus:transition"
              onClick={() => {
                modalRef.current?.showModal();
              }}
            >
              See My Skills
            </button>
          </>
        }
      />
      <CreativityModal refPassed={modalRef} />
    </>
  );
}
