import React, { PureComponent, Fragment } from 'react';
import { Card, Row, Col, Layout, Icon, Typography } from 'antd';
import PageBanner from './../../components/Elements/PageBanner';
import { purple, magenta, blue, geekblue } from '@ant-design/colors';

const { Title, Text } = Typography;
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
          buttontype="default"
          buttontext="Learn more"
          icontype="right"
          bgcolor={geekblue.primary}
          imgsrc={require('../../assets/svg/wiggleSvg.svg')}
          minusmarginTop={this.state.height}
          isVis={false}
          svg={require('./../../assets/svg/undraw_code_review.svg')}
        />

        <Row type="flex" justify="center">
          <Col span={12}>
            <Content style={{ padding: '50px' }}>
              <Card
                headStyle={{
                  backgroundColor: purple.primary,
                  color: '#ffffff'
                }}
                title="Introduction"
                extra={<Icon style={{ color: '#ffffff' }} type="smile" />}
                style={{ background: '#ffffff' }}
              >
                <Title level={2}>Hello and welcome.</Title>
                <Text code>
                  Well done on finding the website for me,&nbsp;
                  <strong>Kurtis Karl Rogers</strong>.
                </Text>
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
