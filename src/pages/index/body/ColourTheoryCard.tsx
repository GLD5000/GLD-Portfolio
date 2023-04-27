export default function ColourTheoryCard() {
  return (
    <div className="mx-auto grid  w-screen max-w-body items-center self-center px-4 py-10 sm:w-full sm:px-8">
      <div className="grid">
        <a
          className=" mx-auto mt-10"
          href="https://colour-theory.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className=" flex flex-row overflow-clip rounded-lg border-2 border-current font-colourmatic ">
            <h1 className=" text rounded-none bg-white p-3 font-colourmatic text-2xl tracking-tight text-black text-shadow-colourmatic sm:p-[0.95rem] sm:text-4xl">
              &lt;ColourTheory&gt;
            </h1>
          </div>
        </a>
        <b className="mx-auto mt-2 mb-20 text-center text-lg sm:text-xl">
          Custom CSS Colour Scheme Generator
        </b>
      </div>
      <div className="relative mx-auto flex aspect-[1/1] w-[90%] max-w-[50rem]">
        <img
          className="absolute bottom-0 left-[50%] h-[30%] w-auto shadow-lg shadow-black"
          src="/screenshots/colourtheory/SmallPickerBCropped.jpg"
          alt="Colour Picker"
        />
        <img
          className="absolute bottom-[50%] left-0 h-[45%] w-auto shadow-lg shadow-black"
          src="/screenshots/colourtheory/SaveCropped.jpg"
          alt="Colour Picker"
        />
        <img
          className="absolute top-0 right-0 h-[35%] w-auto shadow-lg shadow-black"
          src="/screenshots/colourtheory/CopyCropped.jpg"
          alt="Colour Picker"
        />
        <img
          className="absolute bottom-[25%] left-[30%] h-[45%] w-auto shadow-lg shadow-black"
          src="/screenshots/colourtheory/PickerBCropped.jpg"
          alt="Colour Picker"
        />
        <img
          className="absolute bottom-0 left-0 h-[45%] w-auto shadow-lg shadow-black"
          src="/screenshots/colourtheory/ComboCropped.jpg"
          alt="Colour Picker"
        />
      </div>
    </div>
  );
}
