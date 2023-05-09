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
    <div className="mx-auto grid w-full max-w-[500px] snap-start scroll-my-24 gap-10 lg:snap-none">
      <div className="grid gap-4">
        <h2 className="mx-auto text-center font-bold">{title}</h2>
        <Image
          placeholder="blur"
          className=" mx-auto w-full max-w-[300px] rounded-xl shadow-xl shadow-black"
          src={image}
          alt="Colour Picker"
        />
      </div>
      <div className="grid gap-6">
        <p>{text}</p>

        {cta}
      </div>
    </div>
  );
}
