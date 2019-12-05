import React from 'react';

import SeatItem from '../seat-item/seat-item.component';

import './seat-list.styles.scss';

const SeatList = (props) => {
  return (
    <div className="seat-list">
      {
        props.seatList.length ?
          [
            props.seatList.map((seat) => {
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

export default SeatList;
