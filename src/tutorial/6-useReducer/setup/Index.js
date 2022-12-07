import React, { useReducer, useState } from 'react';
import Modal from './Modal';
import { reducer } from './reducer';

const defaultState = {
  people: [],
  isShowModalOpen: true,
  modalContent: '',
};

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = {
        id: new Date().getTime().toString(),
        name,
      };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const handleClick = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };
  return (
    <>
      {state.isShowModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <button type="submit">add</button>
      </form>
      <div>
        {state.people.map((person) => (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button onClick={() => handleClick(person.id)}>remove</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Index;
