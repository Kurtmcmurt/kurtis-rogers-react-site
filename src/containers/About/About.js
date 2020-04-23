import React, { PureComponent, Fragment } from 'react';
import { Layout, Card, Row, Col, Typography, Timeline, Icon, Avatar, Button } from 'antd';
import PageBanner from '../../components/Elements/PageBanner';
import { grey } from '@ant-design/colors';
import Helmet from 'react-helmet';
import axios from 'axios';
import moment from 'moment';
import HeaderContent from '../../components/Header/HeaderContent';
import FooterContent from '../../components/Footer/FooterContent';

const { Meta } = Card;
const { Header, Footer, Content } = Layout;
const { Title } = Typography;


const apiUrl = 'https://news.kurtisrogers.com';
const apiUrlObjs = {
  posts: `${apiUrl}/wp-json/wp/v2/posts`,
  media: `${apiUrl}/wp-json/wp/v2/media`,
  users: `${apiUrl}/wp-json/wp/v2/users`
}

export default class About extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      height: '',
      content: [],
    };
  }

  componentDidMount() {
    let headerHeight = document.querySelector('.ant-layout-header')
      .clientHeight;

    this.setState({
      height: headerHeight,
    });

  }

  componentDidUpdate() {

    // const postTitle;
    this.loadDataAndSetState();
  }
  
  loadDataAndSetState = () => {
    this.setState({ content: this.props.content })
  }

  getArticle( articleKey ) {
    const location = {
      pathname: `/post/${articleKey}`
    }

    return this.props.history.push(`${location.pathname}`);
  }

  render() {

    const { content } = this.state;
    let posts;
    let media;
    let users;
    // const media = content.postdata[0].media;
    // const users = content.postdata[0].users;

    let pageColor;
    let path = this.props.location.pathname;

    (content.atts || []).map((page) => {
      return page.path === path ? 
        pageColor = page.colour
      : null
    })

    console.log('about.props: ', this.props);
    // console.log('about.state: ', content['postData']);
    const mapData = content['postData'];
    (mapData || []).map(types => {
      posts = types.posts;
      media = types.media;
      users = types.users;
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
          <title>About | Bristol Web Developer | kurtisrogers.com</title>
        </Helmet>
        <PageBanner
          bgcolor={grey[6]}
          imgsrc={require('../../assets/svg/bathroom-floor.svg')}
          minusmarginTop={this.state.height}
          // maintain vertical alignment of all content
          paddingtopcontent={this.state.height}
          bgcolor={pageColor}
          title="A page about me..."
          subtitle="I love tech, I enjoy the finer things in life like Linux and symlinks."
          bannercontent="And occassionally playing videogames on either my PlayStation or Nintendo Switch."
          svg={require('./../../assets/svg/undraw_about_me.svg')}
        />
        {/* <InfoBanner /> */}
        <Layout>
          <Content 
            style={{ 
              padding: '50px 20px',
              maxWidth: '1280px',
              width: '100%',
              margin: 'auto' 
            }}>
            <Row gutter={16}>
              <Col xs={24} md={18} style={{ marginBottom: '20px' }}>
                <Card>
                  <Title style={{textDecoration: 'underline'}} level={2}>Web Developer based in Bristol</Title>
                  <p>
                    My career in software development has spanned more than 5 years and in that time I&apos;ve worked in numerous environments with some great teams. I've worked extensively with WordPress, able to build custom themes and plugins, follow best-practices and have healthy knowledge of the global functions. I'm also a strong Front End developer, I've got strong skills with ES5 and ESnext JavaScript and can build applications with React, recently delving into the world of Vue.js. This site uses the WordPress API but I'm able to build my own API with other systems too. WordPress just makes it easy and you can extend it to crazy levels.  
                  </p>
                  <p>I'm not a designer but I can appreciate great UX design and have worked with some talented interface designers in the past. The discussions based on design and user journey are imperative to the goal of the clients success and the very reason for them having any work on their digital portfolio. It's such an important step and can determine the lifespan of the product, if the design becomes dated after a year and people aren't able to use it, what was the point?</p>
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
                      <p>Bigg - 2019/2020 <Icon type="code" /></p>
                      <p><strong><a style={{ background: "linear-gradient(45deg,#8b0067 0%,#ca0767 45%,#f50663 70%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }} target="_blank" href="https://www.nomensa.com/">Nomensa</a></strong> - Present <Icon type="code" /></p>
                    </Timeline.Item>
                  </Timeline>
                </Card>
              </Col>
              <Col xs={24} md={6}>
                { 
                  Array.from(posts || []).map((post, key) => {
                    return (
                      <Card 
                        cover={
                          <div style={{ 
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            maxHeight: '200px',
                            overflow: 'hidden'  
                          }}>
                          {Array.from(media || []).map((img, i) => 
                            {
                              return (
                                post.featured_media === img.id ? <img 
                                  style={{
                                    width: '100%',
                                    display: 'block'
                                  }}
                                  key={i}
                                  alt={post.featured_media === img.id ? img.slug.replace(/-/g, ' ') : null} 
                                  src={post.featured_media === img.id ? img.source_url : null} />  
                                : null
                              )
                            }
                          )}
                          </div>
                        }
                        key={ key }
                        actions={[
                          <Button
                            style={{
                              background: pageColor,
                              border: "none"
                            }}
                            onClick={() => this.getArticle(post.slug)} type={'primary'}>Show me the post</Button>
                        ]}
                        style={{ marginBottom: '20px' }}>
                        { 
                          Array.from(users).map((user, key) => {
                            return post.author === user.id ? <Meta
                              key={key}
                              avatar={<Avatar src={ post.author === user.id ? user.avatar_urls[96] : null } />}
                              title={post.title.rendered}
                              description={ 'Published: ' + moment( post.date ).format( 'D/M/YYYY' )}
                            /> : null
                          }) 
                        }
                      </Card>
                    )
                  }) 
                }
              </Col>
            </Row>
          </Content>
        </Layout>
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
