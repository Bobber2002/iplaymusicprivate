// create spotify play list page that can shows the playlist of the selected category and the playlist of the selected artist and the playlist of the selected event

//create spotify play list page that can shows the playlist of the selected category and the playlist of the selected artist and the playlist of the selected event
import React from "react";
import soundwave from "././../../assets/svgs/soundwave.svg";
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
    <div className="playlist-content  max-w-md m-auto h-full">
      <div className="playlist-header flex justify-between items-center text-white mt-3">
        <IoIosArrowBack />
        <h2 className="playlist-main-title">PLAYLIST</h2>
        <IoMdSearch />
      </div>
      <img
        className=" soundwave relative min-w-[476.26px] -translate-x-0 -translate-y-12"
        src={soundwave}
        alt="soundwave"
      />
      <div>
        <h3 className="playlist-title m-10  text-4xl text-white ">Playlist</h3>
        <div className="playlist-content-container">
          <div>
            <h4 className="text-center mt-60 mb-10">Top 50Rock Ballads</h4>
          </div>
          <div className="playlist-content-item ">
            <div className="playlist-content-item-header flex justify-between items-center mt-3 p-4">
              <div className="playlist-content-item-main flex justify-center items-center gap-3">
                <div>
                  <IoIosPlayCircle className=" bg-gradient-to-r from-[#EE0979] to-[#FF6A00] text-3xl text-white rounded-full" />
                </div>
                <div>
                  <p className="playlist-content-item-title-text">
                    Old Town Road
                  </p>
                  <span>Billy Ray Cyrus</span>
                </div>
              </div>
              <span>3:58</span>
            </div>
          </div>
          <div className="playlist-content-item ">
            <div className="playlist-content-item-header flex justify-between items-center mt-3 p-4">
              <div className="playlist-content-item-main flex justify-center items-center gap-3">
                <div>
                  <IoIosPlayCircle className=" bg-gradient-to-r from-[#EE0979] to-[#FF6A00] text-3xl text-white rounded-full" />
                </div>
                <div>
                  <p className="playlist-content-item-title-text">
                    Don’t Call Me Up
                  </p>
                  <span>Mabel</span>
                </div>
              </div>
              <span>2:46</span>
            </div>
          </div>
          <div className="playlist-content-item mt-3 p-4">
            <div className="playlist-content-item-header flex justify-between items-center">
              <div className="playlist-content-item-main flex justify-center items-center gap-3">
                <div>
                  <IoIosPlayCircle className=" bg-gradient-to-r from-[#EE0979] to-[#FF6A00] text-3xl text-white rounded-full" />
                </div>
                <div>
                  <p className="playlist-content-item-title-text">
                    Let Me Down Slowly
                  </p>
                  <span>Alec Benjamin</span>
                </div>
              </div>
              <span>4:12</span>
            </div>
          </div>
          <div className="playlist-content-item mt-3 p-4">
            <div className="playlist-content-item-header flex justify-between items-center">
              <div className="playlist-content-item-main flex justify-center items-center gap-3">
                <div>
                  <IoIosPlayCircle className=" bg-gradient-to-r from-[#EE0979] to-[#FF6A00] text-3xl text-white rounded-full" />
                </div>
                <div>
                  <p className="playlist-content-item-title-text">
                    Here With Me
                  </p>
                  <span>Marshmello</span>
                </div>
              </div>
              <span>3:37</span>
            </div>
          </div>
          <div className="playlist-content-item mt-3 p-4">
            <div className="playlist-content-item-header flex justify-between items-center">
              <div className="playlist-content-item-main flex justify-center items-center gap-3">
                <div>
                  <IoIosPlayCircle className=" bg-gradient-to-r from-[#EE0979] to-[#FF6A00] text-3xl text-white rounded-full" />
                </div>
                <div>
                  <p className="playlist-content-item-title-text">Paradise</p>
                  <span>Bazzi</span>
                </div>
              </div>
              <span>3:12</span>
            </div>
          </div>
          <div className="playlist-content-item mt-3 p-4">
            <div className="playlist-content-item-header flex justify-between items-center">
              <div className="playlist-content-item-main flex justify-center items-center gap-3">
                <div>
                  <IoIosPlayCircle className=" bg-gradient-to-r from-[#EE0979] to-[#FF6A00] text-3xl text-white rounded-full" />
                </div>
                <div>
                  <p className="playlist-content-item-title-text">
                    Let Me Down Slowly
                  </p>
                  <span>Alec Benjamin</span>
                </div>
              </div>
              <span>4:12</span>
            </div>
          </div>
          <div className="playlist-content-item mt-3 p-4">
            <div className="playlist-content-item-header flex justify-between items-center">
              <div className="playlist-content-item-main flex justify-center items-center gap-3">
                <div>
                  <IoIosPlayCircle className=" bg-gradient-to-r from-[#EE0979] to-[#FF6A00] text-3xl text-white rounded-full" />
                </div>
                <div>
                  <p className="playlist-content-item-title-text">
                    Here With Me
                  </p>
                  <span>Marshmello</span>
                </div>
              </div>
              <span>3:37</span>
            </div>
          </div>
          <div className="playlist-content-item mt-3 p-4">
            <div className="playlist-content-item-header flex justify-between items-center">
              <div className="playlist-content-item-main flex justify-center items-center gap-3">
                <div>
                  <IoIosPlayCircle className=" bg-gradient-to-r from-[#EE0979] to-[#FF6A00] text-3xl text-white rounded-full" />
                </div>
                <div>
                  <p className="playlist-content-item-title-text">Paradise</p>
                  <span>Bazzi</span>
                </div>
              </div>
              <span>3:12</span>
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
    </div>
  );
};

export default PlayList;
