export default function ContrastToolCard() {
  return (
    <div className="mx-auto grid w-screen max-w-body items-center self-center px-4 py-10 sm:w-full sm:px-8">
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
            TOOL
          </h1>
        </div>
      </a>

      <b className="mx-auto mt-2 mb-20 text-center text-lg sm:text-xl">
        Create Accessible Colour Combinations
      </b>
    </div>
  );
}
