import { ReactElement, RefObject } from "react";

export default function Modal({
  content,
  refIn,
}: {
  content: ReactElement;
  refIn: RefObject<HTMLDialogElement>;
}) {
  return (
    <dialog ref={refIn} className="m-auto gap-6 rounded p-10 text-black">
      <button
        className="absolute right-0 top-0 m-1 p-1 text-xs text-txt-mid hover:bg-black hover:text-white hover:transition focus:bg-black focus:text-white focus:transition"
        type="button"
        onClick={() => {
          refIn.current?.close();
        }}
      >
        Close
      </button>

      {content}
    </dialog>
  );
}
