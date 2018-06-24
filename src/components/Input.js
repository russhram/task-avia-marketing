import React from 'react';
import classNames from 'classnames';

import './Input.css';

const Input = ({input, type, error}) => (
  <input
    {...input}
    type={type}
    className={classNames('input', {'input_error': error})}
  />
);

export default Input;
