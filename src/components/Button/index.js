import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Button.css';

function Button({type, onClick, children, disabled}) {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };
  const className = classNames('button', {
    button_disabled: disabled,
  });
  return (
    <button type={type} onClick={handleClick} className={className}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};

export default Button;
