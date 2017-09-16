import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateFilter } from '../../actions/filter';
import { removeUser } from '../../actions/user';
import { getUsers } from '../../actions/users';

import { NameFilter } from '../../components/Filter';
import { ErrorComponent, Loading } from '../../components/Status';
import { default as GenericUserList } from '../../components/Generic/UserList';

class UserList extends Component {

  constructor(props) {
    super(props);
    this.handleNameFilter = this.handleNameFilter.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { users, getUsers } = this.props;

    // idealistic caching

    if (!users) {
      getUsers();
    }
  }

  handleDelete(id) {
    const { removeUser } = this.props;
    removeUser(id);
  }

  handleNameFilter(name) {
    const { updateFilter } = this.props;
    updateFilter({
      name
    });
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
        <div>
          <NameFilter onFilter={this.handleNameFilter} />
          <GenericUserList handleDelete={this.handleDelete} users={users} />
        </div>
      );
    }

    return null;
  }
}

const mapStateToProps = state => {
  const { filter: { data: { name }}} = state;
  return {
    users: state.users.data && state.users.data.filter(user => user.name.startsWith(name)),
    isFetching: state.users.isFetching,
    error: state.users.error
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getUsers, removeUser, updateFilter }, dispatch);
};

export default connect(
  mapStateToProps, mapDispatchToProps)(UserList);
