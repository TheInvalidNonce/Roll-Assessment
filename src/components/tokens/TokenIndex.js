import React, { Component } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import TokenListItem from './TokenListItem';


class TokenIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tokens: []
    }
  }

  componentWillMount()  {
    this.getTokens();
  }
  
  getTokens = async () => {
    let url = 'https://roll-76f98.firebaseio.com/tokens.json';
    const resp = await axios.get(url)

    this.setState({
      tokens: [Object.values(resp.data)], // convert from a map to an array of objects
    }, console.log(resp.data))

  }

  renderTokens() {
    const tokens = this.state.tokens[0];
    if (tokens && tokens.length) {
      return (
        <TokenListItem tokens={tokens}/>
      )
    }
  }


  render() {
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

export default TokenIndex;