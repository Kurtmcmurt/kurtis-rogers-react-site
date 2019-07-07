import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';

export default class FooterContent extends PureComponent {
  render() {
    return (
      <div style={{ textAlign: 'center' }} className="kkr--footer-parent">
        <Row gutter={32}>
          <Col span={6}>Left content</Col>
          <Col span={6}>Right content</Col>
          <Col span={6}>Right content</Col>
          <Col span={6}>Right content</Col>
        </Row>
        Some Footer information &copy;
      </div>
    );
  }
}
