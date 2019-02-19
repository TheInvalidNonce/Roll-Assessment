import React, { Component } from 'react';
import CustomNavbar from './CustomNavbar';
import { Container, Row, Col, Button, Jumbotron, } from 'react-bootstrap';
class Home extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Container>
        <Col xm={1}><h1 xm={10}>Home Component</h1></Col>
        <Col xm={10}>
        <Jumbotron>Test</Jumbotron>
        </Col>
        <Col xm={1}></Col>
      </Container>
      </div>
    )
  }

}

export default Home;