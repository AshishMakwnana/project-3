import React, { useState } from "react";
import "./App.css";

const App = () =>{
  const time = new Date().toLocaleTimeString();
  const [ctime,setCTime] = useState(time);

  const updateTime = () =>{
    const time = new Date().toLocaleTimeString();
    setCTime(time)
  };
  setInterval(updateTime,1000)
  return(
    <>
      <h1 className="App-header">{ctime}</h1>
    </>
  )
};

export default App;