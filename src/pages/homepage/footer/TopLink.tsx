import ToTopSvg from "@/icons/ToTopSvg";

export default function TopLink() {
  return (
    <a
      href="#hero"
      className="flex flex-row items-center justify-between gap-2 text-txt-mid hover:text-txt-main hover:underline hover:decoration-current hover:underline-offset-2 hover:transition focus:text-txt-main focus:underline focus:decoration-current  focus:underline-offset-2 focus:transition dark:text-txt-mid-dk dark:hover:text-txt-main-dk dark:focus:text-txt-main-dk"
    >
      To top
      <ToTopSvg />
    </a>
  );
}
