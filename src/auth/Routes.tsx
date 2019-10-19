import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import SignInContainer from './SignIn';

interface Props {
}

export default function() {
  return (
    <div>
      <Route
        exact
        path='/'
        render={() =>
          <Link to='/sign-in'>Sign In!</Link>
        }
      />
      <br />
      <Route
        exact
        path='/sign-in'
        component={SignInContainer}
      />
    </div>
  )
}
