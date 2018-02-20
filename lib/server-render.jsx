import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import App from './src/app';

export default (path) => {
  const context = {};
  const app = (
    <StaticRouter location={path} context={context}>
      <App />
    </StaticRouter>
  );
  return {
    html: renderToString(app),
    data: {},
  };
};
