import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { HashRouter as Router } from "react-router-dom";
// import Routerof from './Reduce';
import reportWebVitals from './reportWebVitals';
// import Nav from './LINKS/links';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
       {/* <Nav></Nav> */}
    <App />
    {/* <Routerof/> */}

   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
