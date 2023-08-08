export default function ToTopSvg({ classes = " fill-none stroke-2 " }) {
  return (
    <div
      className={`pointer-events-none h-6 w-6 rounded-full border-current bg-current stroke-secondary-light  dark:stroke-secondary `}
    >
      <svg
        style={{
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        id="add-svg"
        role="img"
        aria-label="Add Section"
        height="100%"
        width="100%"
        viewBox="0 0 32 32"
      >
        <path
          d="m 10,16 6,4 6,-4 M 16,4 v 16 m -8,3.042356 h 16"
          transform="matrix(1,0,0,-1,0,31)"
          className={classes}
        />
      </svg>
    </div>
  );
}
