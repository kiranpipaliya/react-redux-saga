import errorReducer from './errorReducer';
import imageReducer from './imageReducer';
import loadingReducer from './loadingReducer';
import { combineReducers } from 'redux';
import pageReducer from './pageReducer';
const rootReducer = combineReducers({
  isLoading: loadingReducer,
  images: imageReducer,
  error: errorReducer,
  nextPage: pageReducer,
});

export default rootReducer;
