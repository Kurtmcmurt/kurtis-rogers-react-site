import React, { PureComponent, Fragment } from 'react';
import { Row, Col, Typography, List, Icon } from 'antd';
import { geekblue } from '@ant-design/colors';

const { Paragraph } = Typography;

export default class FooterContent extends PureComponent {
  render() {
    const icons = [
      { icon: 'facebook' },
      { icon: 'twitter' },
      { icon: 'linkedin' },
      { icon: 'instagram' }
    ];

    return (
      <div className="kkr--footer-ctr-parent">
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'stretch'
          }}
        >
          <div className="kkr--footer-50-wth-alt-clrbg">
            <Row style={{ padding: '80px 50px' }}>
              <Col span={24}>
                <div className="logo">
                  <Paragraph
                    code="true"
                    style={{
                      color: '#ffffff',
                      height: 'auto',
                      marginBottom: 0
                    }}
                  >
                    Kurtis Rogers
                  </Paragraph>
                </div>
              </Col>
            </Row>
          </div>
          <div
            style={{
              backgroundColor: `${geekblue.primary}`,
              overflow: 'hidden'
            }}
            className="kkr--footer-50-wth-alt-clrbg"
          >
            <Row style={{ padding: '80px 50px' }}>
              <Col span={24}>
                <Paragraph
                  style={{
                    textAlign: 'left',
                    fontSize: '3em',
                    color: '#ffffff',
                    marginBottom: '0'
                  }}
                  strong={true}
                >
                  Thanks for visiting.
                </Paragraph>
                <List
                  style={{ textAlign: 'left' }}
                  grid={{ gutter: 24, column: 4 }}
                  dataSource={icons}
                  renderItem={item => (
                    <List.Item>
                      <Icon
                        style={{ fontSize: '40px', color: '#ffffff' }}
                        type={item.icon}
                      />
                    </List.Item>
                  )}
                />
                <Fragment>
                  <div className="kkr--footer-nav-parent" />
                </Fragment>
              </Col>
            </Row>
          </div>
        </div>
        <Row>
          <Col>Some Footer information &copy;</Col>
        </Row>
      </div>
    );
  }
}
