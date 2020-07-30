import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { initMobxSpy } from './helpers/tracer';
import { configure } from 'mobx';

// initMobxSpy() // whole project

configure({
    enforceActions: "always"
});

ReactDOM.render(
  // <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  ,
  // </React.StrictMode>,
  document.getElementById('root')
);
