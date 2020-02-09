import React, { PureComponent, Fragment } from 'react';
import { Layout } from 'antd';

import Helmet from 'react-helmet';

const { Content } = Layout;

export default class Contact extends PureComponent {
  render() {
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}
