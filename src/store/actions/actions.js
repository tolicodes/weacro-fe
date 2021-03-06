import {
  FILL_USER, STORE_POSE, COLLECT_POSE, DUMP_POSE,
  FILTER_DIFFICULTY, SET_TAG, FILTER_BY_NAME,
  GET_POSES, GET_USER, LOG_OUT, SET_SLIDE_INDEX,
} from './actionTypes';

export const storeUser = user => ({ type: FILL_USER, user });
export const storePoses = pose => ({ type: STORE_POSE, pose });

export const asyncGetPoses = () => ({ type: GET_POSES });
export const asyncGetUser = () => ({ type: GET_USER });

export const removeFromUser = (poseId, listName) => ({ type: DUMP_POSE, poseId, listName });
export const addToUser = (poseId, listName) => ({ type: COLLECT_POSE, poseId, listName });

export const setDifficulty = (difficulty, currentSlide) => ({
  type: FILTER_DIFFICULTY,
  difficulty,
  currentSlide,
});
export const filterByName = name => ({
  type: FILTER_BY_NAME,
  name,
});
export const setTag = (tag, currentSlide) => ({
  type: SET_TAG, tag, currentSlide,
});
export const logOut = () => ({ type: LOG_OUT });

export const setSlide = currentSlide => ({
  type: SET_SLIDE_INDEX,
  currentSlide,
});
