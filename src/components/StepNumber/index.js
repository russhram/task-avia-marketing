import React from 'react';
import classNames from 'classnames';

import './StepNumber.css';

const StepNumber = ({number, checked}) => (
  <div className="step-number">
    <div className={classNames('step-number__item', {'step-number__item_checked': checked})}>
      {checked ? <div className="step-number-checked" /> : `${number}.`}
    </div>
  </div>
);

export default StepNumber;
