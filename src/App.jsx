import React, { useState } from "react";
import logo from "./assets/logo.png";
import hero from "./assets/hero.jpeg";
import banner from "./assets/banner.jpeg";
import banner2 from "./assets/banner2.jpeg";
import card1 from "./assets/card1.jpeg";
import card2 from "./assets/card2.jpeg";
import card3 from "./assets/card3.jpeg";
import card4 from "./assets/card4.jpeg";
import pic1 from "./assets/pic1.jpeg";
import pic2 from "./assets/pic2.jpeg";
import pic3 from "./assets/pic3.jpeg";
import { LuSearch } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { HiArrowRight, HiOutlineShoppingCart } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 2 ? 1 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? 2 : prevSlide - 1));
  };

  return (
    <main className=" ">
      <section className=" ">
        <nav className=" flex px-4 justify-between bg-gray-100  py-4 font-QuickSand overflow-hidden">
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
            <GiHamburgerMenu className="cursor-pointer md:hidden " size={28} />
          </div>
        </nav>
      </section>
      {/* HERO SECTION */}
      <section className="py-4 sm:px-12 px-4 ">
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
      <section className="py-4 sm:px-12 px-4  justify-center flex flex-col gap-12  items-center">
        <div className="sm:flex text-center items-center   sm:gap-24 gap-12 justify-evenly">
          <h1 className="mx-auto  sm:text-xl text-md font-QuickSand my-2">
            Each houseplant set is handled quickly and safely before being sent
            to your destination in specially designed insulated packaging.
          </h1>
          <h1 className="sm:text-3xl text-xl mt-4  font-Cabin ">
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
      <section className="py-4 sm:px-12 px-4 ">
        <div className="m-auto w-[90%]  ">
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
        <div className="flex justify-between items-center  py-8 px-2">
          <div>
            <h1 className=" font-semibold sm:text-2xl text-xs sm:w-full w-[40px] ">
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
                className=" cursor-pointer text-black sm:text-6xl  text-2xl   border-2 border-[#000] rounded-full "
                onClick={prevSlide}
              />
              <MdOutlineNavigateNext
                className=" cursor-pointer text-black sm:text-6xl text-2xl   border-2 border-[#000] rounded-full "
                onClick={nextSlide}
              />
            </div>
          </div>
        </div>
      </section>
      {/* our shop */}
      <section className="py-4 sm:px-12 px-4 ">
        <div className="flex flex-col gap-6">
          <h1 className="uppercase font-semibold text-lg tracking-wider">
            Our Shop
          </h1>
          <h1 className="text-5xl font-belleza font-bold">
            Here are the best seller <br /> from our varieties
          </h1>
          <button className="bg-black rounded-full text-white py-2 sm:w-[150px] w-[100px] text-sm px-4 ">
            See all
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-6 ">
          <div className="w-[300px]  mt-12 ">
            <img
              className="h-[400px] w-full object-cover"
              src={card1}
              alt="card"
            />
            <div className="flex justify-between  py-1">
              <h1>Aloe Vera</h1>
              <h1>$ 114.66</h1>
            </div>
          </div>
          <div className="w-[300px] h-[400px]  mt-12 ">
            <img
              className="h-[400px] w-full object-cover "
              src={card1}
              alt="card"
            />
            <div className="flex justify-between  py-1">
              <h1>Aloe Vera</h1>
              <h1>$ 114.66</h1>
            </div>
          </div>
          <div className="w-[300px] h-[400px]  mt-12 ">
            <img
              className="h-[400px] w-full object-cover "
              src={card2}
              alt="card"
            />
            <div className="flex justify-between  py-1">
              <h1>Aloe Vera</h1>
              <h1>$ 114.66</h1>
            </div>
          </div>
          <div className="w-[300px] h-[400px]  mt-12 ">
            <img
              className="h-[400px] w-full object-cover "
              src={card3}
              alt="card"
            />
            <div className="flex justify-between  py-1">
              <h1>Aloe Vera</h1>
              <h1>$ 114.66</h1>
            </div>
          </div>
          <div className="w-[300px] h-[400px]  mt-12 ">
            <img
              className="h-[400px] w-full object-cover "
              src={card4}
              alt="card"
            />
            <div className="flex justify-between  py-1">
              <h1>Aloe Vera</h1>
              <h1>$ 114.66</h1>
            </div>
          </div>
        </div>
      </section>
      {/* REVIEW SECTION */}
      <section className="py-4 px-4 sm:px-12 ">
        <div className="relative sm:grid-cols-2 grid gap-x-12  md:grid-cols-3">
          <div className="flex sm:block flex-col flex-1 gap-4 justify-center sm:justify-start items-center my-6">
            <h1 className="uppercase font-semibold sm:text-xl sm:mb-4 text-lg tracking-wider m-2  sm:m-0 sm:text-left  text-center">
              reviews
            </h1>
            <h1 className="text-xs sm:text-lg text-center sm:mb-4 sm:text-left   ">
              Shop with confidance by reading customer reviews given by
              individuals who have used Bioomey. Excelient quality and
              streamlined service are both offered here.
            </h1>
            <div className="flex gap-2 items-center sm:text-2xl">
              <AiFillStar color="yellow " />
              <AiFillStar color="yellow " />
              <AiFillStar color="yellow " />
              <AiFillStar color="yellow " />
              <AiFillStar color="yellow " />
              <span className="text-xs sm:text-lg font-bold font-belleza">
                5/5
              </span>
            </div>
          </div>
          <div className="">
            <h1 className="text-center  sm:text-2xl   my-6 sm:text-left font-belleza font-bold">
              We adore all our friends atBloomey, especially the beauties who
              have come to live with us! Great advice when needed, beautifully
              and safely packaged. Highly recommend, it's just the best place
              for healthy plants and great value!
            </h1>
            <div className="flex justify-between items-center mt-4">
              <div>
                <h1 className="font-semibold">Pamela S.</h1>
                <p className="text-sm font-thin">Lake forest, CA</p>
              </div>
            </div>
          </div>
          <div className="flex absolute flex-1 sm:right-2 sm:top-0 bottom-0 right-0 gap-4 justify-between">
            <MdOutlineNavigateBefore className=" cursor-pointer text-black text-xl   border-2 border-[#000] rounded-full " />
            <MdOutlineNavigateNext className=" cursor-pointer text-black text-xl  border-2 border-[#000] rounded-full " />
          </div>
        </div>
      </section>
      {/* photo gallery */}
      <section className="sm:px-12 py-4 px-4">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-6 ">
          <img
            className="w-[45%] object-cover max-h-[800px]"
            src={pic1}
            alt="null"
          />
          <img
            className="w-[40%] object-contain max-h-[800px]"
            src={pic2}
            alt="null"
          />
          <div className="w-full relative">
            <img
              className="w-[100%] object-cover sm:max-h-[800px] max-h-[500px]"
              src={pic3}
              alt="null"
            />
            <div className="absolute sm:top-20 sm:left-20 top-4 left-4">
              <h1 className="sm:text-5xl text-3xl font-belleza font-bold">
                Get inspired from <br /> our Instagram
              </h1>
              <p className="sm:text-xl  font-semibold my-2">
                If you use the hashtag #bioomey on Instagram,
                <br />
                well spotlight you.
              </p>
              <button className="flex items-center gap-2 text-xl font-belleza font-bold">
                Check it out{" "}
                <HiArrowRight
                  className="bg-black rounded-full text-white"
                  size={24}
                />
              </button>
            </div>
          </div>
        </div>
        <div className="sm:flex gap-12  justify-between py-12  items-center">
          <div className="mx-auto">
            <h1 className=" sm:text-4xl text-center sm:text-left text-xl font-belleza font-bold w-full">
              Stay update with special offers, <br />
              plant-parenting tips, and more.
            </h1>
          </div>
          <div className="  w-[80%] sm:w-[40%] mx-auto  mt-6 relative">
            <input
              className="outline-none bg-transparent placeholder:font-QuickSand placeholder:text-black border-b-4 p-2  border-[#000] w-full   "
              type="text"
              placeholder="Your email"
              name=""
              id=""
            />
            <button className="absolute  bg-black text-white px-6 py-2 right-0 -top-2  rounded-full ">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      {/* footer */}
      <section className="bg-gray-100">
        <footer className="flex flex-col sm:flex-row gap-4 justify-between px-12 py-6">
          <div className="flex items-center justify-center">
            <img src={logo} alt="logo" width={80} />
            <h1 className="text-xl font-belleza font-bold">Planty'x</h1>
          </div>
          <div className="flex sm:flex-row font-QuickSand  flex-col items-center sm:gap-8 gap-4 justify-center border-b-2 border-[#000] sm:border-none">
            <h1>Home</h1>
            <h1>Contact us</h1>
            <h1 className="mb-3 sm:mb-0">Terms & Conditions</h1>
          </div>
          <div className="flex items-center justify-evenly my-2 sm:my-0 sm:justify-center gap-4">
            <FaFacebook size={28} />
            <FaTwitter size={28} />
            <FaInstagram size={28} />
          </div>
        </footer>
      </section>
    </main>
  );
};
export default App;
