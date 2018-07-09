import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { storeUser, storePoses } from './store/actions/actions';
import api from './API';
import LoadDisplay from './Components/UI/Loader';

const fetchData = async (UserLogin, StorePoses) => {
	console.log
	try {
		UserLogin(await api.user.get(true));
		StorePoses(await api.poses.get(true));
	} catch (e) {
		console.error(e);
	} 
}
class PoseLoader extends Component {
  componentDidMount() {
		const { UserLogin, StorePoses } = this.props;
    fetchData(UserLogin, StorePoses);
	}
	
	render() {
    const { poses, children } = this.props;
    if (!poses || !poses.length) {
      return <LoadDisplay />;
    }
    return (
      <div>
        {children}
      </div>
    );
  }
}

PoseLoader.propTypes = {
  poses: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({ pose: { poses } }) => ({ poses });
const mapDispatchToProps = dispatch => ({
  UserLogin: user => dispatch(storeUser(user)),
  StorePoses: pose => dispatch(storePoses(pose)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PoseLoader);
