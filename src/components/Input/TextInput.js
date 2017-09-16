import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display: block;
  margin: 0;
  // width: 100%;
  font-family: sans-serif;
  font-size: 18px;
  appearance: none;
  box-shadow: none;
  border-radius: none;

  padding: 10px;
  border: solid 5px #c9c9c9;
  transition: border 0.3s;

  &:focus {
    outline: none;
    border: solid 5px #969696;
  }
`;

const TextInput = (props) => {
  return (
    <div>
      <label>
        { props.label }
      </label>
      <Input { ...props } />
    </div>
  )
}

export default TextInput;
