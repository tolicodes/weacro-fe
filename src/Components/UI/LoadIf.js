import React from 'react';
import Media from 'react-media';
import { Desktop, PhonePortrait, PhoneLandscape } from './DeviceRules';

export default {
  Desktop: ({ children }) => (
    <Media query={Desktop}>
      {children}
    </Media>
  ),
  Portrait: ({ children }) => (
    <Media query={PhonePortrait}>
      {children}
    </Media>
  ),
  notPortrait: ({ children }) => (
    <Media query={`not ${PhoneLandscape}`}>
      {children}
    </Media>
  ),
};
