
import './App.css';
import React from 'react';
import ToduList from './ToduList';

const App = () => {
  return (
    <>
      <div className='main'>
        <div className='container'>
          <h1 className='heading__style'>TODO LIST </h1>
          <ToduList/>
        </div>
      </div>
    </>
  );
};

export default App;
