import React from 'react';
import classNames from 'classnames';

import './StepRow.css'
import StepNumber from './StepNumber';

const StepRow = ({user, children, number, fieldName, title}) => {
  const checked = user[fieldName];
  return (
    <div className="step-row">
      <div className="step-row__number">
        <StepNumber number={number} checked={checked}/>
      </div>
      <div className="step-row__field">
        <div className={classNames('step-field', {'step-field_checked': checked})}>
          <div className="step-field__title">
            <div className="step-field-title">{`${title}:`}</div>
          </div>
          <div className="step-field__content">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
};

export default StepRow;
