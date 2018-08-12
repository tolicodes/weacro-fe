import React from 'react';
import Navigation from '../UI/Navigation/Navigation';
import SwipeUI from '../UI/SwipeUI';
import LoadIf from '../UI/LoadIf';
import MapPoses from '../MapPoses';
import PosesAreLoaded from '../UI/PoseLoader';
import { PoseGalleryArea } from './style';

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
            <MapPoses />
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
