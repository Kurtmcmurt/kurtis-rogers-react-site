import React, { PureComponent } from 'react';
import { Layout, Typography, Card, Row, Col, Button } from 'antd';
import axios from 'axios';
import { relative } from 'path';

const { Content } = Layout;
const { Title } = Typography;
const { Meta } = Card;

export default class Blog extends PureComponent {
  
  state = {
    blogData: [],
    blogPostImages: []
  }

  componentDidMount() {
    
    axios
      .get( 'http://kurtisrogers.loc/wp-json/wp/v2/posts' )
      .then(response => {
        let postsData = response.data;
        this.setState({ blogData: postsData });
      })
      .catch(err => {
        console.log('err :', err);
      })

    this.getPostImage();

  }

  getPostImage() {
    axios
    .get( `http://kurtisrogers.loc/wp-json/wp/v2/media` )
    .then(response => {
      // return response.data.source_url;
      let postImageData = response.data;
      this.setState({ blogPostImages: postImageData })
    })
    .catch(err => {
      console.log('err :', err);
    })
  }

  render() {

    const { blogData, blogPostImages } = this.state;


    return (
      <Layout>
        <Content style={{ padding: '50px' }}>
          <div style={{ background: '#fff', padding: 24, textAlign: "center" }}>
            <Title level={1}>Welcome to my blog</Title>
          </div>
          <Row style={{ paddingTop: '20px' }} gutter={20}>

            { 
              blogData.map((post, index) => {
                                
                return <Col key={index} span={6}>
                  <Card
                  key={ index }
                  style={{ width: '100%' }}
                  cover={
                    <div style={{ 
                      position:relative,
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
                    // <Icon type="setting" key="setting" />,
                    // <Icon type="edit" key="edit" />,
                    // <Icon type="ellipsis" key="ellipsis" />,
                    <Button type={'primary'}>View</Button>
                  ]}
                  >
                    <Meta
                      title={post.title.rendered}
                      description="This is the description"
                      />
                  </Card>
                </Col>
                  

              }) 
            }
          </Row>
        </Content>
      </Layout>
    );
  }
}
