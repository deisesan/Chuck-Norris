/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from '../Pages/Home';
import JokeRandom from '../Pages/JokeRandom';
import JokesGame from '../Pages/JokesGame';
import JokesList from '../Pages/JokesList';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={JokeRandom} path="/jokes/random" exact />
      <Route component={JokesGame} path="/jokes/game" exact />
      <Route component={JokesList} path="/jokes/list" exact />
    </BrowserRouter>
  );
};

export default Routes;
