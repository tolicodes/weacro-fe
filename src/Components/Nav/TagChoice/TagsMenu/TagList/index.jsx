import { connect } from 'react-redux';
import { setTag } from '../../../../../store/actions/actions';
import TagList from './TagList';


const mapStateToProps = ({
  view: { tag },
  user: { lists },
}) => ({
  tag,
  userLists: lists && Object.keys(lists),
});

const mapDispatchToProps = {
  showFavorites: () => setTag('favorites', 0),
  showAll: () => setTag('', 0),
};

export default connect(mapStateToProps, mapDispatchToProps)(TagList);
