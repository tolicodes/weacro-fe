import React from 'react';
import { Dropdown, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import DifficultyList from './DifficultyList';

const colors = {
  All: null, Easy: 'green', Intermediate: 'blue', Hard: 'red', Expert: 'purple',
};

function DifficultyMenu({ difficultySetting }) {
  return (
    <Dropdown
      item
      icon={(
        <Icon
          name="filter"
          size="big"
          color={colors[difficultySetting]}
        />
)}
    >
      <Dropdown.Menu>
        <DifficultyList />
      </Dropdown.Menu>
    </Dropdown>
  );
}

DifficultyMenu.propTypes = {
  difficultySetting: PropTypes.string.isRequired,
};
export default DifficultyMenu;
