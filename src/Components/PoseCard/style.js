import styled from 'styled-components';
import {
  Desktop,
  PhonePortrait,
  PhoneLandscape,
} from 'UI/DeviceRules';

export const Card = styled.div`
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

export const Details = styled.div`
  display: flex;
`;
export const Img = styled.img`
    @media ${PhonePortrait}{
        max-height: 60vh;
        width: auto;
        max-width: 100vw;
        border-radius: 5px;
        min-width: auto;
    }
    @media ${PhoneLandscape}{
        height: 101vh;
        width: auto;
        max-width: 100vw;
        border-radius: 5px;
}
    @media ${Desktop}{
        height: 50vw;
        max-height: 70vh;
        width: auto;
        border-radius: 5px;
    }
`;
export const HeartArea = styled.div`
display: flex;
width: 70px;
height: 70px;
padding-left: 10px;
`;
export const TextDetails = styled.div`
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
