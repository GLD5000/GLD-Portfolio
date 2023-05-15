import CreativityCard from "./cards/CreativityCard";
import AccessibilityCard from "./cards/AccessibilityCard";
import OpenSourceCard from "./cards/OpenSourceCard";

export default function CardGrid() {
  return (
    <div className="grid gap-10 lg:grid-cols-3">
      <CreativityCard />
      <AccessibilityCard />
      <OpenSourceCard />
    </div>
  );
}
