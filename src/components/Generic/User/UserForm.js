import React, { Component } from 'react';

class UserForm extends Component {
  constructor(props) {
    super(props);

    const { user } = props;

    this.state = {
      name: (user && user.name) || '',
      phone: (user && user.phone) || ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { submit } = this.props;
    const user = {
      name: this.state.name,
      phone: this.state.phone
    };

    submit(user);
  }

  render() {
    const { isSubmitting } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        Form is here!
        <label>
          Name
          <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} />
        </label>
        <input type="submit" value="Submit" disabled={isSubmitting} />
      </form>
    )
  }
}

export default UserForm;
