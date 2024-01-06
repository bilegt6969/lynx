"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
  HeartIcon,
  Bars2Icon,
  XMarkIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Logo from "../img/lynx.jpg";

function Header({}) {
  const [result, setResult] = useState(null);

  const [isNavBarOpen, setisNavBarOpen] = useState(false);

  const navbar = () => {
    setisNavBarOpen(!isNavBarOpen);
  };
  const [isNavBarOpen1, setisNavBarOpen1] = useState(false);

  const navbar1 = () => {
    setisNavBarOpen1(!isNavBarOpen1);
  };
  const [isNavBarOpen2, setisNavBarOpen2] = useState(false);

  const navbar2 = () => {
    setisNavBarOpen2(!isNavBarOpen2);
  };
  const [isNavBarOpen3, setisNavBarOpen3] = useState(false);

  const navbar3 = () => {
    setisNavBarOpen3(!isNavBarOpen3);
  };
  const [isNavBarOpen4, setisNavBarOpen4] = useState(false);

  const navbar4 = () => {
    setisNavBarOpen4(!isNavBarOpen4);
  };
  const [isNavBarOpen5, setisNavBarOpen5] = useState(false);

  const navbar5 = () => {
    setisNavBarOpen5(!isNavBarOpen5);
  };
  const [isNavBarOpen6, setisNavBarOpen6] = useState(false);

  const navbar6 = () => {
    setisNavBarOpen6(!isNavBarOpen6);
  };

  const [isOngorhoi, setIsOngorhoi] = useState(false);

  const toggleNav = () => {
    setIsOngorhoi(!isOngorhoi);
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-[30]">
      <div className=" flex flex-col w-full  bg-white border-y border-gray-200">
        <div className="flex items-center justify-between  lg:space-x-[5rem] md:space-x-[5rem] sm:space-x-[5rem] sm:mx-10 sm:ml-[-2rem] md:mx-10 md:ml-[-2rem] lg:mx-10 ml-[1rem] font-sans">
          {/* Hamburger menu */}
          <div className="lg:hidden ml-[1rem] space-x-5 shrink-0 flex md:hidden sm:hidden">
            <button className="focus:outline-none z-10" onClick={toggleMenu}>
              {isOpen ? (
                <XMarkIcon className="flex text-white w-8 h-8" />
              ) : (
                <Bars2Icon className="flex z-10 text-black w-8 h-8" />
              )}
            </button>
            {/*Mobile searchbar*/}
            <div className="items-center flex">
              <button className="focus:outline-none z-10" onClick={toggleNav}>
                {isOngorhoi ? (
                  <XMarkIcon className="flex text-white ml-[-0.5rem] transition-all w-8 h-8" />
                ) : (
                  <MagnifyingGlassIcon className="flex z-10 text-black   w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Logo */}
          <div className=" justify-center">
            <a href="../">
              <Image
                src={Logo}
                alt="logo"
                className="font-semibold text-2xl lg:w-[4rem] lg:mt-1 md:w-[7rem] sm:w-[7rem] w-[3rem]"
                width={150}
                height={150}
              />
            </a>
          </div>

          {/* SearchBar */}
          <div className="z-[50] hidden sm:flex relative flex-grow items-center">
            <input
              className="w-full text-lg placeholder-gray-700 placeholder bg-[#FAFAFA] pl-[3rem] focus:outline-none flex-shrink outline-none h-12 px-1 py-2 font-sans border text-black border-black"
              type="text"
              placeholder="Search for brand, colors, ETC."
            />
            <button>
              <MagnifyingGlassIcon
                className="z-[50] absolute top-[0.8rem] items-center left-3 cursor-pointer  transition-all flex text-black"
                width={"20"}
                height={"20"}
              />
            </button>
          </div>

          {/* RightSide */}
          <div className="z-[50] items-center flex mr-10 space-x-5">
            <div className="flex lg:ml-[-1rem] lg:mr-[2rem] space-x-5">
              <h1 className="text-lg hidden lg:flex">Browse</h1>
              <h1 className="text-lg hidden lg:flex">Sell</h1>
              <h1 className="text-lg hidden lg:flex">About</h1>
              <h1 className="text-lg hidden lg:flex">Help</h1>
            </div>

            <HeartIcon className="hover:text-gray-400 transition duration-150 w-6 h-6 mr-[2rem] shrink-0 flex" />
            <ShoppingBagIcon className="hover:text-gray-400 transition duration-150 w-6 h-6" />
            <UserIcon className="hover:text-gray-400 transition duration-150 hidden sm:flex w-6 h-6" />
          </div>
          {/* SearchBar (mobile) */}
          <motion.div
            className="fixed top-0 left-0 w-full h-full z-2 bg-[#161617]"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{
              opacity: isOngorhoi ? 1 : 0,
              y: isOngorhoi ? "0%" : "-100%",
            }}
            transition={{
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
              type: "spring",
            }}
          >
            <div className="mx-auto space-x-2 mt-[8rem] justify-center flex items-center">
              <input
                className="bg-transparent border-white p-6 border-1 border text-3xl text-white h-10 w-[20rem] outline-none rounded-full focus:outline-none"
                type="text"
              />
              <button>
                <MagnifyingGlassIcon
                  className="flex text-white"
                  width={"24"}
                  height={"24"}
                />
              </button>
            </div>
          </motion.div>
          {/*Shoes*/}
          <motion.div
            className="fixed flex top-0 left-0 w-full h-full z-10 bg-[#161617]"
            initial={{ opacity: 0, x: "-100%" }} // change from y to x
            animate={{
              opacity: isNavBarOpen1 ? 1 : 0,
              x: isNavBarOpen1 ? "0%" : "-100%", // change from y to x
            }}
            transition={{
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
              type: "spring",
            }}
          >
            <div className="flex flex-col ml-[5rem] mt-[5rem] h-full text-[#deded7]">
              <a
                className="my-2 text-[2rem] mt-[-4rem] ml-[-3rem] mb-[5rem] font-sans"
                onClick={navbar1}
              >
                <ChevronLeftIcon className="w-8 h-8" />
              </a>
              <a href="#" className="my-1  text-[2rem] font-sans">
                brinkenStock
              </a>
              <a href="#" className="my-1  text-[2rem] font-sans">
                Chanel
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Clarks
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Crocs
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Dr. Martens
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Hermes
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Louboutin
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Gucci
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Timberland
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                UGG
              </a>
            </div>
          </motion.div>
          {/*Apparel*/}
          <motion.div
            className="fixed flex top-0 left-0 w-full h-full z-10 bg-[#161617]"
            initial={{ opacity: 0, x: "-100%" }} // change from y to x
            animate={{
              opacity: isNavBarOpen2 ? 1 : 0,
              x: isNavBarOpen2 ? "0%" : "-100%", // change from y to x
            }}
            transition={{
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
              type: "spring",
            }}
          >
            <div className="flex flex-col ml-[5rem] mt-[5rem] h-full text-[#deded7]">
              <a
                className="my-2 text-[2rem] mt-[-4rem] ml-[-3rem] mb-[5rem] font-sans"
                onClick={navbar2}
              >
                <ChevronLeftIcon className="w-8 h-8" />
              </a>
              <a href="#" className="my-1  text-[2rem] font-sans">
                Artist Merch
              </a>
              <a href="#" className="my-1  text-[2rem] font-sans">
                Bape
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Chrome Hearts
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                MEPO
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                TILT
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Essentials
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                KAWS
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Off-white
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Supreme
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Yeezy Apparel
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Others{" "}
              </a>
            </div>
          </motion.div>
          {/*Collectribles */}
          <motion.div
            className="fixed flex top-0 left-0 w-full h-full z-10 bg-[#161617]"
            initial={{ opacity: 0, x: "-100%" }} // change from y to x
            animate={{
              opacity: isNavBarOpen3 ? 1 : 0,
              x: isNavBarOpen3 ? "0%" : "-100%", // change from y to x
            }}
            transition={{
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
              type: "spring",
            }}
          >
            <div className="flex flex-col ml-[5rem] mt-[5rem] h-full text-[#deded7]">
              <a
                className="my-2 text-[2rem] mt-[-4rem] ml-[-3rem] mb-[5rem] font-sans"
                onClick={navbar3}
              >
                <ChevronLeftIcon className="w-8 h-8" />
              </a>
              <a href="#" className="my-1  text-[2rem] font-sans">
                KAWS
              </a>
              <a href="#" className="my-1  text-[2rem] font-sans">
                Art prints
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Lego
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Takashi Murakami
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                1
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                2
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                3
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                4
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                5
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                6
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                7{" "}
              </a>
            </div>
          </motion.div>

          {/*Accessories */}
          <motion.div
            className="fixed flex top-0 left-0 w-full h-full z-10 bg-[#161617]"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{
              opacity: isNavBarOpen4 ? 1 : 0,
              x: isNavBarOpen4 ? "0%" : "-100%",
            }}
            transition={{
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
              type: "spring",
            }}
          >
            <div className="flex flex-col ml-[5rem] mt-[5rem] overflow-y-scroll overflow-hidden no-scrollbar h-full text-[#deded7]">
              <a
                className="my-2 z-10 text-[2rem] mt-[-4rem] ml-[-3rem] mb-[5rem] font-sans"
                onClick={navbar4}
              >
                <ChevronLeftIcon className="w-8 h-8" />
              </a>
              <a href="#" className="my-1  text-[2rem] font-sans">
                Amina Muaddi
              </a>
              <a href="#" className="my-1  text-[2rem] font-sans">
                Apple
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Balenciaga
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Brandon Blackwood
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Breitling
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Burberry
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Cartier
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Casio G-Shock
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Chanel
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Coach
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Dior{" "}
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Goyard{" "}
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Gucci{" "}
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Hermes{" "}
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                IWC{" "}
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Louis Vuitton{" "}
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                MCM{" "}
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Off-White{" "}
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Omega{" "}
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Panerai{" "}
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Prada{" "}
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Shinola{" "}
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Versace{" "}
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Ralph Lauren{" "}
              </a>
            </div>
          </motion.div>

          {/*Sneakers*/}
          <motion.div
            className="fixed flex top-0 left-0 w-full h-full z-10 bg-[#161617]"
            initial={{ opacity: 0, x: "-100%" }} // change from y to x
            animate={{
              opacity: isNavBarOpen ? 1 : 0,
              x: isNavBarOpen ? "0%" : "-100%", // change from y to x
            }}
            transition={{
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
              type: "spring",
            }}
          >
            <div className="flex flex-col ml-[5rem] mt-[5rem] h-full text-[#deded7]">
              <a
                className="my-2 text-[2rem] mt-[-4rem] ml-[-3rem] mb-[5rem] font-sans"
                onClick={navbar}
              >
                <ChevronLeftIcon className="w-8 h-8" />
              </a>
              <a href="#" className="my-1  text-[2rem] font-sans">
                Nike
              </a>
              <a href="#" className="my-1  text-[2rem] font-sans">
                Air Jordan
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Adidas
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                New Balance
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Reebok
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Other Brands
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Luxury Brands
              </a>
              <a href="#" className="my-1 text-[2rem] font-sans">
                Collections
              </a>
            </div>
          </motion.div>

          {/* Hamburger menu (mobile) */}
          <motion.div
            className="fixed top-0 left-0 w-full h-full z-2 bg-[#161617]"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? "0%" : "-100%" }}
            transition={{
              duration: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
              type: "spring",
            }}
          >
            {/*Sneakers*/}

            <div className="flex text-[#deded7] flex-col mt-[8rem] mr-[6rem] items-center whitespace-nowrap h-full">
              <button
                className="focus:outline-none z-20 w-[10rem] flex  items-center"
                onClick={navbar}>
                <a
                  href="#"
                  onClick={navbar}
                  className="my-1 text-[#deded7] subpixel-antialiased text-[2rem] font-sans">
                  Sneakers
                </a>
              </button>

              <button
                className="focus:outline-none z-20 w-[10rem] flex  items-center text-left "
                onClick={navbar1}
              >
                <a
                  href="#"
                  onClick={navbar1}
                  className="my-1 text-[#deded7] subpixel-antialiased text-[2rem] font-sans"
                >
                  {" "}
                  Shoes
                </a>
              </button>

              <button
                className="focus:outline-none z-20 w-[10rem] flex  items-center"
                onClick={navbar2}
              >
                <a
                  href="#"
                  onClick={navbar2}
                  className="my-1 text-[#deded7] subpixel-antialiased text-[2rem] font-sans"
                >
                  {" "}
                  Apparel
                </a>
              </button>

              <button
                className="focus:outline-none z-20 w-[10rem] flex items-center"
                onClick={navbar3}
              >
                <a
                  href="#"
                  onClick={navbar3}
                  className="my-1 text-[#deded7] subpixel-antialiased text-[2rem] font-sans"
                >
                  {" "}
                  Collectibles
                </a>
              </button>
              <button
                className="focus:outline-none z-20 w-[10rem] flex  items-center"
                onClick={navbar4}
              >
                <a
                  href="#"
                  onClick={navbar4}
                  className="my-1 text-[#deded7] subpixel-antialiased text-[2rem] font-sans"
                >
                  {" "}
                  Accessories
                </a>
              </button>
              <button
                className="focus:outline-none z-20 w-[10rem] flex  items-center"
                onClick={navbar6}
              >
                <a
                  href="#"
                  onClick={navbar6}
                  className="my-1 text-[#deded7] subpixel-antialiased text-[2rem] font-sans"
                >
                  {" "}
                  About
                </a>
              </button>
              <button
                className="focus:outline-none z-20 w-[10rem] flex  items-center"
                onClick={navbar}
              >
                <a
                  href="#"
                  onClick={navbar}
                  className="my-1 text-[#deded7] subpixel-antialiased text-[2rem] font-sans"
                >
                  {" "}
                  How It Works
                </a>
              </button>
              <button
                className="focus:outline-none z-20 w-[10rem] flex  items-center"
                onClick={navbar}
              >
                <a
                  href="#"
                  onClick={navbar}
                  className="my-1  text-[#deded7] subpixel-antialiased text-[2rem] font-sans"
                >
                  Brands
                </a>
              </button>
            </div>
          </motion.div>
        </div>
        {/*under navbar*/}
        {result ? (
          <p></p>
        ) : (
          <div className="z-[0] flex space-x-3 text-[1rem]  bg-[#F4F3F1] font-normal border-t-[0.1rem] border-gray-300 shrink-0  sm:flex p-2 lg:mt-[1rem] justify-center lg:text-xl lg:space-x-[50px] md:space-x-[30px] sm:space-x-[15px] items-center text-black ">
            <li className="list-none">
              <p className="hover:text-gray-400 font-medium  cursor-pointer">
                Sneakers
              </p>
            </li>
            <li className="list-none">
              <p className="hover:text-gray-400 font-medium  cursor-pointer">
                Shoes
              </p>
            </li>
            <li className="list-none">
              <p className="hover:text-gray-400 font-medium  cursor-pointer">
                Apparel
              </p>
            </li>
            <li className="list-none">
              <p className="hover:text-gray-400 font-medium  cursor-pointer">
                Electronics
              </p>
            </li>
            <li className="list-none">
              <p className="hover:text-gray-400 font-medium  cursor-pointer">
                Collectibles
              </p>
            </li>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
