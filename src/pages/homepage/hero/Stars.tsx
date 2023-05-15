import { ReactElement } from "react";

function getStars() {
  const NUMBER_ARRAY = [
    ["61.19%", "77.77%"],
    ["32.27%", "75.29%"],
    ["5.86%", "27.88%"],
    ["77.8%", "87.76%"],
    ["44.46%", "77.35%"],
    ["30.88%", "6.29%"],
    ["50.45%", "66.43%"],
    ["89.36%", "35.08%"],
    ["4.83%", "25.79%"],
    ["17.04%", "44.87%"],
    ["32.92%", "99.51%"],
    ["63.83%", "52.55%"],
    ["77.38%", "67.76%"],
    ["74.74%", "33.62%"],
    ["71.15%", "8.86%"],
    ["22.45%", "26.45%"],
    ["82.63%", "70.09%"],
    ["16.49%", "90.61%"],
    ["6.05%", "98.01%"],
    ["45.12%", "74.79%"],
    ["49.54%", "22.79%"],
    ["21.24%", "64.03%"],
    ["42.43%", "63.05%"],
    ["85.96%", "6.8%"],
    ["84.53%", "33.55%"],
    ["91.85%", "14.53%"],
    ["66.02%", "82.49%"],
    ["62.87%", "12.88%"],
    ["86.45%", "86.32%"],
    ["42.47%", "42.57%"],
    ["55.94%", "10.15%"],
    ["87.05%", "79.69%"],
    ["68.9%", "77.71%"],
    ["65.93%", "73.89%"],
    ["28.23%", "54.31%"],
    ["67.85%", "23.63%"],
    ["43.34%", "8.34%"],
    ["7.61%", "47.48%"],
    ["67.6%", "48.1%"],
    ["61.94%", "12.58%"],
    ["56.9%", "30.72%"],
    ["94.57%", "94.92%"],
    ["31.15%", "20.24%"],
    ["90.46%", "35.19%"],
    ["78.14%", "62.83%"],
    ["88.67%", "0.35%"],
    ["28.51%", "2.67%"],
    ["69.43%", "22.91%"],
    ["93.34%", "73.81%"],
    ["86.76%", "57.03%"],
    ["50.03%", "72.77%"],
    ["98.72%", "3.72%"],
    ["42.96%", "3.26%"],
    ["20.66%", "5.87%"],
    ["29.64%", "37.14%"],
    ["69.31%", "57.56%"],
    ["6.9%", "93.69%"],
    ["18.85%", "76.23%"],
    ["69.33%", "34%"],
    ["83.84%", "66.18%"],
    ["78.31%", "28.72%"],
    ["74.22%", "83.9%"],
    ["53.82%", "6.08%"],
    ["22.44%", "15.25%"],
    ["47.97%", "49.38%"],
    ["11.64%", "80.92%"],
    ["23.82%", "75.95%"],
    ["47.6%", "10.2%"],
    ["66.24%", "45.81%"],
    ["30.73%", "62.63%"],
    ["23.13%", "15.29%"],
    ["83.52%", "54.73%"],
    ["85.69%", "86.11%"],
    ["67.07%", "94.38%"],
    ["62.07%", "9.92%"],
    ["85.65%", "19.78%"],
    ["37.81%", "23.65%"],
    ["34.81%", "90.11%"],
    ["71.54%", "6.07%"],
    ["57.66%", "90.16%"],
    ["22.7%", "37.6%"],
    ["93.24%", "20.11%"],
    ["55.73%", "42.49%"],
    ["49.18%", "92.56%"],
    ["82.59%", "17.99%"],
    ["0.93%", "89.13%"],
    ["39.6%", "50.84%"],
    ["97.66%", "28.47%"],
    ["85.18%", "5.81%"],
    ["39.56%", "93.08%"],
    ["21.63%", "5.95%"],
    ["74.53%", "55.83%"],
    ["84.54%", "3.77%"],
    ["18.76%", "75.9%"],
    ["76.98%", "18.98%"],
    ["26.04%", "42.33%"],
    ["76.2%", "6.38%"],
    ["18.63%", "66.23%"],
    ["26.36%", "1.42%"],
    ["52.59%", "8.17%"],
  ];

  let count = 0;

  // const logArray = [];
  // for (let i = 0; i < 50; i++) {
  //   const left = `${Math.round(Math.random() * 10000) / 100}%`;
  //   const top = `${Math.round(Math.random() * 10000) / 100}%`;
  //   const leftb = `${Math.round(Math.random() * 10000) / 100}%`;
  //   const topb = `${Math.round(Math.random() * 10000) / 100}%`;
  //   logArray.push([left, top]);
  //   logArray.push([leftb, topb]);
  // }

  // console.log("logArray:", logArray);
  const starArray: ReactElement[] = [];
  for (let i = 0; i < 50; i++) {
    starArray.push(
      <circle
        key={count}
        cx={NUMBER_ARRAY[count][0]}
        cy={NUMBER_ARRAY[count][1]}
        r="1.25"
        className="fill-current"
      ></circle>
    );
    starArray.push(
      <circle
        key={count + 1}
        cx={NUMBER_ARRAY[count + 1][0]}
        cy={NUMBER_ARRAY[count + 1][1]}
        r="0.5"
        className="fill-current"
      ></circle>
    );
    count += 2;
  }
  return starArray;
}

export default function Stars() {
  const starArray = getStars();
  return (
    <svg
      key="starArray"
      className="  zoom-in-slow absolute top-0 left-0 z-[997] h-screen w-full py-[5%]"
    >
      {starArray}
    </svg>
  );
}