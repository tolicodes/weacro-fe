import { connect } from 'react-redux';
import Options from './Options';

const mapStateToProps = (
  { user: { name } },
) => (
  { name }
);

export default connect(mapStateToProps)(Options);
