import React from 'react';
import './sign-in.scss';

import FormInput from '../form-input/formInput';
import Button from '../button/button';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: ''});
    } catch(error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
          name="email" 
          type="email" 
          handleChange={this.handleChange} 
          value={this.state.email} 
          label= 'Email' 
          required 
          />

          <FormInput 
          name="password" 
          type="password" 
          value={this.state.password} 
          handleChange={this.handleChange} 
          label= 'Password'
          required 
          />
          <div className='buttons'>
          <Button type='submit'> Sign In </Button>
          <Button onClick={signInWithGoogle} isGoogleSignIn >Google Sign In</Button>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;