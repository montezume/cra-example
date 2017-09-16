import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUsers } from '../../actions/users';
import { removeUser } from '../../actions/user';

import { ErrorComponent, Loading } from '../../components/Status';
import { default as GenericUserList } from '../../components/Generic/UserList';

class UserList extends Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { getUsers } = this.props;
    getUsers();
  }

  handleDelete(id) {
    console.log('delete it!');
    const { removeUser } = this.props;
    removeUser(id);
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
        <GenericUserList handleDelete={this.handleDelete} users={users} />
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
  return bindActionCreators({ getUsers, removeUser }, dispatch);
};

export default connect(
  mapStateToProps, mapDispatchToProps)(UserList);
