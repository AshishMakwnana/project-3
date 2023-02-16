import React, { useState } from "react";
import "./App.css";






const App = () =>{
  const state = useState();
  const [count,setCount] = useState(0)
  const IncVal =()=>{
    setCount(count+1);
  };
  
  const DecVal =() =>{
    setCount(count-1);
  };
  return (<>
  <div className="main">
    <h1 className="heading__style">{count}</h1>
    <div className="btns">
    <button className="inc_btn btn" onClick={IncVal}>➕</button>
    <button className="dec_btn btn" onClick={DecVal}>➖</button>
    </div>
  </div>
  </>
  );
};

export default App;