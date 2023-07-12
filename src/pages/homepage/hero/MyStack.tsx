import JsLogo from "@/icons/corporate/JsLogo";
import NextLogo from "@/icons/corporate/NextLogo";
import ReactLogo from "@/icons/corporate/ReactLogo";
import TailwindLogo from "@/icons/corporate/TailwindLogo";
import TsLogo from "@/icons/corporate/TsLogo";
import Link from "next/link";

export default function MyStack() {
  return (
    <div className="mx-auto flex flex-row flex-wrap items-center">
      {/* <p className="m-0 p-2 text-lg font-bold">My Stack:</p> */}
      <Link
        href="https://nextjs.org"
        target="_blank"
        referrerPolicy="no-referrer"
        className=" h-fit w-fit rounded p-2 text-current"
      >
        <NextLogo />
        {/* Next.js */}
      </Link>
      <Link
        href="https://react.dev/"
        target="_blank"
        referrerPolicy="no-referrer"
        className=" w-fit rounded p-2 text-current"
      >
        <ReactLogo />
        {/* <p className="w-fit mx-auto my-0">React</p> */}
      </Link>
      <Link
        href="https://www.typescriptlang.org/"
        target="_blank"
        referrerPolicy="no-referrer"
        className=" w-fit rounded p-2 text-current"
      >
        <TsLogo />
        {/* TypeScript */}
      </Link>
      <Link
        href="https://www.typescriptlang.org/"
        target="_blank"
        referrerPolicy="no-referrer"
        className=" w-fit rounded p-2 text-current"
      >
        <JsLogo />
        {/* TypeScript */}
      </Link>

      <Link
        href="https://tailwindcss.com/"
        target="_blank"
        referrerPolicy="no-referrer"
        className=" w-fit rounded p-2 text-current"
      >
        <TailwindLogo />
        {/* Tailwind CSS */}
      </Link>
    </div>
  );
}
