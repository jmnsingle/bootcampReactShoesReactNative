import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';

import Routes from './routes';

import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
