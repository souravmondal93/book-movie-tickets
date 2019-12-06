import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateSeatsList } from '../../redux/seats/seats.actions';
import SeatList from '../../components/seat-list/seat-list.component';
import DefaultButton from '../../components/default-button/default-button.component';

import { SEATS_DATA } from './seats.data';
import './book-tickets.styles.scss';

class BookTickets extends Component {
  constructor(props) {
    super(props);
  }

  getSeats = async () => {
    const { updateSeatsList } = this.props;
    updateSeatsList(SEATS_DATA);
  }

  componentDidMount() {
    this.getSeats();
  }

  confirmSeatSelection = () => {
    const { selectedSeats, selectedMovie, selectedTheatre, selectedTheatreTime } = this.props;
    const selectedSeatsCount = selectedSeats.length;
    const selectedSeatsList = selectedSeats.map(seat => (seat.number));
    alert(`You have selected '${selectedSeatsList.join(' ')}' seat(s) for '${selectedMovie.Title}' movie in '${selectedTheatre.name}' theatre at '${selectedTheatreTime.startTime}'`);
  }

  render = () => {
    const { selectedSeats } = this.props;
    return (
      <div className="seats-wrapper">
        <SeatList />
        <div className="screen-text">
          <h1>Screen</h1>
        </div>
        <div className="confirm-btn-container">
          <DefaultButton onClick={this.confirmSeatSelection} disabled={!selectedSeats.length}>Confirm</DefaultButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedSeats: state.seats.selectedSeats,
  selectedMovie: state.movies.selectedMovie,
  selectedTheatre: state.theatres.selectedTheatre,
  selectedTheatreTime: state.theatres.selectedTheatreTime
})

const mapDispatchToProps = dispatch => ({
  updateSeatsList: seats => dispatch(updateSeatsList(seats))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookTickets);
