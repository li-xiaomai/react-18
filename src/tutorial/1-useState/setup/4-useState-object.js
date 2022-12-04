import React, { useState } from 'react';

const UseStateObject = () => {
  //   const [person, setPerson] = useState({
  //     name: 'xiaomai',
  //     age: 24,
  //     message: 'random message',
  //   });
  const [name, setName] = useState('xiaomai');
  const [age, setAge] = useState('24');
  const [message, setMessage] = useState('random message');
  const changeMessage = () => {
    // setPerson({ ...person, message: 'hello world' });
    setMessage('hello world');
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change message
      </button>
    </>
  );
};

export default UseStateObject;
