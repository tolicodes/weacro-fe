import React, { Fragment } from 'react';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';
import HeaderMenu from './Menu';
import LoadIf from '../UI/LoadIf';

export default () => (
  <Fragment>
    <LoadIf.Desktop>
      <Header>
        <HeaderMenu />
      </Header>
    </LoadIf.Desktop>
    <LoadIf.Portrait>
      <Header borderless>
        <HeaderMenu />
      </Header>
    </LoadIf.Portrait>
  </Fragment>
);

const Header = styled(Menu).attrs({
  size: 'huge',
  fluid: true,
})`
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: center;
`;
