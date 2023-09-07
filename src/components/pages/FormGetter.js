import FormSetter from "../FormSetter";
import {useState} from "react";
import UserContext from "../ContextProvider";
import { useContext } from "react";


const FormGetter = () => {
    const [information, setInformation] = useState({});

    const getInformation = (data) => {
        setInformation(data);
    }
    return ( 
        <>
            <FormSetter functionInformation={getInformation}></FormSetter>
            {information.fname} || {information.lname}
        </>
     );
}
 
export default FormGetter;