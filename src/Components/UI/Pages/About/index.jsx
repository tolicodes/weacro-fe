import React from 'react';
import Credits from './Credits';
import Team from './Text';
import {
  AboutPage, Participants, TitleArea, PageTitle,
} from './style';

export default () => (
  <AboutPage>
    <TitleArea>
      <PageTitle>
        About Us
      </PageTitle>
    </TitleArea>
    <Participants>
      <Credits Team={Team} />
    </Participants>
  </AboutPage>
);
