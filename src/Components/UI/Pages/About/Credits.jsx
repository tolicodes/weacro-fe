import React from 'react';
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


export default Credits;
