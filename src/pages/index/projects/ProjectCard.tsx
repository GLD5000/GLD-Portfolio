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
    <div className="mx-auto grid w-full max-w-body snap-start scroll-my-24 items-center self-center sm:w-full sm:px-8 lg:grid-cols-2">
      <div className="p-6 lg:p-12">
        <div className="relative mx-auto flex aspect-[1/1] w-[80%] max-w-[35rem]">
          {images}
        </div>
      </div>

      <div className="grid max-w-[95%]">
        {title}
        <b className="mx-auto mt-4 mb-10 text-center text-lg sm:text-xl">
          {subtitle}
        </b>
        <p className="mx-auto mb-10 text-justify sm:px-10">{text}</p>
        <Link
          className="m-auto h-fit w-60 rounded-full border-2 border-black bg-brand px-4 py-3 text-center text-xl text-white hover:bg-white hover:text-black hover:transition focus:bg-white focus:text-black focus:transition"
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
