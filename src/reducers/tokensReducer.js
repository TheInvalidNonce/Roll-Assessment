import { ADD_TOKEN, GET_TOKENS, GET_TOKEN } from '../actions/types/types'
import _ from 'lodash';

const initialState = {
  tokens: [],
  currentToken: null
}

const tokensReducer = (state = initialState, action) => {
  console.log('In reducer')
  // Object.freeze(state);
  // let newState = _.extend({}, state);

  switch (action.type) {
    case  GET_TOKEN: 
      return _.extend({}, state, {
        tokens: [action.tokens],
        currentToken: action.token
      })
    case GET_TOKENS: 
      // debugger
      return _.extend({}. state, {
        tokens: [action.tokens]
      })
    case ADD_TOKEN: 
      return [...state, action.payload]
    default:
      return state
  }
}

export default tokensReducer;