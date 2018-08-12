import { connect } from 'react-redux';
import { setTag } from '../../../../store/actions/actions';
import TagList from './TagList';


const mapStateToProps = (state) => {
  const { view: { tag }, user: { lists } } = state;
  const userLists = lists && Object.keys(lists);
  return { tag, userLists };
};
const mapDispatchToProps = { setTag };

export default connect(mapStateToProps, mapDispatchToProps)(TagList);
