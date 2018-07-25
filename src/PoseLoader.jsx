import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { storeUser, storePoses } from './store/actions/actions';
import api from './API';
import LoadDisplay from './Components/UI/Loader';
import PoseGallery from './Components/PoseGallery';

const fetchData = async (UserLogin, StorePoses) => {
  try {
    UserLogin(await api.user.get(false));
    StorePoses(await api.poses.get(false));
  } catch (e) {
    console.error(e);
  }
};
class PoseLoader extends Component {
  posesLoaded = () => (this.props.poses && this.props.poses.length) ? true : false;
  componentDidMount = () => {
    if (this.posesLoaded()) return;
    fetchData(this.props.UserLogin, this.props.StorePoses);
  }
  render = () =>  {
    if (!this.posesLoaded()) return <LoadDisplay />;
    return <PoseGallery match={this.props.match} />;
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
