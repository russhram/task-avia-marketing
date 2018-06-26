import React from 'react';

import labels from './labels';
import PageTitle from './components/PageTitle';
import './FinalPage.css';

function FinalPage() {
  return (
    <div className="final-page">
      <div className="final-page__item final-page__item_crossed-title">
        <div className="final-page-crossed-title">{labels.VOTING}</div>
      </div>
      <div className="final-page__item">
        <PageTitle>
          {labels.FINAL_PAGE_TITLE}
        </PageTitle>
      </div>
      <div className="final-page__item">
        <div className="final-page-title-extra">{labels.FINAL_PAGE_EXTRA_TITLE}</div>
      </div>
    </div>
  );
}

export default FinalPage;
