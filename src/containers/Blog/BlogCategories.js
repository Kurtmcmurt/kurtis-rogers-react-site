import React, { PureComponent } from 'react'
import axios from 'axios'
import { Button } from 'antd';
import Blog from './Blog';

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

  // getPostsByCategories( catId ) {
  //   return axios
  //     .get( `https://news.kurtisrogers.com/wp-json/wp/v2/posts/?categories=${catId}` )
  //     .then(response => {
  //       let catPosts = response.data;
  //       this.setState({ catPosts })
  //       // console.log('object :', this.state.catPosts);
  //     })
  //     .catch(err => {
  //       console.log('err :', err);
  //     })
  // }

  // handleCatsClick = catId => {
  //   console.log('e.value :', catId);

  //   this.getPostsByCategories( catId );
  // }

  render() {

    const { cats, catPosts } = this.state;

    return (
      <Blog catButtons={cats} />
    )
  }
}

export default BlogCategories;