import styled from 'styled-components';
import {
  Modal, Icon, Button, Menu,
} from 'semantic-ui-react';

export const PopupModal = styled(Modal)`
  height: 350px;
  padding: 20px;
`;
export const LoginIcon = styled(Icon).attrs({
  size: 'large',
  name: 'user circle outline',
})`
  color: #FF7257;
  opacity: 1;
  font-size: 2em;
`;

export const StyledLoginButton = styled(Button).attrs({
  style: {
    height: '4vh',
    width: '10vh',
    margin: 'auto 2vw',
    backgroundColor: '#FF7257',
    color: 'white',
    fontFamily: 'Lato',
    display: 'flex',
    justifyContent: 'center',
  },
})``;
export const MenuItem = styled(Menu.Item)``;
