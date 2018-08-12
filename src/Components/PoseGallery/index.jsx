import { connect } from 'react-redux';
import { setSlide } from '../../store/actions/actions';
import PoseGallery from './PoseGallery';


const mapStateToProps = (
  { view: { name, difficulty, tag } },
) => (
  { reloader: name + difficulty + tag }
);

const mapDispatchToProps = { setSlide };

export default connect(mapStateToProps, mapDispatchToProps)(PoseGallery);
