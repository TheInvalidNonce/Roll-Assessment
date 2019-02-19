import axios from 'axios';
import { GET_TOKENS, ADD_TOKEN, GET_TOKEN } from './types/types';

const url = 'https://roll-76f98.firebaseio.com/tokens.json'

// Action creators

const getToken = token => {
  return {
    type: GET_TOKEN,
    token
  }
}

const createToken = data => {
  return {
    type: ADD_TOKEN,
    payload: {
      name: data.name,
      price: data.price,
      symbol: data.symbol,
      volume: data.volume
    }
  }
}

const getTokens = tokens => {
  return {
    type: GET_TOKENS,
    tokens
  }
}

export const fetchTokens = () => {
  return dispatch => {
    return axios.get(url)
      .then(resp => {
        // debugger
        dispatch(getTokens(resp.data))
        // debugger
      })
      .catch(err => {
        throw err;
      })
  }
}