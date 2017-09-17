import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';


import { clearFilter, updateFilter } from '../../actions/filter';
import { getUsers } from '../../actions/users';

import { NameFilter } from '../../components/Filter';
import { ErrorComponent, Loading } from '../../components/Status';
import { default as GenericUserList } from '../../components/Generic/UserList';

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
          <AppBar position="static">
            <Toolbar>
              <Typography style={{ flex: '1' }} type="title" color="inherit">
                { !searchOpen ? (
                  <span>
                    Contacts
                  </span>
                ) : (
                  <NameFilter onFilter={this.handleNameFilter} />
                  )
                }
              </Typography>
              <IconButton onClick={this.toggleSearch}>
                { !searchOpen ? (
                  <Icon color="contrast">search</Icon>
                  ) : (
                  <Icon color="contrast">close</Icon>
                  )
                }
              </IconButton>
            </Toolbar>
          </AppBar>
          <GenericUserList users={users} />
        </div>
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
