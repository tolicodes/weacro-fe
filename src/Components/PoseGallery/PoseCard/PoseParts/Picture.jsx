import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import LoadIf from '../../../UI/LoadIf';
import HeartArea from '../Heart';
import { Img } from './style';


class PosePicture extends PureComponent {
  state = { ready: false }

  setReady = () => this.setState({ ready: true });

  render = () => {
    const { props: { img, poseID, userID }, state: { ready }, setReady } = this;

    return (
      <div style={{ position: 'relative' }}>
        <Img onLoad={setReady} src={img} />
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
