import produce from 'immer';
import {
  FILL_USER, LOG_OUT, COLLECT_POSE, DUMP_POSE,
} from '../actions/actionTypes';

const initialState = {
  id: null,
  name: null,
  email: null,
  difficulty: '0',
  lists: {},
};
const reducer = (state = initialState, {
  user, listName, poseId, type,
}) => produce(state, (newState) => {
  switch (type) {
    case FILL_USER:
      newState = user;
      break;
    case LOG_OUT:
      newState = initialState;
      break;
    case COLLECT_POSE:
      if (newState.lists[listName]) {
        newState.lists[listName].push(poseId);
      } else newState.lists[listName] = [poseId];
      break;
    case DUMP_POSE:
      newState.lists[listName].splice(newState.lists[listName].indexOf(poseId), 1);
      break;
    default:
  }
});
export default reducer;
