import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
//const elem = <h2>Hello, yoy</h2>;
//const elem = React.createElement('h2', { className: 'greet'}, 'Hello');
//const text = new Date();
const elem = (
  <div>
    <h2>Hello: {[1,2,3]}</h2>
    <input type="text" />
    <button />
  </div>

);

root.render(
  elem
);
