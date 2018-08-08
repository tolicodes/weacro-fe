import React from 'react';
import styled from 'styled-components';
import Navigation from '../UI/Navigation/Navigation';
import SwipeUI from '../UI/SwipeUI';
import LoadIf from '../UI/LoadIf';
import PosesFilter from './PoseFilter';
import Loading from '../UI/PoseLoader';

export default class PoseGallery extends React.PureComponent {
  swipeNode = React.createRef();

  next = () => this.swipeNode.next();

  prev = () => this.swipeNode.prev();

  render = () => {
    const { setSlide, addressSearchTerm, key } = this.props;
    return (
      <PoseGalleryArea>
        <Loading>
          <SwipeUI
            reactSwipe={(reactSwipe) => { this.swipeNode = reactSwipe; }}
            updater={setSlide}
            key={key}
          >
            <PosesFilter addressSearchTerm={addressSearchTerm} />
          </SwipeUI>
        </Loading>
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
