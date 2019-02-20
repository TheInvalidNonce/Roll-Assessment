import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { createToken } from "../../actions/tokenActions";
const uuidv4 = require("uuid/v4");

class TokensNew extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      price: "",
      symbol: "",
      volume: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    var id = uuidv4();
    var obj = {
      [id]: this.state
    };

    this.props.onAddToken(obj);
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a token name"
              onChange={e => this.setState({ name: e.target.value })}
            />
            <Form.Text className="text-muted">
              Enter a unique token name.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Price </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a price"
              onChange={e => this.setState({ price: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Symbol</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a price"
              onChange={e => this.setState({ symbol: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Volume</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a price"
              onChange={e => this.setState({ volume: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Check here for favorite." />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddToken: token => {
      dispatch(createToken(token));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TokensNew);
