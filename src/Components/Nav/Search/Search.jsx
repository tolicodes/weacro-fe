import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { filterByName } from '../../../store/actions/actions';
import { MenuItem, SearchIcon } from './style';

class Search extends PureComponent {
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
        return <input value={poseSearchTerm} onChange={filter} onBlur={deactivate} onMouseLeave={deactivate} />;
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


const mapStateToProps = ({ view: { name } }) => ({ poseSearchTerm: name });
const mapDispatchToProps = dispatch => ({
  filter: ({ target: { value: name } }) => dispatch(filterByName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
