import { createStore, combineReducers } from 'redux';
import quizReducer from './reducers/quizReducer';

const rootReducer = combineReducers({
  quiz: quizReducer
});

const store = createStore(rootReducer);

export default store;