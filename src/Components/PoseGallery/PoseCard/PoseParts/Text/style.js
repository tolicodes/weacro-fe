import styled from 'styled-components';
import { Desktop, PhonePortrait } from '../../../../UI/DeviceRules';

export const Details = styled.div`
  width: 100%;
  `;
export const TextArea = styled.div``;
export const Title = styled.h1`
  font-family: Special Elite;

  @media ${Desktop}{
    margin-top: 2vh;
  }
`;
export const Subtitle = styled.p`
  font-family: Roboto Condensed;
  @media ${PhonePortrait}{
    color: black;
    margin-top: 1vh;
  }
  @media ${Desktop}{
    font-size: 2vh;
  }
`;
