import React, { PureComponent, Fragment } from 'react';
import { Card, Row, Col, Layout, Icon, Typography, Divider, notification, Button } from 'antd';
import PageBanner from './../../components/Elements/PageBanner';
import Emoji from 'react-emoji-render';

import Helmet from 'react-helmet';
import HeaderContent from '../../components/Header/HeaderContent';
import FooterContent from '../../components/Footer/FooterContent';
// import moment from 'moment';

const { Title } = Typography;
const { Content, Header, Footer } = Layout;

export default class Home extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      height: '',
      content: this.props.content
    };
  }
  
  componentDidMount() {
    
    let headerHeight = document.querySelector('.ant-layout-header')
    .clientHeight;
    
    this.setState({
      height: headerHeight,
    });
    
  }
  
  loadDataAndSetState = () => {
    this.setState({ content: this.props.content })
  }
  
  componentDidUpdate() {

    // const postTitle;
    this.loadDataAndSetState();
    
    (this.state.content.postData || []).map((type, key) => {
      const slug = type.posts[0].slug;
      const title = type.posts[0].title.rendered;
      if (this.state.content.postData) {
        return notification.open({
          message: <p style={{ fontWeight: 'bold' }}>Latest Post</p>,
          description: (
            <div key={key}>
              <p >{title}</p>
              <Button
                style={{
                  background: this.props.content.atts[0].colour,
                  border: "none",
                  color: "#ffffff"
                }} 
                onClick={() => {
                  this.props.history.push(`/post/${slug}`);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                  });
                }}>Show me the post</Button>
            </div>
          ),
          icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
          placement: 'bottomLeft',
        })
      }
    })
  }
  
  render() {
    
    const { content } = this.state;
    
    let pageColor;
    let path = this.props.location.pathname;

    (content.atts || []).map((page) => {
      return page.path === path ? 
        pageColor = page.colour
      : null
    })

    return (
      <Fragment>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 1
          }}
        >
          <HeaderContent
            hcBgColor={pageColor}
            atts={this.state.templateAtts} />
        </Header>
        <Helmet>
          <title>Home | Bristol Web Developer | kurtisrogers.com</title>
        </Helmet>
        <PageBanner
          title="Kurtis Rogers"
          subtitle='A WordPress/React Developer living and working in Bristol'
          bannercontent="Here I sometimes post on the blog, occassionally add features and change bits and bobs depending on how I feel."
          bgcolor={pageColor}
          imgsrc={require('../../assets/svg/overcast.svg')}
          minusmarginTop={this.state.height}
          paddingtopcontent={this.state.height}
          isVis={false}
          svg={require('./../../assets/svg/undraw_code_review.svg')}
          buttons={[
            {
              title: 'Download the site!', 
              link: 'https://github.com/Kurtmcmurt/kurtis-rogers-react-site', 
              target: '_blank',
              icon: 'github',
              style: {
                display: "block", 
                width: "auto", 
                marginTop: "20px",
                border: "none",
                color: "#ffffff",
                background: this.props.content.atts[0].colour
              }
            },
            {
              title: 'Connect on LinkedIn', 
              link: 'https://www.linkedin.com/in/kurtis-rogers-bb1366149',
              target: '_blank', 
              icon: 'linkedin', 
              style: {
                display: "block", 
                width: "auto",
                marginTop: "20px",
                border: "none",
                color: "#ffffff",
                background: this.props.content.atts[0].colour
              }
            }
          ]}
        />
        <Row>
          <Col span={24}>
            <Content
              style={{
                padding: '50px 20px',
                maxWidth: '1200px',
                margin: '0 auto',
                textAlign: 'center'
              }}
            >
              <Title level={2} style={{ marginBottom: '0' }}>
                Developer based in Bristol
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
            backgroundPosition: 'center',
          }}
        >
          <Row 
            type="flex" 
            justify="center" 
            style={{ 
              maxWidth: '1280px',
              alignItems: 'center',
              margin: 'auto' 
            }}>
            <Col sm={24} md={12} style={{ padding: '50px 20px' }}>
              <Content>
                <Card
                  headStyle={{
                    backgroundColor: pageColor,
                    color: '#ffffff'
                  }}
                  title={'Introduction'}
                  extra={<Icon spin={true} style={{ color: '#ffffff', fontSize: '30px' }} type="smile" />}
                  style={{ background: '#ffffff' }}
                >
                  <Title level={2}>Hello and welcome.</Title>
                  <Typography.Paragraph>
                    I'm a Frontend Developer at <strong><a style={{ background: "linear-gradient(45deg,#8b0067 0%,#ca0767 45%,#f50663 70%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} target="_blank" href="https://www.nomensa.com/">Nomensa</a></strong>.
                  </Typography.Paragraph>
                  <Typography.Paragraph>
                    Everyday I get to work with super talented technologists, designers and project managers as well as a bunch of people with equally impressive acumen for digital and everything which makes this amazing business work. <strong><a style={{ background: "linear-gradient(45deg,#8b0067 0%,#ca0767 45%,#f50663 70%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} target="_blank" href="https://www.nomensa.com/">Nomensa</a></strong> care most about the "why?" and the "How?", "Why did the user do that?", "Why couldn't they do that?" and "How could we make it easier for users to get from A to B?"
                  </Typography.Paragraph>
                  <Typography.Paragraph>
                    When I'm not working I like to go for long drives to the beautiful Welsh countryside, go cycling about Bristol, read books on World War 2 alternative history, occassionally go mad on a night out and relax in the evening watching Brooklyn Nine Nine. 
                    <hr/>
                    <strong>Edit: lockdown... *chucks Resident Evil on*</strong><br />
                    <strong>PSN: Dr_Gun_Goat</strong>
                  </Typography.Paragraph>
                </Card>
              </Content>
            </Col>
            <Col sm={24} md={12} style={{ padding: '50px 20px' }}>
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
        <Footer
          style={{
            backgroundColor: "#001529",
            width: "100%",
            padding: "0"
          }}
          >
          <FooterContent 
            fcBgColor={pageColor}
            atts={this.state.templateAtts} />
        </Footer>
      </Fragment>
    );
  }
}
