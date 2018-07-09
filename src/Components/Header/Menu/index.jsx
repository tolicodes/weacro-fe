import React, { Fragment } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { LOG_OUT } from '../../../store/actions';
import DifficultyMenu from './Difficulty';
import Options from './OptionsMenu/OptionsMenu';
import ProfileMenu from './ProfileMenu';
import SearchBar from './SearchBar';
import TagChoice from './TagChoice';

function HeaderMenu({ userName, difficulty }) {
  return (
    <Fragment>
      <DifficultyMenu difficultySetting={difficulty} />
      <TagChoice loggedIn={userName} />
      <SearchBar />
      <Menu.Menu position="right">
        <ProfileMenu />
        <Options isUser={userName} />
      </Menu.Menu>
    </Fragment>
  );
}

const mapStateToProps = ({ view: { difficulty }, user: { name: userName } }) => ({ difficulty, userName });
const mapDispatchToProps = dispatch => ({
  UserLogout: () => dispatch({
    type: LOG_OUT,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);
