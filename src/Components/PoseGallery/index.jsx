import { connect } from 'react-redux';
import { SET_SLIDE_INDEX } from '../../store/actions/actionTypes';
import PoseGallery from './PoseGallery';


const mapStateToProps = (
  { view: { name, difficulty, tag } },
) => (
  { reloader: name + difficulty + tag }
);

const mapDispatchToProps = dispatch => ({
  setSlide: currentSlide => dispatch({
    type: SET_SLIDE_INDEX,
    currentSlide,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(PoseGallery);
