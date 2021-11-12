import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components';


const GlobalEstilos = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      background-color: #181D31;
    }
`


ReactDOM.render(
  <React.StrictMode>
    <GlobalEstilos />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
