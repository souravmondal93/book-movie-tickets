import React from 'react';
import { connect } from 'react-redux';

import TheatreItem from '../theatre-item/theatre-item.component';

import './theatre-list.styles.scss';

const TheatreList = ({theatresList}) => {
  return (
    <div className="theatre-list">
      {
        theatresList.length ?
          [
            theatresList.map((theatre) => {
              return (
                <div className="theatre-item" key={theatre.id}>
                  <TheatreItem theatreDetails={theatre} />
                </div>
              );
            })
          ] : <p>No Theatres to display</p>
      }
    </div>
  );
};

const mapStateToProps = state => ({
  theatresList: state.theatres.theatresList
});

export default connect(mapStateToProps)(TheatreList);
