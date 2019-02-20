import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTokens } from "../../actions/tokenActions";
import { Container } from "react-bootstrap";
import TokenListItem from "./TokenListItem";
import { bindActionCreators } from "redux";

class TokenIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tokens: []
    };
  }

  componentWillMount() {
    if (Object.entries(this.props.tokens).length <= 1) {
      this.props.fetchTokens();
    }
  }

  renderTokens() {
    if (Object.entries(this.props.tokens).length > 1) {
      const tokens = Object.entries(this.props.tokens);
      return <TokenListItem tokens={tokens} />;
    }
  }

  render() {
    return (
      <Container>
        <h1>Index of Tokens</h1>
        <ul>{this.renderTokens()}</ul>
      </Container>
    );
  }
}

const mapStateToProps = state => {
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
  mapStateToProps,
  mapDispatchToProps
)(TokenIndex);
