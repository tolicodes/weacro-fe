
import { connect } from 'react-redux';
import Nav from './Nav';

const mapStateToProps = (
  {
    user: { name: userName },
    router: { location: { pathname } },
  },
) => (
  { difficulty, userName, pathname }
);


export default connect(mapStateToProps)(Nav);
