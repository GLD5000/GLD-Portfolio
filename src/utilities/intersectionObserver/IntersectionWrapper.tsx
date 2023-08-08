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
    <section id={identity} className="relative m-0 h-fit w-full p-0">
      <IntersectionReference identity={identity} />
      {children}
    </section>
  );
}
