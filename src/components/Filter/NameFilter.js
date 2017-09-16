import React, { Component } from 'react'
import { TextInput } from '../../components/Input';

class NameFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      isSubmitting: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name } = this.state;
    const { onFilter } = this.props;
    onFilter(name);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  render() {
    const { isSubmitting, name } = this.state;
    return (
      <div>
        Filter Component

        <form onSubmit={this.handleSubmit}>
          <TextInput name="name" label="Filter by name" value={name} onChange={this.handleChange} />
          <input type="submit" value="Submit" disabled={isSubmitting} />
        </form>
      </div>
    )
  }
}

export default NameFilter;
