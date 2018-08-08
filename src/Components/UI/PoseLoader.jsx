import React from 'react';
import { connect } from 'react-redux';

import LoadDisplay from './Loader';


const PoseLoader = ({ poses, children }) => (
  poses
    ? children
    : <LoadDisplay />
);


const mapStateToProps = ({ pose: { poses } }) => ({ poses });

export default connect(mapStateToProps)(PoseLoader);
