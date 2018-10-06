import React from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';
import { Desktop, PhonePortrait, PhoneLandscape } from './DeviceRules';


const childrenType = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
};

const PC = ({ children }) => (
  <Media query={Desktop}>
    {children}
  </Media>
);
PC.propTypes = childrenType;

const Portrait = ({ children }) => (
  <Media query={PhonePortrait}>
    {children}
  </Media>
);
Portrait.propTypes = childrenType;

const notLandscape = ({ children }) => (
  <Media query={`not ${PhoneLandscape}`}>
    {children}
  </Media>
);
notLandscape.propTypes = childrenType;

export default {
  Desktop: PC,
  Portrait,
  notLandscape,
};
