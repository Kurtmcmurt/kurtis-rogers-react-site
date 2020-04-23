import React, { PureComponent } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
// import antd style - learn how to install with WebPack in future
import "antd/dist/antd.css";
import "./app.css";
import HeaderContent from "./components/Header/HeaderContent";
import FooterContent from "./components/Footer/FooterContent";
import MainContent from "./components/Main/MainContent";

import axios from "axios";

const { Header, Footer } = Layout;
const apiUrl = 'https://news.kurtisrogers.com';
const apiUrlObjs = {
  posts: `${apiUrl}/wp-json/wp/v2/posts`,
  media: `${apiUrl}/wp-json/wp/v2/media`,
  users: `${apiUrl}/wp-json/wp/v2/users`,
}

export default class App extends PureComponent {
  
  state = {
    templateAtts: [
      {
        path: '/',
        colour: '#1890ff'
      },
      {
        path: '/about',
        colour: '#08979c'
      },
      {
        path: '/blog',
        colour: '#eb2f96'
      },
      {
        path: '/contact',
        colour: '#722ed1'
      },
      {
        path: 'post',
        colour: '#1890ff'
      }
    ]
  } 

  async componentDidMount() {
    
    axios.all([
      axios.get(apiUrlObjs.posts),    
      axios.get(apiUrlObjs.media),
      axios.get(apiUrlObjs.users)
    ])
    .then(axios.spread((posts, media, users) => {
      let arr = [];
      let postsData = posts.data;
      let mediaData = media.data;
      let usersData = users.data;
      this.setState({
        postData: arr.concat({"posts": postsData, "media": mediaData, "users": usersData} )
      })
    }))
    .catch(error => console.log(error));

  }

  render() {

    return (
        <Router>
          <div className="App" style={{ overflow: "hidden" }}>
            <Layout style={{ minHeight: "100vh" }} className="layout">
              <MainContent
                postData={this.state.postData}
                atts={this.state.templateAtts}
              />
            </Layout>
          </div>
        </Router>
    );
  }
}