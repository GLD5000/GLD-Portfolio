import { useRef } from "react";
import Link from "next/link";
import AboutCard from "./AboutCard";
import CreativityCard from "./cards/CreativityCard";
import AccessibilityCard from "./cards/AccessibilityCard";
import OpenSourceCard from "./cards/OpenSourceCard";

export default function CardGrid() {
  const stackModal = useRef<HTMLDialogElement>(null);
  const accessModal = useRef<HTMLDialogElement>(null);
  const contactModal = useRef<HTMLDialogElement>(null);

  return (
    <div className="grid gap-10 lg:grid-cols-3">
      <CreativityCard />
      <AccessibilityCard />
      <OpenSourceCard />
    </div>
  );
}
