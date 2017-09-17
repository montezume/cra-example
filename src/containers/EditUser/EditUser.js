import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUser, modifyUser } from '../../actions/user';
import { AddUserShell, UserForm } from '../../components/Generic/User';
import { ErrorComponent, Loading } from '../../components/Status';

class EditUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSubmitting: false,
      submitError: false
    };
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    const { getUser, match: { params } } = this.props;
    getUser(params.id);
  }

  submit(user) {
    const { modifyUser, history } = this.props

    this.setState({
      ...this.state,
      isSubmitting: true,
      error: false
    });

    modifyUser(user).then(success => {
      // success! go home
      this.setState({
        ...this.state,
        isSubmitting: false,
        submitError: false
      });
      history.push('/');
    }, error => {
      // display errors ?
      this.setState({
        ...this.state,
        isSubmitting: false,
        submitError: true
      });
    });
  }

  render() {
    const { error, isFetching, user } = this.props;
    const { isSubmitting, submitError } = this.state;

    if (isFetching) {
      return (
        <AddUserShell title="Loading...">
          <Loading />
        </AddUserShell>
      );
    }

    if (error) {
      return (
        <AddUserShell title="Error">
          <ErrorComponent message="Error loading user" />
        </AddUserShell>
      );
    }

    if (user) {
      return (
        <AddUserShell title={user.name} previousState={`/users/${user.id}`}>
          <UserForm
            error={submitError}
            user={user}
            isSubmitting={isSubmitting}
            submit={this.submit}
            />
        </AddUserShell>
      );
    }

    return null;
  }
}

const mapStateToProps = state => {
  return {
    error: state.user.error,
    isFetching: state.user.isFetching,
    user: state.user.data
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getUser, modifyUser }, dispatch);
};

export default connect(
  mapStateToProps, mapDispatchToProps)(EditUser);
