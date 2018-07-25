import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { UserIcon } from './styled';
import { HomeButton, AboutUs } from './Links';

function Options({ isUser }) {
  return (
    <Fragment>
      <Dropdown item icon={<UserIcon />} >
        <Dropdown.Menu>
          <Route render={HomeButton} />
          <Route render={AboutUs} />
        </Dropdown.Menu>
      </Dropdown>
    </Fragment>
  );
}

Options.defaultProps = {
  isUser: false,
};

Options.propTypes = {
  isUser: PropTypes.bool,
};

export default Options;
