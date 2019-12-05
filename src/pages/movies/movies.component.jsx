import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { updateMoviesList } from '../../redux/movies/movies.actions';
import MoviesList from '../../components/movies-list/movies-list.component';
import * as config from '../../config/config.json';

import './movies.styles.scss';

class Movies extends Component {
  constructor(props) {
    super(props);
  }

  getMovies = async () => {
    const { updateMoviesList } = this.props;
    const omdbUrl = `${config.omdbApiUrl}?apikey=${config.apiKey}&s=movie&type=movie`

    const moviesResponse = await axios.get(omdbUrl)
    console.log('Movies', moviesResponse);
    updateMoviesList(moviesResponse.data.Search);
  }

  componentDidMount() {
    console.log('Props', this.props);
    this.getMovies();
  }

  render = () => {
    return (
      <MoviesList />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateMoviesList: movies => dispatch(updateMoviesList(movies))
});

export default connect(null, mapDispatchToProps)(Movies)
