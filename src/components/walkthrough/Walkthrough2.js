import {IoIosRadio} from 'react-icons/io';
import {FaHeart} from 'react-icons/fa';
import {BsMusicNote} from 'react-icons/bs';
import color1 from '../../assets/svgs/tutorialColor1.svg';

function Onboarding2() {
  return (
    <div className="overflow-hidden flex justify-center flex-col items-center">
      <img className='relative min-w-[476.26px] -translate-x-0 -translate-y-12' src={color1} alt="color1" />
      <div className='flex flex-col gap-3 mt-2 mb-12 text-center'>
        <h2 className='font-bold text-2xl'>No Music<br />No Life</h2>
        <p>Vivamus auctor dui dignissim, sollicitudin <br /> nunc ac, aliquam justo. Vestibulum <br /> perllentesque lacinia eleifend.</p>
      </div>
      <div className='flex flex-row w-full justify-center gap-6 mb-8'>
        <div className='btn1 rounded-full flex justify-around items-center w-[75px] h-[75px] bg-white border-2 border-[#341931]'><IoIosRadio className='w-10 h-10 text-[#341931 ]' /></div>
        <div className='btn2 rounded-full flex justify-around items-center w-[75px] h-[75px] bg-[#FF1168] border-2 border-none'><FaHeart className='w-8 h-8 text-white' /></div>
        <div className='btn3 rounded-full flex justify-around items-center w-[75px] h-[75px] bg-white border-2 border-[#341931]'><BsMusicNote className='w-8 h-8 text-[#341931]' /></div>
      </div>
      <div className='uppercase'>
        <p>Skip</p>
      </div>
    </div>
  );
}

export default Onboarding2;