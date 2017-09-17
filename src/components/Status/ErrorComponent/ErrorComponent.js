import React from 'react';
import styled from 'styled-components';
import Icon from 'material-ui/Icon';
import { withStyles } from 'material-ui/styles';

const StyledError = styled.div`
  padding: 16px;
  text-align: center;
`;

const styles = {
  bigIcon: {
    marginBottom: '0.25em',
    marginTop: '0.25em',
    fontSize: '3em'
  },
};

const ErrorComponent = ({ message, classes }) => (
  <StyledError>
    <Icon className={classes.bigIcon} color="accent">error</Icon>
    <p> { message } </p>
  </StyledError>
);

export default withStyles(styles)(ErrorComponent);
