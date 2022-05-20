import play from '../../assets/svgs/play.svg';


const songOpen = () => {
        return (  
            <div className="song__Open bg-gradient-to-r from-[#EE0979] to-[#FF6A00] text-white rounded-lg mt-6 mb-6 flex items-center justify-between pr-3">
                <div className="bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAAG1BMVEXMzMyWlpbFxcWxsbG3t7ecnJyjo6O+vr6qqqqUhI1cAAABC0lEQVR4nO3U7YrDIBCFYccZP+7/itfRmES6+VfDLrwPlEo54HGSGgIAAAAAAAAAAAAAAAAAAAD+NWkflUZ9kZI9hc7UU+ibqu9Ys6qWEExUJT6EZuop9EXWzt++8nH63GZRfWrBN45i99BMXaFtYrFeq4zT+xAs9WWqbTpLaKZuoY3FfEfJItXXbccydjQxKUvoSN1Du2tpLEnHelRos/Gia62eWkJ7a7n2XJZBqNhnqKVenJYrsr42KeVfarXUa+9Wf6M1H3+y8ew0lWtcvdZM3UJ7a4WUrT+zfiWV8bOFmpbQTF2h3bVKlnFxnxe4V4rnuEatmXrjlgcAAAAAAAAAAAAAAAAAAH/cD4mjA82Or0YGAAAAAElFTkSuQmCC')] bg-center w-24 h-24 rounded-l-md flex justify-center items-center">
                <img src={play} alt="player_icon" className="w-10 h-10" />  
                </div>
            <div className="-ml-6">
                <h2 className="font-bold text-xl">Song-name</h2>
                <p className="text-md">Artist-name</p>
            </div>
            <p>0:00</p>
            </div>
    );
}
 
export default songOpen;