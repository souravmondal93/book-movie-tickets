import React from 'react';

import './default-button.styles.scss';

const DefaultButton = ({simpleButton, ...props}) => {
  const btnClass = simpleButton ? 'simple-btn' : '';
  return (
    <button {...props} className={"button " + btnClass}>
      {props.children}
    </button>
  );
};

export default DefaultButton;
