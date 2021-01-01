import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Skills } from './components/pages/Skills';
import { Experience } from './components/pages/Experience';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/Skills" component={Skills} />
    <Route exact path="/experience" component={Experience} />
  </Switch>
);

export default App;
