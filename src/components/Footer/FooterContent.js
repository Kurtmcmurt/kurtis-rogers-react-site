import React, { PureComponent, Fragment } from "react";
import { Row, Col, Typography } from "antd";
import { geekblue } from "@ant-design/colors";

const { Paragraph } = Typography;

export default class FooterContent extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      pageAtts: this.props.atts
    })
  }

  render() {

    let pageColor = this.props.fcBgColor;

    return (
      <Fragment>
        <Row type='flex' style={{ textAlign: "right" }}>
          <Col xm={24} md={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="logo" style={{ display: 'flex' }}>
              <Paragraph
                code="true"
                style={{
                  color: "#ffffff",
                  height: "auto",
                  marginBottom: 0
                }}
              >
                Kurtis Rogers
              </Paragraph>
            </div>
          </Col>
          <Col
            xs={24}
            md={12}
            style={{
              backgroundColor: pageColor,
              overflow: "hidden",
              padding: '80px 50px'
            }}
          >
            <Paragraph
              style={{
                textAlign: "left",
                fontSize: "3em",
                color: "#ffffff",
                marginBottom: "0"
              }}
              strong={true}
            >
              Thanks for visiting.
            </Paragraph>
          </Col>
        </Row>
      </Fragment>
    );
  }
}
