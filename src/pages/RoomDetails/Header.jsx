/* eslint-disable react/prop-types */
import Heading from "../../components/Shared/Heading";

const Header = ({car}) => {
    return (
        <>
        <Heading title={car?.title} subtitle={car?.location} />
            <div className="w-full md:h-[75vh] overflow-hidden rounded-xl">
                <img src={car?.image} alt="header image" className="w-full h-full" />
            </div>
        </>
    );
};

export default Header;