import {AiOutlineLeft, AiOutlineSearch} from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";

import TrendsNews from '../components/trends/TrendsNews';

import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode} from "swiper";

const Trends = () => {
    return (  
        <div className='ml-2 -z-20'>
            <div className='flex justify-between mt-6 mb-10 mr-6'>
                <AiOutlineLeft className='w-6 h-6'/>
                <AiOutlineSearch className='w-6 h-6'/>
            </div>
            <h1 className='text-4xl font-extrabold text-transparent bg-clip-text ml-4 bg-gradient-to-r from-[#EE0979] to-[#FF6A00] mb-10'>Latest Trends</h1>
    <TrendsNews className="z-10"/>

    <Swiper
        slidesPerView={2}
        spaceBetween={20}
        // loop={true}
        // loopFillGroupWithBlank={true}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper -mt-14 -mb-14 bg-[#FF1168] !p-10 !py-28 rounded-l-lg !-z-10">
            <div className='wrapper'>
                <SwiperSlide><h2 className='text-white font-bold text-xl text-left mt-8'>Trending Now</h2></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" className="rounded-lg drop-shadow-sm"/></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" className="rounded-lg drop-shadow-sm"/></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" className="rounded-lg drop-shadow-sm"/></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" className="rounded-lg drop-shadow-sm"/></SwiperSlide>
                <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" className="rounded-lg drop-shadow-sm"/></SwiperSlide>
            </div>
      </Swiper>

    <TrendsNews className="z-10"/>
    </div>
    );
}
 
export default Trends;