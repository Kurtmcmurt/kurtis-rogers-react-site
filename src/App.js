import React, { PureComponent } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
// import antd style - learn how to install with WebPack in future
import "antd/dist/antd.css";
import "./app.css";
import HeaderContent from "./components/Header/HeaderContent";
import FooterContent from "./components/Footer/FooterContent";
import MainContent from "./components/Main/MainContent";

const { Header, Footer } = Layout;

class App extends PureComponent {

  constructor (props) {
    super(props);
    this.state = {
      page: {
        metadesc: null,
        metaauthor: null,
        metaviewport: null
      }
    }
  }

  componentDidMount() {
    this.handleFacebookMeta();
  }

  handleFacebookMeta = () => {

    const tags = [
      {
        name: "description",
        content: this.state.page.metadesc
      },
      {
        name: "author",
        content: this.state.page.metaauthor
      },
      {
        name: "viewport",
        content: this.state.page.metaviewport
      }
    ]

    const header  = document.getElementsByTagName('head');
    const metaTag = document.createElement('meta');
    
    tags.map((tag, i) => {
      const metaElement = document.createAttribute(tag.name);
      metaElement.value = tag.content;
      
      console.log(tag.name, tag.content, i);
      console.log(header);

      let headerMeta = header[0].appendChild(metaTag);
      headerMeta.setAttributeNode(metaElement);

    })

  }
  
  render() {
    return (
      <Router>
        <div className="App" style={{ overflow: "hidden" }}>
          <Layout style={{ minHeight: "100vh" }} className="layout">
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
              metaauthor={this.state.page.metaauthor}
              metaviewport={this.state.page.metaviewport}
              metadescription={this.state.page.metadesc}
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

export default App;
