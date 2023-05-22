export default function PlaySvg({ classes = "stroke-none fill-current " }) {
  return (
    <div className="pointer-events-none my-auto h-full w-full rounded-none">
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
        viewBox="0 0 16 16"
      >
        <path
          d="M 8,0 C 3.581722,0 0,3.581722 0,8 c 0,4.418277 3.581722,8 8,8 4.418277,0 8,-3.581723 8,-8 C 16,3.581722 12.418277,0 8,0 Z M 4.7940624,3.4308035 c 0.1772955,-0.020035 0.4585968,0.1026418 0.8928572,0.2834823 0.9925951,0.413349 5.1497134,2.7259222 7.4165514,3.7522321 0.874298,0.3958375 0.847325,0.6767762 -0.02902,1.0758929 C 10.840733,9.559717 6.8086105,11.780561 5.7003124,12.274554 4.5920145,12.768546 4.5083482,12.810912 4.5083482,11.63393 V 4.40625 c 0,-0.6858327 0.057763,-0.949687 0.2857142,-0.9754465 z"
          className={classes}
        />
      </svg>
    </div>
  );
}
