import React from 'react';
import { STATS } from '../constant';

const statsReducer = (state = {}, action) => {
  if (action.type === STATS.LOAD) {
    return {
      ...state,
      [action.id]: {
        isLoading: true,
        error: false,
        downloads: null,
      },
    };
  }
  if (action.type === STATS.LOAD_SUCCESS) {
    return {
      ...state,
      [action.id]: {
        isLoading: false,
        error: false,
        downloads: action.downloads,
      },
    };
  }
  if (action.type === STATS.LOAD_FAIL) {
    return {
      ...state,
      [action.id]: {
        isLoading: false,
        error: true,
        downloads: null,
      },
    };
  }
  return state;
};

export default statsReducer;
