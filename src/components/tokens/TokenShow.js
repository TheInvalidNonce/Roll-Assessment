import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchTokens } from "../../actions/tokenActions";

class TokenShow extends Component {
  componentDidMount() {
    this.props.fetchTokens();
  }
  render() {
    const tokens = this.props.tokens;
    const currentToken = this.props.match.params.tokenId;
    return (
      <Container>
        <h2>Id: {this.props.match.params.tokenId}</h2>
        <h3>Name: {tokens[currentToken].name}</h3>
        <h3>Price: {tokens[currentToken].price}</h3>
        <h3>Symbol: {tokens[currentToken].symbol}</h3>
        <h3>Volume: {tokens[currentToken].volume}</h3>
        <Button style={{ display: "inline" }}>Favorite</Button>
      </Container>
    );
  }
}

const mapStatetoProps = state => {
  return {
    tokens: state.tokens
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchTokens: fetchTokens
    },
    dispatch
  );
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(TokenShow);
