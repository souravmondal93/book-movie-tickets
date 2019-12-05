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
  }

  getTheatres = async () => {
    const { updateTheatresList } = this.props;
    updateTheatresList(THEATRES_DATA);
  }

  componentDidMount() {
    this.getTheatres();
    console.log('Theatres Props', this.props);
  }

  render = () => {
    const { selectedMovie } = this.props;
    return (
      <div className="theatre-wrapper">
        <div className="movie-container">
          <MovieItem className="pad-top-100" movieDetails={selectedMovie} />
        </div>
        <div className="theatre-container">
          <TheatreList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ movies }) => ({
  selectedMovie: movies.selectedMovie
});

const mapDispatchToProps = dispatch => ({
  updateTheatresList: theatres => dispatch(updateTheatresList(theatres))
});

export default connect(mapStateToProps, mapDispatchToProps)(Theatres);
