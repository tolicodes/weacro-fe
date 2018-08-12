import { connect } from 'react-redux';
import { filterByName } from '../../../store/actions/actions';
import Search from './Search';

const mapStateToProps = ({ view: { name } }) => ({ poseSearchTerm: name });
const mapDispatchToProps = { filter: filterByName };

export default connect(mapStateToProps, mapDispatchToProps)(Search);
