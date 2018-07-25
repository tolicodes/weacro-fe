import styled from 'styled-components';
import { PhoneLandscape, PhonePortrait } from '../../UI/DeviceRules';


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