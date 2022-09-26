import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApiContext from './context/ApiContext';
import StorageContext from './context/StorageContext';
import ApiService from './services/ApiService';
import StorageService from './services/StorageService';
import { Provider } from 'react-redux';
import store from './store/configStore';

ReactDOM.render(
  <React.StrictMode>
    <ApiContext.Provider value={new ApiService()} >
      <StorageContext.Provider value={new StorageService()} >
        <Provider store={store} >
          <App />
        </Provider>
      </StorageContext.Provider>
    </ApiContext.Provider>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
