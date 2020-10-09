import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const widget = {
  backgroundColor: "#ff3567",
  marginTop: "5px",
  marginBottom: "5px",
  height: "150px",
  textAlign: "center",
  padding: "10px",
};

const myText = (
  <Container fluid>
    <Row>
      <Col md={4}>
        <div style={widget}>some content</div>
      </Col>
      <Col md={4}>
        <div style={widget}>some content</div>
      </Col>
      <Col md={4}>
        <div style={widget}>some content</div>
      </Col>
    </Row>
  </Container>
);

function RandomComponent() {
  return <div>{myText}</div>;
}

export default RandomComponent;
