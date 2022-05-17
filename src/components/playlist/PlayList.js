// create spotify play list page that can shows the playlist of the selected category and the playlist of the selected artist and the playlist of the selected event

import soundwave from "././../../assets/svgs/soundwave.svg";
import React from "react";
import playlistPhoto1 from "./../../assets/images/playlistPhoto1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import {
  IoIosArrowBack,
  IoMdSearch,
  IoIosPulse,
  IoIosMicrophone,
  IoMdWifi,
  IoIosContrast,
  IoMdSettings,
  IoIosPlayCircle,
} from "react-icons/io";

const PlayList = () => {
  return (
    <div className="playlist-content pl-6 pr-6 pt-8 pb-8 max-w-md m-auto">
      <div>
        <img
          className=" soundwave w-[476.26px] -translate-x-0 -translate-y-12"
          src={soundwave}
          alt="soundwave"
        />
        <div className="playlist-header flex justify-between items-center text-white">
          <IoIosArrowBack />
          <h2 className="playlist-main-title font-light text-sm">PLAYLIST</h2>
          <IoMdSearch />
        </div>
        <h3 className="playlist-title m-10  text-4xl text-white font-semibold ">
          Playlist
        </h3>
      </div>
      <div className="playlist-content-container">
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
            <img src={playlistPhoto1} alt="playlist" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={playlistPhoto1} alt="playlist" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={playlistPhoto1} alt="playlist" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={playlistPhoto1} alt="playlist" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={playlistPhoto1} alt="playlist" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={playlistPhoto1} alt="playlist" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={playlistPhoto1} alt="playlist" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={playlistPhoto1} alt="playlist" />
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => <p>{isActive ? "active" : "not active"}</p>}
          </SwiperSlide>
          <SwiperSlide>
            <img src={playlistPhoto1} alt="playlist" />
          </SwiperSlide>
        </Swiper>
        <div>
          <h4 className="text-center mt-5 text-[#341931] font-semibold text-xl">
            Top 50 <br /> Rock Ballads
          </h4>
        </div>
        <div className="playlist-content-item ">
          <div className="playlist-content-item-header flex justify-between items-center mt-3 p-2">
            <div className="playlist-content-item-main flex justify-center items-center gap-3">
              <div>
                <IoIosPlayCircle className=" bg-gradient-to-r from-[#EE0979] to-[#FF6A00] text-3xl text-white rounded-full" />
              </div>
              <div>
                <p className="playlist-content-item-title-text text-[#341931] font-semibold text-base">
                  Old Town Road
                </p>
                <span className="text-[#341931] font-light text-xs">
                  Billy Ray Cyrus
                </span>
              </div>
            </div>
            <span className="text-[#341931] font-light text-xs">3:58</span>
          </div>
        </div>
        <div className="playlist-content-item ">
          <div className="playlist-content-item-header flex justify-between items-center mt-3 p-2">
            <div className="playlist-content-item-main flex justify-center items-center gap-3">
              <div>
                <IoIosPlayCircle className=" bg-gradient-to-r from-[#EE0979] to-[#FF6A00] text-3xl text-white rounded-full" />
              </div>
              <div>
                <p className="playlist-content-item-title-text text-[#341931] font-semibold text-base">
                  Don’t Call Me Up
                </p>
                <span className="text-[#341931] font-light text-xs">Mabel</span>
              </div>
            </div>
            <span className="text-[#341931] font-light text-xs">2:46</span>
          </div>
        </div>
        <div className="playlist-content-item">
          <div className="playlist-content-item-header flex justify-between items-center mt-3 p-2">
            <div className="playlist-content-item-main flex justify-center items-center gap-3">
              <div>
                <IoIosPlayCircle className=" bg-gradient-to-r from-[#EE0979] to-[#FF6A00] text-3xl text-white rounded-full" />
              </div>
              <div>
                <p className="playlist-content-item-title-text text-[#341931] font-semibold text-base">
                  Let Me Down Slowly
                </p>
                <span className="text-[#341931] font-light text-xs">
                  Alec Benjamin
                </span>
              </div>
            </div>
            <span className="text-[#341931] font-light text-xs">4:12</span>
          </div>
        </div>
        <div className="playlist-content-item">
          <div className="playlist-content-item-header flex justify-between items-center mt-3 p-2">
            <div className="playlist-content-item-main flex justify-center items-center gap-3">
              <div>
                <IoIosPlayCircle className=" bg-gradient-to-r from-[#EE0979] to-[#FF6A00] text-3xl text-white rounded-full" />
              </div>
              <div>
                <p className="playlist-content-item-title-text text-[#341931] font-semibold text-base">
                  Here With Me
                </p>
                <span className="text-[#341931] font-light text-xs">
                  Marshmello
                </span>
              </div>
            </div>
            <span className="text-[#341931] font-light text-xs">3:37</span>
          </div>
        </div>
        <div className="playlist-content-item">
          <div className="playlist-content-item-header flex justify-between items-center mt-3 p-2">
            <div className="playlist-content-item-main flex justify-center items-center gap-3">
              <div>
                <IoIosPlayCircle className=" bg-gradient-to-r from-[#EE0979] to-[#FF6A00] text-3xl text-white rounded-full" />
              </div>
              <div>
                <p className="playlist-content-item-title-text text-[#341931] font-semibold text-base">
                  Paradise
                </p>
                <span className="text-[#341931] font-light text-xs">Bazzi</span>
              </div>
            </div>
            <span className="text-[#341931] font-light text-xs">3:12</span>
          </div>
        </div>
        <div className="playlist-content-item">
          <div className="playlist-content-item-header flex justify-between items-center mt-3 p-2">
            <div className="playlist-content-item-main flex justify-center items-center gap-3">
              <div>
                <IoIosPlayCircle className=" bg-gradient-to-r from-[#EE0979] to-[#FF6A00] text-3xl text-white rounded-full" />
              </div>
              <div>
                <p className="playlist-content-item-title-text text-[#341931] font-semibold text-base">
                  Let Me Down Slowly
                </p>
                <span className="text-[#341931] font-light text-xs">
                  Alec Benjamin
                </span>
              </div>
            </div>
            <span className="text-[#341931] font-light text-xs">4:12</span>
          </div>
        </div>
        <div className="playlist-content-item">
          <div className="playlist-content-item-header flex justify-between items-center mt-3 p-2">
            <div className="playlist-content-item-main flex justify-center items-center gap-3">
              <div>
                <IoIosPlayCircle className=" bg-gradient-to-r from-[#EE0979] to-[#FF6A00] text-3xl text-white rounded-full" />
              </div>
              <div>
                <p className="playlist-content-item-title-text text-[#341931] font-semibold text-base">
                  Here With Me
                </p>
                <span className="text-[#341931] font-light text-xs">
                  Marshmello
                </span>
              </div>
            </div>
            <span className="text-[#341931] font-light text-xs">3:37</span>
          </div>
        </div>
        <div className="playlist-content-item">
          <div className="playlist-content-item-header flex justify-between items-center mt-3 p-2">
            <div className="playlist-content-item-main flex justify-center items-center gap-3">
              <div>
                <IoIosPlayCircle className=" bg-gradient-to-r from-[#EE0979] to-[#FF6A00] text-3xl text-white rounded-full" />
              </div>
              <div>
                <p className="playlist-content-item-title-text text-[#341931] font-semibold text-base">
                  Paradise
                </p>
                <span className="text-[#341931] font-light text-xs">Bazzi</span>
              </div>
            </div>
            <span className="text-[#341931] font-light text-xs">3:12</span>
          </div>
        </div>
      </div>

      <button className="login-button w-full border-4 border-[#EE0979] rounded-3xl p-2 mt-10 mb-10 text-pink-700 m-3">
        LISTEN ALL
      </button>
      <div className="category-menu flex pt-8 justify-between items-center w-full m-auto">
        <button className=" text-2xl">
          <IoIosPulse className=" text-2xl text-[#FF6A00] " />
        </button>
        <button>
          <IoIosMicrophone className=" text-[#FF6A00] text-2xl" />
        </button>
        <button>
          <IoMdWifi className=" bg-gradient-to-r from-[#EE0979] to-[#FF6A00] text-4xl text-white rounded-full" />
        </button>
        <button>
          <IoIosContrast className=" bg-gradient-to-r from-[#000000] to-[#000000] text-2xl text-white rounded-full" />
        </button>
        <button>
          <IoMdSettings className="  text-2xl text-[#FF6A00]" />
        </button>
      </div>
    </div>
  );
};

export default PlayList;
