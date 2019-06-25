import React, { PureComponent } from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

export default class Contact extends PureComponent {
  render() {
    return (
      <Layout>
        <Content style={{ padding: '50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            Content
          </div>
        </Content>
      </Layout>
    );
  }
}
