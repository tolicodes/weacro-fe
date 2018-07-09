import React, { Fragment } from 'react';
import { Menu, Popup, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { LOG_OUT } from '../../../store/actions';
import DifficultyMenu from './Difficulty';
import TagMenu from './Tags';
import Options from './OptionsMenu';
import ProfileMenu from './ProfileMenu';
import SearchBar from './Search';

const TagChoice = ({ loggedIn }) => {
  if (loggedIn) { return <TagMenu />; }
  return (
    <Popup
      trigger={(
        <MenuItem>
          <Icon
            name="tags"
            style={{ opacity: '0.2' }}
            size="big"
          />
        </MenuItem>
)}
      inverted
      content="Sign up to save poses to your favorites"
    />
  );
};

const HeaderMenu = ({ userName, difficulty }) => (
  <Fragment>
    <DifficultyMenu difficultySetting={difficulty} />
    <TagChoice loggedIn={userName} />
    <SearchBar />
    <Menu.Menu position="right">
      {!userName && <ProfileMenu />}
      <Options isUser={userName} />
    </Menu.Menu>
  </Fragment>
);

const mapStateToProps = ({ view: { difficulty }, user: { name: userName } }) => ({ difficulty, userName });
const mapDispatchToProps = dispatch => ({
  UserLogout: () => dispatch({
    type: LOG_OUT,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);

const MenuItem = styled(Menu.Item)`
  cursor: default;
`;
