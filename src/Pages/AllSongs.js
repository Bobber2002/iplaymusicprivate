import { IoIosArrowBack, IoMdSearch } from "react-icons/io";

import SongClosed from '../components/Allsongs/songClosed';
import SongOpen from '../components/Allsongs/songOpen';

const Allsongs = () => {
  return (
    <div className="m-5">
      <div className="category-header flex justify-between items-center">
        <IoIosArrowBack className="text-2xl" />
        <h2 className="category-main-title uppercase">Music</h2>
        <IoMdSearch className="text-2xl" />
      </div>
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#EE0979] to-[#FF6A00] mb-10 mt-10 pb-2">All Songs</h1>
        
      <div className="song__wrapper mr-7">
        <SongClosed/>
          <SongOpen/>
            <SongClosed/>
              <SongClosed/>
                <SongClosed/>
              <SongClosed/>
            <SongClosed/>
          <SongClosed/>
        <SongClosed/>  
      </div>
    </div>
  );
};

export default Allsongs;
