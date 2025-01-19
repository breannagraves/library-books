import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CatFact from './CatFact';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root.render(
  
    <div>
    {/* <CatFact /> */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </div>
 
);

// root2.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
