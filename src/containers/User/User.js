import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUser, removeUser } from '../../actions/user';

import { ErrorComponent, Loading } from '../../components/Status';
import { User as GenericUser, UserShell } from '../../components/Generic/User';

class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { getUser, user, match: { params } } = this.props;

    if (!user || parseInt(user.id, 10) !== parseInt(params.id, 10)) {
      getUser(params.id);
    }
  }

  handleDelete(id) {
    const { removeUser, history } = this.props;
    removeUser(id);
    // display warning
    history.push('/');
  }

  render() {
    const { error, isFetching, user } = this.props;

    if (isFetching) {
      return (
        <UserShell disableActions>
          <Loading />
        </UserShell>
      )
    }

    if (error) {
      return (
        <UserShell disableActions>
          <ErrorComponent message="Error fetching user" />
        </UserShell>
      )
    }

    if (user) {
      return (
        <UserShell handleDelete={this.handleDelete} user={user}>
          <GenericUser user={user} />
        </UserShell>
      );
    }

    return null;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.data,
    isFetching: state.user.isFetching,
    error: state.user.error
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getUser, removeUser }, dispatch);
};

export default connect(
  mapStateToProps, mapDispatchToProps)(User);
