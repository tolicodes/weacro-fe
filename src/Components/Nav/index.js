
import { connect } from 'react-redux';
import Nav from './Nav';

import { LOG_OUT } from '../../store/actions/actionTypes';

const mapStateToProps = (
  {
    view:
    {
      difficulty,
    },
    user:
    {
      name: userName,
    },
    router:
    {
      location: { pathname },
    },
  },
) => (
  {
    difficulty,
    userName,
    pathname,
  }
);

const mapDispatchToProps = dispatch => (
  {
    UserLogout: () => dispatch({
      type: LOG_OUT,
    }),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
