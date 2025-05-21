import React from "react";
import { IoIosMenu } from "react-icons/io";
import { PiShoppingCartFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function Navbar() {
  return (
    <div>
      <nav class="bg-black ">
        <div class="flex flex-wrap items-center md:justify-around p-4 justify-between ">
        <div class="flex items-center gap-4"> 
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://www.united.com/2500e4e62233fbfe8ac6.unitedLogoNew.svg"
              class="h-12"
              alt="united Logo"
            />
          </a>

          <div class="hidden md:flex text-sm " id="navbar-solid-bg">
            <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-3  md:flex-row md:mt-0 md:border-0 md:bg-transparent ">
              <li>
                
                <a
                  href="#"
                  class="flex items-center py-2 px-3 md:p-0 text-white rounded-sm  md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:hover:underline  "
                  aria-current="page"
                >
                  Book
                   <MdKeyboardArrowDown />
                </a>
               
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center py-2 px-3 md:p-0 text-white rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:hover:underline "
                >
                  Mytrips
                  <MdKeyboardArrowDown />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center py-2 px-3 md:p-0 text-white rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:hover:underline "
                >
                  Travel info
                  <MdKeyboardArrowDown />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center py-2 px-3 md:p-0 text-white rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:hover:underline"
                >
                  MileagePlus
                  <MdKeyboardArrowDown />
                </a>
              </li>
                 <li>
                <a
                  href="#"
                  class="flex items-center py-2 px-3 md:p-0 text-white rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:hover:underline"
                >
                  Deals
                  <MdKeyboardArrowDown />
                </a>
              </li>
                 <li>
                <a
                  href="#"
                  class="flex items-center py-2 px-3 md:p-0 text-white rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:hover:underline"
                >
                 Help
                  <MdKeyboardArrowRight />
                </a>
              </li>
            </ul>
          </div>
          </div>
                    <div className="flex items-center justify-center">
            <button
              type="button"
              className="flex items-center gap-2 p-1 w-auto h-10 text-white hover:text-black rounded-3xl  hover:bg-blue-400 focus:outline-none focus:ring-4 max-sm:hidden text-sm"
            >
              <FaGlobe className="text-xl" />
              <span>English-US$</span>
            </button>
            <IoIosSearch
              type="button"
              className=" p-2 w-9 h-10 text-white hover:text-black rounded-4xl hover:bg-blue-400 focus:outline-none focus:ring-4"
            />
            <FaUser
              type="button"
              className=" p-2 w-9 h-10 text-white hover:text-black rounded-4xl hover:bg-blue-400 focus:outline-none focus:ring-4"
            />
            <PiShoppingCartFill
              type="button"
              className=" p-2 w-9 h-10 text-white hover:text-black rounded-4xl hover:bg-blue-400 focus:outline-none focus:ring-4"
            />
            <button
              data-collapse-toggle="navbar-solid-bg"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 text-sm text-white hover:text-black rounded-4xl md:hidden hover:bg-blue-400 focus:outline-none focus:ring-4 justify-center"
              aria-controls="navbar-solid-bg"
              aria-expanded="false"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;