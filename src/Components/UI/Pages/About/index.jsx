import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import Credit from './Credits';
import { PhonePortrait, PhoneLandscape } from '../../DeviceRules';

const team = [{
  name: 'Yarden Hochman',
  img:
    'https://res.cloudinary.com/dz2nxhscn/image/upload/v1518158450/16832212_1326016857444631_3977183095561215084_n_osizmh.jpg',
  profileSite: 'https://yardenh.herokuapp.com/',
  text:
    'Yarden is a Full Stack Engineer currently looking for opportunities in Colorado or California. His favorite fruit is Mango.',
}];

const AboutPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;

  @media ${PhoneLandscape}{
    height: 100vh;
  }
`;

const Participants = styled.div`
  padding: 10vw;
  padding-top:0;

  @media ${PhonePortrait}{
    padding: 0 3px;
    height: 70vh;
  }
  @media ${PhoneLandscape}{
    height: 80%;
    padding:0;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

const Title = styled.h1`
  font-family: Special Elite;
  text-align: center;

  @media ${PhoneLandscape}{
    margin-top:1vh;
    text-align: center;
    padding-top: 3vh;
    padding-bottom: 0;
  }
`;
const BackButton = styled.div`
  padding-left: 80vw;
`;
const StyledIcon = styled(Icon)`
  cursor: pointer;
`;
const TitleArea = styled.div`
  margin: 10vh 0;
`;

export default () => (
  <AboutPage>
    <BackButton className="back_button">
      <StyledIcon
        name="reply"
        size="huge"
        onClick={() => window.history.back()}
      />
    </BackButton>
    <TitleArea>
      <Title>
        About Us
      </Title>
    </TitleArea>
    <Participants>
      {
        team.map(member => (
          <Credit key={member.name} person={member} />
        ))
      }
    </Participants>
  </AboutPage>
);
