import React, { Fragment } from 'react';
import styled from 'styled-components';
import LoadIf from '../../UI/LoadIf';
import PoseText from './PoseParts/Text';
import PictureArea from './PictureArea';
import { isClose } from '../helpers';
import { PhoneLandscape } from '../../UI/DeviceRules';

const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	align-content: center;
	justify-content: space-evenly;
	width: 100%;
	background-color: white;
	float: left;
	position: relative;
	text-align: center;
	height: 90vh;

	@media ${PhoneLandscape}{
		height:100vh;
		background-color:black;
	}
`;

export default function PoseCard({
  pose: {
    img, difficulty, id, name,
  },
  difficultySetting,
  filteredPoses,
  currentSlide,
  cardIndex,
}) {
  return (
    <Card key={img}>
      {!isClose(2, filteredPoses, cardIndex, currentSlide) ? (
        <div />
      ) : (
        <Fragment>
          <PictureArea img={img} poseID={id} />
          <LoadIf.notPortrait>
            <PoseText
              poseTitle={name}
              subtitle={`${
                difficultySetting === 'All' ? `Difficulty: ${difficulty}` : ''
              }`}
            />
          </LoadIf.notPortrait>
        </Fragment>
      )}
    </Card>
  );
}
