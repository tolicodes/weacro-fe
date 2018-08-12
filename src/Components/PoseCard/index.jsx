import PropTypes from 'prop-types';
import React from 'react';
import LoadIf from 'Components/UI/LoadIf';
import Heart from './Heart';
import PoseText from './PoseParts/Text/Text';
import { Details, Img } from './style';

class PoseCard extends React.Component {
  state = { ready: false }

  setReady = () => this.setState({ ready: true });

  displayImage = () => {
    const {
      setReady,
      state: { ready },
      props: { img, poseID, isClose },
    } = this;
    if (!isClose) return null;
    return (
      <div style={{ position: 'relative' }}>
        <Img onLoad={setReady} src={img} />

        <LoadIf.Desktop>
          { ready && <Heart poseID={poseID} />}
        </LoadIf.Desktop>
      </div>
    );
  }

  render = () => {
    const { name, subtitle, poseID } = this.props;
    return (
      <React.Fragment>
        {this.displayImage()}
        <LoadIf.notLandscape>
          <Details>
            <LoadIf.Portrait>
              <Heart poseID={poseID} />
            </LoadIf.Portrait>
            <PoseText poseTitle={name} subtitle={subtitle} />
          </Details>
        </LoadIf.notLandscape>
      </React.Fragment>
    );
  }
}
PoseCard.defaultProps = {
  userID: undefined,
};

PoseCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  poseID: PropTypes.number.isRequired,
  userID: PropTypes.number,
};

export default PoseCard;
