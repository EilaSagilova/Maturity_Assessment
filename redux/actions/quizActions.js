export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const RESET_QUIZ = 'RESET_QUIZ';

export const answerQuestion = (value) => ({
  type: ANSWER_QUESTION,
  payload: value,
});

export const resetQuiz = () => ({
  type: RESET_QUIZ,
});
