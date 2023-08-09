import { ReactNode } from "react";
import IntersectionReference from "./IntersectionReference";

export default function IntersectionWrapper({
  identity,
  children,
}: {
  identity: string;
  children: ReactNode;
}) {
  return (
    <section id={identity} className="relative w-full">
      <IntersectionReference identity={identity} />
      {children}
    </section>
  );
}
