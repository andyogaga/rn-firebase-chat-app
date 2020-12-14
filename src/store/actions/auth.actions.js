import auth from '@react-native-firebase/auth';
import {
  LOGIN,
  LOGOUT,
  CHANGE_FIRST_TIME,
  CHANGE_INFO_SEEN,
} from './action.types';
import {showFeedback} from './feedback.actions';

export const signInAnonymously = (values, cb) => async (dispatch) => {
  try {
    await auth().signInAnonymously();
    const res = await auth().currentUser.updateProfile({
      displayName: values.user,
    });
    console.log(res);
    if (res) {
      dispatch(showFeedback('Your account has been created successfully'));
      dispatch({
        type: LOGIN,
        user: res.user,
      });
      changeFromFirstTimer();
    }
  } catch (error) {
    dispatch(
      showFeedback(
        error && error.code ? error.code : 'Error in connection',
        'error',
      ),
    );
    cb(null);
  }
};

export const logout = async () => {
  try {
    await auth().signOut();
    return {
      type: LOGOUT,
    };
  } catch (e) {
    console.error(e);
  }
};

export const changeFromFirstTimer = () => {
  return {
    type: CHANGE_FIRST_TIME,
  };
};

export const confirmIntroSeen = () => (dispatch) => {
  dispatch({
    type: CHANGE_INFO_SEEN,
  });
};
