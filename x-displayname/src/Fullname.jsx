import React,{useState} from "react";

function Fullname (){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = (e)=>{
        e.preventDefault();
        if (firstName && lastName) {
            setFullName(`${firstName} ${lastName}`);
            setError('');
          } else {
            setError('Both fields are required.');
          }
    };

    return (
      <div>

      
      <form onSubmit={handleSubmit}>
        <h1>Full Name Display</h1>
        <div>
        <label>First Name:</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div> 
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
  
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {fullName && <h2>Full Name: {fullName}</h2>}
      </div>
    );
}

export default Fullname;