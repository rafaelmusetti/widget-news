import React from 'react';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import store from './store/store';
import Routes from './routes/Routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
