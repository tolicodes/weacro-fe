import api from '../../API';

const isFavorite = (poseId, lists) => lists && lists.Favorites && lists.Favorites.indexOf(poseId) !== -1;


export const checks = (single, poseToSearch, pose, filteredView, lists, difficultySetting) => {
  if (single) {
    return pose.name.toLowerCase() === single.replace('-', ' ').toLowerCase();
  }
  if (poseToSearch) {
    const target = pose.name.toLowerCase();
    const aim = poseToSearch.replace('-', ' ').toLowerCase();
    return target.includes(aim);
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
