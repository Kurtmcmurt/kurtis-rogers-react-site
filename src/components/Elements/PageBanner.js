import React, { Img, PureComponent } from 'react';
import { Layout, Divider, Button, Row, Col, Typography, Icon } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const { Content } = Layout;
const { Title } = Typography;

export default class PageBanner extends PureComponent {
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
      imgsrc,
      bgcolor,
      icontype,
      minusmarginTop,
      isVis
    } = this.props;

    return (
      <div
        style={{
          backgroundColor: bgcolor,
          backgroundImage: `url(${imgsrc})`,
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: `-${minusmarginTop}px`
        }}
        className="kr--full-width-height-banner"
      >
        <Layout className="layout" style={{ background: 'none' }}>
          <Content style={{ padding: '0 50px' }}>
            <Row type="flex">
              <Col span={12}>
                <div className="kr--banner-content-container">
                  <Title style={{ marginBottom: '0', color: titlecolor }}>
                    {title}
                  </Title>
                  <Title
                    style={{ marginTop: '0', color: subtitlecolor }}
                    level={3}
                  >
                    {subtitle}
                  </Title>
                  {isVis ? <Divider type="horizontal" /> : null}
                  <p style={{ color: bannercontentcolor }}>{bannercontent}</p>
                  <Link className={`ant-btn ant-btn-${buttontype}`} to={link}>
                    {buttontext} <Icon type={icontype} />
                  </Link>
                </div>
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}

PageBanner.propTypes = {
  title: PropTypes.string.isRequired,
  titlecolor: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  bannercontent: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  buttontype: PropTypes.string.isRequired,
  icontype: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired
};

PageBanner.defaultProps = {
  title: 'This is the default value',
  titlecolor: '#ffffff',
  subtitle: 'This is the default vale for the subtitle',
  isVis: false,
  bannercontentcolor: '#ffffff',
  subtitlecolor: '#ffffff'
};
