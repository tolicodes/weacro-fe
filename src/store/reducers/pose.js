import api from 'API';
import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../utility';
const initialState = {
  poses: api.poses.get(true) || false,
};

const reducer = (state = initialState, action) => {
  const { type, pose } = action;
  const { STORE_POSE } = actionTypes;
  switch (type) {
    case STORE_POSE:
      if (state.poses.length === pose.length) return state;
      return { ...state, poses: [...pose] };
    default:
  }
  return state;
};

export default reducer;
