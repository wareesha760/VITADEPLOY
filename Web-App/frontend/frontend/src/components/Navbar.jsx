import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-wite shadow-md px-6 md:px-16 lg:px-24 xl:px-32 py-1 flex items-center justify-between">
      {/* Logo */}
      <a href="/">
        <img src="/logo1.png" alt="KisaanBot Logo" className="h-30 w-auto" />
      </a>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8 text-green-800 text-xl ">
        <a href="#">ہوم</a>
        <a href="#">فیچرز</a>
        <a href="#">رابطہ</a>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="کسان معلومات تلاش کریں"
          />
          {/* Search Icon */}
        </div>

        {/* Cart + Login */}
        <div className="relative cursor-pointer"> {/* Cart icon here */} </div>
        <button className="px-8 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full">
          لاگ ان کریں
        </button>
      </div>

      {/* Mobile Toggle */}
      <button onClick={() => setOpen(!open)} aria-label="Menu" className="block">
  {/* Hamburger icon */}
</button>

      {/* Mobile Menu */}
      <div className={`${
        open ? "flex" : "hidden"
      } absolute top-[100px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-xl sm:hidden`}>
        <a href="#">ہوم</a>
        <a href="#">فیچرز</a>
        <a href="#">رابطہ</a>
        <button className="px-6 py-2 mt-2 bg-green-600 hover:bg-green-700 text-white rounded-full text-sm">
          لاگ ان کریں
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
