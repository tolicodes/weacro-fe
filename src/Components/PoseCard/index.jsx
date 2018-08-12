import PropTypes from 'prop-types';
import React from 'react';
import LoadIf from 'Components/UI/LoadIf';
import Heart from './Heart';
import {
  TextDetails, Details, Img, TextArea, Title, Subtitle,
} from './style';

class PoseCard extends React.PureComponent {
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
            <TextDetails>
              <TextArea>
                <Title>
                  {name}
                </Title>
                <Subtitle>
                  {subtitle}
                </Subtitle>
              </TextArea>
            </TextDetails>
          </Details>
        </LoadIf.notLandscape>
      </React.Fragment>
    );
  }
}


PoseCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  poseID: PropTypes.number.isRequired,
};

export default PoseCard;
