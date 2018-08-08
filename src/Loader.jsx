import { connect } from 'react-redux';
import { asyncGetPoses, asyncGetUser } from 'store/actions/actions';


const Startup = ({ children, getPoses, getUser }) => {
  getPoses();
  getUser();
  return children;
};

const mapDispatchToProps = dispatch => ({
  getPoses: () => dispatch(asyncGetPoses()),
  getUser: () => dispatch(asyncGetUser()),
});

export default connect(null, mapDispatchToProps)(Startup);
