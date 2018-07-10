import styled from 'styled-components';
import {
  PhonePortrait,
  PhoneLandscape,
  Orange,
} from '../../DeviceRules';


export const Credit = styled.div`
  display: flex;
  padding-bottom: 10px;
  align-items: flex-start;
  @media ${PhonePortrait} {
    flex-direction: column
  }
`;

export const Image = styled.img`
  height: auto;
  border-radius: 5px;
  flex: 1;  
  max-width: 100%;

`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px;
  flex: 5;
`;

export const CreditText = styled.p`
  font-family: Roboto Condensed;
`;

export const Title = styled.h2`
  color: ${Orange};
`;

export const AboutPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  font-size: 14px;

  @media ${PhoneLandscape}{
    height: 100vh;
  }
`;
export const Participants = styled.div`
  padding: 10vw;
  padding-top:0;

  @media ${PhonePortrait}{
    padding: 0 3px;
    height: 70vh;
  }
  @media ${PhoneLandscape}{
    height: 80%;
    padding:0;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;
export const PageTitle = styled.h1`
  font-family: Special Elite;
  text-align: center;

  @media ${PhoneLandscape}{
    margin-top:1vh;
    text-align: center;
    padding-top: 3vh;
    padding-bottom: 0;
  }
`;
export const TitleArea = styled.div`
  margin: 10vh 0;
  @media ${PhonePortrait}{
    display: none;
  }
`;
