import React, { Component } from 'react'
import axios from 'axios'
import { PageHeader, Layout, Typography, Row, Col, Skeleton, Tag, Icon } from 'antd';
import { withRouter } from "react-router-dom";

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

    console.log('featured :', post.featured_media);

    console.log('this.state.postData :', post);
    console.log('blogPostImage :', blogPostImage);
    
    return (
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
                    image.id === post.featured_media ?
                      <img 
                      style={{
                        width: "100%",
                        maxWidth: "100%",
                        display: "block",
                      }}
                      key={key}
                      src={image.source_url}
                      alt={ post ? post.title.rendered : null } />
                    :
                    null
                  )
                })
              }
            </Skeleton>
          </Col>
        </Row>
        <Row style={{ marginTop: "50px" }} type="flex" justify="center" align="middle">
          <Col xs={{ span: 24 }} md={{ span: 16 }}>
            <Skeleton loading={loading} active>
              {post ? <div dangerouslySetInnerHTML={(this.handleContent(post.content.rendered))}></div> : null }

            </Skeleton>
          </Col>
        </Row>
        </Content>
      </Layout>
    )
  }
}

export default withRouter (Post);