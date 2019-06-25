import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import Contact from '../containers/Contact/Contact';
import About from '../containers/About/About';

export default class Routes extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <Fragment>
        <Route exact path="/" />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Contact} />
      </Fragment>
    );
  }
}
