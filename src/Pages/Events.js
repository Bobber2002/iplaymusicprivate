import {AiOutlineLeft, AiOutlineSearch} from 'react-icons/ai';
import events1 from '../assets/svgs/events1.svg';
import person1 from '../assets/svgs/person1.svg';
import person2 from '../assets/svgs/person2.svg';
import person3 from '../assets/svgs/person3.svg';
import { Swiper, SwiperSlide } from "swiper/react";

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
        <div className='event__container mt-14'>
            <div className='bg-[#111625] text-white rounded-xl'>
            <img src={events1} alt=""/>
                <div className='flex flex-row text-[#FF1168] m-4 text-sm gap-1'>
                    <p>#spotify,</p>
                    <p>#musicworld,</p>
                    <p>#grammy2020</p>
                </div>
                    <div className='flex flex-row items-center -mt-6'>
                        <img className='ml-4' src={person3} alt="" />
                        <img className='-ml-7' src={person2} alt="" />
                        <img className='-ml-12' src={person1} alt="" />
                        <h5 className='text-sm -ml-2'><strong>3,123</strong> are talking about this</h5>
                    </div>
                    <h1 className='font-bold ml-4 text-xl pb-8'>Coachella 2019 Day Three Highlights</h1>
            </div>
        </div>
    </div>
    );
}
 
export default Events;