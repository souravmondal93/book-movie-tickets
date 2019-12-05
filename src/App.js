import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Movies from './pages/movies/movies.component';
import Theatres from './pages/theatres/theatres.component';
import BookTickets from './pages/book-tickets/book-tickets.component';

import './App.scss';

const App = () => {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path='/' component={Movies} />
        <Route exact path='/:movieId/theatres' component={Theatres} />
        <Route exact path='/:movieId/theatres/:theatreId/book' component={BookTickets} />
      </Switch>
    </div>
  );
};

export default App;
