import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [FullName, setName] = useState({
    Fname: "",
    Lname: "",
    email :"",
    phone :""
  });

  const InpHandler = (event) => {
    // fetch the value of inputs tag
    const {value, name} = event.target;
    
    setName((preValue)=>{
      return{
        ...preValue,
      [name]:value,
      }
    });

    // check the value of name of input 
    // if (name === "Fname") {
    //   setName((preValue) => {
    //     return {
    //       fname: value,
    //       lname: preValue.lname,
    //       email: preValue.email,
    //       phone : preValue.phone
    //     };
    //   });
    // } else if (name === "Lname") {
    //   setName((preValue) => {
    //     return {
    //       lname: value,
    //       fname: preValue.fname,
    //       email: preValue.email,
    //       phone : preValue.phone
    //     };
    //   });
    // } else if (name === "email") {
    //   setName((preValue) => {
    //     return {
    //       lname: preValue.lname,
    //       fname: preValue.fname,
    //       email: value,
    //       phone : preValue.phone
    //     };
    //   });
    // } else if (name === "phone") {
    //   setName((preValue) => {
    //     return {
    //       lname: preValue.value,
    //       fname: preValue.fname,
    //       email: preValue.email,
    //       phone: value
    //     };
    //   });
    // };
  };

  const submit = (event) => {
    event.preventDefault();
    alert("Form Submited")
  };
  return (
    <>
      <div className="App-header">
        <div className="container">
          <h1>Hello {FullName.Fname} {FullName.Lname}</h1>
          <p>{FullName.email}</p>
          <p>{FullName.phone}</p>
          <form onSubmit={submit}>
            <input type="text" name="Fname" placeholder="Enter your first name" onChange={InpHandler} value={FullName.value} />
            <input type="text" name="Lname" placeholder="Enter your Last name" onChange={InpHandler} value={FullName.value} />
            <input type="email" name="email" placeholder="Enter your email" onChange={InpHandler} value ={FullName.email} />
            <input type="number" name="phone" placeholder="Enter your Phone Number" onChange={InpHandler} value = {FullName.phone} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default App;
