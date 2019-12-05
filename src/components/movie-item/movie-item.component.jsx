import React from 'react';

import './movie-item.styles.scss';

const MovieItem = (props) => {
  const { movieDetails } = props;
  const cardStyle = {
    backgroundImage: `url(${movieDetails.Poster})`
  };
  // console.log('Movie Details: ', movieDetails);

  return (
    <div style={cardStyle} className="movie-details">
      <div className="card-overlay">
        <h2 className="movie-title">{movieDetails.Title}</h2>
        <h2 className="movie-year">{movieDetails.Year}</h2>
        <button className="book-movie">Book</button>
      </div>
    </div>
  );
}

export default MovieItem;
