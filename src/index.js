/* eslint-disable jsx-a11y/anchor-is-valid */
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import BookList from './Booklist';

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     null,
//     React.createElement('h1', {}, 'hello world!!!')
//   );
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BookList />
  </StrictMode>
);

// ReactDOM.render 18以上不支持，17才支持
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   document.getElementById('root')
// );
