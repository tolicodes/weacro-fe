import React, { Fragment } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { LOG_OUT } from '../../store/actions/actionTypes';
import DifficultyMenu from './Difficulty/Difficulty';
import Options from './OptionsMenu/OptionsMenu';
import ProfileMenu from './ProfileMenu/ProfileMenu';
import Search from './Search/Search';
import TagChoice from './TagChoice';
import BackButton from '../UI/BackButton/BackButton';

function Nav({ pathname, ...rest }) {
  return (
    <Fragment>
      <LeftMenu isAboutPath={pathname === '/about'} {...rest} />
      <RightMenu {...rest} />
    </Fragment>
  );
}

function LeftMenu({ isAboutPath, difficulty, userName }) {
  if (isAboutPath) return <BackButton />;
  return (
    <Fragment>
      <DifficultyMenu difficultySetting={difficulty} />
      <TagChoice loggedIn={userName} />
      <Search />
    </Fragment>
  );
}

function RightMenu({ userName }) {
  return (
    <Menu.Menu position="right">
      <ProfileMenu />
      <Options isUser={userName} />
    </Menu.Menu>
  );
}

const mapStateToProps = ({ view: { difficulty }, user: { name: userName }, router: { location: { pathname } } }) => ({ difficulty, userName, pathname });
const mapDispatchToProps = dispatch => ({
  UserLogout: () => dispatch({
    type: LOG_OUT,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
