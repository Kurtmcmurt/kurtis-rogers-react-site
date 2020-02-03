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

const { Header, Footer } = Layout;

export default class App extends PureComponent {
  
  state = {
    pageTitle: null,
    pageUrl: null,
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
              <MainContent />
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