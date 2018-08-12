import React from 'react';
import Navigation from '../Navigation/Navigation';
import SwipeUI from './SwipeUI';
import LoadIf from '../LoadIf';
import GalleryIsLoading from './Loading';
import { SwipeControllerWrapper } from './style';

export default class GalleryControl extends React.Component {
  swipe = React.createRef();

  next = () => this.swipe.next();

  prev = () => this.swipe.prev();

  render = () => {
    const {
      setSlide, update, poses, children,
    } = this.props;
    return (
      <SwipeControllerWrapper>
        <GalleryIsLoading load={poses}>
          <SwipeUI
            reactSwipe={(swipe) => { this.swipe = swipe; }}
            updater={setSlide}
            key={update}
          >
            {children}
          </SwipeUI>
        </GalleryIsLoading>
        <LoadIf.Desktop>
          <Navigation
            next={this.next}
            prev={this.prev}
          />
        </LoadIf.Desktop>
      </SwipeControllerWrapper>

    );
  }
}