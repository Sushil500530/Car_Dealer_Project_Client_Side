import { BsFingerprint } from "react-icons/bs";
import MenuItems from "./MenuItems";

const GuestMenu = () => {
    return (
        <>
           <MenuItems icon={BsFingerprint}
           label={"My Booking"} 
           address={'my-booking'} 
           />
        </>
    );
};

export default GuestMenu;