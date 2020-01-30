import React, { PureComponent, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../containers/Home/Home";
import About from "../../containers/About/About";
import Contact from "../../containers/Contact/Contact";
import Post from "../../containers/Post/Post";
import BlogCategories from "../../containers/Blog/BlogCategories";

export default class MainContent extends PureComponent {
  
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/blog" exact component={BlogCategories}/>
          <Route path="/contact" exact component={Contact} />
          <Route path={`/blog/:articleKey`} exact component={Post} />
        </Switch>
      </Fragment>
    );
  }
}