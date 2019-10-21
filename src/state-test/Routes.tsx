import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import StatefulTest from './StatefulTest';

export default function() {
  return (
    <div>
      <Route
        exact
        path='/'
        render={() =>
          <Link to='/state-test'>Test!</Link>
        }
      />
      <br />
      <Route
        exact
        path='/state-test'
        component={StatefulTest}
      />
    </div>
  )
}
