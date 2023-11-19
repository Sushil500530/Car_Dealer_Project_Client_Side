import { BsFillHouseAddFill } from "react-icons/bs";
import MenuItems from "./MenuItems";
import { MdHomeWork } from "react-icons/md";

const HostMenu = () => {
    return (
        <>
          <MenuItems icon={BsFillHouseAddFill} label={'Add Car'} address='add-car'></MenuItems>  
          <MenuItems icon={MdHomeWork} label={'My Listings'} address='my-listings'></MenuItems>  
        </>
    );
};

export default HostMenu;