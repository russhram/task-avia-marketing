import React, {Component, Fragment} from 'react';
import {Field, reduxForm} from 'redux-form/immutable'
import {connect} from 'react-redux';

import {fetchUser} from "./actions";
import './App.css';
import Share from './components/Share';
import StepRow from './components/StepRow';
import {userSelector} from "./selectors";
import {SHARED, EMAIL} from "./models";
import labels from './labels';
import Input from './components/Input';
import Button from './components/Button';

const validate = ({email}) => {
  const errors = {};
  if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'TEST'
  }
  return errors;
};

@reduxForm({form: 'userForm', validate})
class UserForm extends Component {
  render() {
    const {handleSubmit, submitting} = this.props;
    console.log('submitting', submitting)
    return (
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="user-form__item">
          <Field name="email" type="email" component={({input, type, meta: {touched, error}}) => (
            <Input type={type} input={input} error={touched && error}/>
          )}/>
        </div>
        <div className="user-form__item">
          <Button type="submit" disabled={submitting}>
            {labels.SEND}
          </Button>
        </div>
      </form>
    );
  }
}

@connect(userSelector)
class App extends Component {
  componentWillMount() {
    fetchUser.dispatch();
  }

  render() {
    return (
      <div className="app">
        <div className="app__step">
          <StepRow fieldName={SHARED} number={1} title={labels.SHARE}>
            <Share/>
          </StepRow>
        </div>
        <div className="app__step">
          <StepRow fieldName={EMAIL} number={2} title={labels.EMAIL}>
            <UserForm/>
          </StepRow>
        </div>
      </div>
    );
  }
}

export default App;
