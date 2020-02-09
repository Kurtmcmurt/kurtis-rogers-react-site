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
          <Route  
            exact 
            path="/" 
            render={() => <Home {...this.props} />} />
          <Route 
            path="/about" 
            exact 
            render={() => <About {...this.props} />} />
          <Route 
            path="/blog" 
            exact 
            render={() => <BlogCategories {...this.props} />} />
          <Route 
            path="/contact" 
            exact  
            render={() => <Contact {...this.props} />} />
          <Route 
            path={`/blog/:articleKey`} 
            exact 
            component={Post} />
        </Switch>
      </Fragment>
    );
  }
}