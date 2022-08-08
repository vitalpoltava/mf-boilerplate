import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => (
  <Row>
    <Col className="py-1 bg-info" sm={2}>Book ID</Col>
    <Col className="py-1 bg-info" sm>Title</Col>
    <Col className="py-1 bg-info" sm>Author</Col>
  </Row>
)

export default Header;
