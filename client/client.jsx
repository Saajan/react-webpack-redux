/*jshint esversion: 6 */
import React from 'react';
import { render } from 'react-dom';
import App from '../components/App.jsx';
//import configureStore from '../redux/store';
import { Provider } from 'react-redux';

let initialState = {
  user: {
    username: 'saajan',
    id: 1
  }
};

render(
    <App />,
  document.getElementById('app')
)
