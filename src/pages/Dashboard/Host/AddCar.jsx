import { Helmet } from "react-helmet-async";
import AddCardForm from "../../../components/Form/AddCardForm";

const AddCar = () => {
    return (
        <div>
           <Helmet>
            <title>Add Car | Dashboard</title>
           </Helmet>
           <AddCardForm />
        </div>
    );
};

export default AddCar;