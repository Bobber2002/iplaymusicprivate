import React from 'react';
import { IoIosArrowBack, IoMdSearch, IoIosArrowForward, IoIosPulse, IoIosMicrophone, IoMdWifi, IoIosContrast, IoMdSettings } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const Navbar = ({playingSong}) => {
    const navigate = useNavigate();

    return (
      <>
        <audio id='player' src={playingSong} />
        <div className="category-menu fixed bottom-0 flex p-4 justify-between items-center w-[375px] m-auto shadow-[0_10px_20px_-2px_rgba(0,0,0,1)]">
          <button className=" text-2xl" onClick={async () => navigate('/category')}>
            <IoIosPulse className="bg-gradient-to-r from-[#EE0979] to-[#FF6A00] text-2xl text-white rounded-full" />
          </button>
          <button onClick={async () => navigate('/allsongs')}>
            <IoIosMicrophone className=" bg-gradient-to-r from-[#EE0979] to-[#FF6A00] text-2xl text-white rounded-full" />
          </button>
          <button onClick={async () => navigate('/audioplayer')}>
            <IoMdWifi className=" bg-gradient-to-r from-[#EE0979] to-[#FF6A00] text-4xl text-white rounded-full" />
          </button>
          <button onClick={async () => navigate('/playlist')}>
            <IoIosContrast className=" bg-gradient-to-r from-[#EE0979] to-[#FF6A00] text-2xl text-white rounded-full" />
          </button>
          <button>
            <IoMdSettings className=" bg-gradient-to-r from-[#EE0979] to-[#FF6A00] text-2xl text-white rounded-full" />
          </button>
        </div>
      </>
    )};
 
export default Navbar;