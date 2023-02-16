import React from "react";
import Match from "./Match";
import Notmatch from "./Notmatch";

const SloatMach = (props) =>{
    let {x,y,z} = props;
    return <>
    {( (x===y && y===z) ? Match(props) : Notmatch(props))}
    </>
};

export default SloatMach;