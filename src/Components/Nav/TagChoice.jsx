import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, TagsIcon } from './styles';
import TagMenu from './Tags/Tags';

function TagChoice({ loggedIn }) {
  if (loggedIn) { return <TagMenu />; }
  return (
    <MenuItem>
      <TagsIcon />
    </MenuItem>
  );
}

TagChoice.defaultProps = {
  loggedIn: false,
};

TagChoice.propTypes = {
  loggedIn: PropTypes.bool,
};
export default TagChoice;
