import React, { PureComponent, Fragment } from 'react';
import { Card, Row, Col, Layout, Icon, Typography, Divider, Tag } from 'antd';
import PageBanner from './../../components/Elements/PageBanner';
import { purple, magenta, blue, geekblue } from '@ant-design/colors';

const { Title, Text, Paragraph } = Typography;
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
            <Content style={{ padding: '80px 50px' }}>
            <Paragraph>
              The site has been updated regularly for the last 5 years, it started off life as a simple HTML template when I first got into Web Development. I then built a few custom themes - some good, some not so good. I got lost in the world of "full stack" and had an identity crisis before understanding that the front-end is where I belong. As a self-professed non-creative, I guess it became obvious that - yes- I am creative, just not in a using-photoshop-or-drawing-illustrations kind of way. 
            </Paragraph>
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
            <Col span={12}>
              <Content style={{ padding: '80px 50px' }}>
                <Card
                  headStyle={{
                    backgroundColor: purple.primary,
                    color: '#ffffff'
                  }}
                  title={['Introduction ']}
                  extra={<Icon style={{ color: '#ffffff' }} type="smile" />}
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
            <Col span={12}>
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
