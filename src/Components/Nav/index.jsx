import React, { Fragment } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { LOG_OUT } from '../../store/actions/actionTypes';
import DifficultyMenu from './Difficulty';
import Options from './OptionsMenu/OptionsMenu';
import ProfileMenu from './ProfileMenu';
import Search from './Search';
import TagChoice from './TagChoice';
import BackButton from '../UI/BackButton';

function LeftMenu({isAboutPath, difficulty, userName}) {
  if (isAboutPath) {
    return (
      <div style={{ width: '20%' }}>
        <BackButton />
      </div>
    );
  } return (
    <Fragment>
      <DifficultyMenu difficultySetting={difficulty} />
      <TagChoice loggedIn={userName} />
      <Search />
    </Fragment>
  );
};

function RightMenu({userName}) {
  return (
    <Menu.Menu position="right">
      <ProfileMenu />
      <Options isUser={userName} />
    </Menu.Menu>
  )
}

function Nav(props) {
  return (
    <Fragment>
      <LeftMenu {...props} />
      <RightMenu {...props} />
    </Fragment>
  );
}

const mapStateToProps = ({ view: { difficulty }, user: { name: userName } }) => ({ difficulty, userName });
const mapDispatchToProps = dispatch => ({
  UserLogout: () => dispatch({
    type: LOG_OUT,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
