import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setSelectedTheatre, setSelectedTheatreTime } from '../../redux/theatres/theatres.actions';
import DefaultButton from '../default-button/default-button.component'

import './theatre-item.styles.scss';

const TheatreItem = (props) => {
  let history = useHistory();
  const { theatreDetails } = props;

  const selectTheatreTimeTHandler = (props, timing) => {
    const { setSelectedTheatre, setSelectedTheatreTime, theatreDetails, selectedMovie } = props;
    setSelectedTheatre(theatreDetails);
    setSelectedTheatreTime(timing)
    history.push(`/${selectedMovie.imdbID}/theatres/${theatreDetails.id}/time/${timing.id}/book`);
  };

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
              return(<DefaultButton onClick={() => selectTheatreTimeTHandler(props, timing)} key={timing.id}>{timing.startTime}</DefaultButton>);
            })
          }
        </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setSelectedTheatre: theatre => dispatch(setSelectedTheatre(theatre)),
  setSelectedTheatreTime: time => dispatch(setSelectedTheatreTime(time))
});

const mapStateToProps = state => ({
  selectedMovie: state.movies.selectedMovie
})

export default connect(mapStateToProps, mapDispatchToProps)(TheatreItem);
