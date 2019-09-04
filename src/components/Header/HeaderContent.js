import React, { PureComponent, Fragment } from 'react';
// import HeaderContentNavi from './HeaderContentNavi';
import { Typography } from 'antd';

const { Paragraph } = Typography;

export default class HeaderContent extends PureComponent {
  render() {
    return (
      <Fragment>
        <div className="logo">
          <Paragraph
            code="true"
            style={{ color: '#ffffff', height: 'auto', marginBottom: 0 }}
          >
            Kurtis Rogers
          </Paragraph>
        </div>
        {/* <HeaderContentNavi /> */}
      </Fragment>
    );
  }
}
