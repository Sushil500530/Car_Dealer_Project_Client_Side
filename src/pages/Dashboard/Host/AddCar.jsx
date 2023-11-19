import { Helmet } from "react-helmet-async";
import AddCarForm from "../../../components/Form/AddCardForm";
import { imageUpload } from "../../../api/utils";
import { useState } from "react";

const AddCar = () => {
    const [dates,setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key:"selection"
    })


    const handleAddCar = async (e) => {
        e.preventDefault();
        const form = e.target;
        const location = form.location.value;
        const category = form.category.value;
        const title = form.title.value;
        const to = dates.endDate;
        const from = dates.startDate;
        const price = form.price.value;
        const guest = form.guest.value;
        const total_guest = form.total_guest.value;
        const first_site = form.first_site.value;
        const back_site = form.back_site.value;
        const description = form.description.value;
        const imageLoad = form?.image?.files[0];
        const image =  await imageUpload(imageLoad);
        
        console.log({location,category,title,price,guest,total_guest,first_site,back_site,description,image,to,from});
    }

    // handle date change from react date range calender 
    const handleDates = (ranges) => {
        console.log(ranges);
        setDates(ranges?.selection)
    }
    return (
        <div>
           <Helmet>
            <title>Add Car | Dashboard</title>
           </Helmet>
           <AddCarForm handleSubmit={handleAddCar} 
           handleDates={handleDates}
           dates={dates}
            />
        </div>
    );
};

export default AddCar;