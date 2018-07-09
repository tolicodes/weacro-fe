import React from 'react';
import { connect } from 'react-redux';
import HeaderMenu from './Menu';
import LoadIf from '../UI/LoadIf';
import { Header } from './styled';


const HeaderComponent = ({ pathname }) => {
  console.log(pathname);
  return (
    <header>
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
    </header>
  );
};

export default connect(
  ({ router }) => ({ pathname: router.location.pathname }),
)(HeaderComponent);
