import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createUser } from '../../actions/user';
import { UserForm, AddUserShell } from '../../components/Generic/User';
import { Loading } from '../../components/Status';

class AddUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSubmitting: false,
      error: false
    };
    this.submit = this.submit.bind(this);
  }

  submit(user) {
    const { createUser, history } = this.props;

    this.setState({
      ...this.state,
      isSubmitting: true,
      error: false
    });

    createUser(user).then(success => {
      // success! go home
      this.setState({
        ...this.state,
        isSubmitting: false,
        error: false
      });
      history.push('/');
    }, error => {
      // display errors ?
      this.setState({
        ...this.state,
        isSubmitting: false,
        error: true
      });
    });
  }

  render() {
    const { error, isSubmitting } = this.state;

    if (isSubmitting) {
      return (
        <AddUserShell title="Saving...">
          <Loading />
        </AddUserShell>
      )
    }

    return (
      <AddUserShell title="Add user" previousState="/">
        <UserForm
          error={error}
          isSubmitting={isSubmitting}
          submit={this.submit}
          />
      </AddUserShell>
    )
  }
}

const mapStateToProps = state => {
  return {
    //
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ createUser }, dispatch);
};

export default connect(
  mapStateToProps, mapDispatchToProps)(AddUser);
