import { connect } from 'react-redux';
import CardLoader from './CardLoader';

const mapStateToProps = (
  {
    view: { difficulty, currentSlide },
    user,
  },
) => (
  {
    difficultySetting: difficulty,
    currentSlide,
    user,
  }
);

export default connect(mapStateToProps)(CardLoader);
