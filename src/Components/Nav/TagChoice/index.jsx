
import { connect } from 'react-redux';
import TagChoice from './TagChoice';

const mapStateToProps = (
  {
    user: { name: userName },
  },
) => (
  { loggedIn: userName }
);


export default connect(mapStateToProps)(TagChoice);
