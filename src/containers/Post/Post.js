import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { PageHeader, Layout, Typography, Row, Col, Skeleton, Tag, Icon } from 'antd';
import { withRouter } from "react-router-dom";

import Helmet from 'react-helmet';

const { Content } = Layout;
const { Title, Text } = Typography;

class Post extends Component {

  state = {
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
  }
  
  componentDidMount() {
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
    
    const { post, loading, blogPostImage } = this.state;

    console.log(post);
    
    return (
      <Fragment>
        <Helmet>
          {/* <!-- Open Graph data --> */}
          <meta property="og:title" content={ post ? `${post.title.rendered}` : null } />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={ post ? `https://kurtisrogers.com/${post.slug}` : null } />
          
          <meta property="og:description" content={ post ? `${post.content.rendered.replace(/(<([^>]+)>)/ig, "")}` : null } />
          <meta property="og:site_name" content="Kurtis Rogers" /> 
          <meta property="fb:app_id" content="474985726777050" />
          {/* <!-- Twitter Card data --> */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@kurtis_rogers" />
          <meta name="twitter:title" content={ post ? `${post.title.rendered}` : null } />
          <meta name="twitter:description" content={ post ? `${post.content.rendered.replace(/(<([^>]+)>)/ig, "")}` : null } />
        </Helmet>
        <Layout className="layout">
          <Content style={{ padding: '50px' }}>
          <PageHeader
            style={{
              border: '1px solid rgb(235, 237, 240)',
            }}
            onBack={() => this.handleClick()}
            title="Go Back"
            subTitle={post ? post.title.rendered : null }
          >
            <Content>
              Some content for the page header sextion
            </Content>
          </PageHeader>
          <Row style={{
            textAlign: "center"
          }} type="flex" justify="center" align="middle">
            <Col span={12}>
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
                      <Fragment>
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
      </Fragment>
    )
  }
}

export default withRouter (Post);