import UserContext from "../ContextProvider";
import { useContext } from "react";

const AboutUs = (props) => {
    const text = useContext(UserContext);
    return ( 
        <>
            <h1>
                This is me
            </h1>
            {text[0].name}{text[1].name}
        </>);   
}
 
export default AboutUs;