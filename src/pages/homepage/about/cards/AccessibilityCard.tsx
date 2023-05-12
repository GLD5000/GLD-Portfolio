import AboutCard from "../AboutCard";
import { useRef } from "react";
import accessible from "src/assets/aboutme/accessible.jpg";

import AccessibilityModal from "../modals/AccessibilityModal";

export default function AccessibilityCard() {
  const modalRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <AboutCard
        image={accessible}
        text={
          "The web is even better when it is available to everyone. I am passionate about ease-of-access and bake it in to my designs. I seek out best practices and make tools for developers to help make websites more accessible."
        }
        title={"Accessibility"}
        cta={
          <>
            <button
              type="button"
              className="m-auto h-fit w-60 rounded-full border-2 border-black bg-brand px-4 py-3 text-xl text-white hover:bg-white hover:text-black hover:transition focus:bg-white focus:text-black focus:transition"
              onClick={() => {
                modalRef.current?.showModal();
              }}
            >
              Find Out More
            </button>
          </>
        }
      />
      <AccessibilityModal refPassed={modalRef} />
    </>
  );
}
