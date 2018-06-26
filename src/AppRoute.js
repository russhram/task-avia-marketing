import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import {userSelector} from './selectors';
import {fetchUser} from './actions';

import ActionPage from './components/ActionPage';
import FinalPage from './components/FinalPage';
import {User} from './models';

function AppRoute({user, fetchUser, component: Component}) {
  const render = () => {
    if (!user.id) {
      fetchUser();
      return null;
    }
    if (user.shared && user.email && (Component === ActionPage)) {
      return <Redirect to="/final"/>;
    }

    if ((!user.shared || !user.email) && (Component === FinalPage)) {
      return <Redirect to="/"/>;
    }

    return <Component />;
  };

  return <Route render={render}/>;
}

AppRoute.propTypes = {
  user: PropTypes.instanceOf(User).isRequired,
  fetchUser: PropTypes.func.isRequired,
  component: PropTypes.func.isRequired,
};

export default connect(userSelector, {fetchUser})(AppRoute);
