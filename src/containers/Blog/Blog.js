import React, { PureComponent, Fragment } from 'react';
import { Layout, Typography, Card, Row, Col, Button, Avatar, Spin, Icon } from 'antd';
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
    blogPostImages: [],
    blogPostAuthorData: {
      id: null,
      avatar_urls: {}
    },
    catPosts: [],
    loading: true
  }

  componentDidMount() {
    this.getPosts();
    this.getPostImage();
    this.getUserInfo();
  }

  getPosts = () => {
    return axios
      .get(`https://news.kurtisrogers.com/wp-json/wp/v2/posts`)
      .then(response => {
        let postsData = response.data;
        this.setState(() => ({ blogData: postsData, loading: false }));
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
      this.setState(() => ({ 
        blogPostImages: postImageData 
      }))
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

  handleCatsClick( catId ) {

    return axios
      .get( `https://news.kurtisrogers.com/wp-json/wp/v2/posts/?categories=${catId}` )
      .then(response => {
        let catPosts = response.data;
        this.setState(() => ({ 
          blogData: catPosts 
        }))
        // console.log('object :', this.state.catPosts);
        this.setState({ loading: false })
      })
      .catch(err => {
        console.log('err :', err);
      })
  }

  getUserInfo = () => {
    return axios
      .get('https://news.kurtisrogers.com/wp-json/wp/v2/users')
      .then(response => {
        let postUserData = response.data;
        this.setState(() => ({ 
          blogPostAuthorData: postUserData 
        }))
      })
      .catch(err => {
        console.log('err :', err);
      })
  }

  render() {

    const { blogData, blogPostImages, blogPostAuthorData, loading } = this.state;
    // console.log('Author data :', blogPostAuthorData);
    // console.log('props :', this.props.catButtons);
    const { catButtons } = this.props;

    return (
      <Fragment>
        <PageBanner
          bgcolor={grey[6]}
          imgsrc={require('../../assets/svg/glamorous.svg')}
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

            {/* Check for the state value exists */}
            { catButtons ? <Button onClick={() => this.getPosts()}>All</Button> : null }

            {Array.from( catButtons ).map((cat) => {
              return (
                <Button 
                  category={ cat.slug }
                  onClick={ () => this.handleCatsClick( cat.id ) }
                  key={cat.slug}>
                  {cat.name}
                </Button>
              )
            })}

            { loading ? <div style={{ width: '100%', textAlign: 'center' }}><Icon type="loading" style={{ fontSize: 24 }} spin /></div> : null }

            <Row style={{ paddingTop: '20px' }} gutter={20}>

                { blogData.map((post, index) => {
                                  
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
                      { Array.from(blogPostAuthorData).map((author, key) => {
                        return post.author === author.id ? <Meta
                          key={key}
                          avatar={<Avatar src={ post.author === author.id ? author.avatar_urls[96] : null } />}
                          title={post.title.rendered}
                          description={ 'Published: ' + moment( post.date ).format( 'D/M/YYYY' )}
                          /> : null
                      }) }
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
