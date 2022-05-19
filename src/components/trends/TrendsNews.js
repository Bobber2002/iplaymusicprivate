import person1 from '../../assets/svgs/person1.svg';
import person2 from '../../assets/svgs/person2.svg';
import person3 from '../../assets/svgs/person3.svg';
import lightning from '../../assets/svgs/lightning.svg';

const TrendsNews = () => {
    return (  
        <div className='event__container mr-6 ml-3 z-10'>
            <div className=' text-white rounded-xl'>
                <img src={lightning} alt="" className='absolute right-8 -translate-y-12'/>
                <div className="bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAAG1BMVEXMzMyWlpbFxcWxsbG3t7ecnJyjo6O+vr6qqqqUhI1cAAABC0lEQVR4nO3U7YrDIBCFYccZP+7/itfRmES6+VfDLrwPlEo54HGSGgIAAAAAAAAAAAAAAAAAAAD+NWkflUZ9kZI9hc7UU+ibqu9Ys6qWEExUJT6EZuop9EXWzt++8nH63GZRfWrBN45i99BMXaFtYrFeq4zT+xAs9WWqbTpLaKZuoY3FfEfJItXXbccydjQxKUvoSN1Du2tpLEnHelRos/Gia62eWkJ7a7n2XJZBqNhnqKVenJYrsr42KeVfarXUa+9Wf6M1H3+y8ew0lWtcvdZM3UJ7a4WUrT+zfiWV8bOFmpbQTF2h3bVKlnFxnxe4V4rnuEatmXrjlgcAAAAAAAAAAAAAAAAAAH/cD4mjA82Or0YGAAAAAElFTkSuQmCC')] bg-center flex justify-end flex-col rounded-lg h-96 bg-no-repeat bg-cover">
                    <h1 className='font-bold ml-4 text-2xl'>EDM</h1>
                <div className='flex flex-row text-white m-4 text-sm gap-1'>
                   <span>45</span><p>#hashtags</p>
                </div>
                    <div className='flex flex-row items-center -mt-6 pb-6'>
                        <img className='ml-4' src={person3} alt="" />
                        <img className='-ml-7' src={person2} alt="" />
                        <img className='-ml-12' src={person1} alt="" />
                        <h5 className='text-sm -ml-2'><strong>3,123</strong> are talking about this</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default TrendsNews;