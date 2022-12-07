import React, { useState } from 'react';

const MultipleInputs = () => {
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      setPeople([
        ...people,
        { ...person, id: new Date().getTime().toString() },
      ]);
      setPerson({ firstName: '', email: '', age: '' });
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
              value={person.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              name="age"
              id="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            add person
          </button>
        </form>

        {people.map((person) => (
          <div className="item" key={person.id}>
            <h4>{person.firstName}</h4>
            <p>{person.age}</p>
            <p>{person.email}</p>
          </div>
        ))}
      </article>
    </>
  );
};

export default MultipleInputs;
