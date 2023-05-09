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
      className="m-auto max-w-[95vw] gap-6 rounded p-10 text-purple"
    >
      <button
        id="close-btn"
        aria-label="close-information-box"
        type="button"
        onClick={handleClose}
        className="bg-palegrey absolute top-2 right-2 h-8 w-8 rounded-full border-2 bg-purple p-1 text-white hover:bg-white hover:text-purple hover:transition focus:bg-white focus:text-purple focus:transition"
      >
        <CloseSvg />
      </button>
      {content}
    </dialog>
  );
}
