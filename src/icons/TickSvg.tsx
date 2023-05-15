export default function TickSvg({
  classes = "stroke-current stroke-1",
}: {
  classes?: string;
}) {
  return (
    <div className="pointer-events-none m-auto h-7 w-7">
      <svg
        id="tick-svg"
        role="img"
        aria-label="Toggle On"
        height="100%"
        width="100%"
        viewBox="0 0 16 16"
      >
        <circle
          cx="8"
          cy="8"
          r="6.5"
          style={{
            strokeLinecap: "round",
            fill: "none",
          }}
          className={classes}
        />
        <path
          d="M 4.4493325,8.0000309 6.9936275,11.101361 10.85,5"
          style={{
            strokeLinecap: "round",
            fill: "none",
          }}
          className={classes}
        />
      </svg>
    </div>
  );
}
