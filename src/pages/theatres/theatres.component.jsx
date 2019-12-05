import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateTheatresList } from '../../redux/theatres/theatres.actions';
import MovieItem from '../../components/movie-item/movie-item.component'
import TheatreList from '../../components/theatre-list/theatre-list.component';

import { THEATRES_DATA } from './theatres.data';
import './theatres.styles.scss';

class Theatres extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theatresList: [],
      movieDetails: {
        "Title": "The Angry Birds Movie",
        "Year": "2016",
        "imdbID": "tt1985949",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY3MjU0NDA0OF5BMl5BanBnXkFtZTgwNTc0MTU3OTE@._V1_SX300.jpg"
      }
    }
  }

  getTheatres = async () => {
    const { updateTheatresList } = this.props;
    updateTheatresList(THEATRES_DATA);
    console.log('Updated Theatres');
  }

  componentDidMount() {
    this.getTheatres();
  }

  render = () => {
    const { movieDetails } = this.state;
    return (
      <div className="theatre-wrapper">
        <div className="movie-container">
          <MovieItem className="pad-top-100" movieDetails={movieDetails} />
        </div>
        <div className="theatre-container">
          <TheatreList />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateTheatresList: theatres => dispatch(updateTheatresList(theatres))
});

export default connect(null, mapDispatchToProps)(Theatres);
