import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form/immutable'
import {connect} from 'react-redux';

import {fetchUser} from "./actions";
import './App.css';
import Share from './components/Share';
import StepRow from './components/StepRow';
import {userSelector} from "./selectors";
import labels from './labels';

@reduxForm({form: 'userForm'})
class UserForm extends Component {
  render() {
    const {submitting} = this.props;
    return (
      <button type="submit" disabled={submitting}>
        Submit
      </button>
    );
  }
}

@connect(userSelector)
class App extends Component {
  componentWillMount() {
    fetchUser.dispatch();
  }

  render() {
    const {user} = this.props;
    return (
      <div className="app">
        <div className="app__share">
          <StepRow user={user} fieldName="shared" number={1} title={labels.SHARE}>
            <Share/>
          </StepRow>
        </div>
        <div className="app__form">
          <UserForm/>
        </div>
      </div>
    );
  }
}

export default App;
