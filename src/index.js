// //redux

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import { createLogger } from 'redux-logger';
// import reducer from './reducers';
// import './index.css';
// import App from './App';

// const middleware = [ thunk ];
// if (process.env.NODE_ENV !== 'production') {
//   middleware.push(createLogger());
// }

// const store = createStore(reducer, applyMiddleware(...middleware));


// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>, 
//   document.getElementById('root')
// );

// // mobx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import commonStore from './mobx/commonStore';


const stores = {
  commonStore
}

ReactDOM.render(
  <Provider { ...stores }>
    <App />
  </Provider>, 
  document.getElementById('root')
)