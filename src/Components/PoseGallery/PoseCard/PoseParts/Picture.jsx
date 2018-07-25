import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import ImageLoader from 'react-load-image';
import Loading from '../../../UI/Loader';
import LoadIf from '../../../UI/LoadIf';
import HeartArea from '../Heart';
import { Img } from './style';


class PosePicture extends PureComponent {
  state = { ready: false }

  setReady = () => this.setState({ ready: true })

  render = () => {
    const { img, poseID, userID } = this.props;

    return (
      <div style={{position:'relative'}} >
        <ImageLoader src={img} >
          <Img onLoad={this.setReady} />
          <div>Error!</div>
          <Loading indeterminate/>
        </ImageLoader>
        <LoadIf.Desktop>
          { this.state.ready && <HeartArea poseID={poseID} userID={userID} />}
        </LoadIf.Desktop>
      </div>
    )
  }
}

PosePicture.propTypes = {
  img: PropTypes.string.isRequired,
};

export default PosePicture;
