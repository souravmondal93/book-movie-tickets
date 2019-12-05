import React from 'react';

import DefaultButton from '../default-button/default-button.component'

import './theatre-item.styles.scss';

const TheatreItem = (props) => {
  const { theatreDetails } = props;
  return (
    <div className="theatre-details">
        <ul>
          <li className="theatre-title">
            <h2>{theatreDetails.name}</h2>
          </li>
          <li className="theatre-year">
            <h4>{theatreDetails.address}</h4>
          </li>
          <li className="theatre-year">
            <b>Email:</b> {theatreDetails.email}
          </li>
          <li className="theatre-year">
            <b>Phone:</b> {theatreDetails.phone}
          </li>
        </ul>
        <div className="movie-timings">
          {
            theatreDetails.timings.map((timing) => {
              return(<DefaultButton key={timing.id}>{timing.startTime}</DefaultButton>);
            })
          }
        </div>
    </div>
  );
};

export default TheatreItem;
