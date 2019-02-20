import axios from "axios";
import { GET_TOKENS, ADD_TOKEN } from "./types/types";

const url = "https://roll-76f98.firebaseio.com/tokens.json";

// Action creators

export const createToken = data => {
  return {
    type: ADD_TOKEN,
    payload: data
  };
};

const getTokens = tokens => {
  return {
    type: GET_TOKENS,
    tokens
  };
};

export const fetchTokens = () => {
  return dispatch => {
    return axios
      .get(url)
      .then(resp => {
        dispatch(getTokens(resp.data));
      })
      .catch(err => {
        throw err;
      });
  };
};
