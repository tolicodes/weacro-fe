import React from 'react';
import LoadIf from 'Components/UI/LoadIf';
import { Header } from './styled';

const HeaderUI = ({ children }) => (
  <header>
    <LoadIf.Desktop>
      <Header>
        {children}
      </Header>
    </LoadIf.Desktop>
    <LoadIf.Portrait>
      <Header borderless>
        {children}
      </Header>
    </LoadIf.Portrait>
  </header>
);

export default HeaderUI;
