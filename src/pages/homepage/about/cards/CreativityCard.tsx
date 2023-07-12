import inkscape from "src/assets/aboutme/inkscape.jpg";
import AboutCard from "../AboutCard";
import CreativityModal from "../modals/CreativityModal";

export default function CreativityCard() {
  return (
    <>
      <AboutCard
        image={inkscape}
        text="From software, to music, sound and graphics: I love to create and believe in the power of innovation. I enjoy finding new ways to tackle challenges within a project and create value for users."
        title="Creativity"
        cta={<CreativityModal />}
      />
    </>
  );
}
