import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTokens } from '../../actions/tokenActions';
import { Container, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import TokenListItem from './TokenListItem';
import { bindActionCreators } from 'redux';


class TokenIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tokens: []
    }
  }

  componentWillMount()  {
    this.props.fetchTokens();
    console.log('this.props :', this.props);
  }

  renderTokens() {
    // debugger
    if (this.props.tokens.tokens.length === 1) {
      // debugger
      const tokens = Object.values(this.props.tokens.tokens[0])
      return (
        <TokenListItem tokens={tokens}/>
      )
    }
  }


  render() {
    console.log('this.props :', this.props);
    return (
      <Container>
        <h1>Index of Tokens</h1>
        <ul>
          {this.renderTokens()}
        </ul>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return ({
    tokens: state.tokens
  })
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchTokens: fetchTokens
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TokenIndex);