import React, { useState, useEffect } from 'react';

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      // setPeople([...people, { firstName, email, id: `${firstName}67` }]);
      setPeople((people) => {
        return [
          ...people,
          { firstName, email, id: new Date().getTime().toString() },
        ];
      });
      setFirstName('');
      setEmail('');
    }
  };

  return (
    <>
      <h2>forms</h2>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            add person
          </button>
        </form>

        {people.map((person) => (
          <div className="item" key={person.id}>
            <h4>{person.firstName}</h4>
            <p>{person.email}</p>
          </div>
        ))}
      </article>
    </>
  );
};

export default ControlledInputs;
