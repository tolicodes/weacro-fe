import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { storeUser, storePoses } from './store/actions/actions';
import api from './API';
import LoadDisplay from './Components/UI/Loader';
import PoseGallery from './Components/PoseGallery';

class PoseLoader extends PureComponent {

  fetchData = async (UserLogin, StorePoses) => {
    try {
      UserLogin(await api.user.get(false));
      StorePoses(await api.poses.get(false));
    } catch (e) {
      console.error(e);
    }
  };

  posesNotLoaded = () => (!this.props.poses || !this.props.poses.length) ? true : false;

  render = () =>  {
    const { posesNotLoaded, props: { UserLogin, StorePoses, match }, fetchData } = this;
    if (posesNotLoaded()) {
      fetchData(UserLogin, StorePoses);
      return <LoadDisplay />;
    }
    return <PoseGallery match={match} />;
  }
}

PoseLoader.propTypes = {
  poses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ pose: { poses } }) => ({ poses });
const mapDispatchToProps = dispatch => ({
  UserLogin: user => dispatch(storeUser(user)),
  StorePoses: pose => dispatch(storePoses(pose)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PoseLoader);
