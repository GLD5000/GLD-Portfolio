import Stars from "./Stars";
import HeroCta from "./HeroCta";
import DarkModeBtn from "./DarkModeBtn";

export default function Hero() {
  return (
    <div className=" relative grid min-h-screen w-screen">
      <Stars />
      <div className="absolute top-0 left-0 z-50 w-full">
        <div className="mx-auto w-body-sm min-w-body max-w-body flex-col bg-transparent sm:w-body">
          <DarkModeBtn />
        </div>
      </div>
      <div className="relative h-full w-full   min-w-body max-w-body items-center justify-center xs:mx-auto lg:w-body">
        <HeroCta />
      </div>
    </div>
  );
}
