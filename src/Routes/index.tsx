/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import JokesGame from '../Pages/JokesGame';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={JokesGame} path="/" exact />
    </BrowserRouter>
  );
};

export default Routes;
