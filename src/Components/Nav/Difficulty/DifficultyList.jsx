import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { setDifficulty } from '../../../store/actions/actions';

const DifficultyList = ({ difficultySetting, set }) => {
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

const mapStateToProps = ({ view: { difficulty } }) => ({ difficultySetting: difficulty });
const mapDispatchToProps = { set: setDifficulty };
export default connect(mapStateToProps, mapDispatchToProps)(DifficultyList);
