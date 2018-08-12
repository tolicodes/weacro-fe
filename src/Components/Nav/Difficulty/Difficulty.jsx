import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import List from './List';

const colors = {
  All: null, Easy: 'green', Intermediate: 'blue', Hard: 'red', Expert: 'purple',
};

const DifficultyMenu = ({ difficulty }) => (
  <Dropdown
    item
    icon={(
      <Icon
        name="filter"
        size="big"
        color={colors[difficulty]}
      />
)}
  >
    <Dropdown.Menu>
      <List />
    </Dropdown.Menu>
  </Dropdown>
);

DifficultyMenu.propTypes = {
  difficulty: PropTypes.string.isRequired,
};
export default DifficultyMenu;
