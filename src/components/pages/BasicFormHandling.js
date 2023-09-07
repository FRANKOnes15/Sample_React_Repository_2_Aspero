import {useState} from "react";

const BasicFormHandling = () => {
    const [firstName, setFirstName] = useState("Franko");
    const [lastName,  setLastName] = useState("Aspero");
    const user = [firstName,lastName];
    const [userDetails, setUserDetails] = useState("");
    
    let showInformation = (e) => {
        e.preventDefault();
        setUserDetails(user);
    }
    return ( 
        <>
            <div className="container">
                <div className="card-body">
                    <form action="" method="">
                        <label htmlFor="">First Name</label>
                        <input className="form-control" type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        <br></br>
                        <label htmlFor="">Last Name</label>
                        <input className="form-control" type="text" id="lastName"  value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        <hr></hr>
                        <button className="btn btn-primary w-100">
                            Submit information
                        </button>
                        <label htmlFor="">Show Result</label>
                        <h3>{userDetails[0]}</h3>
                        <h3>{userDetails[1]}</h3>
                    </form>
                </div>
            </div>
        </>
     );
}
 
export default BasicFormHandling;