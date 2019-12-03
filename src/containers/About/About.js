import React, { PureComponent, Fragment } from 'react';
import { Layout, Card, Row, Col, Typography } from 'antd';
import PageBanner from '../../components/Elements/PageBanner';
import { grey } from '@ant-design/colors';
// import InfoBanner from '../../components/Elements/InfoBanner';

// const { Title, Text } = Typography;
const { Content } = Layout;

const { Title } = Typography;

export default class About extends PureComponent {
  state = {
    height: '',
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
          bgcolor={grey[6]}
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
            <Row>
              <Col xs={24} md={12}>
                <Card>
                  <Title level={2}>Web Developer based in Bristol</Title>
                  <p>
                    My name is Kurtis Rogers, I&apos;m a professional Web Developer, based in Bristol. I&apos;ve amassed a wealth of experience during the last 5 years and I'm still learning and loving it. It&apos;s not been the smoothest of journeys but I&apos;m not a proverbial person.
                  </p>
                  <p>
                    When I&apos;m not working, I give the Cat a smooth, go to a pub, go for walks and admire the natural beauty of the South West&apos;s Countryside. 
                  </p>
                </Card>
              </Col>
              <Col xs={24} md={6}>
                <Card title={'Some content'}>Some content</Card>
              </Col>
              <Col xs={24} md={6}>
                <Card title={'Some content'}>Some content</Card>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Fragment>
    );
  }
}
