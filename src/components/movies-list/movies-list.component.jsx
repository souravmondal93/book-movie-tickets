import React from 'react';
import { connect } from 'react-redux';

import MovieItem from '../movie-item/movie-item.component';

import './movies-list.styles.scss';

const moviesList = ({moviesList}) => {
  return (
    <div className="movie-list">
      {
        moviesList.length ?
          [
            moviesList.map((movieItem) => {
              return (
                <div className="movie-item" key={movieItem.imdbID}>
                  <MovieItem movieDetails={movieItem} />
                </div>
              );
            })
          ] : <p>No Movies to display</p>
      }
    </div>
  );
};

const mapStateToProps = state => ({
  moviesList: state.movies.moviesList
})

export default connect(mapStateToProps)(moviesList);
