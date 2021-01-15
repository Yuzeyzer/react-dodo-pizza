import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// const aiza = (arr, length) => {
//   const result = [];
//   for (let i = 0; i < arr.length / length; i++) {
//     const newArray = [];
//     for (let j = 0; j < length; j++) {
//       newArray.push(arr[length * i + j]);
//     }

//     const filteredArray = newArray.filter((item) => item !== undefined);
//     result.push(filteredArray);
//   }
//   return result;
// };

// const uluk = (arr, n) => {
//   const result = [];
//   let tr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i % n == 0) {
//       if (tr.length !== 0) result.push(tr);
//       tr = [];
//     }
//     tr.push(arr[i]);
//   }

//   result.push(tr);

//   return result;
// };

// console.log(uluk(['a', 'b', 'c', 'd', 'e', 'f', 'j', 'k', 'e'], 8));

// const munarbek = arr => arr[0]

// console.log(munarbek(['a', 'b', 'c', 'd', 'e', '2']))
