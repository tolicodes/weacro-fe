import React from 'react';
import { connect } from 'react-redux';
import { Dropdown, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import TagList from './TagList';

function TagMenu({ tag }) {
  const determineIcon = () => {
    switch (tag) {
      case '':
        return <Icon name="tags" size="big" />;
      case 'favorites':
        return <Icon name="heart" color="red" size="big" />;
      default:
        return null;
    }
  };

  return (
    <Dropdown item icon={determineIcon()}>
      <Dropdown.Menu>
        <TagList />
      </Dropdown.Menu>
    </Dropdown>
  );
}

TagMenu.propTypes = {
  tag: PropTypes.string,
};
TagMenu.defaultProps = {
  tag: false,
};

const mapStateToProps = ({ view: { tag }, user: { loggedIn: name } }) => ({ tag, name });

export default connect(mapStateToProps)(TagMenu);
