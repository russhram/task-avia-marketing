import React from 'react';
import classNames from 'classnames';

import './Button.css';

const Button = ({type, onClick, children, disabled}) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };
  const className = classNames('button', {
    'button_disabled': disabled,
  });
  return (
    <button type={type} onClick={handleClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
