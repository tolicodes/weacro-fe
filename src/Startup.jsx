import { connect } from 'react-redux';
import { asyncGetPoses, asyncGetUser } from 'store/actions/actions';


const Startup = ({ children, getPoses, getUser }) => {
  getPoses();
  getUser();
  return children;
};

const mapDispatchToProps = {
  getPoses: asyncGetPoses,
  getUser: asyncGetUser,
};

export default connect(null, mapDispatchToProps)(Startup);
