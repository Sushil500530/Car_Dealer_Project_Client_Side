import { FaUserCog } from "react-icons/fa";
import MenuItems from "./MenuItems";

const AdminMenu = () => {
    return (
        <>
           <MenuItems icon={FaUserCog} label={'Manage Uers'} address={'manage-users'} /> 
        </>
    );
};

export default AdminMenu;