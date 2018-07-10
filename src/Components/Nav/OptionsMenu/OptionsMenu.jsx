import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ProfileMenu from '../ProfileMenu';
import { UserIcon } from './styled';
import { HomeButton, AboutUs } from './Buttons';

function Options({ isUser }) {
  return (
    <Fragment>
      <Dropdown
        item
        icon={isUser ? <UserIcon isUser /> : <UserIcon />}
      >
        <Dropdown.Menu>
          <Route render={HomeButton} />
          <Route render={AboutUs} />
          <ProfileMenu />
        </Dropdown.Menu>
      </Dropdown>
    </Fragment>
  );
}

Options.defaultProps = {
  isUser: false,
};

Options.propTypes = {
  isUser: PropTypes.string,
};

export default Options;
