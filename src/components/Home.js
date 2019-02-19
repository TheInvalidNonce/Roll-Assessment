import React, { Component } from 'react';
import { Container, Row, Col, Button, Jumbotron, } from 'react-bootstrap';
import TokenIndex from '../components/tokens/TokenIndex';

class Home extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Container>
        <Col xm={1}><h1 xm={10}>Tokens</h1></Col>
        <Col xm={10}>
          <TokenIndex />
        </Col>
        <Col xm={1}></Col>
      </Container>
      </div>
    )
  }

}

export default Home;