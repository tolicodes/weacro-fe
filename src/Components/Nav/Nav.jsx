import React, { Fragment } from 'react';
import { Menu } from 'semantic-ui-react';
import DifficultyFilter from './Difficulty';
import OptionsMenu from './OptionsMenu';
import ProfileMenu from './ProfileMenu';
import Search from './Search';
import TagChoice from './TagChoice';
import BackButton from '../UI/BackButton/BackButton';

const Nav = ({ pathname }) => (
  <Fragment>
    <LeftMenu isAboutPath={pathname === '/about'}  />
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
