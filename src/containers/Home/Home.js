import React, { PureComponent, Fragment } from 'react';
import { Card, Row, Col, Layout, Icon, Typography, Divider } from 'antd';
import PageBanner from './../../components/Elements/PageBanner';
import { purple, geekblue } from '@ant-design/colors';
import Emoji from 'react-emoji-render';

const { Title, Paragraph, Text } = Typography;
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
          bannercontent="Welcome to my website. I have been spending the last year focusing on developing my skills in advanced JavaScript application development. Having a deep knowledge of ES5 and a decent workable knowledge of ESnext, I can build tomorrows applications."
          // link="/about"
          // buttontype="primary"
          // buttontext="Learn more"
          // icontype="right"
          bgcolor={geekblue.primary}
          imgsrc={require('../../assets/svg/wiggleSvg.svg')}
          minusmarginTop={this.state.height}
          // maintain vertical alignment of all content
          paddingtopcontent={this.state.height}
          isVis={false}
          svg={require('./../../assets/svg/undraw_code_review.svg')}
        />
        <Row>
          <Col span={24}>
            <Content
              style={{
                padding: '80px 50px',
                maxWidth: '1200px',
                margin: '0 auto',
                textAlign: 'center'
              }}
            >
              <Title level={2} style={{ marginBottom: '0' }}>
                A professional Web Developer based in Bristol
                <Emoji text=" <3:100:" />
              </Title>
            </Content>
          </Col>
        </Row>
        <div
          style={{
            background:
              'url(https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <Row type="flex" justify="center" style={{ alignItems: 'center' }}>
            <Col sm={24} md={12} style={{ padding: '80px 50px' }}>
              <Content>
                <Card
                  headStyle={{
                    backgroundColor: purple.primary,
                    color: '#ffffff'
                  }}
                  title={'Introduction'}
                  extra={<Icon spin={true} style={{ color: '#ffffff', fontSize: '30px' }} type="smile" />}
                  style={{ background: '#ffffff' }}
                >
                  <Title level={2}>Hello and welcome.</Title>
                  <Typography.Paragraph>
                    I'm a software developer for{' '}
                    <span style={{ fontWeight: 'bold', color: '#44A4EE' }}>
                      Bigg
                    </span>
                    , a <strong>leading white label marketing agency</strong>{' '}
                    based in the Southville area of Bristol. involved in a
                    variety of projects which rely on a plethora of technologies
                    ranging from JavaScript to PHP. <Divider />
                    Part of a strong team comprised of technologists, Dog
                    enthusiasts, Barbecue specialists and movie and game nerds
                    amongst many, many other things.
                  </Typography.Paragraph>
                </Card>
              </Content>
            </Col>
            <Col sm={24} md={12} style={{ padding: '0 50px' }}>
              <Title level={4} style={{ color: '#ffffff' }}>
                &quot;I tend to choose picturesque, depth-yielding landscape
                images for backgrounds on everything because I find nature
                calming. An active member of The National Trust, I'll often be
                found in some shrub trying to communicate with a disgruntled
                Goose.&quot;
              </Title>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}
