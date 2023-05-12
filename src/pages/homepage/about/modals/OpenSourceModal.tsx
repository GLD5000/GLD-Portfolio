import Link from "next/link";
import Modal from "../../../../elements/Modal";
import { RefObject } from "react";
import Image from "next/image";
import portrait from "src/assets/aboutme/bwportrait.jpg";

export default function OpenSourceModal({
  refPassed,
}: {
  refPassed: RefObject<HTMLDialogElement>;
}) {
  return (
    <Modal
      refIn={refPassed}
      content={
        <div className="grid gap-8 lg:grid-cols-2">
          <Image
            placeholder="blur"
            src={portrait}
            className="m-auto h-40 w-40 rounded-full shadow-xl shadow-black"
            alt={"Gareth Photo"}
          />
          <div className="m-auto w-fit">
            <p className="m-0 mx-auto text-center text-4xl">Hi There!</p>
            <p className="m-0 mx-auto text-center text-xl">{`Let's chat!`}</p>
          </div>
          <Link
            className="m-auto h-fit w-60 rounded-full border-2 border-black bg-brand px-4 py-3 text-center text-xl text-white hover:bg-white hover:text-black hover:transition focus:bg-white focus:text-black focus:transition"
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://github.com/GLD5000"
          >
            Go To GitHub
          </Link>
          <Link
            className="m-auto h-fit w-60 rounded-full border-2 border-black bg-brand px-4 py-3 text-center text-xl text-white hover:bg-white hover:text-black hover:transition focus:bg-white focus:text-black focus:transition"
            target="_blank"
            referrerPolicy="no-referrer"
            href="https://www.linkedin.com/in/garethlouisdevlin/"
          >
            Go To LinkedIn
          </Link>
        </div>
      }
    />
  );
}
