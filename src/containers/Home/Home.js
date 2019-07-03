import React, { PureComponent, Fragment } from 'react';
import { Card, Row, Col, Layout, Icon, Typography } from 'antd';
import PageBanner from './../../components/Elements/PageBanner';
import { purple } from '@ant-design/colors';

const { Title } = Typography;
const { Content } = Layout;

export default class Home extends PureComponent {
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
          title="This was built with React and Ant Design"
          subtitle='"The world&apos;s second most popular React UI framework"'
          bannercontent="Welcome to my website. I have been spending the last year focusing on developing my skills in advanced JavaScript application development. Having a deep knowledge of ES5 and a decent workable knwoledge of ESnext, I can build tomorrows applications."
          link="/about"
          buttontype="primary"
          buttontext="Learn more"
          icontype="right"
          bgcolor={purple.primary}
          imgsrc={require('../../assets/svg/wiggleSvg.svg')}
          minusmarginTop={this.state.height}
          isVis={false}
        />

        <Row type="flex" justify="center">
          <Col span={12}>
            <Content style={{ padding: '50px' }}>
              <Card
                title="Introduction"
                extra={<Icon type="smile" />}
                style={{ background: '#ffffff' }}
              >
                <Title level={2}>Hello. Welcome.</Title>
                <p>
                  Well done on finding the website for me,{' '}
                  <strong>Kurtis Karl Rogers</strong>.
                </p>
                <Title level={3}>Currently working for Bigg</Title>
              </Card>
            </Content>
          </Col>
          <Col span={12}>
            <div
              style={{
                position: 'absolute',
                left: '0',
                right: '0',
                bottom: '0',
                top: '0',
                width: '100%',
                height: '100%',
                background:
                  'url(https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg)'
              }}
            />
          </Col>
        </Row>
      </Fragment>
    );
  }
}
