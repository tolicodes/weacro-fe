import React from 'react';
import { Menu } from 'semantic-ui-react';

export default ({ difficultySetting, set }) => {
  const difficulties = ['All', 'Easy', 'Intermediate', 'Hard', 'Expert'];
  return difficulties.map(difficulty => (
    <Menu.Item
      key={difficulty}
      name={difficulty}
      active={difficultySetting === difficulty}
      onClick={() => set(difficulty, 0)}
    />
  ));
};
