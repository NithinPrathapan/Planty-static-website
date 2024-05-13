import React from "react";
import logo from "./assets/logo.png";
import { LuSearch } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { HiArrowRight, HiOutlineShoppingCart } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

const App = () => {
  return (
    <main className="bg-gray-100 sm:px-12 px-4">
      <section>
        <nav className=" flex justify-between  py-4 font-QuickSand overflow-hidden">
          <div className="flex cursor-pointer  items-center">
            <img width={100} src={logo} alt="logo" />
            <h1 className="text-2xl font-bold">Planty'x</h1>
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
          <div className="flex items-center  justify-between sm:gap-8 gap-12  ">
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
            <button className="bg-black rounded-full text-white py-2 w-[150px] px-4 ">
              Shop Now
            </button>
            <h1 className="sm:mt-16 mt-8 sm:text-2xl  font-Cabin tracking-wider font-bold">
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
              className="sm:object-cover sm:w-[80%] max-h-[100%]"
              src="https://s3-alpha-sig.figma.com/img/8c97/1014/571d8974cd580676c83da11ff7642946?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HOcSnRhGQKvQ0-CMoRW0D~9bjo27UcA3dnux68IZ7RyLTkhMbZcImzvDa6NMX~kmIVNJ7fbkjM43XTQTXJ~YG70Xbqyd5aaWu8~yAvfnM~hTIP4oNbdQfAqZSPLauK~ZGmmW3Ntl7bllAYClDw9PlGwMarcbwisxa9OfP7MQqPIR135RW16smDzp~N7YbXs6GiMPUYbIzI8zBesCCeAXDK-TEAjqpUFrVY3fC2EktkGWCvfN2UV3ESY3gx5aUHkWJBu62rbls7iaGxmD6TbwHG2J1aeRQ9SdM6-D~uC6RZy0ZJdNT3sD7apU4CH8HuCbZnMRbqm2uCwXfZks1Z5BRg__"
              alt="hero"
            />
          </div>
        </div>
      </section>
      {/* learn more */}
      <section className="py-4 justify-center flex flex-col gap-12  items-center">
        <div className="sm:flex text-center items-center   gap-24 justify-evenly">
          <h1 className="sm:w-[500px] w-[400px] mx-auto  sm:text-xl text-lg font-QuickSand my-2">
            Each houseplant set is handled quickly and safely before being sent
            to your destination in specially designed insulated packaging.
          </h1>
          <h1 className="w-[500px] sm:text-3xl text-2xl mt-4  font-Cabin ">
            Learn how ve take care of your plant at every stage of its journey
            from our greenhouse to your home.
          </h1>
        </div>
        <h1 className="mx-auto text-xl flex items-center gap-2 ">
          Learn More{" "}
          <HiArrowRight className="bg-black rounded-full text-white" />
        </h1>
      </section>
    </main>
  );
};

export default App;
