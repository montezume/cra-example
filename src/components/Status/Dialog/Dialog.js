import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

export default class DialogComponent extends Component {
  render() {
    const { open, cancel, confirm, userId } = this.props;
    return (
      <div>
        <Dialog open={open} onRequestClose={cancel} >
          <DialogTitle>{"Delete this user?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this user?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={cancel} color="primary">
              Cancel
            </Button>
            <Button onClick={() => { confirm(userId) } } color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
