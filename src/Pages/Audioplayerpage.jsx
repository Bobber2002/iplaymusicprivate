import record from '../assets/svgs/record.svg';
import AudioPlayer from "../components/AudioPlayer";
import tracks from "../audiotracks";


const Audioplayer = () => {
    return (  
        <div className='flex justify-center items-center flex-col'>
            <div className='flex justify-center items-center'>
                <img src={record} alt="" className="h-56"/>
            </div>
            <AudioPlayer tracks={tracks}/>
        </div>
    );
}
 
export default Audioplayer;