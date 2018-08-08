import React from 'react';
import styled from 'styled-components';
import Navigation from '../UI/Navigation/Navigation';
import SwipeUI from '../UI/SwipeUI';
import LoadIf from '../UI/LoadIf';
import PosesFilter from '../PoseCard';
import PosesAreLoaded from '../UI/PoseLoader';

export default class PoseGallery extends React.Component {
  swipeNode = React.createRef();

  next = () => this.swipeNode.next();

  prev = () => this.swipeNode.prev();

  render = () => {
    const { setSlide, reloader } = this.props;
    return (
      <PoseGalleryArea>
        <PosesAreLoaded>
          <SwipeUI
            reactSwipe={(reactSwipe) => { this.swipeNode = reactSwipe; }}
            updater={setSlide}
            key={reloader}
          >
            <PosesFilter />
          </SwipeUI>
        </PosesAreLoaded>
        <LoadIf.Desktop>
          <Navigation
            next={this.next}
            prev={this.prev}
          />
        </LoadIf.Desktop>
      </PoseGalleryArea>

    );
  }
}


const PoseGalleryArea = styled.div`
  height: 92vh;
`;
