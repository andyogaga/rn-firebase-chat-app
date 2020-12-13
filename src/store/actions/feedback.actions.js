import {CLEAR_FEEDBACK, SHOW_FEEDBACK} from './action.types';

export const showFeedback = (feedback, feedbackType = 'info') => {
  const id = Date.now();
  return (dispatch) => {
    dispatch({
      type: SHOW_FEEDBACK,
      message: typeof feedback === 'object' ? feedback.message : feedback,
      feedbackType,
      id,
    });
    setTimeout(() => {
      dispatch(clearFeedback(id));
    }, 4000);
  };
};

export const clearFeedback = (id) => ({
  type: CLEAR_FEEDBACK,
  id,
});
