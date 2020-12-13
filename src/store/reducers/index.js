import {combineReducers} from 'redux';
import {authReducer} from './auth.reducers';
import feedbackReducer from './feedback.reducers';

export default combineReducers({
  auth: authReducer,
  feedback: feedbackReducer,
});
