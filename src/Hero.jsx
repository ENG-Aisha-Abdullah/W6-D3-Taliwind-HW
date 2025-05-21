import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

function Hero() {
  return (
    <div>
      <div id="default-carousel" class="relative " data-carousel="slide">
        <div class="relative h-[550px] md:h-[700px] overflow-hidden ">
          <div class="duration-2000 ease-in-out" data-carousel-item="active">
            <img
              src="https://media.united.com/assets/m/178313ba33aca8b4/original/1265_Starlink_HP_Takeover_Desktop_img_1366x768-2x.jpg"
              class="absolute block w-full h-full bg-cover "
              alt="..."
            />
            <div class="absolute inset-x-0 bottom-0  w-full h-full flex items-center ">
              <div className="text-white text-4xl font-bold bg-white bg-opacity-20 rounded h-full w-full items-center px-10">
                <br /> <br /> <br /> <br /> <br /> <br /><br />
                <small class="text-base">FAST WI-FI</small>
                <h1>
                  Break the Wi-Fi barrier. Free Wi-Fi on select flights. Only
                  with MileagePlus.
                </h1>
                <a
                  href="#"
                  class="text-white hover:text-white hover:underline text-base flex items-center "
                >
                  Join MileagePlus
                  <MdKeyboardArrowRight />
                </a>
              </div>
            </div>
          </div>

          <div class="hidden duration-2000 ease-in-out" data-carousel-item>
            <img
              src="https://media.united.com/assets/m/6036467b6c6c2366/original/040125_FOC_95K_HPCARSUL1_2732x1536_TY.jpg"
              class="absolute block w-full h-full bg-cover"
              alt="..."
            />
            <div class="absolute inset-x-0 bottom-0  w-full h-full flex items-center ">
              <div className="text-white text-4xl font-bold bg-white bg-opacity-20 rounded h-full w-full items-center px-10">
                <br /> <br /> <br /> <br /> <br /> <br /><br /> 
                <small class="text-base">UNITED MILEAGEPLUS CARDS</small>
                <h1>
                  If you ever fly United, you should probably have a United
                  card.
                </h1>
                <a
                  href="#"
                  class="text-white hover:text-white hover:underline text-base flex items-center "
                >
                  Learn more
                  <MdKeyboardArrowRight />
                </a>
              </div>
            </div>
          </div>
          <div class="hidden duration-2000 ease-in-out" data-carousel-item>
            <img
              src="https://media.united.com/assets/m/777eb30e1cd1f55d/original/4254_SMS_Acquisition_HP_Takeover_Desktop_img_1366x768_2x.jpg"
              class="absolute block w-full h-full bg-cover"
              alt="..."
            />
            <div class="absolute inset-x-0 bottom-0  w-full h-full flex items-center ">
              <div className="text-white text-4xl font-bold bg-white bg-opacity-20 rounded h-full w-full items-center px-10">
                <br /> <br /> <br /> <br /> <br /> <br /><br />
                <small class="text-base">WANT FLIGHT DEALS?</small>
                <h1>
                 Text JOIN to 71529, and we'll send low fares and sales!
                </h1>
                <a
                  href="#"
                  class="text-white hover:text-white hover:underline text-base flex items-center "
                >
                  Subscribe now
                  <MdKeyboardArrowRight />
                </a>
              </div>
            </div>
          </div>

          <div class="hidden duration-2000 ease-in-out" data-carousel-item>
            <img
              src="https://media.united.com/assets/m/514af15b3f783a7e/original/2744_Hemi_HP_Takeover_Desktop_img_1366x768-2x.jpg"
              class="absolute block w-full h-full bg-cover"
              alt="..."
            />
            <div class="absolute inset-x-0 bottom-0  w-full h-full flex items-center ">
              <div className="text-white text-4xl font-bold bg-white bg-opacity-20 rounded h-full w-full items-center px-10">
                <br /> <br /> <br /> <br /> <br /> <br /><br />
                <small class="text-base">TAKE THE TRIP</small>
                <h1>Get expert travel guides from Hemispheres.</h1>
                <a
                  href="#"
                  class="text-white hover:text-white hover:underline text-base flex items-center "
                >
                  Start planning
                  <MdKeyboardArrowRight />
                </a>
              </div>
            </div>
          </div>

          <div class="hidden duration-2000 ease-in-out" data-carousel-item>
            <img
              src="https://media.united.com/assets/m/5e827933697c2146/original/1145_Wi25_HP_Takeover_Mobile_img_320x345-2x.jpg"
              class="absolute block w-full h-full bg-cover"
              alt="..."
            />
            <div class="absolute inset-x-0 bottom-0  w-full h-full flex items-center ">
              <div className="text-white text-4xl font-bold bg-white bg-opacity-20 rounded h-full w-full items-center px-10">
                <br /> <br /> <br /> <br /> <br /> <br /><br /> 
                <small class="text-base">NEW 2025 ROUTES</small>
                <h1>
                  Check out our new flights to Asia and Australia!
                </h1>
                <a
                  href="#"
                  class="text-white hover:text-white hover:underline text-base flex items-center "
                >
                  Explore routes
                  <MdKeyboardArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>

        <button
          type="button"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>

      {/* Tap section */}

      <div class="sm:hidden"></div>
      <ul class=" text-sm font-medium text-center text-gray-500 rounded-lg shadow-sm sm:flex">
        <li class="w-full focus-within:z-10">
          <a
            href="#"
            class="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none"
            aria-current="page"
          >
            Book
          </a>
        </li>
        <li class="w-full focus-within:z-10">
          <a
            href="#"
            class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none"
          >
            Flight status
          </a>
        </li>
        <li class="w-full focus-within:z-10">
          <a
            href="#"
            class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none "
          >
            Check-in
          </a>
        </li>
        <li class="w-full focus-within:z-10">
          <a
            href="#"
            class="inline-block w-full p-4 bg-white border-s-0 border-gray-200 dark:border-gray-700 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none"
          >
            My trip
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Hero;
