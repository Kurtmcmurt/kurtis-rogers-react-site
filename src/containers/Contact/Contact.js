import React, { PureComponent, Fragment } from 'react';
import { Layout } from 'antd';

import Helmet from 'react-helmet';
import FooterContent from '../../components/Footer/FooterContent';
import HeaderContent from '../../components/Header/HeaderContent';

const { Content, Header, Footer } = Layout;

export default class Contact extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      height: '',
      content: this.props.content
    };
  }
  
  componentDidMount() {
    
    let headerHeight = document.querySelector('.ant-layout-header')
    .clientHeight;
    
    this.setState({
      height: headerHeight,
    });
    
  }

  componentDidUpdate() {

    // const postTitle;
    this.loadDataAndSetState();
  }
  
  loadDataAndSetState = () => {
    this.setState({ content: this.props.content })
  }

  render() {

    const { content } = this.state;

    let pageColor;
    let path = this.props.location.pathname;

    (content.atts || []).map((page) => {
      return page.path === path ? 
        pageColor = page.colour
      : null
    })

    return (
      <Fragment>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 1
          }}
        >
          <HeaderContent 
            hcBgColor={pageColor}
            atts={this.state.templateAtts} />
        </Header>
        <Helmet>
          <title>Contact | Bristol Web Developer | kurtisrogers.com</title>
        </Helmet>
        <Layout>
          <Content style={{ padding: '50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
              Content
            </div>
          </Content>
        </Layout>
        <Footer
          style={{
            backgroundColor: "#001529",
            width: "100%",
            padding: "0"
          }}
          >
          <FooterContent 
            fcBgColor={pageColor}
            atts={this.state.templateAtts} />
        </Footer>
      </Fragment>
    );
  }
}
