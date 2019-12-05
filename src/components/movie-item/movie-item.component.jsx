import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setSelectedMovie } from '../../redux/movies/movies.actions';
import './movie-item.styles.scss';

const MovieItem = (props) => {
  let history = useHistory();
  const { movieDetails } = props;
  const cardStyle = {
    backgroundImage: `url(${movieDetails.Poster})`
  };

  const selectMovieHandler = ({setSelectedMovie, movieDetails}) => {
    setSelectedMovie(movieDetails);
    history.push(`/${movieDetails.imdbID}/theatres`);
  };

  return (
    <div style={cardStyle} className="movie-details">
      <div className="card-overlay">
        <h2 className="movie-title">{movieDetails.Title}</h2>
        <h2 className="movie-year">{movieDetails.Year}</h2>
        <button className="book-movie" onClick={() => selectMovieHandler(props)}>Book</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  setSelectedMovie: movies => dispatch(setSelectedMovie(movies))
});

export default connect(null, mapDispatchToProps)(MovieItem);
