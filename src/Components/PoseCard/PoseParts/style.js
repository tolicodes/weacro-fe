import styled from 'styled-components';
import {
  Desktop,
  PhonePortrait,
  PhoneLandscape,
} from 'Components/UI/DeviceRules';


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
