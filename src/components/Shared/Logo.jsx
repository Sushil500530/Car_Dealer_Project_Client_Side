import { Link } from "react-router-dom";
import logoImg from '../../assets/images/ad2b77f2e7c5405967319bd1c0d1a007.jpg'
const Logo = () => {
    return (
        <div className="w-[150px] h-[80px]">
              <Link to='/'>
              <img
                className='hidden md:block w-full h-full'
                src={logoImg}
                alt='logo'
              />
            </Link>
        </div>
    );
};

export default Logo;