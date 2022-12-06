import React, { useState, useEffect } from 'react';

// const url = 'https://api.github.com/users';
const url = 'https://jsonplaceholder.typicode.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const res = await fetch(url);
    const users = await res.json();
    setUsers(users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <ul className="users">
        {users.map((user) => {
          return (
            <React.Fragment key={user.id}>
              <li>Name:{user.name}</li>
            </React.Fragment>
          );
        })}
      </ul>
      ;
    </>
  );
};

export default UseEffectFetchData;
