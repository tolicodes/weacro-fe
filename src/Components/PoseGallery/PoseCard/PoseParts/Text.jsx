import React from 'react';
import { Desktop, PhonePortrait } from '../../../UI/DeviceRules';
import styled from 'styled-components'


export default ({ poseTitle, subtitle }) => (
		<Details>
			<TextArea>
				<Title>{poseTitle}</Title>
				<Subtitle>{subtitle}</Subtitle>
			</TextArea>
		</Details>
);


const Details = styled.div`
  width: 100%;
  `;
const TextArea = styled.div``;
const Title = styled.h1`
  margin-right: 45px;
  font-family: Special Elite;

  @media ${Desktop}{
    margin-top: 2vh;
  }
`;
const Subtitle = styled.p`
  margin-right: 45px;
  font-family: Roboto Condensed;
  @media ${PhonePortrait}{
    color: black;
    margin-top: 1vh;
  }
  @media ${Desktop}{
    font-size: 2vh;
  }
`;