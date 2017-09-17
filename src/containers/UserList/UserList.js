import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { clearFilter, updateFilter } from '../../actions/filter';
import { getUsers } from '../../actions/users';

import { ErrorComponent, Loading } from '../../components/Status';
import { UserList as GenericUserList, UserListShell } from '../../components/Generic/UserList';

class UserList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchOpen: false
    };

    this.handleNameFilter = this.handleNameFilter.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
  }

  componentDidMount() {
    const { users, getUsers } = this.props;
    // basic caching -_-
    if (!users) {
      getUsers();
    }
  }

  toggleSearch() {
    const { clearFilter } = this.props;

    if (this.state.searchOpen) {
      clearFilter();
    }

    this.setState({
      ...this.state,
      searchOpen: !this.state.searchOpen
    });
  }

  handleNameFilter(name) {
    const { updateFilter } = this.props;
    updateFilter({
      name
    });
  }

  render() {
    const { error, isFetching, users } = this.props;
    const { searchOpen } = this.state;

    if (isFetching) {
      return (
        <UserListShell disableSearch>
          <Loading />
        </UserListShell>
      )
    }

    if (error) {
      return (
        <UserListShell disableSearch>
          <ErrorComponent message="Error fetching users" />
        </UserListShell>
      )
    }

    if (users) {
      return (
        <UserListShell
          searchOpen={searchOpen}
          toggleSearch={this.toggleSearch}
          handleNameFilter={this.handleNameFilter}
          >
          <GenericUserList users={users} />
        </UserListShell>
      );
    }

    return null;
  }
}

const mapStateToProps = state => {
  const { filter: { data: { name }}} = state;
  return {
    users: state.users.data && state.users.data.filter(user => user.name.toLowerCase().startsWith(name.toLowerCase())),
    isFetching: state.users.isFetching,
    error: state.users.error
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getUsers, clearFilter, updateFilter }, dispatch);
};

export default connect(
  mapStateToProps, mapDispatchToProps)(UserList);
