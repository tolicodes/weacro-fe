import React from 'react';
import Media from 'react-media';
import { Desktop, PhonePortrait, PhoneLandscape } from './DeviceRules';


const PC = ({ children }) => (
  <Media query={Desktop}>
    {children}
  </Media>
);

const Portrait = ({ children }) => (
  <Media query={PhonePortrait}>
    {children}
  </Media>
);

const notLandscape = ({ children }) => (
  <Media query={`not ${PhoneLandscape}`}>
    {children}
  </Media>
);

export default {
  Desktop: PC,
  Portrait,
  notLandscape,
};
