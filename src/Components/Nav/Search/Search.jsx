import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from 'Common/Menu';
import { SearchIcon } from './style';

export default class Search extends PureComponent {
    state = { active: false }

    activate = () => this.setState({ active: true });

    deactivate = () => {
      const { poseSearchTerm } = this.props;
      if (poseSearchTerm) return;
      this.setState({ active: false });
    }

    render() {
      const {
        state: { active }, props: { poseSearchTerm, filter }, activate, deactivate,
      } = this;
      if (active) {
        return (
          <input
            value={poseSearchTerm}
            onChange={({ target: { value: name } }) => filter(name)}
            onBlur={deactivate}
            onMouseLeave={deactivate}
          />
        );
      }
      return (
        <MenuItem onMouseEnter={activate} onFocus={activate} onClick={activate}>
          <SearchIcon />
        </MenuItem>
      );
    }
}

Search.defaultProps = {
  filter: null,
  poseSearchTerm: null,
};

Search.propTypes = {
  filter: PropTypes.func,
  poseSearchTerm: PropTypes.string,
};
