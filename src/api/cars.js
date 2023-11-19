import axiosSecure from "."

// fetch all cars data 
export const getAllCars = async () => {
    const {data} = await axiosSecure('/cars')
    return data;
}

// fetch all cars for host
export const getHostCars = async (email) => {
    const {data} = await axiosSecure(`/car/${email}`);
    return data;
}

// get single car data from database
export const getCar = async(id) => {
    const {data} = await axiosSecure(`/car/${id}`);
    return data;
}

// save a car data in database 
export const addCar = async(carData) => {
    const {data} = await axiosSecure.post(`/cars/${carData}`);
    return data;
}