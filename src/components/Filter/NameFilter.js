import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import Input from 'material-ui/Input';

class NameFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { onFilter } = this.props;
    const name = event.target.value;

    this.setState({ name });

    onFilter(event.target.value);
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <form noValidate autoComplete="off">
          <Input
            id="name"
            label="Name"
            value={name}
            color="white"
            style={{color: 'white'}}
            fullWidth
            onChange={this.handleChange}
            margin="none"
          />

        </form>
      </div>
    )
  }
}

export default NameFilter;

    // <input name="name" label="Filter by name" value={name} onChange={this.handleChange} />
