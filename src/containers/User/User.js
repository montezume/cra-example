import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUser } from '../../actions/user';

import { ErrorComponent, Loading } from '../../components/Status';
import { default as GenericUser } from '../../components/Generic/User';

class User extends Component {

  componentDidMount() {
    const { getUser, match: { params } } = this.props;
    getUser(params.id);
  }

  render() {
    const { error, isFetching, user } = this.props;

    if (isFetching) {
      return (
        <Loading message="Loading users" />
      )
    }

    if (error) {
      return (
        <ErrorComponent message="Error fetching user" />
      )
    }

    if (user) {
      return (
        <GenericUser user={user} />
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
  return bindActionCreators({ getUser }, dispatch);
};

export default connect(
  mapStateToProps, mapDispatchToProps)(User);
