import {callApi} from '../../utils';
import {
  LOGIN,
  LOGOUT,
  GET_PROFILE,
  CHANGE_FIRST_TIME,
  CHANGE_INFO_SEEN,
} from './action.types';
import {showFeedback} from './feedback.actions';

export const sendLoginRequest = ({email, password}, cb) => async (dispatch) => {
  try {
    console.log(email);
  } catch (error) {
    dispatch(
      showFeedback(
        error &&
          error.response &&
          error.response.data &&
          error.response.data.message
          ? error.response.data.message
          : 'Error in connection',
        'error',
      ),
    );
    cb(null);
  }
};

export const sendSignupRequest = (values, cb) => async (dispatch) => {
  try {
    console.log(values);
  } catch (error) {
    dispatch(
      showFeedback(
        error &&
          error.response &&
          error.response.data &&
          error.response.data.message
          ? error.response.data.message
          : 'Error in connection',
        'error',
      ),
    );
    cb(null);
  }
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const changeFromFirstTimer = () => {
  return {
    type: CHANGE_FIRST_TIME,
  };
};
