import React, { PureComponent, Fragment } from 'react'
import axios from 'axios'
// import { Button } from 'antd';
import Blog from './Blog';

import Helmet from 'react-helmet';

class BlogCategories extends PureComponent {

  state = {
    cats: {
      id: null,
      name: null,
      slug: null
    },
    catPosts: null
  }

  componentDidMount() {
    this.getCategories(); 
  }

  getCategories = () => {
    return axios
      .get('https://news.kurtisrogers.com/wp-json/wp/v2/categories')
      .then(response => {
        let cats = response.data;
        this.setState({ cats });
      })
      .catch(err => {
        console.log('err :', err);
      })
  }

  render() {

    const { cats } = this.state;

    console.log('blogcategories template: ', this.props);

    return (
      <Fragment>
        <Helmet>
          <title>Blog | Bristol Web Developer | kurtisrogers.com</title>
        </Helmet>
        <Blog 
          content={this.props.content} 
          location={this.props.location} 
          history={this.props.history} catButtons={cats} />
      </Fragment>
    )
  }
}

export default BlogCategories;