import { ADD_TOKEN, GET_TOKENS } from "../actions/types/types";
import _ from "lodash";

const tokensReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TOKENS:
      return _.extend({}, state, action.tokens);
    case ADD_TOKEN:
      return _.extend(state.tokens, action.payload);
    default:
      return state;
  }
};

export default tokensReducer;
