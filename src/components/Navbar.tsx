import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 p-4 max-w-[1240px] mx-auto text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] uppercase">
        react.
      </h1>
      <ul className="hidden md:flex ">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div>
        {!nav ? (
          <AiOutlineMenu size={20} onClick={toggleNav} className="md:hidden" />
        ) : (
          <AiOutlineClose size={20} onClick={toggleNav} />
        )}
      </div>

      <div
        className={
          nav
            ? `fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900
              bg-[#000300] easy-in-out duration-300`
            : "fixed left-[-100%]"
        }
      >
        <h1 className=" m-4 pt-3 w-full text-3xl font-bold text-[#00df9a] uppercase">
          react.
        </h1>
        <ul className=" uppercase">
          <li className="p-4 border-b border-gray-600 cursor-pointer">Home</li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">
            Company
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">
            Resources
          </li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">About</li>
          <li className="p-4 border-b border-gray-600 cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
