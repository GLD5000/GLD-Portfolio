import Link from "next/link";
import { ReactNode } from "react";

export default function ProjectCard({
  images,
  text,
  subtitle,
  title,
  cta,
  url,
}: {
  images: ReactNode;
  text: string;
  subtitle: string;
  title: ReactNode;
  cta: ReactNode;
  url: string;
}) {
  return (
    <div className="mx-auto grid w-full max-w-body snap-start scroll-my-[7rem] items-center gap-8 self-center sm:w-full sm:gap-10 sm:px-8 lg:grid-cols-2">
      <div className="relative mx-auto flex aspect-[1/1] w-full max-w-[25rem] sm:w-[80%]">
        {images}
      </div>

      <div className="grid max-w-[95%] gap-8 sm:gap-10">
        <div className="grid gap-2 sm:gap-4">
          {title}
          <b className="mx-auto text-center text-lg sm:text-xl">{subtitle}</b>
        </div>
        <p className="mx-auto text-justify text-xs xs:text-sm sm:px-10 sm:text-base">
          {text}
        </p>
        <Link
          className="m-auto h-fit w-60 rounded-full border-2 border-black bg-brand p-2 text-center text-xl text-white hover:bg-white hover:text-black hover:transition focus:bg-white focus:text-black focus:transition"
          target="_blank"
          referrerPolicy="no-referrer"
          href={url ?? ""}
        >
          See It Live
        </Link>
      </div>
    </div>
  );
}
