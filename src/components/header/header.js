import { IoIosArrowBack, IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    return ( 
        <div className="category-header flex justify-between items-center z-10 p-4 -top-0 fixed w-[375px]">
        <IoIosArrowBack className="text-2xl" />
        <h2 className="category-main-title uppercase">Music</h2>
        <IoMdSearch onClick={()=>navigate('/search')} className="text-2xl" />
      </div>
     );
}
 
export default Header;