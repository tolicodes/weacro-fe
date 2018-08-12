
import { connect } from 'react-redux';
import Nav from './Nav';

const mapStateToProps = ({
  router: { location: { pathname } },
}) => (
  { pathname }
);


export default connect(mapStateToProps)(Nav);
