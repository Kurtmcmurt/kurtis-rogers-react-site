import React from 'react';
import { Icon, Card, DatePicker, Layout, Menu, Breadcrumb } from 'antd';
// import antd style - learn how to install with WebPack in future
import 'antd/dist/antd.css';
import './App.css';
import HeaderContent from './components/Header/HeaderContent';
import FooterContent from './components/Footer/FooterContent';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout style={{ minHeight: '100vh' }} className="layout">
        <Header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <HeaderContent />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            Content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <FooterContent />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
