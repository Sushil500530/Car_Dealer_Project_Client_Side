/* eslint-disable react/prop-types */


const ToggleBtn = ({ toggleHandler }) => {
    return (
        <>
            <label htmlFor="Toggle3" className="inline-flex w-full justify-center items-center px-2 rounded-md cursor-pointer text-gray-800">
            <input onChange={toggleHandler} type="checkbox" name="" id="Toggle3" className="hidden peer" />
            <span className="px-4 py-1 rounded-l-md bg-red-400 peer-checked:bg-gray-300">
                Guest
            </span>
            <span className="px-4 py-1 rounded-l-md bg-red-400 peer-checked:bg-gray-300">
                Host
            </span>
            </label>
        </>
    );
};

export default ToggleBtn;