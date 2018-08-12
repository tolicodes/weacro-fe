import { connect } from 'react-redux';
import { setSlide } from 'store/actions/actions';
import Controller from './Controller';


const mapStateToProps = ({
  view: { name, difficulty, tag },
  pose: { poses },
}) => ({
  update: name + difficulty + tag,
  poses,
});

const mapDispatchToProps = { setSlide };

export default connect(mapStateToProps, mapDispatchToProps)(Controller);
