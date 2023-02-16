import React, { useState } from 'react';
import './App.css';

const App = () =>{
  const puple = "#8e44ad";
  const [bg_color , setBg] = useState(puple);
  const [name,setName] = useState("Click ME !")

  const BgChange = ()=>{
    const newBg = "#313131";
    setBg(newBg);
    setName("❤ yap ❤")
  };
  const dbChange = () =>{
      setBg(puple);
      setName("one more");
  }
    return(
    <>
      <div style={{backgroundColor:bg_color}} className='App-header'>
        <button className='btn' onMouseEnter={BgChange} onMouseLeave={dbChange}>{name}</button>
      </div>
    </>
  );
};

export default App;
