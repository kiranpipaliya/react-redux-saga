import errorReducer from './errorReducer';
import imageReducer from './imageReducer';
import loadingReducer from './loadingReducer';
import { combineReducers } from 'redux';
import pageReducer from './pageReducer';
import statsReducer from './statsReducer';
const rootReducer = combineReducers({
  isLoading: loadingReducer,
  images: imageReducer,
  error: errorReducer,
  nextPage: pageReducer,
  imageStats: statsReducer,
});

export default rootReducer;
