import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import styled from 'styled-components';
import HeaderMenu from './Menu';
import LoadIf from '../UI/LoadIf';

const Header = styled(Menu).attrs({
  size: 'huge',
  fluid: true,
})`
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: center;
`;

const HeaderComponent = ({ pathname }) => (
  <Fragment>
    {pathname}
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

export default connect(
  ({ router }) => ({ pathname: router.location.pathname }),
)(HeaderComponent);
