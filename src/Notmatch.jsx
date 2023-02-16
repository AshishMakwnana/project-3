import React from "react";
import "./App.css";
const Notmatch =(props)=>{
    let { x, y, z } = props
    return <>
        <h1 className="component__style ">{x} {y} {z} </h1>
        <h1 className="component__style">This are not match</h1>
    </>
};

export default Notmatch;