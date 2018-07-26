import styled from 'styled-components';
import { Icon, Modal } from 'semantic-ui-react';
import {
  Desktop,
  PhonePortrait,
  PhoneLandscape,
} from '../../../UI/DeviceRules';

const heartStyle = {
  fontSize: '3em', display: 'flex', width: '45px', height: '45', cursor: 'pointer', alignItems: 'center',
};


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
export const HeartIcon = styled(Icon).attrs({
  style: heartStyle,
  color: 'red',
})`
	width: 45px;
	height: 45px;
	cursor: pointer;
    font-size: 3em;
    position: absolute;
    top: 90%;
    left: 3%;
`;
export const PopupModal = styled(Modal).attrs({
  size: 'mini',
})`
    height: 350px;
    padding: 20px;
  `;
