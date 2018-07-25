import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { filterByName } from '../../../store/actions/actions';
import { MenuItem, SearchIcon } from './style';

class Search extends PureComponent {
    state = { active: false }

    onChange = ({target: { value: search }}) => this.setState({search});

    activate = () => this.setState({ active: true });

    deactivate = () => this.props.name ? null : this.setState({ active: false });

    render() {
        const { state: { active }, props: { name, filterByName }, activate, deactivate } = this;
        if (active) {
            return <input value={name} onChange={filterByName} onBlur={deactivate} onMouseLeave={deactivate}/>
        }
        return (
            <MenuItem onMouseEnter={activate} onFocus={activate} onClick={activate} >
                <SearchIcon />
            </MenuItem>
        );
    }
}

const mapStateToProps = ({ view: { name } }) => ({ name });
const mapDispatchToProps = dispatch => ({
  filterByName: ({target: {value: name}}) => dispatch(filterByName(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search)
  