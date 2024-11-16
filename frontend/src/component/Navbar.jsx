// components/Header.js
import React from "react";

function Header() {
  return (
    <header className="bg-[#bbf7d0cb] p-4 flex items-center justify-between sticky h-20 top-0 ">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          Logo
        </div>
        <h1 className="text-lg font-semibold">Earth Friend</h1>
      </div>
      <div className="flex items-center space-x-2">
        <span>Auditor</span>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </header>
  );
}

export default Header;
