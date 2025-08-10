"use client";
import React, { useState } from "react";
import Image from "next/image";
import { GlobeAltIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation"; // ✅ Correct for App Router
import mainlogo from "../../Assets/mainlogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
    setMenuOpen(false); // Close menu after navigation
  };

  return (
    <nav className="w-full bg-white shadow-sm px-4 sm:px-8 py-3 flex items-center justify-between relative">
      {/* Left section: Logo + Name + Motto */}
      <div
        className="flex items-center space-x-3 cursor-pointer"
        onClick={() => handleNavigation("/")}
      >
        <Image
          src={mainlogo}
          alt="Logo"
          width={50}
          height={50}
          className="object-contain"
        />
        <div>
          <div className="flex items-center">
            <span className="text-lg font-bold text-gray-600">SnappAd</span>
          </div>
          <p className="text-xs pb-1 text-[#ff7b3e]">
            Your Brand on the Big Screen
          </p>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <button
          onClick={() => handleNavigation("/")}
          className="text-gray-600 font-medium px-3 py-1 rounded "
        >
          Home
        </button>
        <button
          onClick={() => handleNavigation("/Submitad")}
          className="text-orange-500 bg-orange-50 px-3 py-1 rounded-md font-bold "
        >
          Submit Ad
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <XMarkIcon className="w-7 h-7 text-gray-700" />
          ) : (
            <Bars3Icon className="w-7 h-7 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md border-t md:hidden z-50">
          <div className="flex flex-col space-y-4 px-6 py-4">
            <button
              onClick={() => handleNavigation("/")}
              className="text-gray-600 font-medium px-3 py-2 rounded  text-left"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("/Submitad")}
              className="text-orange-500 transition px-3 py-2 text-left font-bold"
            >
              Submit Ad
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
