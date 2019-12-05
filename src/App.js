import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Movies from './pages/movies/movies.component';
import Theatres from './pages/theatres/theatres.component';
import BookTickets from './pages/book-tickets/book-tickets.component';

import './App.scss';

const App = (props) => {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path='/' component={Movies} />
        <Route
          exact
          path='/:movieId/theatres'
          render={() =>
            props.selectedMovie ? (
              <Theatres />
            ) : (
              <Redirect to='/' />
            )
          } />
        <Route
          exact
          path='/:movieId/theatres/:theatreId/time/:timingId/book'
          render={() =>
            (props.selectedMovie && props.selectedTheatre && props.selectedTheatreTime) ? (
              <BookTickets />
            ) : (
              <Redirect to='/' />
            )
          } />
      </Switch>
    </div>
  );
};

const mapStateToProps = ({ movies, theatres }) => ({
  selectedMovie: movies.selectedMovie,
  selectedTheatre: theatres.selectedTheatre,
  selectedTheatreTime: theatres.selectedTheatreTime
});

export default connect(mapStateToProps)(App);
