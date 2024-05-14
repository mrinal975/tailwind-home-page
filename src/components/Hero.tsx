import { ReactTyped } from "react-typed";
function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col max-w-[800px]]">
        <p className="text-[#00df9a] font-bold uppercase text-[10px] p-2">
          Growing with data analytics
        </p>
        <h1 className="md:text-6xl sm:text-3xl text-2xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="font-bold md:text-3xl sm:text-2xl">
            Fast, flexible financing for
          </p>
          <ReactTyped
            className="font-bold md:text-3xl md:pl-4 sm:text-2xl pl-1"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-xl text-sm font-bold text-gray-600">
          Monitor your data analytics to increase revenue for BTB, BTC, and SASS
          platforms
        </p>
        <button className="bg-[#00df9a] text-black px-4 py-2 mt-4 w-[200px] rounded-md font-medium mx-auto">
          Get started
        </button>
      </div>
    </div>
  );
}

export default Hero;
