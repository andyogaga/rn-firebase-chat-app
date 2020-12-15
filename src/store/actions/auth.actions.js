import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  LOGIN,
  LOGOUT,
  CHANGE_FIRST_TIME,
  CHANGE_INFO_SEEN,
} from './action.types';
import {showFeedback} from './feedback.actions';

export const signInAnonymously = (user, cb = () => {}) => async (dispatch) => {
  try {
    const res = await auth().signInAnonymously();
    await auth().currentUser.updateProfile({
      displayName: user,
    });
    await firestore().collection('users').add({
      name: user,
    });
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
