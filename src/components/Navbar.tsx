import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center h-24 p-4 max-w-[1240px] mx-auto text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] uppercase">
        react.
      </h1>
      <ul className="flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
