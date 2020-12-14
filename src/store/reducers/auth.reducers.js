import {
  LOGIN,
  LOGOUT,
  CHANGE_FIRST_TIME,
  CHANGE_INFO_SEEN,
} from '../actions/action.types';

const initialState = {
  user: null,
  isAuthenticated: false,
  token: '',
  firstAccess: true,
  introSeen: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.user,
        isAuthenticated: true,
      };
    case CHANGE_FIRST_TIME:
      return {
        ...state,
        firstAccess: false,
      };
    case CHANGE_INFO_SEEN:
      return {
        ...state,
        introSeen: true,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};
