import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Amplify from 'aws-amplify'

Amplify.configure({
  Auth:{
    mandatorySignId: true,    
    region: 'ap-south-1',
    userPoolId: process.env.USERPOOLID,
    userPoolWebClientId: process.env.USERPOOLWEBCLIENTID
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
