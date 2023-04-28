import Image from "next/image";
import ComboCropped from "src/assets/contrasttool/ComboCropped.jpg";
import InfoTableCropped from "src/assets/contrasttool/InfoTableCropped.jpg";
import MatrixACropped from "src/assets/contrasttool/MatrixACropped.jpg";
import MatrixBCropped from "src/assets/contrasttool/MatrixBCropped.jpg";
import PickerCropped from "src/assets/contrasttool/PickerSoloCropped.jpg";
import InputCropped from "src/assets/contrasttool/InputCropped.jpg";

export default function ContrastLabCard() {
  return (
    <div className="mx-auto grid w-screen  max-w-body items-center self-center px-4 py-10 sm:w-full sm:px-8 lg:grid-cols-2">
      <div className="grid">
        <a
          className=" mx-auto mt-10"
          href="https://contrast-tool.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="  flex flex-row overflow-clip rounded-lg border-2 border-current ">
            <h1 className=" rounded-none bg-white p-3 font-black  leading-6 text-black sm:p-[0.95rem] sm:text-6xl">
              CONTRAST
            </h1>
            <h1 className="  rounded-none bg-black p-3 font-black leading-6 text-white sm:p-[0.95rem] sm:text-6xl">
              LAB
            </h1>
          </div>
        </a>

        <b className="mx-auto mt-2 mb-20 text-center text-lg sm:text-xl">
          Create Accessible Colour Combinations
        </b>
      </div>
      <div className="relative mx-auto flex aspect-[1/1] w-[80%] max-w-[35rem]">
        <Image
          className="absolute bottom-0 left-0 h-[25%] w-auto rounded-md shadow-xl shadow-black"
          src={PickerCropped}
          alt="Colour Picker"
        />
        <Image
          className="absolute top-0 left-0 h-[37%] w-auto rounded-md shadow-xl shadow-black"
          src={InputCropped}
          alt="Colour Picker"
        />
        <Image
          className="absolute top-[36%] left-[5%] h-[38%] w-auto rounded-md shadow-xl shadow-black"
          src={InfoTableCropped}
          alt="Colour Picker"
        />
        {/* <Image
          className="absolute rounded-md bottom-0 left-0 h-[45%] w-auto shadow-xl shadow-black"
          src={MatrixBCropped}
          alt="Colour Picker"
        /> */}
        <Image
          className="absolute bottom-0 right-0 h-[45%] w-auto rounded-3xl shadow-xl shadow-black"
          src={MatrixACropped}
          alt="Colour Picker"
        />
        <Image
          className="absolute top-[7%] right-[12%] h-[53%] w-auto rounded-3xl shadow-xl shadow-black"
          src={ComboCropped}
          alt="Colour Picker"
        />
      </div>
    </div>
  );
}
