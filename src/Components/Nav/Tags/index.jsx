import { connect } from 'react-redux';
import TagMenu from './Tags';

const mapStateToProps = ({ view: { tag }, user: { loggedIn: name } }) => ({ tag, name });

export default connect(mapStateToProps)(TagMenu);
