import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignUp from './pages/signIn-and-signOut/signIn-and-signOut';
import Header from './components/header/header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/sign-in' component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;