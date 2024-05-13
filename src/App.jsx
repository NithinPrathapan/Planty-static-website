import React from "react";
import logo from "./assets/logo.png";
import { LuSearch } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

const App = () => {
  return (
    <main className="bg-gray-100">
      <section>
        <nav className=" flex justify-between sm:px-12 px-4 py-4 font-QuickSand overflow-hidden">
          <div className="flex cursor-pointer  items-center">
            <img width={100} src={logo} alt="logo" />
            <h1 className="text-2xl font-bold">Planty'x</h1>
          </div>
          <div className=" hidden md:flex mx-auto   items-center gap-12 text-lg ">
            <h1 className="hover:scale-110  duration-200 ease-out cursor-pointer">
              Plants
            </h1>
            <h1 className="hover:scale-110  duration-200 ease-out cursor-pointer">
              For Offices
            </h1>
            <h1 className="hover:scale-110  duration-200 ease-out cursor-pointer">
              Plants Care
            </h1>
            <h1 className="hover:scale-110  duration-200 ease-out cursor-pointer">
              About
            </h1>
          </div>
          <div className="flex items-center  justify-between gap-12  ">
            <LuSearch className="cursor-pointer" size={28} />
            <CgProfile className="cursor-pointer" size={28} />
            <HiOutlineShoppingCart className="cursor-pointer" size={28} />
            <GiHamburgerMenu className="cursor-pointer" size={28} />
          </div>
        </nav>
      </section>
    </main>
  );
};

export default App;
