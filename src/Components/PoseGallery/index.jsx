import React from 'react';
import Media from 'react-media';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Navigation from '../UI/Navigation';
import SwipeUI from '../UI/SwipeUI';
import LoadIf from '../UI/LoadIf';
import PosesFilter from './PoseFilter';
import { SET_SLIDE_INDEX } from '../../store/actions';

const PoseGallery = ({
  poses, tag, difficulty, setSlide, match, filterToPoseName,
}) => {
  let swipe = null;
  const next = () => swipe.next();
  const prev = () => swipe.prev();
  const single = match.params ? match.params.singlePose : null;
  return (
    <PoseGalleryArea>
      <SwipeUI
        reactSwipe={reactSwipe => (swipe = reactSwipe)}
        updater={setSlide}
        skip={single}
      >
        <PosesFilter single={single} />
      </SwipeUI>
      <LoadIf.Desktop>
        <div>
          <Navigation
            next={next}
            prev={prev}
            skip={single || filterToPoseName}
          />
        </div>
      </LoadIf.Desktop>
    </PoseGalleryArea>
  );
};
const mapStateToProps = ({ pose: { poses }, view: { tag, difficulty, name: filterToPoseName } }) => ({
  poses, tag, difficulty, filterToPoseName,
});

const mapDispatchToProps = dispatch => ({
  setSlide: currentSlide => dispatch({
    type: SET_SLIDE_INDEX,
    currentSlide,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(PoseGallery);

const PoseGalleryArea = styled.div`
  height: 92vh;
`;
