import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Input.css';

function Input({input, type, error}) {
  return (
    <input
      {...input}
      type={type}
      value={input.value}
      onChange={e => input.onChange(e.target.value)}
      className={classNames('input', {input_error: error})}
    />
  );
}

Input.propTypes = {
  input: PropTypes.shape({}).isRequired,
  type: PropTypes.string.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
};

export default Input;
