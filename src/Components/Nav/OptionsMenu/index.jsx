import { connect } from 'react-redux';
import OptionsMenu from './OptionsMenu';

const mapStateToProps = (
  { user: { name } },
) => (
  { name }
);

export default connect(mapStateToProps)(OptionsMenu);
