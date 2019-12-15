import React, { Component } from 'react'
import axios from 'axios'
import { PageHeader, Layout, Typography, Row, Col, Skeleton } from 'antd';
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
    blogPostImage: {},
    loading: true
  }
  
  componentDidMount() {
    this.getPostData();
    this.getPostImage();
  }

  getPostData = () => {
    const articleKey = this.props.match.params.articleKey;
    axios
      .get(`http://kurtisrogers.loc/wp-json/wp/v2/posts?slug=${articleKey}`)
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
    .get(`http://kurtisrogers.loc/wp-json/wp/v2/media`)
    .then(response => {
      // return response.data.source_url;
      let postImageData = response.data[0];
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
    return {__html: content};
  }

  render() {
    
    const { post, loading, blogPostImage } = this.state;
    
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
        />
        <Row type="flex" justify="space-around" align="middle">
          <Col span={12}>
            <Skeleton loading={loading} active>
              <Title style={{
                margin: "20px 0"
              }} level={1}>
                {post ? post.title.rendered : null }
              </Title>
            </Skeleton>
          </Col>
          <Col span={12}>
            <img 
              style={{
                width: "100%",
                maxWidth: "100%",
                display: "block",
              }}
              src={ blogPostImage ? blogPostImage.source_url : null } 
              alt={ post ? post.title.rendered : null } />
          </Col>
        </Row>
        <Row>
          <Col span={20}>
            {post ? <div dangerouslySetInnerHTML={(this.handleContent(post.content.rendered))}></div> : null }
          </Col>
        </Row>
        </Content>
      </Layout>
    )
  }
}

export default withRouter (Post);