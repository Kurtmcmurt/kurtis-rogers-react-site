import React, { PureComponent, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../containers/Home/Home';
import About from '../../containers/About/About';
import Contact from '../../containers/Contact/Contact';

export default class MainContent extends PureComponent {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Fragment>
    );
  }
}
