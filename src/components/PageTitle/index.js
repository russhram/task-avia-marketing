import React from 'react';
import PropTypes from 'prop-types';

import './PageTitle.css';

function PageTitle({children}) {
  return <div className="page-title">{children}</div>;
}

PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageTitle;
