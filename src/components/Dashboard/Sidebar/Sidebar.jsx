import { AiOutlineBars } from "react-icons/ai";
import Logo from "../../Shared/Logo";
import { useState } from "react";
import MenuItems from "../MenuItems";
import { BsGraphUp } from "react-icons/bs";
import { FcSettings } from "react-icons/fc";
import { GrLogout } from 'react-icons/gr';



const Sidebar = () => {
    const [isActive, setIsActive] = useState(false)


    const handleToggle = () => {
        setIsActive(!isActive)
    }
    return (
        <div>
            {/* responsive small device */}
            <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
                <div>
                    <div className="block cursor-pointer p-5 font-bold">
                        <Logo />
                    </div>
                </div>
                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* sidebar  */}
            <div className={`z-10 md:fixed flex flex-col justify-center`}>
                <div>
                    <div>
                        <div className='w-full hidden md:flex px-4 py-2 shadow rounded-lg justify-center items-center mx-auto'>
                            <Logo />
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        {/* If a user is host */}
                        {/* {role === 'host' && <ToggleBtn toggleHandler={toggleHandler} />} */}
                        <nav>
                            <MenuItems
                                icon={BsGraphUp}
                                label='Statistics'
                                address='/dashboard'
                            />

                            {/* Host Menu Items */}
                            {/* {role === 'guest' && <GuestMenu />}
              {role === 'host' ? toggle ? <HostMenu /> : <GuestMenu /> : ''}
              {role === 'admin' && <AdminMenu />} */}
                        </nav>
                    </div>
                </div>

                {/* for user with setting and logout  */}
                <div>
                    <hr />

                    <MenuItems
                        icon={FcSettings}
                        label='Profile'
                        address='/dashboard/profile'
                    />
                    <button
                        // onClick={logOut}
                        className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
                    >
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;