import api from '../../API';

const isFavorite = (poseId, lists) => lists && lists.Favorites && lists.Favorites.indexOf(poseId) !== -1;

const simplify = word => word.toLowerCase().replace('-', ' ');

export const checks = (singlePose, filterByPoseName, pose, filteredView, lists, difficultySetting) => {
  if (singlePose || filterByPoseName) {
    return simplify(pose.name).includes(simplify(filterByPoseName));
  }
  if (filteredView && !isFavorite(pose.id, lists)) {
    return false;
  }

  if (difficultySetting === 'All' || difficultySetting === pose.difficulty) {
    return true;
  }
  return false;
};

export const removeFromFavorites = (poseID, userID, removeFromUserList) => {
  api.list.remove(poseID, userID, 'Favorites');
  removeFromUserList(poseID, 'Favorites');
};
export const addToFavorites = (poseID, userID, addToUserList) => {
  api.list.add(poseID, userID, 'Favorites');
  addToUserList(poseID, 'Favorites');
};


export const isClose = (preload, filteredPoses, cardIndex, currentSlide) => {
  const distance = Math.abs(cardIndex - currentSlide);
  return distance < preload || distance > filteredPoses.length - preload;
};
