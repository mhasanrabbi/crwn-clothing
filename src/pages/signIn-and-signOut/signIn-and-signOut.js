import React from 'react';

import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/signup';

import './signIn-and-signOut.scss';

const SignInAndSignUp = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn/>
    <SignUp />
  </div>
);

export default SignInAndSignUp;