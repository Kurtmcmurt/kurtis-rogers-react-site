import React, { PureComponent, Fragment } from 'react';
import { Layout, Typography, Card, Row, Col, Button, Color, Avatar } from 'antd';
import axios from 'axios';
import PageBanner from '../../components/Elements/PageBanner';
import { grey } from '@ant-design/colors';
import moment from 'moment';

const { Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;

export default class Blog extends PureComponent {
  
  state = {
    blogData: [],
    blogPostImages: []
  }

  componentDidMount() {
    this.getPosts();
    this.getPostImage();
  }

  getPosts = () => {
    return axios
      .get(`https://news.kurtisrogers.com/wp-json/wp/v2/posts`)
      .then(response => {
        let postsData = response.data;
        this.setState({ blogData: postsData });
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
      this.setState({ blogPostImages: postImageData })
    })
    .catch(err => {
      console.log('err :', err);
    })
  }

  getArticle( articleKey ) {
    const location = {
      pathname: `/blog/${articleKey}`
    }

    return this.props.history.push(`${location.pathname}`);
  }

  render() {

    const { blogData, blogPostImages } = this.state;

    return (
      <Fragment>
        <PageBanner
          bgcolor={grey[6]}
          imgsrc={require('../../assets/svg/bubbles.svg')}
          minusmarginTop={this.state.height}
          // maintain vertical alignment of all content
          paddingtopcontent={this.state.height}
          title="The Blog"
          bannercontent="You might find something interesting to read... "
          subtitle="Warning: This page may contain some awful content."
          svg={require('./../../assets/svg/undraw_newspaper_k72w.svg')}
        />
        {/* <InfoBanner /> */}
        <Layout>
          <Content style={{ padding: '50px' }}>
            <Row style={{ paddingTop: '20px' }} gutter={20}>

              { 
                blogData.map((post, index) => {
                  console.log('post :', post);
                                  
                  return <Col key={index} xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
                    <Card
                    key={ index }
                    style={{ width: '100%' }}
                    cover={
                      <div style={{ 
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        maxHeight: '200px',
                        overflow: 'hidden'  
                      }}>
                      {blogPostImages.map((img, i) => 
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
                    actions={[
                      <Button onClick={() => this.getArticle(post.slug)} type={'primary'}>View</Button>
                    ]}
                    >
                      <Meta
                        avatar={<Avatar src="" />}
                        title={post.title.rendered}
                        description={ 'Published: ' + moment( post.date ).format( 'D/M/YYYY' )}
                        />
                    </Card>
                  </Col>
                    

                }) 
              }
            </Row>
          </Content>
        </Layout>
      </Fragment>
    );
  }
}
