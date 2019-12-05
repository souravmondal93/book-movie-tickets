import React from 'react';

import './seat-item.styles.scss';

const SeatItem = (props) => {
  const { seatDetails } = props;
  return (
    <div className="seat-box">
      <button className="seat-button">{seatDetails.number}</button>
    </div>
  );
}

export default SeatItem;
