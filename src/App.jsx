import React, { useState } from "react";
import logo from "./assets/logo.png";
import hero from "./assets/hero.jpeg";
import banner from "./assets/banner.jpeg";
import banner2 from "./assets/banner2.jpeg";
import { LuSearch } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { HiArrowRight, HiOutlineShoppingCart } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 1 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? 2 : prevSlide - 1));
  };

  return (
    <main className="bg-gray-100 sm:px-12 px-4">
      <section>
        <nav className=" flex justify-between  py-4 font-QuickSand overflow-hidden">
          <div className="flex cursor-pointer  items-center">
            <img className="sm:w-[100px] w-[70px]" src={logo} alt="logo" />
            <h1 className="sm:text-2xl font-bold">Planty'x</h1>
          </div>
          <div className=" hidden md:flex mx-auto   items-center sm:gap-4 lg:gap-12 ">
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
          <div className="flex items-center  justify-between sm:gap-8 gap-4  ">
            <LuSearch className="cursor-pointer" size={28} />
            <CgProfile className="cursor-pointer" size={28} />
            <HiOutlineShoppingCart className="cursor-pointer" size={28} />
            <GiHamburgerMenu className="cursor-pointer" size={28} />
          </div>
        </nav>
      </section>
      {/* HERO SECTION */}
      <section className="py-4">
        <div className="flex justify-between">
          <div className="flex flex-col flex-1 w-[50%] sm:w-[100%] ">
            <h1 className="font-belleza sm:text-[90px] text-[30px]">
              Best house <br /> Plants varieties
            </h1>
            <button className="bg-black rounded-full text-white py-2 sm:w-[150px] w-[100px] text-sm px-4 ">
              Shop Now
            </button>
            <h1 className="sm:mt-16 mt-4 sm:text-2xl  font-Cabin tracking-wider font-bold">
              Beautiful living greenery for <br /> homes and offices
            </h1>
            <p className="sm:mt-12 mt-6 sm:text-xl font-thin">
              Wer've been mentioned in the press
            </p>
            <div className="flex sm:gap-12 gap-4 mt-14">
              <h1 className=" sm:text-3xl font-extrabold text-xl text-gray-500 tracking-wider opacity-80">
                Bloomberg
              </h1>
              <h1 className="font-QuickSand sm:text-3xl text-xl font-extrabold text-gray-500 tracking-wider opacity-80">
                Forbes
              </h1>
            </div>
          </div>
          <div className="flex-1 flex w-full max-h-[700px] justify-end ">
            <img
              className="object-contain sm:w-[100%] max-h-[90%] "
              src={hero}
              alt="hero"
            />
          </div>
        </div>
      </section>
      {/* learn more */}
      <section className="py-4 justify-center flex flex-col gap-12  items-center">
        <div className="sm:flex text-center items-center   gap-24 justify-evenly">
          <h1 className="sm:w-[500px]  mx-auto  sm:text-xl text-md font-QuickSand my-2">
            Each houseplant set is handled quickly and safely before being sent
            to your destination in specially designed insulated packaging.
          </h1>
          <h1 className="sm:w-[500px] sm:text-3xl text-xl mt-4  font-Cabin ">
            Learn how ve take care of your plant at every stage of its journey
            from our greenhouse to your home.
          </h1>
        </div>
        <h1 className="mx-auto text-xl flex items-center gap-2 ">
          Learn More{" "}
          <HiArrowRight className="bg-black rounded-full text-white" />
        </h1>
      </section>
      {/* banner slider */}
      <section className=" bg-gray-200">
        <div className="m-auto ">
          <div id="1" className={currentSlide === 1 ? "" : "hidden"}>
            <img
              className="object-cover w-full h-[400px] sm:h-[800px]"
              src={banner}
              alt="banner"
            />
          </div>
          <div id="2" className={currentSlide === 2 ? "" : "hidden"}>
            <img
              className="object-cover w-full h-[400px] sm:h-[800px]"
              src={banner2}
              alt="banner"
            />
          </div>
        </div>
        <div className="flex justify-between items-center   py-8 px-2">
          <div>
            <h1 className=" font-semibold sm:text-2xl text-xs w-[40px] ">
              Step 1
            </h1>
          </div>
          <div>
            <h1 className="font-belleza sm:text-4xl text-lg font-bold text-center mx-auto">
              We put everything together
            </h1>
          </div>
          <div className="">
            <div className="flex sm:gap-20 gap-4 justify-between text-4x  ">
              <MdOutlineNavigateBefore
                className=" text-black sm:text-6xl  text-2xl   border-2 border-[#000] rounded-full "
                onClick={prevSlide}
              />
              <MdOutlineNavigateNext
                className=" text-black sm:text-6xl text-2xl   border-2 border-[#000] rounded-full "
                onClick={nextSlide}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default App;
