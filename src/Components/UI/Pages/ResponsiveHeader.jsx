import React from 'react';
import { Header } from './styled';
import LoadIf from '../LoadIf';

export default ({ children }) => (
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
