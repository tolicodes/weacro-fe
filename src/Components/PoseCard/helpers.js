import api from 'API';

export const removeFromFavorites = (poseID, userID, removeFromUserList) => {
  api.list.remove(poseID, userID, 'Favorites');
  removeFromUserList(poseID, 'Favorites');
};
export const addToFavorites = (poseID, userID, addToUserList) => {
  api.list.add(poseID, userID, 'Favorites');
  addToUserList(poseID, 'Favorites');
};
