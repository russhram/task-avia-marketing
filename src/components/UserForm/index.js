import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form/immutable';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {userFormSelector} from '../../selectors';
import {EMAIL} from '../../models';
import labels from '../../labels';
import Input from '../Input';
import Button from '../Button';
import {isEmail} from '../../validationRules';
import {updateUser} from '../../actions';
import './UserForm.css';

const validate = (form) => {
  const email = form.get(EMAIL);
  if (!email || !isEmail(email)) {
    return {email: 'TEST'};
  }
  return {};
};

const submit = (form, dispatch, {user, updateUser}) => {
  updateUser(user.merge(form));
};

@connect(userFormSelector, {updateUser})
@reduxForm({form: 'userForm', validate, onSubmit: submit})
class UserForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    valid: PropTypes.bool.isRequired,
  };

  renderInput = ({input, type, meta: {error, touched}}) => <Input type={type} input={input} error={touched && error}/>;

  render() {
    const {handleSubmit, valid} = this.props;
    return (
      <form className="user-form" onSubmit={handleSubmit}>
        <div className="user-form__item">
          <Field name={EMAIL} type="email" component={this.renderInput}/>
        </div>
        <div className="user-form__item">
          <Button type="submit" disabled={!valid}>
            {labels.SEND}
          </Button>
        </div>
      </form>
    );
  }
}

export default UserForm;
