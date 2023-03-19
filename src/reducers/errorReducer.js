import React from 'react';
import { IMAGES } from '../constant';

const errorReducer = (state = null, action) => {
  if (action.type === IMAGES.LOAD_FAIL) return action.error;
  if (action.type === IMAGES.LOAD_SUCCESS) return null;

  return state;
};

export default errorReducer;
