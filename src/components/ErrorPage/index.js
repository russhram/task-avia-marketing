import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import './ErrorPage.css';

import PageTitle from '../PageTitle/index';
import {errorSelector} from '../../selectors';

function ErrorPage({error}) {
  return (
    <div className="error-page">
      <div className="error-page__item">
        <PageTitle>
          {error}
        </PageTitle>
      </div>
    </div>
  );
}

ErrorPage.propTypes = {
  error: PropTypes.string,
};

export default connect(errorSelector)(ErrorPage);
