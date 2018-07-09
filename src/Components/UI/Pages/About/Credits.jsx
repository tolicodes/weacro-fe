import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  Desktop,
  PhoneLandscape,
  PhonePortrait,
  Orange,
} from '../../DeviceRules';

const Credit = styled.div`
  display: flex;

  padding: 10px;
`;

const Image = styled.img`
  @media ${Desktop} {
    height: 100%;
    width: 100px;
    border-radius: 5px;
  }
  @media ${PhonePortrait}{
    width: 40vw;
    height: auto;
    margin-top: 5vh;
  }
  @media ${PhoneLandscape}{
    height: 100%;
    width: 158px;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px;
`;

const CreditText = styled.p`
  font-family: Roboto Condensed;
`;

const Title = styled.h2`
  color: ${Orange};
`;

const Credits = ({
  person: {
    name, img, text, profileSite,
  },
}) => (
  <Credit>
    <Image src={img} alt="loading..." />
    <TextBox>
      <Title href={profileSite}>
        {name}
      </Title>
      <CreditText>
        {text}
      </CreditText>
    </TextBox>
  </Credit>
);

Credits.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    profileSite: PropTypes.string.isRequired,
  }).isRequired,
};

export default Credits;
