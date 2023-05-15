import CloseSvg from "@/icons/CloseSvg";
import { ReactElement, RefObject } from "react";

export default function Modal({
  content,
  refIn,
}: {
  content: ReactElement;
  refIn: RefObject<HTMLDialogElement>;
}) {
  function handleClose() {
    refIn.current?.close();
  }
  return (
    <dialog
      ref={refIn}
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
  );
}
