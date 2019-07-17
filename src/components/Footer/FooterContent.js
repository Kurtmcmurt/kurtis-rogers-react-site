import React, { PureComponent, Fragment } from 'react';
import { Row, Col, Typography, Icon } from 'antd';
import { geekblue } from '@ant-design/colors';

const { Paragraph } = Typography;

export default class FooterContent extends PureComponent {
  render() {
    let icons = [
      { name: 'facebook', link: 'google.com' },
      { name: 'twitter', link: 'google.com' },
      { name: 'linkedin', link: 'google.com' },
      { name: 'instagram', link: 'google.com' }
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
            <Row style={{ padding: '80px 50px', textAlign: 'right' }}>
              <Col span={24}>
                <div className="logo" style={{ margin: 0, textAlign: 'right' }}>
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
                <div style={{ display: 'block' }}>
                  <ul
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      paddingLeft: '0'
                    }}
                  >
                    {icons.map((icon, i) => (
                      <li
                        key={i}
                        style={{ listStyleType: 'none', marginRight: '1em' }}
                      >
                        <a style={{ display: 'block' }} href={icon.link}>
                          <Icon
                            style={{
                              color: '#ffffff',
                              fontSize: '3em'
                            }}
                            type={icon.name}
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
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
