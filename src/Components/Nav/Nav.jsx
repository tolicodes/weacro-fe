import React, { Fragment } from 'react';
import { Menu } from 'semantic-ui-react';
import BackButton from 'UI/BackButton/BackButton';
import DifficultyFilter from './Difficulty';
import OptionsMenu from './Options';
import ProfileMenu from './ProfileMenu';
import Search from './Search';
import TagChoice from './TagChoice';

const Nav = ({ pathname }) => (
  <Fragment>
    <LeftMenu isAboutPath={pathname === '/about'} />
    <RightMenu />
  </Fragment>
);

const LeftMenu = ({ isAboutPath }) => (
  isAboutPath
    ? <BackButton />
    : (
      <Fragment>
        <DifficultyFilter />
        <TagChoice />
        <Search />
      </Fragment>
    ));

const RightMenu = () => (
  <Menu.Menu position="right">
    <ProfileMenu />
    <OptionsMenu />
  </Menu.Menu>
);

export default Nav;
