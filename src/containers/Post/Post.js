import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { PageHeader, Layout, Typography, Row, Col, Skeleton, Tag } from 'antd';
import { withRouter } from "react-router-dom";

import Helmet from 'react-helmet';
import HeaderContent from '../../components/Header/HeaderContent';
import FooterContent from '../../components/Footer/FooterContent';

const { Content, Header, Footer } = Layout;
const { Title } = Typography;

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      height: '',
      content: this.props.content,
      post: {
        title: {
          rendered: ''
        },
        content: {
          rendered: ''
        }
      },
      blogPostImage: [],
      loading: true
    };
  }
  
  componentDidMount() {

    let headerHeight = document.querySelector('.ant-layout-header')
      .clientHeight;

    this.setState({
      height: headerHeight,
    });

    this.getPostData();
    this.getPostImage();
  }

  getPostData = () => {
    const articleKey = this.props.match.params.articleKey;
    axios
      .get(`https://news.kurtisrogers.com/wp-json/wp/v2/posts?slug=${articleKey}`)
      .then(resp => {
        const postData = resp.data[0];
        this.setState({ post: postData })
        setTimeout(() => {
          this.setState({ loading: false })
          }, 1000)
      })
      .catch(err => {
        console.log('err :', err);
      })
  }

  getPostImage = () => {
    return axios
    .get(`https://news.kurtisrogers.com/wp-json/wp/v2/media`)
    .then(response => {
      // return response.data.source_url;
      let postImageData = response.data;
      this.setState({ blogPostImage: postImageData })
    })
    .catch(err => {
      console.log('err :', err);
    })
  }

  handleClick = () => {    
    this.props.history.push("/blog");
  }

  handleContent( content ) {
    return { __html: `${content}` };
  }

  render() {
    
    const { content } = this.state;

    let pageColor;
    let path = this.props.location.pathname;

    (content.atts || []).map((page) => {
      return page.path === 'post' ? 
        pageColor = page.colour
      : null
    })

    const { post, loading, blogPostImage } = this.state;

    console.log(post);
    
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
          {/* <!-- Open Graph data --> */}
          <meta property="og:title" content={ post ? `${post.title.rendered}` : null } />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={ post ? `https://kurtisrogers.com/${post.slug}` : null } />
          
          <meta property="og:description" content={`${post.content.rendered.replace(/(<([^>]+)>)/ig, "")}`} />
          <meta property="og:site_name" content="Kurtis Rogers" /> 
          <meta property="fb:app_id" content="474985726777050" />
          {/* <!-- Twitter Card data --> */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@kurtis_rogers" />
          <meta name="twitter:title" content={ post ? `${post.title.rendered}` : null } />
          <meta name="twitter:description" content={ post ? `${post.content.rendered.replace(/(<([^>]+)>)/ig, "")}` : null } />
        </Helmet>
        <Layout className="layout">
          <Content style={{ padding: '50px 20px' }}>
          {/* <PageHeader
            style={{
              border: '1px solid rgb(235, 237, 240)',
            }}
            onBack={() => this.handleClick()}
            title="Go Back"
            subTitle={post ? post.title.rendered : null }
          >
            <Content>
              Hope you enjoy the content!
            </Content>
          </PageHeader> */}
          <Row style={{
            textAlign: "center"
          }} type="flex" justify="center" align="middle">
            <Col md={12} xs={24}>
              <Skeleton loading={loading} active>
                <Title style={{
                  margin: "50px 0"
                }} level={1}>
                  {post ? post.title.rendered : null }
                </Title>
                <Tag></Tag>
              </Skeleton>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 24 }} md={{ span: 16, offset: 4 }}>
              <Skeleton loading={loading} active>
                {blogPostImage.map((image, key) => {
                    console.log(image.id)
                    return (
                      <Fragment key={key}>
                        {/* <!-- Twitter Summary card images must be at least 120x120px --> */}
                        { image.id === post.featured_media ?
                          <Fragment>
                            <Helmet>
                              <meta name="twitter:image" content={ image.source_url } />
                              <meta property="og:image" content={image.source_url} />
                            </Helmet>
                          <img 
                            style={{
                              width: "100%",
                              maxWidth: "100%",
                              display: "block",
                            }}
                            key={key}
                            src={image.source_url}
                            alt={ post ? post.title.rendered : null } />
                          </Fragment>
                        :
                        null }
                      </Fragment>
                    )
                  })
                }
              </Skeleton>
            </Col>
          </Row>
          <Row style={{ marginTop: "50px" }} type="flex" justify="center" align="middle">
            <Col xs={{ span: 24 }} md={{ span: 16 }}>
              <Skeleton loading={loading} active>
                {post ? <div className="kkr-post-content-wrapper" dangerouslySetInnerHTML={(this.handleContent(post.content.rendered))}></div> : null }
              </Skeleton>
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
    )
  }
}

export default withRouter (Post);