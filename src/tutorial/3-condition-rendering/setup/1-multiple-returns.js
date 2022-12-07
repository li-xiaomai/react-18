import React, { useEffect, useState } from 'react';

const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [isError, setIsError] = useState(false);
  const handleErrors = (res) => {
    if (res.status < 200 || res.status > 299) {
      setIsLoading(false);
      throw new Error(res.statusText);
    }
  };
  const getData = async () => {
    try {
      const res = await fetch(url);
      handleErrors(res);
      const data = await res.json();
      setUser({ ...data });
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }
  return (
    <>
      <div>{user.login}</div>
      <img src={user.avatar_url} alt={user.login} />
      <a href={user.html_url}>{user.login}</a>
    </>
  );
};

export default MultipleReturns;
