import React, { useState } from 'react';


const App = () => {
  let newTime = new Date().toLocaleTimeString();
  const [ctime, setCTime] = useState(newTime);

  const updateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setCTime(newTime);
  }
  return (
    <>
      <h1> {ctime} </h1>
      <button onClick={updateTime}> Get Time </button>
    </>
  );

};

export default App;
