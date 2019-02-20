import React, { Component } from "react";
import { Container } from "react-bootstrap";
import TokenIndex from "../components/tokens/TokenIndex";

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <TokenIndex />
        </Container>
      </div>
    );
  }
}

export default Home;
