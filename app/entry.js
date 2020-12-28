import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

// Featured
import About from './views/About';
import Contact from './views/Contact';
import Index from './views/Index';
import NotFound from './views/NotFound';
import Venues from './views/Venues';
import Stats from './views/Stats';

// All of our CSS
import './static/css/main.scss';

ReactDOM.render(
  <Router basename={BASE_PATH}>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/about" component={About} />
      <Route path="/venues" component={Venues} />
      <Route path="/stats" component={Stats} />
      <Route path="/contact" component={Contact} />
      {/* Only useful in development mode */}
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
