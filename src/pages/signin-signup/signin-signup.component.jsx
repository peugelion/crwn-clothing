import './signin-signup.component.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SigninSignupPage = () => (
  <div className='signin-signup'>
    <SignIn />
    <SignUp />
  </div>
);

export default SigninSignupPage;