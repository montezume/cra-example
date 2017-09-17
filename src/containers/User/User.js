import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getUser, removeUser } from '../../actions/user';

import { Dialog, ErrorComponent, Loading } from '../../components/Status';
import { User as GenericUser, UserShell } from '../../components/Generic/User';

class User extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false
    };

    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggleDialog = this.handleToggleDialog.bind(this);

  }

  componentDidMount() {
    const { getUser, user, match: { params } } = this.props;

    if (!user || parseInt(user.id, 10) !== parseInt(params.id, 10)) {
      getUser(params.id);
    }
  }

  handleToggleDialog() {
    this.setState({
      dialogOpen: !this.state.dialogOpen
    });
  }

  handleCancel() {
    this.handleToggleDialog();
  }

  handleConfirm(id) {
    this.handleDelete(id);
  }

  handleDelete(id) {
    const { removeUser, history } = this.props;
    removeUser(id);
    // display warning
    history.push('/');
  }

  render() {
    const { error, isFetching, user } = this.props;
    const { dialogOpen } = this.state;

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
        <UserShell handleDelete={this.handleToggleDialog} user={user}>
          <Dialog open={dialogOpen} cancel={this.handleCancel} confirm={this.handleConfirm} userId={user.id} />
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
