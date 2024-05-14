import single from "../assets/single.png";
import double from "../assets/double.png";
import group from "../assets/triple.png";

function Cards() {
  return (
    <div className=" w-full py-[3rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto  grid md:grid-cols-3 gap-8">
        <div
          className="flex flex-col shadow-xl w-full border
         text-center hover:scale-105 duration-300 py-8"
        >
          <img
            src={single}
            alt="card"
            className="w-20 mx-auto mt-[-4rem] pt-[-10px] "
          />
          <h2 className="font-bold p-2 text-xl">Single User</h2>
          <p className="font-bold p-2 text-xl">$149</p>
          <div className="font-medium text-center">
            <p className="border-b mx-8 mt-4">1TB Storage</p>
            <p className="border-b mx-8">1 User Allowed</p>
            <p className="border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="border w-40 mx-auto px-6 py-1 mb-5 mt-3 rounded-lg bg-[#00df9a]">
            Buy Now
          </button>
        </div>
        <div
          className="flex flex-col shadow-xl w-full border
         text-center hover:scale-105 duration-300 py-8"
        >
          <img
            src={double}
            alt="card"
            className="w-20 mx-auto mt-[-4rem] pt-[-10px] "
          />
          <h2 className="font-bold p-2 text-xl">Double User</h2>
          <p className="font-bold p-2 text-xl">$199</p>
          <div className="font-medium text-center">
            <p className="border-b mx-8 mt-4">1TB Storage</p>
            <p className="border-b mx-8">1 User Allowed</p>
            <p className="border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="border w-40 mx-auto px-6 py-1 mb-5 mt-3 rounded-lg bg-[#00df9a]">
            Buy Now
          </button>
        </div>
        <div
          className="flex flex-col shadow-xl w-full border
         text-center hover:scale-105 duration-300 py-8"
        >
          <img
            src={group}
            alt="card"
            className="w-20 mx-auto mt-[-4rem] pt-[-10px] "
          />
          <h2 className="font-bold p-2 text-xl">Group User</h2>
          <p className="font-bold p-2 text-xl">$299</p>
          <div className="font-medium text-center">
            <p className="border-b mx-8 mt-4">1TB Storage</p>
            <p className="border-b mx-8">1 User Allowed</p>
            <p className="border-b mx-8">Send up to 2GB</p>
          </div>
          <button className="border w-40 mx-auto px-6 py-1 mb-5 mt-3 rounded-lg bg-[#00df9a]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
