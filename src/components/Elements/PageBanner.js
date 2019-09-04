import React, { PureComponent, Fragment } from 'react';
import { Layout, Divider, Row, Col, Typography, Icon } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TweenOne from 'rc-tween-one';
// import QueueAnim from 'rc-queue-anim';

const { Content } = Layout;
const { Title } = Typography;

export default class PageBanner extends PureComponent {
  componentDidMount = () => {
    this.setState({ background: this.props.imgsrc });
  };

  render() {
    const {
      title,
      titlecolor,
      subtitle,
      subtitlecolor,
      bannercontent,
      bannercontentcolor,
      link,
      buttontype,
      buttontext,
      isBtnVis,
      imgsrc,
      bgcolor,
      icontype,
      minusmarginTop,
      svg,
      isVis,
      direction,
      paddingtopcontent
    } = this.props;

    let TweenOneGroup = TweenOne.TweenOneGroup;

    const titleAnimation = {
      opacity: '1',
      transform: 'translate(0px, 0px)'
    };

    return (
      <div
        style={{
          backgroundColor: bgcolor,
          backgroundImage: `url(${imgsrc})`,
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: `-${minusmarginTop}px`,
          paddingTop: `${paddingtopcontent}px`,
          overflow: 'hidden'
        }}
        className="kr--full-width-height-banner"
      >
        <Layout className="layout" style={{ background: 'none' }}>
          <Content style={{ padding: '0 50px' }}>
            <Row type="flex" gutter={32}>
              {direction === 'text-left' ? (
                <Fragment>
                  <Col
                    style={{ display: 'flex', alignItems: 'center' }}
                    span={12}
                  >
                    <div className="kr--banner-content-container">
                      <TweenOneGroup animation={titleAnimation}>
                        <Title
                          key="0"
                          style={{ marginBottom: '0', color: titlecolor }}
                        >
                          {title}
                        </Title>
                        <Title
                          key="1"
                          style={{ marginTop: '0', color: subtitlecolor }}
                          level={3}
                        >
                          {subtitle}
                        </Title>
                      </TweenOneGroup>
                      {isVis ? <Divider type="horizontal" /> : null}
                      <Typography.Paragraph
                        style={{ color: bannercontentcolor }}
                      >
                        {bannercontent}
                      </Typography.Paragraph>
                      {isBtnVis && (
                        <Link
                          className={`ant-btn ant-btn-${buttontype}`}
                          to={link}
                        >
                          {buttontext} <Icon type={icontype} />
                        </Link>
                      )}
                    </div>
                  </Col>
                  <Col
                    className="kkr--svg-container"
                    style={{ padding: '0 50px' }}
                    span={12}
                  >
                    <TweenOneGroup animation={titleAnimation}>
                      <object key="2" type="image/svg+xml" data={svg}>
                        Homepage banner SVG
                      </object>
                    </TweenOneGroup>
                  </Col>
                </Fragment>
              ) : (
                <Fragment>
                  <Col className="kkr--svg-container" span={12} xs={24} md={12}>
                    <object
                      style={{
                        position: 'relative',
                        top: '50%',
                        transform: 'translateY(-50%)'
                      }}
                      type="image/svg+xml"
                      data={svg}
                    >
                      Homepage banner SVG
                    </object>
                  </Col>
                  <Col
                    style={{ display: 'flex', alignItems: 'center' }}
                    span={12}
                    xs={24}
                    md={12}
                  >
                    <div className="kr--banner-content-container">
                      <TweenOneGroup animation={titleAnimation}>
                        <Title
                          key="0"
                          style={{ marginBottom: '0', color: titlecolor }}
                        >
                          {title}
                        </Title>
                        <Title
                          key="1"
                          style={{ marginTop: '0', color: subtitlecolor }}
                          level={3}
                        >
                          {subtitle}
                        </Title>
                      </TweenOneGroup>
                      {isVis ? <Divider type="horizontal" /> : null}
                      <p style={{ color: bannercontentcolor }}>
                        {bannercontent}
                      </p>
                      {isBtnVis && (
                        <Link
                          className={`ant-btn ant-btn-${buttontype}`}
                          to={link}
                        >
                          {buttontext} <Icon type={icontype} />
                        </Link>
                      )}
                    </div>
                  </Col>
                </Fragment>
              )}
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}

PageBanner.propTypes = {
  title: PropTypes.string.isRequired,
//   titlecolor: PropTypes.string.isRequired,
//   subtitle: PropTypes.string.isRequired,
//   bannercontent: PropTypes.string.isRequired,
//   link: PropTypes.string.isRequired,
//   buttontype: PropTypes.string.isRequired,
//   icontype: PropTypes.string.isRequired,
//   imgsrc: PropTypes.string.isRequired,
//   svg: PropTypes.string.isRequired
};

PageBanner.defaultProps = {
  isBtnVis: false,
  title: 'This is the default value',
  titlecolor: '#ffffff',
  subtitle: 'This is the default vale for the subtitle',
  isVis: false,
  bannercontentcolor: '#ffffff',
  subtitlecolor: '#ffffff'
};
