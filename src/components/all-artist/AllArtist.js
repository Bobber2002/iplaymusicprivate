// create spotify all artistis page that shows all artists

import React from "react";
import playlistPhoto1 from "./../../assets/images/playlistPhoto1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {
  IoIosArrowBack,
  IoMdSearch,
  IoIosPulse,
  IoIosMicrophone,
  IoMdWifi,
  IoIosContrast,
  IoMdSettings,
} from "react-icons/io";
const AllArtist = () => {
  return (
    <div className="allartists-content p-5 max-w-md m-auto h-full">
      <div className="allartists-header flex justify-between items-center">
        <IoIosArrowBack />
        <h2 className="allartists-main-title">MUSIC</h2>
        <IoMdSearch />
      </div>
      <div>
        <h1 className="allartists-title mt-10 mb-10 text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#EE0979] to-[#FF6A00] ">
          All Artists
        </h1>
      </div>
      <div className="allartists-content-container">
        <div className="flex justify-between ">
          <h4 className="font-semibold text-sm">Artist Of The Month</h4>
          <p className="text-[#EE0979] font-light text-sm">View All</p>
        </div>
        <div className="allartists-content-container-slider mt-5 mb-5 gap-2">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="max-w-xs h-36 rounded-2xl"
                src={playlistPhoto1}
                alt="playlist"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="max-w-xs h-36 rounded-2xl"
                src={playlistPhoto1}
                alt="playlist"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="max-w-xs h-36 rounded-2xl"
                src={playlistPhoto1}
                alt="playlist"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="max-w-xs h-36 rounded-2xl"
                src={playlistPhoto1}
                alt="playlist"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="max-w-xs h-36 rounded-2xl"
                src={playlistPhoto1}
                alt="playlist"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex justify-between mt-10">
          <h4 className="font-semibold text-sm">Featured Artists</h4>
          <p className="text-[#EE0979] font-light text-sm">View All</p>
        </div>
        <div className="featured flex justify-between mt-5">
          <div>
            <img
              className="rounded-full mb-5"
              src={playlistPhoto1}
              alt="playlist"
            />
            <p>Aesop Rock</p>
          </div>
          <div>
            <img
              className="rounded-full mb-5"
              src={playlistPhoto1}
              alt="playlist"
            />
            <p>ONE OK RO...</p>
          </div>
          <div>
            <img
              className="rounded-full mb-5"
              src={playlistPhoto1}
              alt="playlist"
            />
            <p>PnB Rock</p>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <h4 className="font-semibold text-sm mt-5">Top Artists By Country</h4>
        </div>
        <div className="top-artist flex gap-4 text-white mt-5">
          <div className="bg-gradient-to-r from-[#5EB11C] to-[#3A7634] w-44 h-44 rounded-xl flex flex-col justify-center items-center">
            <h2>TOP 50</h2>
            <span className="text-center text-white"> US</span>
          </div>
          <div className="bg-gradient-to-r from-[#00A1CB] to-[#115793] w-44 h-44 rounded-xl flex flex-col justify-center items-center">
            <h2>TOP 50</h2>
            <span className="text-center text-white">GLOBAL</span>
          </div>
        </div>
      </div>
      <div className="allartists-menu flex pt-10 justify-between items-center w-full m-auto">
        <button className=" text-2xl">
          <IoIosPulse className="text-black text-2xl" />
        </button>
        <button>
          <IoIosMicrophone className=" text-[#FF6A00] text-2xl rounded-full" />
        </button>
        <button>
          <IoMdWifi className=" text-[#FF6A00] text-4xl rounded-full" />
        </button>
        <button>
          <IoIosContrast className="  text-[#FF6A00] text-2xl rounded-full" />
        </button>
        <button>
          <IoMdSettings className=" text-[#FF6A00] text-2xl  rounded-full" />
        </button>
      </div>
    </div>
  );
};

export default AllArtist;
