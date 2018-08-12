import styled from 'styled-components';
import { Icon, Modal } from 'semantic-ui-react';


const heartStyle = {
  fontSize: '3em', display: 'flex', width: '45px', height: '45', cursor: 'pointer', alignItems: 'center',
};


export const HeartIcon = styled(Icon).attrs({
  style: heartStyle,
  color: 'red',
})`
width: 45px;
height: 45px;
cursor: pointer;
font-size: 3em;
position: relative;
top: -60px;
left: 15px;
`;
export const PopupModal = styled(Modal).attrs({
  size: 'mini',
})`
    height: 350px;
    padding: 20px;
  `;
