import React, { useState } from 'react';

const App = () => {

  const [fullName, setFullName] = useState({
    fname: '',
    lname: '',
  });

  //const [lastName, setlastName] = useState('');
  //const [fullName, setFullName] = useState();
  //const [lastNamenew, setLastNamenew] = useState();

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue) => {

      //console.log(prevalue);
      if (name === 'fName') {
        return {
          fname: value,
          lname: preValue.lname,
        };
      } else if (name === 'lName') {
        return {
          fname: preValue.fname,
          lname: value,
        };
      }
    });
    //setName(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    alert('form submited');
    //setFullName(name);
    //setLastNamenew(lastName);
  };

  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmit}>
          <div>
            <h1> Hello {fullName.fname} {fullName.lname} </h1>
            <input type='text'
              placeholder="Enter Your Name"
              name='fName'
              onChange={inputEvent}
              value={fullName.fname} />
            <br />
            <input type='text'
              placeholder="Enter Your Last Name"
              name='lName'
              onChange={inputEvent}
              value={fullName.lname}
            />
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
