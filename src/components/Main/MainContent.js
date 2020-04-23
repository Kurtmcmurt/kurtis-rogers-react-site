import React, { PureComponent, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../../containers/Home/Home";
import About from "../../containers/About/About";
import Contact from "../../containers/Contact/Contact";
import Post from "../../containers/Post/Post";
import BlogCategories from "../../containers/Blog/BlogCategories";

export default class MainContent extends PureComponent {

  state = {
    templateAtts: [
      {
        name: 'home',
        colour: '#1890ff'
      },
      {
        name: 'about',
        colour: '#13c2c2'
      },
      {
        name: 'blog',
        colour: '#eb2f96'
      },
      {
        name: 'contact',
        colour: '#722ed1'
      },
      {
        name: 'post',
        colour: '#1890ff'
      }
    ]
  } 

  render() {

    const parentProps = this.props;
    console.log('main content: ', parentProps);
    console.log('main content state: ', this.state)

    return (
      <Fragment>
        <Switch>
          <Route 
            exact 
            path="/" 
            render={(props) => <Home content={parentProps} {...props} />} />
          <Route 
            path="/about" 
            exact 
            render={(props) => <About content={parentProps} {...props} />} />
          <Route 
            path="/blog" 
            exact 
            render={(props) => <BlogCategories content={parentProps} {...props} />} />
          <Route 
            path="/contact" 
            exact  
            render={(props) => <Contact content={parentProps} {...props} />} />
          <Route 
            path={`/post/:articleKey`} 
            exact 
            render={(props) => <Post content={parentProps} {...props} />} />
        </Switch>
      </Fragment>
    );
  }
}