import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {startSetUser} from './actions/user'
// import axios from './config/config'
import configureStore from './store/configureStore'
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState())
})
store.dispatch(startSetUser())
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)
// console.log(store)
// store.dispatch(increment())
// store.dispatch(decrement())

ReactDOM.render(jsx,document.getElementById('root'));
