import {AiOutlineLeft, AiOutlineSearch} from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";

import EventNews from '../components/events/EventNews';

import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode} from "swiper";

const Events = () => {
    return (  
        <div className='ml-6 mr-6'>
            <div className='flex justify-between mt-6 mb-10'>
                <AiOutlineLeft className='w-6 h-6'/>
                <AiOutlineSearch className='w-6 h-6'/>
            </div>
            <h1 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#EE0979] to-[#FF6A00] mb-10'>Events Feed</h1>
            <Swiper
        slidesPerView={2}
        spaceBetween={-10}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper">
            <div className='wrapper flex flex-row'>
                <SwiperSlide><div className='bg-[#EE0979] text-white font-extrabold text-center w-fit p-3 rounded-full'>#spotify</div></SwiperSlide>
                <SwiperSlide><div className='bg-[#EE0979] text-white font-extrabold text-center w-fit p-3 rounded-full relative right-12 '>#musicworld</div></SwiperSlide>
                <SwiperSlide><div className='bg-[#EE0979] text-white font-extrabold text-center w-fit p-3 rounded-full relative right-14'>#jazz</div></SwiperSlide>
                <SwiperSlide><div  className='bg-[#EE0979] text-white font-extrabold text-center w-fit p-3 rounded-full relative right-32'>#billboard</div></SwiperSlide>
                <SwiperSlide><div  className='bg-[#EE0979] text-white font-extrabold text-center w-fit p-3 rounded-full relative right-40'>#2022</div></SwiperSlide>
            </div>
      </Swiper>
    <EventNews/>
    <EventNews/>
    <EventNews/>
    <EventNews/>
    </div>
    );
}
 
export default Events;