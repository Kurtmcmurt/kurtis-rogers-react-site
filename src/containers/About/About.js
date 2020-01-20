import React, { PureComponent, Fragment } from 'react';
import { Layout, Card, Row, Col, Typography, Timeline, Icon } from 'antd';
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

    console.log(this.props.blogdata);

    return (
      <Fragment>
        <PageBanner
          bgcolor={grey[6]}
          imgsrc={require('../../assets/svg/wiggleSvg.svg')}
          minusmarginTop={this.state.height}
          // maintain vertical alignment of all content
          paddingtopcontent={this.state.height}
          title="A page about me..."
          subtitle="I love tech, I enjoy the finer things in life like Linux and symlinks."
          bannercontent="And occassionally playing videogames on either my PlayStation or Nintendo Switch."
          svg={require('./../../assets/svg/undraw_about_me.svg')}
        />
        {/* <InfoBanner /> */}
        <Layout>
          <Content style={{ padding: '50px' }}>
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <Card>
                  <Title style={{textDecoration: 'underline'}} level={2}>Web Developer based in Bristol</Title>
                  <p>
                    My career in software development has spanned more than 5 years and in that time I&apos;ve worked in numerous environments with some great teams. I've worked extensively with WordPress, able to build custom themes and plugins, follow best-practices and have healthy knowledge of the global functions. I'm also a strong Front End developer, I've got strong skills with ES5 and ESnext JavaScript and can build applications with React. This site uses the WordPress API but I'm able to build my own API with other systems too. WordPress just makes it easy.  
                  </p>
                  <p>I'm not designer but I can appreciate great UX design and have worked with some talented interface designers in the past. The discussions based on design and user journey are imperative to the goal of the clients success and the very reason for them having a new build. It's such an important step and can determine the lifespan of the product, if the design becomes dated and people aren't able to use it, why start building?</p>
                  <p>I believe process and inclusion are key, everyone needs to be heard. We don't always have the best ideas and its important to listen to your workmates of all levels and disciplines. Trying different things is what makes life so enjoyable.</p>
                  <p>The experience I've gained so far:</p>
                  <Timeline>
                    <Timeline.Item>
                      <p>Education:</p>
                      <p>Plymouth University - 2012/2014</p>
                      <p>Interactive Multimedia with Graphic Design</p>
                    </Timeline.Item>
                    <Timeline.Item style={{ paddingBottom: '0' }}>
                      <p>Recent Work History:</p>
                      <p>Creation - 2015/2016 <Icon type="code" /></p>
                      <p>Pretty Good Digital - 2016 <Icon type="code" /></p>
                      <p>Eldon Insurance - 2016/2018 <Icon type="code" /></p>
                      <p>Vvast - 2018 <Icon type="code" /></p>
                      <p>Bigg - 2019/2020(/now) <Icon type="code" /></p>
                    </Timeline.Item>
                  </Timeline>
                  <p>
                    When I&apos;m not working, I give the Cat a smooth, go to the pub, go for walks and admire the natural beauty of the South West&apos;s Countryside. 
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
