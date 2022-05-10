import React from "react";
import { IoIosHeart } from "react-icons/io";
import { IoMdMusicalNote } from "react-icons/io";
import { IoIosRadio } from "react-icons/io";
const Onboarding3 = () => {
  return (
    <div className="w-full">
      <div className="bg-orange-300 mb-6">Onbording IMG</div>
      <div className="onbording1-content ">
        <div className="onbording1-content-title-paragraph bg-orange-400 mb-6">
          <h2>Peace.LoveMusic</h2>
          <p>
            Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo.
            Vestibulum pellentesque lacinia eleifend.
          </p>
        </div>
        <div className="onbording1-page-changing bg-orange-500 flex justify-center items-center text-4xl gap-4">
          <button>
            <IoIosRadio className="bg-pink-500 w-16 h-16 text-white rounded-full" />
          </button>
          <button>
            <IoIosHeart className="bg-black-500 w-16 h-16" />
          </button>
          <button>
            <IoMdMusicalNote className="bg-black-500 w-16 h-16" />
          </button>
        </div>
        <div>
          <button>skip</button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding3;
