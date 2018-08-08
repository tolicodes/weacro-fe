import { connect } from 'react-redux';
import { SET_SLIDE_INDEX } from '../../store/actions/actionTypes';
import PoseGallery from './PoseGallery';


const mapStateToProps = (
  {
    view: { name: filterToPoseName, difficulty, tag },
    router: { location: { pathname } },

  },
) => (
  {
    key: filterToPoseName + difficulty + tag,
    addressSearchTerm:
        pathname.includes('/pose')
          ? pathname.split('/')[2]
          : false,
  }
);

const mapDispatchToProps = dispatch => ({
  setSlide: currentSlide => dispatch({
    type: SET_SLIDE_INDEX,
    currentSlide,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(PoseGallery);
