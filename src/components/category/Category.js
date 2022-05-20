//create spotify category page
import React from "react";
import { IoIosArrowBack, IoMdSearch, IoIosArrowForward, IoIosPulse, IoIosMicrophone, IoMdWifi, IoIosContrast, IoMdSettings } from "react-icons/io";

const Category = () => {
  return (
    <div className="category-content p-5 max-w-md m-auto">
        <h1 className="category-title mt-5 mb-5 pb-2 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#EE0979] to-[#FF6A00] ">
          Categories
        </h1>
        <selected-option>
          <div
            className="flex justify-between items-center bg-[#D70060]
                     text-white w-full h-16 p-3 rounded-2xl text-xl"
          >
            <option value="">Alternative</option>
            <span className="dot h-12 text-2xl">...</span>
          </div>
          <div className="flex justify-between items-center bg-[#E54028] text-white w-full h-16 mt-3 p-3 rounded-2xl text-xl">
            <option value="">Blues</option>
            <span className="dot h-12 text-2xl">...</span>
          </div>
          <div className="ml-3 mt-5">
            <div className="flex justify-between items-center mt-4 mb-4">
              <option value="">Acoustic Blues</option>
              <IoIosArrowForward className="mr-5" />
            </div>
            <div className="flex justify-between items-center mt-4 mb-4">
              <option value="">Blues Rock</option>
              <IoIosArrowForward className="mr-5" />
            </div>
            <div className="flex justify-between items-center mt-4 mb-4">
              <option value="">Canadian Blues</option>
              <IoIosArrowForward className="mr-5" />
            </div>
            <div className="flex justify-between items-center mt-4 mb-4">
              <option value="">Jazz Blues</option>
              <IoIosArrowForward className="mr-5" />
            </div>
            <div className="flex justify-between items-center mt-4 mb-4">
              <option value="">Piano Blues</option>
              <IoIosArrowForward className="mr-5" />
            </div>
            <div className="flex justify-between items-center mt-4 mb-4">
              <option value="">Soul Blues</option>
              <IoIosArrowForward className="mr-5" />
            </div>
            <div className="flex justify-between items-center mt-4 mb-4">
              <option value="">Swamp Blues</option>
              <IoIosArrowForward className="mr-5" />
            </div>
          </div>
          <div className="flex justify-between items-center bg-[#F18D05] text-white w-full h-16 mt-3 p-3 rounded-2xl text-xl">
            <option value="">Classical</option>
            <span className="dot h-12 text-2xl">...</span>
          </div>
          <div className="flex justify-between items-center bg-[#F2BC06] text-white w-full h-16 mt-3 p-3 rounded-2xl text-xl">
            <option value="">Country</option>
            <span className="dot h-12 text-2xl">...</span>
          </div>
          <div className="flex justify-between items-center bg-[#5eb11c] text-white w-full h-16 mt-3 p-3 rounded-2xl text-xl">
            <option value="">Dance</option>
            <span className="dot h-12 text-2xl">...</span>
          </div>
          <div className="flex justify-between items-center bg-[#3A7634] text-white w-full h-16 mt-3 p-3 rounded-2xl text-xl">
            <option value="">Electronic</option>
            <span className="dot h-12 text-2xl">...</span>
          </div>
          <div className="flex justify-between items-center bg-[#0ABEBE] text-white w-full h-16 mt-3 p-3 rounded-2xl text-xl">
            <option value="">Fitness & Workout</option>
            <span className="dot h-12 text-2xl">...</span>
          </div>
          <div className="flex justify-between items-center bg-[#00A1CB] text-white w-full h-16 mt-3 p-3 rounded-2xl text-xl">
            <option value="">Hip-Hop/Rap</option>
            <span className="dot h-12 text-2xl">...</span>
          </div>
          <div className="flex justify-between items-center bg-[#115793] text-white w-full h-16 mt-3 p-3 rounded-2xl text-xl">
            <option value="">Industrial</option>
            <span className="dot h-12 text-2xl">...</span>
          </div>
        </selected-option>
    </div>
  );
};

export default Category;
