import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';

export const Header = styled(Menu).attrs({
  size: 'huge',
  fluid: true,
  as: 'nav',
})`
    width: 100vw;
    height: 8vh;
    display: flex;
    justify-content: center;
  `;
