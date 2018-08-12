import { connect } from 'react-redux';
import { setDifficulty } from '../../../../store/actions/actions';
import List from './List';

const mapStateToProps = ({ view: { difficulty } }) => ({ difficultySetting: difficulty });
const mapDispatchToProps = { set: setDifficulty };
export default connect(mapStateToProps, mapDispatchToProps)(List);
