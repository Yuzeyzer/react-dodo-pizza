import { createStore } from 'redux';

/**
 * Это редьюсер - чистая функция в формате (state, action) => state.
 * Он описывает то, как экшен преобразовывает состояние в следующее состояние
 *
 * Структура состояния зависит от вас: это может быть примитивом,
 * массивом, объектом или даже структурой данных Immutable.js.
 * Важно только одно, вы не должны изменять объект состояния
 * напрямую, а возвращать новый объект, если состояние изменилось
 *
 * В этом примере мы используем `switch` и строки, но вы можете
 * использовать хелпер, который следует другому соглашению
 * (например, function maps), если это имеет смысл для вашего
 * проекта.
 */

const counter = (state = 0, action) => {
  if (action.type === 'INCREMENT') {
    return state + 1;
  } else if (action.type === 'DECREMENT') {
    return state - 1;
  } else if (action.type === 'СУЛТАН-В-БОЙ') {
    return state * 2;
  }
  // switch (action.type) {
  //   case 'INCREMENT':
  //     return state + 1;
  //   case 'DECREMENT':
  //     return state - 1;
  //   default:
  //     return state;
  // }
};

// Создаем Redux стор, который хранит состояние вашего приложения.
// Его API - { subscribe, dispatch, getState }.
let store = createStore(counter);
window.store = store;

window.eraly = 'eraly';
// Вы можете использовать subscribe() для обновления UI в ответ на изменения состояния.
// Обычно вы должны использовать библиотеку привязки (например, React Redux), а не использовать subscribe() напрямую.
// Однако также может быть полезно сохранить текущее состояние в localStorage.
// store.subscribe(() => console.log(store.getState()));

// Единственный способ изменить внутреннее состояние - это вызвать экшен
// Экшены могут быть сериализированы, залогированы или сохранены и далее воспроизведены.
// store.dispatch({ type: 'INCREMENT' });
// // 1
// store.dispatch({ type: 'INCREMENT' });
// // 2
// store.dispatch({ type: 'DECREMENT' });
// 1

store.dispatch({ type: 'INCREMENT' });

export default store;
