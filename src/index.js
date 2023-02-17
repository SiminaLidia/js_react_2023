import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MyContext } from './context/myContext';
import { BrowserRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));

const data = {
  text: 'Hello world from context!'
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyContext.Provider value={data}>
        <App />
      </MyContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

