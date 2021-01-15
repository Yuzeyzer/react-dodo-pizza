import { createStore } from 'redux';

const counter = (state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else if (action.type === 'СУЛТАН-В-БОЙ') {
    return state * 2;
  }
};

// Создаем Redux стор, который хранит состояние вашего приложения.
// Его API - { subscribe, dispatch, getState }.
let store = createStore(counter);
window.store = store;


store.dispatch({ type: 'INCREMENT' });

export default store;
