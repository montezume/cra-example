import React from 'react';

const ErrorComponent = ({ message }) => (
  <div>
    <p>An error has occured</p>
    <p> { message } </p>
  </div>
);

export default ErrorComponent;
