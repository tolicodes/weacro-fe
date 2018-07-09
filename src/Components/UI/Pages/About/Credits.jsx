import React from 'react';
import styled from 'styled-components';
import {
  Desktop,
  PhoneLandscape,
  PhonePortrait,
  Orange,
} from "../../DeviceRules";

export default ({ person: {
 name, img, text, profileSite 
} }) => (
  <Credit>
    <Image src={img} alt="loading..." />
    <Text_Box>
      <Title>
        <Link href={profileSite}>
{name}
</Link>
      </Title>
      <Credit_Text>
{text}
</Credit_Text>
    </Text_Box>
  </Credit>
);


const Credit = styled.div`
  display: grid;
  height: 20vh;
  width: 70vw;
  grid-template-columns: 1fr auto 1fr 6fr;
  grid-template-areas: ". img . textbox";
  margin: 2vh 0;
  @media ${PhonePortrait}{
    width: 100%;
    display:flex;
    height:25vh;
    margin: 0 0 6vh 0;
    padding: 0 5px;
  }
  @media ${PhoneLandscape}{
    display: flex;
    height:80%;
    margin: 0 0 1vh 0;
  }

`;
const Image = styled.img`
@media ${Desktop}{
      grid-area: img
      height: 100%
      border-radius: 5px
    }
    @media ${PhonePortrait}{
      width: 40vw
      height: auto
      margin-top: 5vh
    }
    @media ${PhoneLandscape}{
      height: 100%;
      width: 158px;
    }
`;
const Text_Box = styled.div`
  grid-area: textbox;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1vh;
  @media ${PhonePortrait}{
    margin-left: 20px;
  }
  @media ${PhoneLandscape}{
    margin-left: 8vw;
  }
`;
const Credit_Text = styled.p`
  grid-area: text;
  flex-grow: 1;
  margin: 3vh 0;
  font-size: 1.5vh;
  font-family: Roboto Condensed;
  @media ${PhonePortrait}{
    margin: 1vh 0;
    font-size: 0.8rem;
  }
  @media ${PhoneLandscape}{
    font-size:3vh;
  }
`;
const Link = styled.a`
  color: ${Orange};
`;
const Title = styled.h2`
  @media ${PhonePortrait}{
    font-size: 1.5rem;
  }
`;
