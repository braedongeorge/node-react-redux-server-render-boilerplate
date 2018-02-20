import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

const renderApp = (RootContainer) => {
  render(
    <BrowserRouter>
      <RootContainer />
    </BrowserRouter>,
    document.getElementById('root'),
  );
};

renderApp(App);

module.hot.accept('./app.jsx', () => {
  const NextApp = require('./app').default;
  renderApp(NextApp);
});
