import React, { PureComponent, Fragment } from 'react';
import { Layout, Card, Row, Col, Button, Avatar, Icon, Typography } from 'antd';
import axios from 'axios';
import PageBanner from '../../components/Elements/PageBanner';
import { grey } from '@ant-design/colors';
import moment from 'moment';
import FooterContent from '../../components/Footer/FooterContent';
import HeaderContent from '../../components/Header/HeaderContent';

const { Content, Header, Footer } = Layout;
const { Title } = Typography;
const { Meta } = Card;

export default class Blog extends PureComponent {
  
  constructor(props){
    super(props);
    this.state = {
      height: '',
      content: this.props.content,
      blogData: [],
      blogPostImages: [],
      blogPostAuthorData: {
        id: null,
        avatar_urls: {}
      },
      catPosts: [],
      loading: true
    };
  }

  componentDidMount() {

    let headerHeight = document.querySelector('.ant-layout-header')
      .clientHeight;

    this.setState({
      height: headerHeight,
    });

    this.getPosts();
    this.getPostImage();
    this.getUserInfo();
  }

  componentDidUpdate() {

    // const postTitle;
    this.loadDataAndSetState();
  }
  
  loadDataAndSetState = () => {
    this.setState({ content: this.props.content })
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
      pathname: `/post/${articleKey}`
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

    const { content } = this.state;

    let pageColor;
    let path = this.props.location.pathname;

    (content.atts || []).map((page) => {
      return page.path === path ? 
        pageColor = page.colour
      : null
    })

    const { blogData, blogPostImages, blogPostAuthorData, loading } = this.state;
    // console.log('Author data :', blogPostAuthorData);
    // console.log('props :', this.props.catButtons);
    const { catButtons } = this.props;

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
        <PageBanner
          bgcolor={pageColor}
          imgsrc={require('../../assets/svg/signal.svg')}
          minusmarginTop={this.state.height}
          // maintain vertical alignment of all content
          paddingtopcontent={this.state.height}
          title="The Blog"
          bannercontent="You might find something interesting to read... "
          subtitle="Warning: This page may contain some awful content."
          svg={require('./../../assets/svg/undraw_social_update_puv0.svg')}
        />
        {/* <InfoBanner /> */}
        <Layout>
          <Content 
            style={{ 
              padding: '50px 20px',
              width: '100%',
              maxWidth: '1280px',
              margin: 'auto' 
            }}>
            <Row>
              <Col xs={24} md={12}>
                {/* Check for the state value exists */}
                <Title level={2} style={{ marginBottom: '10px' }}>Filter by category</Title>
              </Col>
              <Col xs={24} md={12}>
                <div style={{ 
                  display: 'flex',
                  overflowX: 'scroll'}}>
                  { catButtons ? <Button style={{ margin: '10px' }} onClick={() => this.getPosts()}>All</Button> : null }
                  {Array.from( catButtons ).map((cat) => {
                    return (
                      <Button 
                        style={{
                          margin: "10px"
                        }}
                        category={ cat.slug }
                        onClick={ () => this.handleCatsClick( cat.id ) }
                        key={cat.slug}>
                        {cat.name}
                      </Button>
                    )
                  })}
                </div>
              </Col>
            </Row>

            { loading ? <div style={{ width: '100%', textAlign: 'center' }}><Icon type="loading" style={{ fontSize: 24 }} spin /></div> : null }

            <Row className="kkr-grid-post-parent" style={{ paddingTop: '20px' }} gutter={20}>

                { blogData.map((post, index) => {
                                  
                  return <Col
                    style={{ marginBottom: '20px' }} 
                    key={index} 
                    xs={{ span: 24 }} 
                    md={{ span: 12 }} 
                    lg={{ span: 6 }}>
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
                      <Button 
                        style={{
                          background: pageColor,
                          border: "none"
                        }}
                        onClick={() => this.getArticle(post.slug)} type={'primary'}>
                        Show me the post
                      </Button>
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
