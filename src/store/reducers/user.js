import * as actionTypes from '../actions/actionTypes';
import {
  updateObject, updateList, addToInnerList, makeNewList,
} from '../utility';

const initialState = {
  id: null,
  name: null,
  email: null,
  difficulty: '0',
  lists: {},
};
export default function reducer(state = initialState, action) {
  let setState;
  let listOfTags = {};
  const {
    user, listName, poseId, type,
  } = action;
  const {
    FILL_USER, LOG_OUT, COLLECT_POSE, DUMP_POSE,
  } = actionTypes;

  switch (type) {
    case FILL_USER:
      setState = user;
      return updateObject(state, setState);
    case LOG_OUT:
      setState = initialState;
      return updateObject(state, setState);
    case COLLECT_POSE:
      listOfTags = state.lists[listName]
        ? addToInnerList(state.lists[listName], listName, poseId)
        : makeNewList(listName, poseId);

      return updateList(state, state.lists, listOfTags);
    case DUMP_POSE:
      listOfTags[listName] = [...state.lists[listName]];
      listOfTags[listName].splice(listOfTags[listName].indexOf(poseId), 1);
      return updateList(state, state.lists, listOfTags);
    default:
  }
  return state;
}
