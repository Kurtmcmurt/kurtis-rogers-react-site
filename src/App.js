import React, { PureComponent } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
// import antd style - learn how to install with WebPack in future
import "antd/dist/antd.css";
import "./app.css";
import HeaderContent from "./components/Header/HeaderContent";
import FooterContent from "./components/Footer/FooterContent";
import MainContent from "./components/Main/MainContent";

import Helmet from "react-helmet";
import axios from "axios";

const { Header, Footer } = Layout;
const apiUrl = 'https://news.kurtisrogers.com';
const apiUrlObjs = {
  posts: `${apiUrl}/wp-json/wp/v2/posts`,
  media: `${apiUrl}/wp-json/wp/v2/media`,
  users: `${apiUrl}/wp-json/wp/v2/users`
}

export default class App extends PureComponent {
  
  state = {
    pageTitle: null,
    pageUrl: null,
    posts: [],
    media: [],
    users: []
  } 

  componentDidMount() {
    this.handleGetMedia();
    this.handleGetUsers();
    this.handleGetPosts();
  }

  handleGetPosts = () => {
    return axios
      .get(apiUrlObjs.posts)
      .then(response => {
        this.setState({ posts: response.data })
      })
      .catch(err => {
        console.log('err :', err);
      })
  }

  handleGetMedia = () => {
    return axios
      .get(apiUrlObjs.media)
      .then(response => {
        this.setState({ media: response.data })
      })
      .catch(err => {
        console.log('err :', err);
      })
  }

  handleGetUsers = () => {
    return axios
      .get(apiUrlObjs.users)
      .then(response => {
        this.setState({ users: response.data })
      })
      .catch(err => {
        console.log('err :', err);
      })
  }

  render() {
    return (
        <Router 
          title={this.state.pageTitle}
          url={this.state.pageUrl} 
        >
          <div className="App" style={{ overflow: "hidden" }}>
            <Layout style={{ minHeight: "100vh" }} className="layout">
              <Helmet>
                <meta charSet="utf-8" />
                <title>{this.state.pageTitle}</title>
                <link rel="canonical" href={`https://kurtisrogers/${this.state.pageUrl}`} />
              </Helmet>
              <Header
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  zIndex: 1
                }}
              >
                <HeaderContent />
              </Header>
              <MainContent
                posts={this.state.posts}
                media={this.state.media}
                users={this.state.users}
              />
              <Footer
                style={{
                  backgroundColor: "#001529",
                  width: "100%",
                  padding: "0"
                }}
              >
                <FooterContent />
              </Footer>
            </Layout>
          </div>
        </Router>
    );
  }
}