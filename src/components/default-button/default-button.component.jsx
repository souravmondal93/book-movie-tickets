import React from 'react';

import './default-button.styles.scss';

const DefaultButton = (props) => {
  const btnClass = props.simpleButton ? 'simple-btn' : '';
  return (
    <button className={"button " + btnClass}>
      {props.children}
    </button>
  );
};

export default DefaultButton;
