"use client";

import CloseSvg from "@/icons/CloseSvg";
import { ReactElement, useRef } from "react";

export default function Modal({
  content,
  cta,
}: {
  content: ReactElement;
  cta?: string;
}) {
  const modalRef = useRef<HTMLDialogElement>(null);

  function handleClose() {
    setTimeout(() => {
      modalRef.current?.close();
    }, 200);
  }
  return (
    <>
      <button
        type="button"
        className="mx-auto h-fit w-60 rounded-full border-2 border-black bg-primary px-4 py-3 text-xl font-bold text-white hover:bg-white hover:text-black hover:transition focus:bg-white focus:text-black focus:transition"
        onClick={() => {
          modalRef.current?.showModal();
        }}
      >
        {cta || "Find Out More"}
      </button>
      <dialog
        ref={modalRef}
        className="m-auto max-w-[95vw] rounded-3xl border-2 bg-secondary-light p-2 text-black dark:bg-secondary dark:text-white"
      >
        <button
          id="close-btn"
          aria-label="close-information-box"
          type="button"
          onClick={handleClose}
          className="bg-palegrey sticky top-0 left-[100%] mr-auto h-8 w-8 rounded-full border-2 bg-secondary p-1 text-white hover:bg-white hover:text-black hover:transition focus:bg-white focus:text-black focus:transition"
        >
          <CloseSvg />
        </button>
        {content}
      </dialog>
    </>
  );
}
