import {combineReducers} from 'redux';
import {authReducer} from './auth.reducers';
import feedbackReducer from './feedback.reducers';
import {userReducers} from './user.reducers';

export default combineReducers({
  auth: authReducer,
  feedback: feedbackReducer,
  users: userReducers,
});
