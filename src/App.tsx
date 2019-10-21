import React from 'react';
import classes from './App.module.scss';
import AuthRoutes from './auth';
import StateTestRoutes from './state-test';
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <header className={classes.AppHeader}>
          <AuthRoutes />
          <StateTestRoutes />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
