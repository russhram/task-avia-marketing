import React from 'react';

import './ActionPage.css';
import Share from '../Share';
import StepRow from '../StepRow';
import {SHARED, EMAIL} from "../../models";
import labels from '../../labels';
import UserForm from '../UserForm';
import PageTitle from '../PageTitle';

function ActionPage() {
  return (
    <div className="action-page">
      <div className="action-page__item action-page__item_title">
        <PageTitle>{labels.ACTION_PAGE_TITLE}</PageTitle>
      </div>
      <div className="action-page__item action-page__item_step">
        <StepRow fieldName={SHARED} number={1} title={labels.SHARE}>
          <Share/>
        </StepRow>
      </div>
      <div className="action-page__item action-page__item_step">
        <StepRow fieldName={EMAIL} number={2} title={labels.EMAIL}>
          <UserForm/>
        </StepRow>
      </div>
    </div>
  );
}

export default ActionPage;
