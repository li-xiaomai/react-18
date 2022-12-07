import React, { useRef, useEffect } from 'react';

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(divContainer.current.innerHTML);
    console.log(refContainer.current.value);
  };
  useEffect(() => {
    refContainer.current.focus();
    console.log(refContainer.current);
  });
  console.log(refContainer.current);
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">submit</button>
        </div>
      </form>
      <div ref={divContainer}>hello world</div>
    </>
  );
};

export default UseRefBasics;
