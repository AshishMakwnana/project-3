import React from "react";
import "./App.css";
import SloatMach from "./SloatMach";

const App = () => {
  return <>
    <h1 className="heading__style">
      🎰 Welcome to <span className="span__style">Sloat Machine Game</span> 🎰
    </h1>
    <div className="sloatmachine">
        <SloatMach x ='😂' y='😂' z='😂' />
        <hr />
        <SloatMach x ='❤' y='😂' z='😊' />
        <hr />
        <SloatMach x ='😂' y='😒' z='😂' />
        <hr />
        <SloatMach x ='😂' y='😘' z='😂' />
        <hr />
        
    </div>
  </>
};

export default App;
