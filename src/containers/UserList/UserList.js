import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUsers } from '../../actions/users';

import { ErrorComponent, Loading } from '../../components/Status';
import { default as GenericUserList } from '../../components/Generic/UserList';

class UserList extends Component {

  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  render() {
    const { error, isFetching, users } = this.props;

    if (isFetching) {
      return (
        <Loading message="Loading users" />
      )
    }

    if (error) {
      return (
        <ErrorComponent message="Error fetching users" />
      )
    }

    if (users) {
      return (
        <GenericUserList users={users} />
      );
    }

    return null;
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.data,
    isFetching: state.users.isFetching,
    error: state.users.error
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getUsers }, dispatch);
};

export default connect(
  mapStateToProps, mapDispatchToProps)(UserList);
