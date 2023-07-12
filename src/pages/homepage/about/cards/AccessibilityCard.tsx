import accessible from "src/assets/aboutme/accessible.jpg";
import AboutCard from "../AboutCard";

import AccessibilityModal from "../modals/AccessibilityModal";

export default function AccessibilityCard() {
  return (
    <>
      <AboutCard
        image={accessible}
        text="The web is even better when it is available to everyone. I am passionate about ease-of-access and bake it in to my designs. I seek out best practices and make tools for developers to help make websites more accessible."
        title="Accessibility"
        cta={<AccessibilityModal />}
      />
    </>
  );
}
