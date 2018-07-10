import React from 'react';
import PropTypes from 'prop-types';
import {
  Credit, Image, TextBox, Title, CreditText,
} from './style';

const Credits = ({ Team }) => Team.map(({
  name, img, text, profileSite,
}) => (
  <Credit key={name}>
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
));

Credits.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    profileSite: PropTypes.string.isRequired,
  }).isRequired,
};

export default Credits;
