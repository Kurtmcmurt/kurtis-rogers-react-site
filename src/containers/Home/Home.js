import React, { PureComponent, Fragment } from 'react';
import { Card, Row, Col, Layout } from 'antd';
import PageBanner from './../../components/Elements/PageBanner';

const { Content } = Layout;

export default class Home extends PureComponent {
  state = {
    height: ''
  };
  // headerContentMargin = height => {
  //   document.querySelector('.kr--full-width-height-banner').style.marginTop =
  //     -height + 'px';
  //   console.log(height);
  // };

  componentDidMount() {
    let headerHeight = document.querySelector('.ant-layout-header')
      .clientHeight;

    this.setState({
      height: headerHeight
    });

    console.log(this.state.height);
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
          buttontext="Hey"
          icontype="right"
          imgsrc="https://cdn.pixabay.com/photo/2016/06/02/02/33/triangles-1430105_1280.png"
          minusmarginTop={this.state.height}
          isVis={false}
        />

        <Row type="flex" justify="center" align="center">
          <Col span={12}>
            <Content style={{ padding: '50px' }}>
              <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                Content
              </div>
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
