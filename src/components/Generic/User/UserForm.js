import React, { Component } from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import { ImageGalleryPicker } from '../../Input';

const StyledButtonContainer = styled.div`
  margin-top: 32px;
`

class UserForm extends Component {
  constructor(props) {
    super(props);

    const { user } = props;

    this.state = {
      user: {
        name: (user && user.name) || '',
        address: (user && user.address) || '',
        job_title: (user && user.job_title) || '',
        phone: (user && user.phone) || '',
        email: (user && user.email) || '',
        picture: (user && user.picture) || ''
      }
    };

    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleImageChange(picture) {
    this.setState({
      user: {
        ...this.state.user,
        picture
      }
    })
  }

  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { submit } = this.props;
    const user = {
      ...this.props.user,
      ...this.state.user
    };

    submit(user);
  }

  render() {
    const { isSubmitting } = this.props;
    const { user } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          id="name"
          label="Name"
          disabled={isSubmitting}
          name="name"
          fullWidth
          value={user.name}
          onChange={this.handleInputChange}
          required
          margin="normal"
        />

        <TextField
          id="email"
          label="Email"
          disabled={isSubmitting}
          name="email"
          fullWidth
          value={user.email}
          type="email"
          onChange={this.handleInputChange}
          required
          margin="normal"
        />

        <TextField
          id="address"
          label="Address"
          disabled={isSubmitting}
          name="address"
          fullWidth
          value={user.address}
          type="address"
          onChange={this.handleInputChange}
          required
          margin="normal"
        />

        <TextField
          id="phone"
          label="Phone"
          disabled={isSubmitting}
          name="phone"
          fullWidth
          type="tel"
          value={user.phone}
          onChange={this.handleInputChange}
          required
          margin="normal"
        />

        <TextField
          id="job_title"
          label="Job title"
          disabled={isSubmitting}
          name="job_title"
          fullWidth
          value={user.job_title}
          onChange={this.handleInputChange}
          required
          margin="normal"
        />

        <ImageGalleryPicker
          selectedImage={user.picture}
          onSelect={this.handleImageChange}
        />

        <StyledButtonContainer>
          <Button color="accent" raised type="submit" disabled={isSubmitting}>
            Save
          </Button>
        </StyledButtonContainer>
      </form>
    )
  }
}

export default UserForm;
