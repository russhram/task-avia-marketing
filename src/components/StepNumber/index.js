import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './StepNumber.css';

function StepNumber({number, checked}) {
  return (
    <div className="step-number">
      <div className={classNames('step-number__item', {'step-number__item_checked': checked})}>
        {checked ? <div className="step-number-checked"/> : `${number}.`}
      </div>
    </div>
  );
}

StepNumber.propTypes = {
  checked: PropTypes.bool.isRequired,
  number: PropTypes.number.isRequired,
};

export default StepNumber;
