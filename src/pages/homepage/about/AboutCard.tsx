import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

export default function AboutCard({
  image,
  text,
  title,
  cta,
}: {
  image: StaticImageData;
  text: string;
  title: string;
  cta: ReactNode;
}) {
  return (
    <div className="mx-auto grid w-full max-w-[500px] grid-rows-autoFrAuto gap-10">
      <div className="grid gap-4">
        <h2 className="mx-auto text-center font-bold">{title}</h2>
        <Image
          placeholder="blur"
          className=" mx-auto w-full max-w-[280px] rounded-xl shadow-xl shadow-black"
          src={image}
          alt="Colour Picker"
        />
      </div>
      <p className="my-0 mx-auto text-justify lg:min-h-[200px] xl:min-h-[144px]">
        {text}
      </p>

      {cta}
    </div>
  );
}
