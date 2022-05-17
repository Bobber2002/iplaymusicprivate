import play from '../../assets/svgs/play.svg';

const songClosed = () => {
    return (  
        <div className="song flex items-center min-h-[3.5rem] mt-6 mb-6">
          <img src={play} alt="player_icon" className="w-10 h-10 mr-4" />  
          <div className="flex items-center justify-between w-full min-h-full">
            <div className="flex flex-col justify-between min-h-[3.5rem]">
              <h2 className="font-extrabold">Song-name</h2>
              <p>Artist-name</p>
            </div>
            <p>0:00</p>
          </div>
        </div>
    );
}
 
export default songClosed;