import {GET_USERS} from './action.types';
import firestore from '@react-native-firebase/firestore';
import {showFeedback} from './feedback.actions';

export const getUsers = () => async (dispatch) => {
  try {
    const res = await firestore().collection('users').get();
    dispatch({
      type: GET_USERS,
      payload: res._docs.map((doc) => {
        return {
          ...doc._data,
          id: doc.id,
        };
      }),
    });
  } catch (error) {
    dispatch(
      showFeedback(
        error && error.code ? error.code : 'Error in connection',
        'error',
      ),
    );
  }
};
