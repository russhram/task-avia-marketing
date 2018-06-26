import React from 'react';
import classNames from 'classnames';

import './Input.css';

const Input = ({input, type, error}) => (
  <input
    {...input}
    type={type}
    value={input.value}
    onChange={e => input.onChange(e.target.value)}
    className={classNames('input', {'input_error': error})}
  />
);

export default Input;
