import { ANSWER_QUESTION, RESET_QUIZ } from '../actions/quizActions';

const initialState = {
  score: 0,
  questionIndex: 0,
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case ANSWER_QUESTION:
      return {
        ...state,
        score: state.score + action.payload,
        questionIndex: state.questionIndex + 1,
      };
    case RESET_QUIZ:
      return initialState;
    default:
      return state;
  }
};

export default quizReducer;
