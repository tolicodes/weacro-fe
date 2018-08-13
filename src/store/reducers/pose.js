import api from 'API';
import produce from 'immer';

import { STORE_POSE } from '../actions/actionTypes';
// import { updateObject } from '../utility';
const initialState = {
  poses: api.poses.get(true) || false,
};

const reducer = (state = initialState, { type, pose }) => produce(state, (newState) => {
  switch (type) {
    case STORE_POSE:
      if (state.poses.length === pose.length) return state;
      newState.poses = pose;
      break;
    default:
  }
});

export default reducer;
