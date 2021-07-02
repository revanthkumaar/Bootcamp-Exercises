import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import configureStore from './store'
import {Provider} from 'react-redux'


const bookStore = configureStore();

ReactDOM.render(
  <Provider store={bookStore}>
       <BrowserRouter>
   <React.StrictMode>
    <App />
  </React.StrictMode>
  
  </BrowserRouter>
    
  </Provider>
 
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
