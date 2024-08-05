import React,{useState} from "react";

function Fullname (){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');
   


    const handleSubmit = (e)=>{
        e.preventDefault();
        setFullName(`${firstName} ${lastName}`);
          
    };

    return (
      <div>

      
      <form onSubmit={handleSubmit}>
        <h1>Full Name Display</h1>
        <div>
        <label>First Name:</label>
        <input type="text" value={firstName} required onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div> 
        <label>Last Name:</label>
        <input type="text" value={lastName} required onChange={(e) => setLastName(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
  
      
      {fullName && <h2>Full Name: {fullName}</h2>}
      </div>
    );
}

export default Fullname;