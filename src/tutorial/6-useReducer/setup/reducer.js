export const reducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isShowModalOpen: true,
      modalContent: 'item added',
    };
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isShowModalOpen: true,
      modalContent: 'please enter value',
    };
  }

  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isShowModalOpen: false,
      modalContent: '',
    };
  }
  if (action.type === 'REMOVE_ITEM') {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPeople,
    };
  }
  return state;
};
