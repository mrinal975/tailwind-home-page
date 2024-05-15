import {
  FaInstagramSquare,
  FaGithubSquare,
  FaDribbbleSquare,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="text-white bg-black">
      <div
        className="max-w-[1240px] mx-auto py-16 grid md:grid-cols-3 
      gap-8 text-gray-300"
      >
        <div className="">
          <h1 className="uppercase text-lg font-bold text-[#00df9a]">react</h1>
          <p className="text-[13px]">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaDribbbleSquare size={30} />
            <FaGithubSquare size={30} />
            <FaInstagramSquare size={30} />
          </div>
        </div>
        <div className=" w-full lg:col-span-2 flex justify-between ">
          <div className="">
            <ul className="text-gray-400">
              <li className="text-sm py-2">Solution</li>
              <li className="text-sm py-2">Analytics</li>
              <li className="text-sm py-2">Marketing</li>
              <li className="text-sm py-2">Commerce</li>
              <li className="text-sm py-2">Insights</li>
            </ul>
          </div>
          <div className="">
            <ul className="text-gray-400">
              <li className="text-sm py-2">Solution</li>
              <li className="text-sm py-2">Analytics</li>
              <li className="text-sm py-2">Marketing</li>
              <li className="text-sm py-2">Commerce</li>
              <li className="text-sm py-2">Insights</li>
            </ul>
          </div>
          <div className="">
            <ul className="text-gray-400">
              <li className="text-sm py-2">Solution</li>
              <li className="text-sm py-2">Analytics</li>
              <li className="text-sm py-2">Marketing</li>
              <li className="text-sm py-2">Commerce</li>
              <li className="text-sm py-2">Insights</li>
            </ul>
          </div>
          <div className="">
            <ul className="text-gray-400">
              <li className="text-sm py-2">Solution</li>
              <li className="text-sm py-2">Analytics</li>
              <li className="text-sm py-2">Marketing</li>
              <li className="text-sm py-2">Commerce</li>
              <li className="text-sm py-2">Insights</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
