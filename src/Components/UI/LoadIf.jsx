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

function PC({ children }) {
  return (
    <Media query={Desktop}>
      {children}
    </Media>
  );
}
PC.propTypes = childrenType;

function Portrait({ children }) {
  return (
    <Media query={PhonePortrait}>
      {children}
    </Media>
  );
}
Portrait.propTypes = childrenType;

function notLandscape({ children }) {
  return (
    <Media query={`not ${PhoneLandscape}`}>
      {children}
    </Media>
  );
}
notLandscape.propTypes = childrenType;

export default {
  Desktop: PC,
  Portrait,
  notLandscape,
};
