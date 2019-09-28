import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
// import {increment} from './actions/count'
import configureStore from './store/configureStore'
import App from './App';
import './index.css';

const store = configureStore();

store.subscribe(() => {
  // console.log(store.getState())
})
// console.log(store.getState())
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)
// console.log(store)
// store.dispatch(increment())
// store.dispatch(decrement())

ReactDOM.render(jsx,document.getElementById('root'));
