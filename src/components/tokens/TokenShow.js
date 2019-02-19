import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class TokenShow extends Component {
  render() {
    debugger
    return (
      <Container>


        <h2>{this.props.match.params.tokenId}</h2>
      </Container>
    )
  }
}

export default TokenShow;