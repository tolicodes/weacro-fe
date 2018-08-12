import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

export default ({ tag, userLists, setTag }) => {
  const showFavorites = () => setTag('favorites', 0);
  const showAll = () => setTag('', 0);
  return userLists.map(list => (
    <Menu.Item key={list} active={!!tag} name={list} onClick={!tag ? showFavorites : showAll}>
      <Icon name={!tag ? 'empty heart' : 'full heart'} />
      {'Favorites'}
    </Menu.Item>
  ));
};
