import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import ImageLoader from 'react-load-image';
import Loading from '../../../UI/Loader';
import LoadIf from '../../../UI/LoadIf';
import HeartArea from '../Heart';
import { Img } from './style';


function LoadImage({ setReady, img  }) {
  return (
    <ImageLoader src={img}>
      <Img onLoad={setReady} />
      <p>couldn't load</p>
      <Loading indeterminate />
    </ImageLoader>
  );
}

class PosePicture extends PureComponent {
  state = { ready: false }

  setReady = () => this.setState({ ready: true });

  render = () => {
    const { props: { img, poseID, userID }, state: { ready }, setReady } = this;

    return (
      <div style={{ position: 'relative' }}>
        <LoadImage setReady={setReady} img={img} />
        <LoadIf.Desktop>
          { ready && <HeartArea poseID={poseID} userID={userID} />}
        </LoadIf.Desktop>
      </div>
    );
  }
}

PosePicture.defaultProps = {
  userID: undefined,
};

PosePicture.propTypes = {
  img: PropTypes.string.isRequired,
  poseID: PropTypes.number.isRequired,
  userID: PropTypes.number,
};

export default PosePicture;
