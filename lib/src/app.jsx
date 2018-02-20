import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './styles/entry.scss';
import NotFound from './components/not-found';
import Home from './components/home';
import Page1 from './components/page';

export default() => (
  <div>
    <header>
      <nav>
        <ul>
          <li><Link to="/Page1">Page 1</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
    </header>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Page1" component={Page1} />
        <Route component={NotFound} />
      </Switch>
    </main>
    <footer>
      Footer
    </footer>
  </div>
);
