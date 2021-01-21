import React, { useState } from 'react';

const App = () => {

  const [name, setName] = useState("");

  const [lastName, setlastName] = useState('');
  const [fullName, setFullName] = useState();

  const [lastNamenew, setLastNamenew] = useState();
  const onSubmit = (event) => {
    event.preventDefault();
    setFullName(name);
    setLastNamenew(lastName);
  }
  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const inputEventTwo = (event) => {
    setlastName(event.target.value);
  }


  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmit}>
          <div>
            <h1> Hello {fullName} {lastNamenew} </h1>
            <input type='text'
              placeholder="Enter Your Name"
              onChange={inputEvent}
              value={name} />
            <br />
            <input type='text'
              placeholder="Enter Your Last Name"
              onChange={inputEventTwo}
              value={lastName} />
            <button onClick={onSubmit}>
              Click Me 👍
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
