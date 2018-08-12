import { connect } from 'react-redux';
import { addToUser } from '../../../../store/actions/actions';
import RegisterForm from './Register';

const mapStateToProps = ({ user: { name: userName } }) => ({ userName });
const mapDispatchToProps = { UserLogin: addToUser };

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
