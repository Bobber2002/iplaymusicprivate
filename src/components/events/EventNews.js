import person1 from '../../assets/svgs/person1.svg';
import person2 from '../../assets/svgs/person2.svg';
import person3 from '../../assets/svgs/person3.svg';

const EventNews = () => {
    return (  
        <div className='event__container mt-14'>
            <div className='bg-[#111625] text-white rounded-xl'>
                <div className="bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAAG1BMVEXMzMyWlpbFxcWxsbG3t7ecnJyjo6O+vr6qqqqUhI1cAAABC0lEQVR4nO3U7YrDIBCFYccZP+7/itfRmES6+VfDLrwPlEo54HGSGgIAAAAAAAAAAAAAAAAAAAD+NWkflUZ9kZI9hc7UU+ibqu9Ys6qWEExUJT6EZuop9EXWzt++8nH63GZRfWrBN45i99BMXaFtYrFeq4zT+xAs9WWqbTpLaKZuoY3FfEfJItXXbccydjQxKUvoSN1Du2tpLEnHelRos/Gia62eWkJ7a7n2XJZBqNhnqKVenJYrsr42KeVfarXUa+9Wf6M1H3+y8ew0lWtcvdZM3UJ7a4WUrT+zfiWV8bOFmpbQTF2h3bVKlnFxnxe4V4rnuEatmXrjlgcAAAAAAAAAAAAAAAAAAH/cD4mjA82Or0YGAAAAAElFTkSuQmCC')] bg-center rounded-t-md flex justify-center items-center h-52 bg-no-repeat bg-cover"></div>
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
    );
}
 
export default EventNews;