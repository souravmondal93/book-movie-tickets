import React from 'react';
import { connect } from 'react-redux';

import SeatItem from '../seat-item/seat-item.component';

import './seat-list.styles.scss';

const SeatList = (props) => {
  console.log('SEAT list Props', props);
  const { seatsList } = props;
  return (
    <div className="seat-list">
      {
        seatsList.length ?
          [
            seatsList.map((seat) => {
              return (
                <div className="seat-item" key={seat.id}>
                  <SeatItem seatDetails={seat} />
                </div>
              );
            })
          ] : <p>No Seat to display</p>
      }
    </div>
  );
};

const mapStateToProps = state => ({
  seatsList: state.seats.seatsList
})

export default connect(mapStateToProps)(SeatList);
