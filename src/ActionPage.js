import React from 'react';
import {connect} from 'react-redux';

import {fetchUser} from './actions';
import './ActionPage.css';
import Share from './components/Share';
import StepRow from './components/StepRow';
import {SHARED, EMAIL} from "./models";
import labels from './labels';
import {isEmail} from './validationRules';
import UserForm from './components/UserForm';

function ActionPage() {
  return (
    <div className="action-page">
      <div className="action-page__step">
        <StepRow fieldName={SHARED} number={1} title={labels.SHARE}>
          <Share/>
        </StepRow>
      </div>
      <div className="action-page__step">
        <StepRow fieldName={EMAIL} number={2} title={labels.EMAIL}>
          <UserForm/>
        </StepRow>
      </div>
    </div>
  );
}

export default ActionPage;
