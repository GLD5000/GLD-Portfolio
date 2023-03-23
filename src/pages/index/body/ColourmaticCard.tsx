export default function ColourmaticCard() {
  return (
    <div className="mx-auto grid w-screen max-w-body items-center self-center px-4 py-10 sm:w-full sm:px-8">
      <div className=" mx-auto mt-10 flex flex-row overflow-clip rounded-lg border-2 border-current font-colourmatic ">
        <h1 className=" text rounded-none bg-white p-3 font-colourmatic text-2xl tracking-tight text-black text-shadow-colourmatic sm:p-[0.95rem] sm:text-4xl">
          &lt;ColourMatic&gt;
        </h1>
      </div>
      <b className="mx-auto mt-2 mb-20 text-center text-lg sm:text-xl">
        Custom CSS Colour Scheme Generator
      </b>
    </div>
  );
}
