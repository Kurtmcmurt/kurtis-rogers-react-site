import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Icon, Card, DatePicker, Layout, Menu, Breadcrumb } from 'antd';
// import antd style - learn how to install with WebPack in future
import 'antd/dist/antd.css';
import './App.css';
import HeaderContent from './components/Header/HeaderContent';
import FooterContent from './components/Footer/FooterContent';
import MainContent from './components/Main/MainContent';

const { Header, Content, Footer } = Layout;

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <Layout style={{ minHeight: '100vh' }} className="layout">
            <Header
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 1
              }}
            >
              <HeaderContent />
            </Header>
            <MainContent />
            <Footer style={{ textAlign: 'center' }}>
              <FooterContent />
            </Footer>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
