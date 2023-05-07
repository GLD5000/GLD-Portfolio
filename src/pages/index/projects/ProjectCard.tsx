import { ReactNode } from "react";

export default function ProjectCard({
  image,
  text,
  subtitle,
  title,
  cta,
}: {
  image: ReactNode;
  text: string;
  subtitle: string;
  title: string;
  cta: ReactNode;
}) {
  return (
    <div className="mx-auto grid w-full  max-w-body items-center self-center sm:w-full sm:px-8 lg:grid-cols-2">
      <div className="grid max-w-[95%]">
        {title}
        <b className="mx-auto mt-2 mb-20 text-center text-lg sm:text-xl">
          {subtitle}
        </b>
        <p className="mb-0">{text}</p>
      </div>
      {image}{" "}
    </div>
  );
}
