import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { storeUser, storePoses } from './store/actions/actions';
import api from './API';
import LoadDisplay from './Components/UI/Loader';
import PoseGallery from './Components/PoseGallery/PoseGallery';

async function fetchData(UserLogin, StorePoses) {
  try {
    UserLogin(await api.user.get(false));
    StorePoses(await api.poses.get(false));
  } catch (e) {
    console.error(e);
  }
}


function PoseLoader({
  UserLogin, StorePoses, match, poses,
}) {
  if (!poses) {
    fetchData(UserLogin, StorePoses);
    return <LoadDisplay />;
  }
  return <PoseGallery match={match} />;
}

PoseLoader.propTypes = {
  poses: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.bool]),
  UserLogin: PropTypes.func.isRequired,
  StorePoses: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};
PoseLoader.defaultProps = {
  poses: false,
};


const mapStateToProps = ({ pose: { poses } }) => ({ poses });
const mapDispatchToProps = dispatch => ({
  UserLogin: user => dispatch(storeUser(user)),
  StorePoses: poses => dispatch(storePoses(poses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PoseLoader);
