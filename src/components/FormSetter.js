import { useState } from "react";

const FormSetter = (props) => {
    const [firstName, setFirstName] = useState("franko");
    const [lastName, setLastName] = useState("Aspero");

    const giveData = (e) =>{
        e.preventDefault();
        props.functionInformation({fname: firstName, lname: lastName});
    }
    return ( 
        <>
           <div className="container">
                <div className="card">
                    <div className="card-body">
                        <form action="" method="">
                            <label htmlFor="">First Name</label>
                            <input type="text" className="form-control" id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                            <label htmlFor="">Last Name</label>
                            <input type="text" className="form-control" id="lastname"  value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                            <hr></hr>
                            <button className="btn btn=primary" onClick={giveData}>
                                Show Data
                            </button>
                        </form>
                    </div>
                </div>
            </div> 
        </>
     );
}
 
export default FormSetter;