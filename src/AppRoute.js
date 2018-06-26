import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';

import {userSelector} from './selectors';
import {fetchUser} from './actions';

import ActionPage from './components/ActionPage';
import FinalPage from './components/FinalPage';
import {User} from './models';

function AppRoute({user, fetchUser}) {
  const render = ({history}) => {
    if (!user.id) {
      fetchUser();
      return null;
    }
    if (user.shared && user.email) {
      history.push('/final');
      return <FinalPage />;
    }
    history.push('/');
    return <ActionPage />;
  };

  return <Route render={render}/>;
}

AppRoute.propTypes = {
  user: PropTypes.instanceOf(User).isRequired,
  fetchUser: PropTypes.func.isRequired,
};

export default connect(userSelector, {fetchUser})(AppRoute);
