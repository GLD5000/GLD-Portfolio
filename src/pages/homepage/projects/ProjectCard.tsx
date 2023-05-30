import GitHubSvg from "@/icons/GitHubSvg";
import NewWindowSvg from "@/icons/NewWindow";
// import PlaySvg from "@/icons/PlaySvg";
import Link from "next/link";
import { ReactNode } from "react";

export default function ProjectCard({
  images,
  text,
  subtitle,
  title,
  mainUrl,
  repoUrl,
}: {
  images: ReactNode;
  text: string;
  subtitle: string;
  title: ReactNode;
  mainUrl: string;
  repoUrl: string;
}) {
  return (
    <div className="mx-auto grid w-full max-w-body items-center gap-6 self-center sm:w-full sm:gap-10 sm:px-8 lg:grid-cols-2">
      <div className="relative mx-auto flex aspect-[1/1] w-full max-w-[25rem] sm:w-[80%]">
        {images}
      </div>

      <div className="mx-auto grid h-fit max-w-[95%] gap-6 sm:gap-10">
        <div className="mx-auto grid h-fit w-fit gap-2 sm:gap-4">
          {title}
          <b className="mx-auto text-center text-lg sm:text-xl">{subtitle}</b>
        </div>
        <p className="mx-auto mb-0 max-w-[36rem] text-justify text-xs xs:text-sm sm:px-4 sm:text-base">
          {text}
        </p>
        <div className="mx-auto grid h-fit w-fit gap-2 sm:grid-cols-2 lg:gap-6">
          <Link
            className="m-auto flex h-fit w-[12rem] flex-row items-center justify-center gap-2 rounded-full border-2 border-black bg-white p-2 text-center text-lg font-bold text-black hover:border-current hover:bg-black hover:text-white hover:transition focus:bg-black focus:text-white focus:transition"
            target="_blank"
            referrerPolicy="no-referrer"
            href={repoUrl ?? ""}
          >
            <div className="my-auto h-8 w-8">
              <GitHubSvg />
            </div>
            Source Code
          </Link>

          <Link
            className="m-auto flex h-fit w-[12rem] flex-row items-center justify-center gap-2 rounded-full border-2 border-black bg-primary p-2 text-center text-lg font-bold text-white hover:bg-white hover:text-black hover:transition focus:bg-white focus:text-black focus:transition"
            target="_blank"
            referrerPolicy="no-referrer"
            href={mainUrl ?? ""}
          >
            <div className="my-auto h-8 w-8">
              {/* <PlaySvg /> */}
              <NewWindowSvg />
            </div>
            Live Website
          </Link>
        </div>
      </div>
    </div>
  );
}
