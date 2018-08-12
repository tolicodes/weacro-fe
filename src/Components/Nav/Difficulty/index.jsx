import { connect } from 'react-redux';
import Difficulty from './Difficulty';

const mapStateToProps = (
  { view: { difficulty } },
) => (
  { difficulty }
);

export default connect(mapStateToProps)(Difficulty);
