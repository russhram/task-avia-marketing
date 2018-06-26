import React from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './StepRow.css';
import StepNumber from '../StepNumber';
import {userSelector} from '../../selectors';
import {User} from '../../models';

function StepRow({user, children, number, fieldName, title}) {
  const checked = !!user[fieldName];
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
  );
}

StepRow.propTypes = {
  user: PropTypes.instanceOf(User).isRequired,
  children: PropTypes.node.isRequired,
  number: PropTypes.number.isRequired,
  fieldName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default connect(userSelector)(StepRow);
