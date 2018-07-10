import React from 'react';
import { connect } from 'react-redux';
import HeaderMenu from './Menu';
import LoadIf from '../UI/LoadIf';
import { Header } from './styled';


const HeaderComponent = ({ pathname }) => {
  const isAboutPath = pathname.includes('about');
  return (
    <header>
      <LoadIf.Desktop>
        <Header>
          <HeaderMenu isAboutPath={isAboutPath} />
        </Header>
      </LoadIf.Desktop>
      <LoadIf.Portrait>
        <Header borderless>
          <HeaderMenu isAboutPath={isAboutPath} />
        </Header>
      </LoadIf.Portrait>
    </header>
  );
};

export default connect(
  ({ router }) => ({ pathname: router.location.pathname }),
)(HeaderComponent);
