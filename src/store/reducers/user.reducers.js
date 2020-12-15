import {GET_USERS, LOGOUT} from '../actions/action.types';

const initialState = {
  users: [],
};

export const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
