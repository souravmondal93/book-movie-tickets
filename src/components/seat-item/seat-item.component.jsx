import React from 'react';
import { connect } from 'react-redux';

import { addSeatForBooking, removeSeatFromBooking } from '../../redux/seats/seats.actions';

import './seat-item.styles.scss';

const SeatItem = (props) => {
  const { seatDetails, addSeatForBooking, removeSeatFromBooking } = props;
  const seatSelectedClass = seatDetails.selected ? 'selected' : '';

  const selectSeatHandler = () => {
    if (!seatDetails.selected) {
      addSeat();
    } else {
      removeSeat();
    }
  };

  const addSeat = () => {
    addSeatForBooking(seatDetails);
  };

  const removeSeat = () => {
    removeSeatFromBooking(seatDetails);
  }

  return (
    <div className="seat-box">
      <button className={`seat-button ${seatSelectedClass}`} onClick={selectSeatHandler}>{seatDetails.number}</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addSeatForBooking: seat => dispatch(addSeatForBooking(seat)),
  removeSeatFromBooking: seat => dispatch(removeSeatFromBooking(seat)),
});

export default connect(null, mapDispatchToProps)(SeatItem);
