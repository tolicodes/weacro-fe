import styled from 'styled-components';
import { Icon, Modal } from 'semantic-ui-react';

export const HeartArea = styled.div`
display: flex;
width: 70px;
height: 70px;
padding-left: 10px;
`;

export const HeartIcon = styled(Icon).attrs({
  style: {
    fontSize: '3em',
    display: 'flex',
    width: '45px',
    height: '45',
    cursor: 'pointer',
    alignItems: 'center',
  },
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
