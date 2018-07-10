import React, { Fragment } from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { LOG_OUT } from '../../store/actions';
import DifficultyMenu from './Difficulty';
import Options from './OptionsMenu/OptionsMenu';
import ProfileMenu from './ProfileMenu';
import SearchBar from './SearchBar';
import TagChoice from './TagChoice';
import BackButton from '../UI/BackButton';


function Nav({ userName, difficulty, isAboutPath }) {
  const LeftMenu = () => {
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
        <SearchBar />
      </Fragment>
    );
  };
  return (
    <Fragment>
      <LeftMenu />
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
