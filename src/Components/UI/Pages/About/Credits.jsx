import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {
  PhonePortrait,
  Orange,
} from '../../DeviceRules';

const Credit = styled.div`
  display: flex;
  padding-bottom: 10px;
  align-items: flex-start;
  @media ${PhonePortrait} {
    flex-direction: column
  }
`;

const Image = styled.img`
  height: auto;
  border-radius: 5px;
  flex: 1;  
  max-width: 100%;

`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px;
  flex: 5;
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
