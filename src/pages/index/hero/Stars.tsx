import { ReactElement } from "react";

function getStars() {
  const starArray: ReactElement[] = [];
  for (let i = 0; i < 35; i++) {
    const left = `${Math.random() * 100}%`;
    const top = `${Math.random() * 100}%`;
    starArray.push(
      <div
        style={{ top: top, left: left }}
        className="black absolute h-[2px] w-[2px] bg-black drop-shadow-star dark:bg-white dark:drop-shadow-star-dk"
      ></div>
    );
    const leftb = `${Math.random() * 100}%`;
    const topb = `${Math.random() * 100}%`;
    starArray.push(
      <div
        style={{ top: topb, left: leftb }}
        className="black absolute h-[1px] w-[1px] bg-black drop-shadow-star dark:bg-white dark:drop-shadow-star-dk"
      ></div>
    );
  }
  return starArray;
}

export default function Stars() {
  const starArray = getStars();
  return (
    <div className="-z-index-1 absolute top-0 left-0 h-screen w-screen">
      {starArray}
    </div>
  );
}
