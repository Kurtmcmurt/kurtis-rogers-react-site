import React, { PureComponent, Fragment } from 'react';
import { Layout, Card, Row, Col } from 'antd';
import PageBanner from '../../components/Elements/PageBanner';
import { blue } from '@ant-design/colors';
// import InfoBanner from '../../components/Elements/InfoBanner';

// const { Title, Text } = Typography;
const { Content } = Layout;

export default class About extends PureComponent {
  state = {
    height: ''
  };

  componentDidMount() {
    let headerHeight = document.querySelector('.ant-layout-header')
      .clientHeight;

    this.setState({
      height: headerHeight
    });
  }

  render() {
    return (
      <Fragment>
        <PageBanner
          bgcolor={blue[6]}
          imgsrc={require('../../assets/svg/wiggleSvg.svg')}
          minusmarginTop={this.state.height}
          // maintain vertical alignment of all content
          paddingtopcontent={this.state.height}
          title="About me"
          bannercontent="I'm no writer but I read a lots of fiction, mostly intrigued by the universes created by our lord, Stephen King."
          subtitle="Warning: This page may contain some awful content."
          svg={require('./../../assets/svg/undraw_about_me.svg')}
        />
        {/* <InfoBanner /> */}
        <Layout>
          <Content style={{ padding: '50px' }}>
            <Row gutter={8}>
              <Col span={12}>
                <Card title={'Some content'}>Some content</Card>
              </Col>
              <Col span={6}>
                <Card title={'Some content'}>Some content</Card>
              </Col>
              <Col span={6}>
                <Card title={'Some content'}>Some content</Card>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Fragment>
    );
  }
}
