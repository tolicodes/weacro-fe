import { connect } from 'react-redux';
import { storeUser } from '../../../../store/actions/actions';
import LoginForm from './Login';


const mapStateToProps = ({ user: { name: userName } }) => ({ userName });
const mapDispatchToProps = { UserLogin: storeUser };

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
