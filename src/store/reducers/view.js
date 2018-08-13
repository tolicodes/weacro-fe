import produce from 'immer';
import {
  FILTER_DIFFICULTY, SET_TAG, SET_SLIDE_INDEX, SET_VIEW, FILTER_BY_NAME,
} from '../actions/actionTypes';

const initialState = {
  difficulty: 'All',
  tag: '',
  currentSlide: 0,
  device: 'Portrait',
  name: '',
};

const reducer = (state = initialState, {
  type, difficulty, tag, currentSlide, device, name,
}) => produce(state, (newState) => {
  switch (type) {
    case SET_TAG:
      newState.tag = tag;
      newState.currentSlide = currentSlide;
      break;
    case FILTER_DIFFICULTY:
      newState.difficulty = difficulty;
      newState.currentSlide = currentSlide;
      break;
    case SET_SLIDE_INDEX:
      newState.currentSlide = currentSlide;
      break;
    case SET_VIEW:
      newState.device = device;
      break;
    case FILTER_BY_NAME:
      newState.name = name;
      break;
    default:
  }
});

export default reducer;

/*

    case SETMODE:
      setState = { mode, posesLoaded: false };
*/
