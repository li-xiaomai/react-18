import React, { useEffect } from 'react';

const UseEffectBasics = () => {
  useEffect(() => {
    console.log('call useEffect');
  });
  console.log('render component');
  return <h2>UseEffect Basics</h2>;
};

export default UseEffectBasics;
