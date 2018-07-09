import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import {
  Desktop,
  PhonePortrait,
  PhoneLandscape,
} from '../../../UI/DeviceRules';


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
export const HeartState = styled(Icon.Group)`
	display: flex;
	width: 45px;
	height: 45px;
	cursor: pointer;
	font-size: 3em;
`;
