import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";

class TokensNew extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter a token name" />
            <Form.Text className="text-muted">
              Enter a unique token name.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Price </Form.Label>
            <Form.Control type="text" placeholder="Enter a price" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Symbol</Form.Label>
            <Form.Control type="text" placeholder="Enter a price" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Volume</Form.Label>
            <Form.Control type="text" placeholder="Enter a price" />
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

export default TokensNew;
